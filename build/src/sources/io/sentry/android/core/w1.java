package io.sentry.android.core;

import android.content.Context;
import android.content.pm.PackageInfo;
import androidx.recyclerview.widget.RecyclerView;
import io.sentry.ILogger;
import io.sentry.IScope;
import io.sentry.SentryEvent;
import io.sentry.SentryLevel;
import io.sentry.b4;
import io.sentry.d4;
import io.sentry.k7;
import io.sentry.l4;
import io.sentry.l5;
import io.sentry.l6;
import io.sentry.util.runtime.a;
import io.sentry.z7;
import java.io.ByteArrayInputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class w1 {
    public static /* synthetic */ void c(z7.b bVar, boolean z10, AtomicReference atomicReference, k7 k7Var, IScope iScope) {
        z7 J = iScope.J();
        if (J != null) {
            if (J.q(bVar, null, z10, null)) {
                if (J.l() == z7.b.Crashed) {
                    J.c();
                    iScope.Q();
                }
                atomicReference.set(J);
                return;
            }
            return;
        }
        k7Var.getLogger().c(SentryLevel.INFO, "Session is null on updateSession", new Object[0]);
    }

    private static void e(io.sentry.android.core.performance.i iVar, List list) {
        if (iVar.n()) {
            l4.g().b().getLogger().c(SentryLevel.WARNING, "Can not convert not-started TimeSpan to Map for Hybrid SDKs.", new Object[0]);
        } else if (iVar.o()) {
            l4.g().b().getLogger().c(SentryLevel.WARNING, "Can not convert not-stopped TimeSpan to Map for Hybrid SDKs.", new Object[0]);
        } else {
            HashMap hashMap = new HashMap();
            hashMap.put("description", iVar.d());
            hashMap.put("start_timestamp_ms", Long.valueOf(iVar.j()));
            hashMap.put("end_timestamp_ms", Long.valueOf(iVar.g()));
            list.add(hashMap);
        }
    }

    public static io.sentry.protocol.x f(byte[] bArr, boolean z10) {
        l4 g10 = l4.g();
        k7 b10 = g10.b();
        try {
            ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(bArr);
            io.sentry.b1 serializer = b10.getSerializer();
            l5 a10 = b10.getEnvelopeReader().a(byteArrayInputStream);
            if (a10 == null) {
                byteArrayInputStream.close();
                return null;
            }
            ArrayList arrayList = new ArrayList();
            boolean z11 = false;
            z7.b bVar = null;
            boolean z12 = false;
            for (l6 l6Var : a10.c()) {
                arrayList.add(l6Var);
                SentryEvent J = l6Var.J(serializer);
                if (J != null) {
                    if (J.A0()) {
                        bVar = z7.b.Crashed;
                    }
                    if (J.A0() || J.B0()) {
                        z12 = true;
                    }
                }
            }
            z7 l10 = l(g10, b10, bVar, z12);
            if (l10 != null) {
                arrayList.add(l6.G(serializer, l10));
                h(b10, (z10 && g10.b().getThreadChecker().a()) ? true : true);
                if (z10) {
                    g10.q();
                }
            }
            io.sentry.protocol.x w10 = g10.w(new l5(a10.b(), arrayList));
            byteArrayInputStream.close();
            return w10;
        } catch (Throwable th2) {
            b10.getLogger().b(SentryLevel.ERROR, "Failed to capture envelope", th2);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void g(k7 k7Var) {
        String cacheDirPath = k7Var.getCacheDirPath();
        if (cacheDirPath == null) {
            k7Var.getLogger().c(SentryLevel.INFO, "Cache dir is not set, not deleting the current session.", new Object[0]);
        } else if (!k7Var.isEnableAutoSessionTracking()) {
            k7Var.getLogger().c(SentryLevel.DEBUG, "Session tracking is disabled, bailing from deleting current session file.", new Object[0]);
        } else if (!io.sentry.cache.f.w(cacheDirPath).delete()) {
            k7Var.getLogger().c(SentryLevel.WARNING, "Failed to delete the current session file.", new Object[0]);
        }
    }

    private static void h(final k7 k7Var, boolean z10) {
        if (!z10) {
            try {
                k7Var.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.core.v1
                    @Override // java.lang.Runnable
                    public final void run() {
                        w1.g(k7.this);
                    }
                });
                return;
            } catch (Throwable th2) {
                k7Var.getLogger().b(SentryLevel.WARNING, "Submission of deletion of the current session file rejected.", th2);
                return;
            }
        }
        g(k7Var);
    }

    public static Map i() {
        io.sentry.android.core.performance.h q10 = io.sentry.android.core.performance.h.q();
        ArrayList arrayList = new ArrayList();
        e(q10.g(), arrayList);
        e(q10.o(), arrayList);
        for (io.sentry.android.core.performance.i iVar : q10.p()) {
            e(iVar, arrayList);
        }
        for (io.sentry.android.core.performance.c cVar : q10.h()) {
            e(cVar.d(), arrayList);
            e(cVar.e(), arrayList);
        }
        HashMap hashMap = new HashMap();
        hashMap.put("spans", arrayList);
        hashMap.put("type", q10.n().toString().toLowerCase(Locale.ROOT));
        if (q10.l().q()) {
            hashMap.put("app_start_timestamp_ms", Long.valueOf(q10.l().j()));
        }
        return hashMap;
    }

    public static IScope j() {
        final AtomicReference atomicReference = new AtomicReference();
        l4.g().r(d4.COMBINED, new b4() { // from class: io.sentry.android.core.t1
            @Override // io.sentry.b4
            public final void a(IScope iScope) {
                atomicReference.set(iScope.clone());
            }
        });
        return (IScope) atomicReference.get();
    }

    public static Map k(final Context context, SentryAndroidOptions sentryAndroidOptions, IScope iScope) {
        HashMap hashMap = new HashMap();
        if (iScope != null) {
            try {
                ILogger logger = sentryAndroidOptions.getLogger();
                io.sentry.util.x xVar = new io.sentry.util.x(hashMap);
                m1 k10 = m1.k(context, sentryAndroidOptions);
                iScope.z().q(k10.c(true, true));
                iScope.z().u(k10.l());
                io.sentry.protocol.h0 D = iScope.D();
                if (D == null) {
                    D = new io.sentry.protocol.h0();
                    iScope.k(D);
                }
                if (D.i() == null) {
                    try {
                        D.o((String) sentryAndroidOptions.getRuntimeManager().a(new a.InterfaceC0408a() { // from class: io.sentry.android.core.s1
                            @Override // io.sentry.util.runtime.a.InterfaceC0408a
                            public final Object run() {
                                String a10;
                                a10 = r1.a(context);
                                return a10;
                            }
                        }));
                    } catch (RuntimeException e10) {
                        logger.b(SentryLevel.ERROR, "Could not retrieve installation ID", e10);
                    }
                }
                io.sentry.protocol.a d10 = iScope.z().d();
                if (d10 == null) {
                    d10 = new io.sentry.protocol.a();
                }
                d10.o(e1.i(context));
                io.sentry.android.core.performance.i m10 = io.sentry.android.core.performance.h.q().m(sentryAndroidOptions);
                if (m10.q()) {
                    d10.p(io.sentry.k.o(m10.i()));
                }
                x0 x0Var = new x0(sentryAndroidOptions.getLogger());
                PackageInfo o10 = e1.o(context, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, sentryAndroidOptions.getLogger(), x0Var);
                if (o10 != null) {
                    e1.x(o10, x0Var, k10, d10);
                }
                iScope.z().o(d10);
                xVar.e("user").j(logger, iScope.D());
                xVar.e("contexts").j(logger, iScope.z());
                xVar.e("tags").j(logger, iScope.w());
                xVar.e("extras").j(logger, iScope.getExtras());
                xVar.e("fingerprint").j(logger, iScope.C());
                xVar.e("level").j(logger, iScope.n());
                xVar.e("breadcrumbs").j(logger, iScope.t());
            } catch (Throwable th2) {
                sentryAndroidOptions.getLogger().b(SentryLevel.ERROR, "Could not serialize scope.", th2);
                return new HashMap();
            }
        }
        return hashMap;
    }

    private static z7 l(io.sentry.w0 w0Var, final k7 k7Var, final z7.b bVar, final boolean z10) {
        final AtomicReference atomicReference = new AtomicReference();
        w0Var.o(new b4() { // from class: io.sentry.android.core.u1
            @Override // io.sentry.b4
            public final void a(IScope iScope) {
                w1.c(z7.b.this, z10, atomicReference, k7Var, iScope);
            }
        });
        return (z7) atomicReference.get();
    }
}
