package io.sentry.android.core;

import android.app.ActivityManager;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.os.Build;
import android.util.DisplayMetrics;
import com.discord.js_watchdog.SharedPreferencesKey;
import io.sentry.Hint;
import io.sentry.SentryEvent;
import io.sentry.SentryLevel;
import io.sentry.android.core.e1;
import io.sentry.e5;
import io.sentry.e8;
import io.sentry.k7;
import io.sentry.n6;
import io.sentry.o7;
import io.sentry.protocol.DebugImage;
import io.sentry.util.runtime.a;
import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 implements io.sentry.c {

    /* renamed from: d  reason: collision with root package name */
    private final Context f29223d;

    /* renamed from: e  reason: collision with root package name */
    private final SentryAndroidOptions f29224e;

    /* renamed from: i  reason: collision with root package name */
    private final x0 f29225i;

    /* renamed from: o  reason: collision with root package name */
    private final n6 f29226o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.cache.u f29227p;

    public r0(Context context, SentryAndroidOptions sentryAndroidOptions, x0 x0Var) {
        this.f29223d = e1.g(context);
        this.f29224e = sentryAndroidOptions;
        this.f29225i = x0Var;
        this.f29227p = sentryAndroidOptions.findPersistingScopeObserver();
        this.f29226o = new n6(new o7(sentryAndroidOptions));
    }

    private void A(e5 e5Var) {
        Map map = (Map) io.sentry.cache.h.b(this.f29224e, "tags.json", Map.class);
        if (map != null) {
            if (e5Var.N() == null) {
                e5Var.g0(new HashMap(map));
                return;
            }
            for (Map.Entry entry : map.entrySet()) {
                if (!e5Var.N().containsKey(entry.getKey())) {
                    e5Var.f0((String) entry.getKey(), (String) entry.getValue());
                }
            }
        }
    }

    private void B(e5 e5Var) {
        if (e5Var.I() == null) {
            e5Var.a0("java");
        }
    }

    private void C(e5 e5Var) {
        if (e5Var.J() == null) {
            e5Var.b0((String) io.sentry.cache.h.b(this.f29224e, "release.json", String.class));
        }
    }

    private void D(SentryEvent sentryEvent) {
        String str = (String) n(this.f29224e, "replay.json", String.class);
        if (!new File(this.f29224e.getCacheDirPath(), "replay_" + str).exists()) {
            if (o(sentryEvent)) {
                File[] listFiles = new File(this.f29224e.getCacheDirPath()).listFiles();
                String str2 = null;
                if (listFiles != null) {
                    long j10 = Long.MIN_VALUE;
                    for (File file : listFiles) {
                        if (file.isDirectory() && file.getName().startsWith("replay_") && file.lastModified() > j10 && file.lastModified() <= sentryEvent.x0().getTime()) {
                            j10 = file.lastModified();
                            str2 = file.getName().substring(7);
                        }
                    }
                }
                str = str2;
            } else {
                return;
            }
        }
        if (str == null) {
            return;
        }
        io.sentry.cache.u.G(this.f29224e, str, "replay.json");
        sentryEvent.C().l("replay_id", str);
    }

    private void E(e5 e5Var) {
        if (e5Var.K() == null) {
            e5Var.c0((io.sentry.protocol.o) n(this.f29224e, "request.json", io.sentry.protocol.o.class));
        }
    }

    private void F(e5 e5Var) {
        Map map = (Map) n(this.f29224e, "tags.json", Map.class);
        if (map != null) {
            if (e5Var.N() == null) {
                e5Var.g0(new HashMap(map));
                return;
            }
            for (Map.Entry entry : map.entrySet()) {
                if (!e5Var.N().containsKey(entry.getKey())) {
                    e5Var.f0((String) entry.getKey(), (String) entry.getValue());
                }
            }
        }
    }

    private void G(e5 e5Var) {
        if (e5Var.L() == null) {
            e5Var.d0((io.sentry.protocol.r) io.sentry.cache.h.b(this.f29224e, "sdk-version.json", io.sentry.protocol.r.class));
        }
    }

    private void H(e5 e5Var) {
        try {
            e1.a n10 = m1.k(this.f29223d, this.f29224e).n();
            if (n10 != null) {
                for (Map.Entry entry : n10.a().entrySet()) {
                    e5Var.f0((String) entry.getKey(), (String) entry.getValue());
                }
            }
        } catch (Throwable th2) {
            this.f29224e.getLogger().b(SentryLevel.ERROR, "Error getting side loaded info.", th2);
        }
    }

    private void I(SentryEvent sentryEvent) {
        m(sentryEvent);
        H(sentryEvent);
    }

    private void J(SentryEvent sentryEvent) {
        e8 e8Var = (e8) n(this.f29224e, "trace.json", e8.class);
        if (sentryEvent.C().j() == null && e8Var != null && e8Var.m() != null && e8Var.p() != null) {
            sentryEvent.C().z(e8Var);
        }
    }

    private void K(SentryEvent sentryEvent) {
        String str = (String) n(this.f29224e, "transaction.json", String.class);
        if (sentryEvent.y0() == null) {
            sentryEvent.J0(str);
        }
    }

    private void L(e5 e5Var) {
        if (e5Var.Q() == null) {
            e5Var.h0((io.sentry.protocol.h0) n(this.f29224e, "user.json", io.sentry.protocol.h0.class));
        }
    }

    private void c(SentryEvent sentryEvent, Object obj) {
        C(sentryEvent);
        v(sentryEvent);
        u(sentryEvent);
        s(sentryEvent);
        G(sentryEvent);
        p(sentryEvent, obj);
        A(sentryEvent);
    }

    private void d(SentryEvent sentryEvent, Object obj) {
        E(sentryEvent);
        L(sentryEvent);
        F(sentryEvent);
        q(sentryEvent);
        x(sentryEvent);
        r(sentryEvent);
        K(sentryEvent);
        y(sentryEvent, obj);
        z(sentryEvent);
        J(sentryEvent);
        D(sentryEvent);
    }

    private io.sentry.protocol.c0 e(List list) {
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                io.sentry.protocol.c0 c0Var = (io.sentry.protocol.c0) it.next();
                String m10 = c0Var.m();
                if (m10 != null && m10.equals("main")) {
                    return c0Var;
                }
            }
            return null;
        }
        return null;
    }

    private io.sentry.protocol.e f() {
        io.sentry.protocol.e eVar = new io.sentry.protocol.e();
        eVar.b0(Build.MANUFACTURER);
        eVar.P(Build.BRAND);
        eVar.V(e1.l(this.f29224e.getLogger()));
        eVar.d0(Build.MODEL);
        eVar.e0(Build.ID);
        eVar.L(e1.j());
        ActivityManager.MemoryInfo n10 = e1.n(this.f29223d, this.f29224e.getLogger());
        if (n10 != null) {
            eVar.c0(i(n10));
        }
        eVar.n0(this.f29225i.f());
        DisplayMetrics k10 = e1.k(this.f29223d, this.f29224e.getLogger());
        if (k10 != null) {
            eVar.m0(Integer.valueOf(k10.widthPixels));
            eVar.l0(Integer.valueOf(k10.heightPixels));
            eVar.j0(Float.valueOf(k10.density));
            eVar.k0(Integer.valueOf(k10.densityDpi));
        }
        if (eVar.J() == null) {
            eVar.Y(g());
        }
        List c10 = io.sentry.android.core.internal.util.m.a().c();
        if (!c10.isEmpty()) {
            eVar.i0(Double.valueOf(((Integer) Collections.max(c10)).doubleValue()));
            eVar.h0(Integer.valueOf(c10.size()));
        }
        return eVar;
    }

    private String g() {
        try {
            return (String) this.f29224e.getRuntimeManager().a(new a.InterfaceC0405a() { // from class: io.sentry.android.core.q0
                @Override // io.sentry.util.runtime.a.InterfaceC0405a
                public final Object run() {
                    String a10;
                    a10 = r1.a(r0.this.f29223d);
                    return a10;
                }
            });
        } catch (Throwable th2) {
            this.f29224e.getLogger().b(SentryLevel.ERROR, "Error getting installationId.", th2);
            return null;
        }
    }

    private Long i(ActivityManager.MemoryInfo memoryInfo) {
        return Long.valueOf(memoryInfo.totalMem);
    }

    private boolean j(Object obj) {
        if (obj instanceof io.sentry.hints.a) {
            return "anr_background".equals(((io.sentry.hints.a) obj).h());
        }
        return false;
    }

    private void k(e5 e5Var) {
        String str;
        io.sentry.protocol.n h10 = e5Var.C().h();
        e5Var.C().u(m1.k(this.f29223d, this.f29224e).l());
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

    private void m(e5 e5Var) {
        io.sentry.protocol.h0 Q = e5Var.Q();
        if (Q == null) {
            Q = new io.sentry.protocol.h0();
            e5Var.h0(Q);
        }
        if (Q.i() == null) {
            Q.o(g());
        }
        if (Q.j() == null && this.f29224e.isSendDefaultPii()) {
            Q.p("{{auto}}");
        }
    }

    private Object n(k7 k7Var, String str, Class cls) {
        io.sentry.cache.u uVar = this.f29227p;
        if (uVar == null) {
            return null;
        }
        return uVar.D(k7Var, str, cls);
    }

    private boolean o(SentryEvent sentryEvent) {
        String str = (String) io.sentry.cache.h.b(this.f29224e, "replay-error-sample-rate.json", String.class);
        if (str == null) {
            return false;
        }
        try {
            if (Double.parseDouble(str) < io.sentry.util.d0.a().c()) {
                this.f29224e.getLogger().c(SentryLevel.DEBUG, "Not capturing replay for ANR %s due to not being sampled.", sentryEvent.G());
                return false;
            }
            return true;
        } catch (Throwable th2) {
            this.f29224e.getLogger().b(SentryLevel.ERROR, "Error parsing replay sample rate.", th2);
            return false;
        }
    }

    private void p(e5 e5Var, Object obj) {
        String str;
        io.sentry.protocol.a d10 = e5Var.C().d();
        if (d10 == null) {
            d10 = new io.sentry.protocol.a();
        }
        d10.o(e1.i(this.f29223d));
        d10.r(Boolean.valueOf(!j(obj)));
        PackageInfo p10 = e1.p(this.f29223d, this.f29225i);
        if (p10 != null) {
            d10.n(p10.packageName);
        }
        if (e5Var.J() != null) {
            str = e5Var.J();
        } else {
            str = (String) io.sentry.cache.h.b(this.f29224e, "release.json", String.class);
        }
        if (str != null) {
            try {
                String substring = str.substring(str.indexOf(64) + 1, str.indexOf(43));
                String substring2 = str.substring(str.indexOf(43) + 1);
                d10.q(substring);
                d10.m(substring2);
            } catch (Throwable unused) {
                this.f29224e.getLogger().c(SentryLevel.WARNING, "Failed to parse release from scope cache: %s", str);
            }
        }
        try {
            e1.b o10 = m1.k(this.f29223d, this.f29224e).o();
            if (o10 != null) {
                d10.t(Boolean.valueOf(o10.b()));
                if (o10.a() != null) {
                    d10.u(Arrays.asList(o10.a()));
                }
            }
        } catch (Throwable th2) {
            this.f29224e.getLogger().b(SentryLevel.ERROR, "Error getting split apks info.", th2);
        }
        e5Var.C().o(d10);
    }

    private void q(e5 e5Var) {
        List list = (List) n(this.f29224e, "breadcrumbs.json", List.class);
        if (list == null) {
            return;
        }
        if (e5Var.B() == null) {
            e5Var.T(list);
        } else {
            e5Var.B().addAll(list);
        }
    }

    private void r(e5 e5Var) {
        io.sentry.protocol.c cVar = (io.sentry.protocol.c) n(this.f29224e, "contexts.json", io.sentry.protocol.c.class);
        if (cVar != null) {
            io.sentry.protocol.c C = e5Var.C();
            for (Map.Entry entry : new io.sentry.protocol.c(cVar).b()) {
                Object value = entry.getValue();
                if (!SharedPreferencesKey.TRACE.equals(entry.getKey()) || !(value instanceof e8)) {
                    if (!C.a(entry.getKey())) {
                        C.l((String) entry.getKey(), value);
                    }
                }
            }
        }
    }

    private void s(e5 e5Var) {
        io.sentry.protocol.d D = e5Var.D();
        if (D == null) {
            D = new io.sentry.protocol.d();
        }
        if (D.d() == null) {
            D.e(new ArrayList());
        }
        List d10 = D.d();
        if (d10 != null) {
            String str = (String) io.sentry.cache.h.b(this.f29224e, "proguard-uuid.json", String.class);
            if (str != null) {
                DebugImage debugImage = new DebugImage();
                debugImage.setType(DebugImage.PROGUARD);
                debugImage.setUuid(str);
                d10.add(debugImage);
            }
            e5Var.U(D);
        }
    }

    private void t(e5 e5Var) {
        if (e5Var.C().e() == null) {
            e5Var.C().q(f());
        }
    }

    private void u(e5 e5Var) {
        String str;
        if (e5Var.E() == null) {
            e5Var.V((String) io.sentry.cache.h.b(this.f29224e, "dist.json", String.class));
        }
        if (e5Var.E() == null && (str = (String) io.sentry.cache.h.b(this.f29224e, "release.json", String.class)) != null) {
            try {
                e5Var.V(str.substring(str.indexOf(43) + 1));
            } catch (Throwable unused) {
                this.f29224e.getLogger().c(SentryLevel.WARNING, "Failed to parse release from scope cache: %s", str);
            }
        }
    }

    private void v(e5 e5Var) {
        if (e5Var.F() == null) {
            String str = (String) io.sentry.cache.h.b(this.f29224e, "environment.json", String.class);
            if (str == null) {
                str = this.f29224e.getEnvironment();
            }
            e5Var.W(str);
        }
    }

    private void w(SentryEvent sentryEvent, Object obj) {
        io.sentry.protocol.l lVar = new io.sentry.protocol.l();
        if (!((io.sentry.hints.c) obj).a()) {
            lVar.p("HistoricalAppExitInfo");
        } else {
            lVar.p("AppExitInfo");
        }
        String str = "ANR";
        if (j(obj)) {
            str = "Background ANR";
        }
        ApplicationNotResponding applicationNotResponding = new ApplicationNotResponding(str, Thread.currentThread());
        io.sentry.protocol.c0 e10 = e(sentryEvent.w0());
        if (e10 == null) {
            e10 = new io.sentry.protocol.c0();
            e10.y(new io.sentry.protocol.b0());
        }
        sentryEvent.C0(this.f29226o.f(e10, lVar, applicationNotResponding));
    }

    private void x(e5 e5Var) {
        Map map = (Map) n(this.f29224e, "extras.json", Map.class);
        if (map != null) {
            if (e5Var.H() == null) {
                e5Var.Z(new HashMap(map));
                return;
            }
            for (Map.Entry entry : map.entrySet()) {
                if (!e5Var.H().containsKey(entry.getKey())) {
                    e5Var.H().put((String) entry.getKey(), entry.getValue());
                }
            }
        }
    }

    private void y(SentryEvent sentryEvent, Object obj) {
        String str;
        List list = (List) n(this.f29224e, "fingerprint.json", List.class);
        if (sentryEvent.s0() == null) {
            sentryEvent.D0(list);
        }
        boolean j10 = j(obj);
        if (sentryEvent.s0() == null) {
            if (j10) {
                str = "background-anr";
            } else {
                str = "foreground-anr";
            }
            sentryEvent.D0(Arrays.asList("{{ default }}", str));
        }
    }

    private void z(SentryEvent sentryEvent) {
        SentryLevel sentryLevel = (SentryLevel) n(this.f29224e, "level.json", SentryLevel.class);
        if (sentryEvent.t0() == null) {
            sentryEvent.E0(sentryLevel);
        }
    }

    @Override // io.sentry.b0
    public SentryEvent h(SentryEvent sentryEvent, Hint hint) {
        Object g10 = io.sentry.util.n.g(hint);
        if (!(g10 instanceof io.sentry.hints.c)) {
            this.f29224e.getLogger().c(SentryLevel.WARNING, "The event is not Backfillable, but has been passed to BackfillingEventProcessor, skipping.", new Object[0]);
            return sentryEvent;
        }
        w(sentryEvent, g10);
        B(sentryEvent);
        k(sentryEvent);
        t(sentryEvent);
        if (!((io.sentry.hints.c) g10).a()) {
            this.f29224e.getLogger().c(SentryLevel.DEBUG, "The event is Backfillable, but should not be enriched, skipping.", new Object[0]);
            return sentryEvent;
        }
        d(sentryEvent, g10);
        c(sentryEvent, g10);
        I(sentryEvent);
        return sentryEvent;
    }

    @Override // io.sentry.b0
    public io.sentry.protocol.d0 l(io.sentry.protocol.d0 d0Var, Hint hint) {
        return d0Var;
    }
}
