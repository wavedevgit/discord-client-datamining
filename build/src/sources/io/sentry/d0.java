package io.sentry;

import com.facebook.react.uimanager.ViewProps;
import io.sentry.k7;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.CopyOnWriteArraySet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {
    private Boolean A;
    private Boolean B;
    private String C;
    private List D;
    private List E;
    private Boolean F;
    private Boolean G;
    private Boolean H;
    private Boolean I;
    private Boolean J;
    private Boolean K;
    private Double L;
    private String M;
    private o3 N;
    private k7.f O;

    /* renamed from: a  reason: collision with root package name */
    private String f28033a;

    /* renamed from: b  reason: collision with root package name */
    private String f28034b;

    /* renamed from: c  reason: collision with root package name */
    private String f28035c;

    /* renamed from: d  reason: collision with root package name */
    private String f28036d;

    /* renamed from: e  reason: collision with root package name */
    private String f28037e;

    /* renamed from: f  reason: collision with root package name */
    private Boolean f28038f;

    /* renamed from: g  reason: collision with root package name */
    private Boolean f28039g;

    /* renamed from: h  reason: collision with root package name */
    private Boolean f28040h;

    /* renamed from: i  reason: collision with root package name */
    private Double f28041i;

    /* renamed from: j  reason: collision with root package name */
    private Double f28042j;

    /* renamed from: k  reason: collision with root package name */
    private k7.m f28043k;

    /* renamed from: m  reason: collision with root package name */
    private k7.l f28045m;

    /* renamed from: r  reason: collision with root package name */
    private String f28050r;

    /* renamed from: s  reason: collision with root package name */
    private Long f28051s;

    /* renamed from: u  reason: collision with root package name */
    private List f28053u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f28054v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f28055w;

    /* renamed from: y  reason: collision with root package name */
    private Boolean f28057y;

    /* renamed from: z  reason: collision with root package name */
    private Boolean f28058z;

    /* renamed from: l  reason: collision with root package name */
    private final Map f28044l = new ConcurrentHashMap();

    /* renamed from: n  reason: collision with root package name */
    private final List f28046n = new CopyOnWriteArrayList();

    /* renamed from: o  reason: collision with root package name */
    private final List f28047o = new CopyOnWriteArrayList();

    /* renamed from: p  reason: collision with root package name */
    private List f28048p = null;

    /* renamed from: q  reason: collision with root package name */
    private final List f28049q = new CopyOnWriteArrayList();

    /* renamed from: t  reason: collision with root package name */
    private final Set f28052t = new CopyOnWriteArraySet();

    /* renamed from: x  reason: collision with root package name */
    private Set f28056x = new CopyOnWriteArraySet();

    public static d0 g(io.sentry.config.f fVar, ILogger iLogger) {
        List<String> list;
        d0 d0Var = new d0();
        d0Var.a0(fVar.getProperty("dsn"));
        d0Var.i0(fVar.getProperty("environment"));
        d0Var.x0(fVar.getProperty("release"));
        d0Var.Z(fVar.getProperty("dist"));
        d0Var.B0(fVar.getProperty("servername"));
        d0Var.g0(fVar.e("uncaught.handler.enabled"));
        d0Var.q0(fVar.e("uncaught.handler.print-stacktrace"));
        d0Var.E0(fVar.b("traces-sample-rate"));
        d0Var.t0(fVar.b("profiles-sample-rate"));
        d0Var.Y(fVar.e("debug"));
        d0Var.c0(fVar.e("enable-deduplication"));
        d0Var.y0(fVar.e("send-client-reports"));
        d0Var.j0(fVar.e("force-init"));
        String property = fVar.getProperty("max-request-body-size");
        if (property != null) {
            d0Var.p0(k7.m.valueOf(property.toUpperCase(Locale.ROOT)));
        }
        for (Map.Entry entry : fVar.getMap("tags").entrySet()) {
            d0Var.D0((String) entry.getKey(), (String) entry.getValue());
        }
        String property2 = fVar.getProperty("proxy.host");
        String property3 = fVar.getProperty("proxy.user");
        String property4 = fVar.getProperty("proxy.pass");
        String c10 = fVar.c("proxy.port", "80");
        if (property2 != null) {
            d0Var.w0(new k7.l(property2, c10, property3, property4));
        }
        for (String str : fVar.d("in-app-includes")) {
            d0Var.e(str);
        }
        for (String str2 : fVar.d("in-app-excludes")) {
            d0Var.d(str2);
        }
        if (fVar.getProperty("trace-propagation-targets") != null) {
            list = fVar.d("trace-propagation-targets");
        } else {
            list = null;
        }
        if (list == null && fVar.getProperty("tracing-origins") != null) {
            list = fVar.d("tracing-origins");
        }
        if (list != null) {
            for (String str3 : list) {
                d0Var.f(str3);
            }
        }
        for (String str4 : fVar.d("context-tags")) {
            d0Var.b(str4);
        }
        d0Var.v0(fVar.getProperty("proguard-uuid"));
        for (String str5 : fVar.d("bundle-ids")) {
            d0Var.a(str5);
        }
        d0Var.l0(fVar.a("idle-timeout"));
        d0Var.n0(fVar.f("ignored-errors"));
        d0Var.h0(fVar.e(ViewProps.ENABLED));
        d0Var.e0(fVar.e("enable-pretty-serialization-output"));
        d0Var.A0(fVar.e("send-modules"));
        d0Var.z0(fVar.e("send-default-pii"));
        d0Var.m0(fVar.f("ignored-checkins"));
        d0Var.o0(fVar.f("ignored-transactions"));
        d0Var.b0(fVar.e("enable-backpressure-handling"));
        d0Var.k0(fVar.e("global-hub-mode"));
        d0Var.W(fVar.e("capture-open-telemetry-events"));
        d0Var.d0(fVar.e("logs.enabled"));
        for (String str6 : fVar.d("ignored-exceptions-for-type")) {
            try {
                Class<?> cls = Class.forName(str6);
                if (Throwable.class.isAssignableFrom(cls)) {
                    d0Var.c(cls);
                } else {
                    iLogger.c(SentryLevel.WARNING, "Skipping setting %s as ignored-exception-for-type. Reason: %s does not extend Throwable", str6, str6);
                }
            } catch (ClassNotFoundException unused) {
                iLogger.c(SentryLevel.WARNING, "Skipping setting %s as ignored-exception-for-type. Reason: %s class is not found", str6, str6);
            }
        }
        Long a10 = fVar.a("cron.default-checkin-margin");
        Long a11 = fVar.a("cron.default-max-runtime");
        String property5 = fVar.getProperty("cron.default-timezone");
        Long a12 = fVar.a("cron.default-failure-issue-threshold");
        Long a13 = fVar.a("cron.default-recovery-threshold");
        if (a10 != null || a11 != null || property5 != null || a12 != null || a13 != null) {
            k7.f fVar2 = new k7.f();
            fVar2.f(a10);
            fVar2.h(a11);
            fVar2.j(property5);
            fVar2.g(a12);
            fVar2.i(a13);
            d0Var.X(fVar2);
        }
        d0Var.f0(fVar.e("enable-spotlight"));
        d0Var.C0(fVar.getProperty("spotlight-connection-url"));
        d0Var.s0(fVar.b("profile-session-sample-rate"));
        d0Var.u0(fVar.getProperty("profiling-traces-dir-path"));
        String property6 = fVar.getProperty("profile-lifecycle");
        if (property6 != null && !property6.isEmpty()) {
            d0Var.r0(o3.valueOf(property6.toUpperCase()));
        }
        return d0Var;
    }

    public Double A() {
        return this.L;
    }

    public void A0(Boolean bool) {
        this.F = bool;
    }

    public Double B() {
        return this.f28042j;
    }

    public void B0(String str) {
        this.f28037e = str;
    }

    public String C() {
        return this.M;
    }

    public void C0(String str) {
        this.C = str;
    }

    public String D() {
        return this.f28050r;
    }

    public void D0(String str, String str2) {
        this.f28044l.put(str, str2);
    }

    public k7.l E() {
        return this.f28045m;
    }

    public void E0(Double d10) {
        this.f28041i = d10;
    }

    public String F() {
        return this.f28035c;
    }

    public Boolean G() {
        return this.f28055w;
    }

    public String H() {
        return this.f28037e;
    }

    public String I() {
        return this.C;
    }

    public Map J() {
        return this.f28044l;
    }

    public List K() {
        return this.f28048p;
    }

    public Double L() {
        return this.f28041i;
    }

    public Boolean M() {
        return this.K;
    }

    public Boolean N() {
        return this.H;
    }

    public Boolean O() {
        return this.B;
    }

    public Boolean P() {
        return this.f28058z;
    }

    public Boolean Q() {
        return this.A;
    }

    public Boolean R() {
        return this.f28057y;
    }

    public Boolean S() {
        return this.J;
    }

    public Boolean T() {
        return this.I;
    }

    public Boolean U() {
        return this.G;
    }

    public Boolean V() {
        return this.F;
    }

    public void W(Boolean bool) {
        this.K = bool;
    }

    public void X(k7.f fVar) {
        this.O = fVar;
    }

    public void Y(Boolean bool) {
        this.f28039g = bool;
    }

    public void Z(String str) {
        this.f28036d = str;
    }

    public void a(String str) {
        this.f28056x.add(str);
    }

    public void a0(String str) {
        this.f28033a = str;
    }

    public void b(String str) {
        this.f28049q.add(str);
    }

    public void b0(Boolean bool) {
        this.H = bool;
    }

    public void c(Class cls) {
        this.f28052t.add(cls);
    }

    public void c0(Boolean bool) {
        this.f28040h = bool;
    }

    public void d(String str) {
        this.f28046n.add(str);
    }

    public void d0(Boolean bool) {
        this.B = bool;
    }

    public void e(String str) {
        this.f28047o.add(str);
    }

    public void e0(Boolean bool) {
        this.f28058z = bool;
    }

    public void f(String str) {
        if (this.f28048p == null) {
            this.f28048p = new CopyOnWriteArrayList();
        }
        if (!str.isEmpty()) {
            this.f28048p.add(str);
        }
    }

    public void f0(Boolean bool) {
        this.A = bool;
    }

    public void g0(Boolean bool) {
        this.f28038f = bool;
    }

    public Set h() {
        return this.f28056x;
    }

    public void h0(Boolean bool) {
        this.f28057y = bool;
    }

    public List i() {
        return this.f28049q;
    }

    public void i0(String str) {
        this.f28034b = str;
    }

    public k7.f j() {
        return this.O;
    }

    public void j0(Boolean bool) {
        this.J = bool;
    }

    public Boolean k() {
        return this.f28039g;
    }

    public void k0(Boolean bool) {
        this.I = bool;
    }

    public String l() {
        return this.f28036d;
    }

    public void l0(Long l10) {
        this.f28051s = l10;
    }

    public String m() {
        return this.f28033a;
    }

    public void m0(List list) {
        this.D = list;
    }

    public Boolean n() {
        return this.f28040h;
    }

    public void n0(List list) {
        this.f28053u = list;
    }

    public Boolean o() {
        return this.f28038f;
    }

    public void o0(List list) {
        this.E = list;
    }

    public String p() {
        return this.f28034b;
    }

    public void p0(k7.m mVar) {
        this.f28043k = mVar;
    }

    public Long q() {
        return this.f28051s;
    }

    public void q0(Boolean bool) {
        this.f28054v = bool;
    }

    public List r() {
        return this.D;
    }

    public void r0(o3 o3Var) {
        this.N = o3Var;
    }

    public List s() {
        return this.f28053u;
    }

    public void s0(Double d10) {
        this.L = d10;
    }

    public Set t() {
        return this.f28052t;
    }

    public void t0(Double d10) {
        this.f28042j = d10;
    }

    public List u() {
        return this.E;
    }

    public void u0(String str) {
        this.M = str;
    }

    public List v() {
        return this.f28046n;
    }

    public void v0(String str) {
        this.f28050r = str;
    }

    public List w() {
        return this.f28047o;
    }

    public void w0(k7.l lVar) {
        this.f28045m = lVar;
    }

    public k7.m x() {
        return this.f28043k;
    }

    public void x0(String str) {
        this.f28035c = str;
    }

    public Boolean y() {
        return this.f28054v;
    }

    public void y0(Boolean bool) {
        this.f28055w = bool;
    }

    public o3 z() {
        return this.N;
    }

    public void z0(Boolean bool) {
        this.G = bool;
    }
}
