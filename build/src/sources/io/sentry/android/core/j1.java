package io.sentry.android.core;

import android.content.Context;
import android.content.pm.PackageInfo;
import androidx.recyclerview.widget.RecyclerView;
import io.sentry.Hint;
import io.sentry.SentryEvent;
import io.sentry.SentryLevel;
import io.sentry.android.core.e1;
import io.sentry.e5;
import io.sentry.l7;
import io.sentry.protocol.SentryStackFrame;
import io.sentry.util.r;
import io.sentry.util.runtime.a;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.RejectedExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j1 implements io.sentry.b0 {

    /* renamed from: d  reason: collision with root package name */
    final Context f29029d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f29030e;

    /* renamed from: i  reason: collision with root package name */
    private final SentryAndroidOptions f29031i;

    /* renamed from: o  reason: collision with root package name */
    private final Future f29032o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.r f29033p = new io.sentry.util.r(new r.a() { // from class: io.sentry.android.core.g1
        @Override // io.sentry.util.r.a
        public final Object a() {
            String l10;
            l10 = e1.l(io.sentry.i2.e());
            return l10;
        }
    });

    public j1(Context context, x0 x0Var, final SentryAndroidOptions sentryAndroidOptions) {
        Future future;
        this.f29029d = (Context) io.sentry.util.y.c(e1.g(context), "The application context is required.");
        this.f29030e = (x0) io.sentry.util.y.c(x0Var, "The BuildInfoProvider is required.");
        this.f29031i = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "The options object is required.");
        ExecutorService newSingleThreadExecutor = Executors.newSingleThreadExecutor();
        try {
            future = newSingleThreadExecutor.submit(new Callable() { // from class: io.sentry.android.core.h1
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    m1 k10;
                    k10 = m1.k(j1.this.f29029d, sentryAndroidOptions);
                    return k10;
                }
            });
        } catch (RejectedExecutionException e10) {
            sentryAndroidOptions.getLogger().b(SentryLevel.WARNING, "Device info caching task rejected.", e10);
            future = null;
        }
        this.f29032o = future;
        newSingleThreadExecutor.shutdown();
    }

    private static void e(SentryEvent sentryEvent) {
        io.sentry.protocol.b0 i10;
        List<SentryStackFrame> d10;
        List r02 = sentryEvent.r0();
        if (r02 != null && r02.size() > 1) {
            io.sentry.protocol.s sVar = (io.sentry.protocol.s) r02.get(r02.size() - 1);
            if ("java.lang".equals(sVar.h()) && (i10 = sVar.i()) != null && (d10 = i10.d()) != null) {
                for (SentryStackFrame sentryStackFrame : d10) {
                    if ("com.android.internal.os.RuntimeInit$MethodAndArgsCaller".equals(sentryStackFrame.z())) {
                        Collections.reverse(r02);
                        return;
                    }
                }
            }
        }
    }

    private void f(e5 e5Var) {
        String str;
        io.sentry.protocol.n h10 = e5Var.C().h();
        Future future = this.f29032o;
        if (future != null) {
            try {
                e5Var.C().u(((m1) future.get()).l());
            } catch (Throwable th2) {
                this.f29031i.getLogger().b(SentryLevel.ERROR, "Failed to retrieve os system", th2);
            }
        } else {
            this.f29031i.getLogger().c(SentryLevel.ERROR, "Failed to retrieve device info", new Object[0]);
        }
        if (h10 != null) {
            String g10 = h10.g();
            if (g10 != null && !g10.isEmpty()) {
                str = "os_" + g10.trim().toLowerCase(Locale.ROOT);
            } else {
                str = "os_1";
            }
            e5Var.C().l(str, h10);
        }
    }

    private void g(e5 e5Var) {
        io.sentry.protocol.h0 Q = e5Var.Q();
        if (Q == null) {
            Q = new io.sentry.protocol.h0();
            e5Var.h0(Q);
        }
        if (Q.i() == null) {
            Q.o((String) this.f29031i.getRuntimeManager().a(new a.InterfaceC0407a() { // from class: io.sentry.android.core.i1
                @Override // io.sentry.util.runtime.a.InterfaceC0407a
                public final Object run() {
                    String a10;
                    a10 = r1.a(j1.this.f29029d);
                    return a10;
                }
            }));
        }
        if (Q.j() == null && this.f29031i.isSendDefaultPii()) {
            Q.p("{{auto}}");
        }
    }

    private void i(e5 e5Var, Hint hint) {
        io.sentry.protocol.a d10 = e5Var.C().d();
        if (d10 == null) {
            d10 = new io.sentry.protocol.a();
        }
        j(d10, hint);
        o(e5Var, d10);
        e5Var.C().o(d10);
    }

    private void j(io.sentry.protocol.a aVar, Hint hint) {
        Boolean F;
        aVar.o(e1.i(this.f29029d));
        io.sentry.android.core.performance.i m10 = io.sentry.android.core.performance.h.q().m(this.f29031i);
        if (m10.q()) {
            aVar.p(io.sentry.k.o(m10.i()));
        }
        if (!io.sentry.util.n.i(hint) && aVar.l() == null && (F = w0.E().F()) != null) {
            aVar.r(Boolean.valueOf(!F.booleanValue()));
        }
    }

    private void k(e5 e5Var, boolean z10, boolean z11) {
        g(e5Var);
        m(e5Var, z10, z11);
        p(e5Var);
    }

    private void m(e5 e5Var, boolean z10, boolean z11) {
        if (e5Var.C().e() == null) {
            if (this.f29032o != null) {
                try {
                    e5Var.C().q(((m1) this.f29032o.get()).c(z10, z11));
                } catch (Throwable th2) {
                    this.f29031i.getLogger().b(SentryLevel.ERROR, "Failed to retrieve device info", th2);
                }
            } else {
                this.f29031i.getLogger().c(SentryLevel.ERROR, "Failed to retrieve device info", new Object[0]);
            }
            f(e5Var);
        }
    }

    private void n(e5 e5Var, String str) {
        if (e5Var.E() == null) {
            e5Var.V(str);
        }
    }

    private void o(e5 e5Var, io.sentry.protocol.a aVar) {
        m1 m1Var;
        PackageInfo o10 = e1.o(this.f29029d, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, this.f29031i.getLogger(), this.f29030e);
        if (o10 != null) {
            n(e5Var, e1.q(o10, this.f29030e));
            Future future = this.f29032o;
            if (future != null) {
                try {
                    m1Var = (m1) future.get();
                } catch (Throwable th2) {
                    this.f29031i.getLogger().b(SentryLevel.ERROR, "Failed to retrieve device info", th2);
                }
                e1.x(o10, this.f29030e, m1Var, aVar);
            }
            this.f29031i.getLogger().c(SentryLevel.ERROR, "Failed to retrieve device info", new Object[0]);
            m1Var = null;
            e1.x(o10, this.f29030e, m1Var, aVar);
        }
    }

    private void p(e5 e5Var) {
        Future future = this.f29032o;
        if (future != null) {
            try {
                e1.a n10 = ((m1) future.get()).n();
                if (n10 != null) {
                    for (Map.Entry entry : n10.a().entrySet()) {
                        e5Var.f0((String) entry.getKey(), (String) entry.getValue());
                    }
                    return;
                }
                return;
            } catch (Throwable th2) {
                this.f29031i.getLogger().b(SentryLevel.ERROR, "Error getting side loaded info.", th2);
                return;
            }
        }
        this.f29031i.getLogger().c(SentryLevel.ERROR, "Failed to retrieve device info", new Object[0]);
    }

    private void q(SentryEvent sentryEvent, Hint hint) {
        if (sentryEvent.w0() != null) {
            boolean i10 = io.sentry.util.n.i(hint);
            for (io.sentry.protocol.c0 c0Var : sentryEvent.w0()) {
                boolean g10 = io.sentry.android.core.internal.util.j.e().g(c0Var);
                if (c0Var.o() == null) {
                    c0Var.r(Boolean.valueOf(g10));
                }
                if (!i10 && c0Var.p() == null) {
                    c0Var.v(Boolean.valueOf(g10));
                }
            }
        }
    }

    private boolean r(e5 e5Var, Hint hint) {
        if (io.sentry.util.n.q(hint)) {
            return true;
        }
        this.f29031i.getLogger().c(SentryLevel.DEBUG, "Event was cached so not applying data relevant to the current app execution/version: %s", e5Var.G());
        return false;
    }

    @Override // io.sentry.b0
    public l7 a(l7 l7Var, Hint hint) {
        boolean r10 = r(l7Var, hint);
        if (r10) {
            i(l7Var, hint);
        }
        k(l7Var, false, r10);
        return l7Var;
    }

    @Override // io.sentry.b0
    public SentryEvent h(SentryEvent sentryEvent, Hint hint) {
        boolean r10 = r(sentryEvent, hint);
        if (r10) {
            i(sentryEvent, hint);
            q(sentryEvent, hint);
        }
        k(sentryEvent, true, r10);
        e(sentryEvent);
        return sentryEvent;
    }

    @Override // io.sentry.b0
    public io.sentry.protocol.d0 l(io.sentry.protocol.d0 d0Var, Hint hint) {
        boolean r10 = r(d0Var, hint);
        if (r10) {
            i(d0Var, hint);
        }
        k(d0Var, false, r10);
        return d0Var;
    }
}
