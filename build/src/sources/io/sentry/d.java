package io.sentry;

import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: i  reason: collision with root package name */
    static final Integer f28069i = 8192;

    /* renamed from: j  reason: collision with root package name */
    static final Integer f28070j = 64;

    /* renamed from: k  reason: collision with root package name */
    private static final c f28071k = new c();

    /* renamed from: a  reason: collision with root package name */
    private final ConcurrentHashMap f28072a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.util.a f28073b;

    /* renamed from: c  reason: collision with root package name */
    private Double f28074c;

    /* renamed from: d  reason: collision with root package name */
    private Double f28075d;

    /* renamed from: e  reason: collision with root package name */
    private final String f28076e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f28077f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f28078g;

    /* renamed from: h  reason: collision with root package name */
    final ILogger f28079h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public static final List f28080a = Arrays.asList("sentry-trace_id", "sentry-public_key", "sentry-release", "sentry-user_id", "sentry-environment", "sentry-transaction", "sentry-sample_rate", "sentry-sample_rand", "sentry-sampled", "sentry-replay_id");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends ThreadLocal {
        private c() {
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public DecimalFormat initialValue() {
            return new DecimalFormat("#.################", DecimalFormatSymbols.getInstance(Locale.ROOT));
        }
    }

    public d(ILogger iLogger) {
        this(new ConcurrentHashMap(), null, null, null, true, false, iLogger);
    }

    public static d c(e5 e5Var, String str, k7 k7Var) {
        String str2;
        d dVar = new d(k7Var.getLogger());
        e8 j10 = e5Var.C().j();
        if (j10 != null) {
            str2 = j10.p().toString();
        } else {
            str2 = null;
        }
        dVar.E(str2);
        dVar.y(k7Var.retrieveParsedDsn().a());
        dVar.z(e5Var.J());
        dVar.x(e5Var.F());
        dVar.F(str);
        dVar.C(null);
        dVar.D(null);
        dVar.B(null);
        Object c10 = e5Var.C().c("replay_id");
        if (c10 != null && !c10.toString().equals(io.sentry.protocol.x.f28663e.toString())) {
            dVar.A(c10.toString());
            e5Var.C().n("replay_id");
        }
        dVar.b();
        return dVar;
    }

    private static boolean p(io.sentry.protocol.g0 g0Var) {
        if (g0Var != null && !io.sentry.protocol.g0.URL.equals(g0Var)) {
            return true;
        }
        return false;
    }

    private static Double s(s8 s8Var) {
        if (s8Var == null) {
            return null;
        }
        return s8Var.c();
    }

    private static Double t(s8 s8Var) {
        if (s8Var == null) {
            return null;
        }
        return s8Var.d();
    }

    private static String u(Double d10) {
        if (!io.sentry.util.c0.h(d10, false)) {
            return null;
        }
        return ((DecimalFormat) f28071k.get()).format(d10);
    }

    private static Boolean v(s8 s8Var) {
        if (s8Var == null) {
            return null;
        }
        return s8Var.e();
    }

    public void A(String str) {
        w("sentry-replay_id", str);
    }

    public void B(Double d10) {
        if (q()) {
            this.f28075d = d10;
        }
    }

    public void C(Double d10) {
        if (q()) {
            this.f28074c = d10;
        }
    }

    public void D(String str) {
        w("sentry-sampled", str);
    }

    public void E(String str) {
        w("sentry-trace_id", str);
    }

    public void F(String str) {
        w("sentry-transaction", str);
    }

    public void G(s8 s8Var) {
        if (s8Var != null) {
            D(io.sentry.util.f0.g(v(s8Var)));
            if (s8Var.c() != null) {
                B(s(s8Var));
            }
            if (s8Var.d() != null) {
                a(t(s8Var));
            }
        }
    }

    public void H(IScope iScope, k7 k7Var) {
        s3 L = iScope.L();
        io.sentry.protocol.x K = iScope.K();
        E(L.e().toString());
        y(k7Var.retrieveParsedDsn().a());
        z(k7Var.getRelease());
        x(k7Var.getEnvironment());
        if (!io.sentry.protocol.x.f28663e.equals(K)) {
            A(K.toString());
        }
        F(null);
        C(null);
        D(null);
    }

    public void I(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, k7 k7Var, s8 s8Var, String str, io.sentry.protocol.g0 g0Var) {
        E(xVar.toString());
        y(k7Var.retrieveParsedDsn().a());
        z(k7Var.getRelease());
        x(k7Var.getEnvironment());
        if (!p(g0Var)) {
            str = null;
        }
        F(str);
        if (xVar2 != null && !io.sentry.protocol.x.f28663e.equals(xVar2)) {
            A(xVar2.toString());
        }
        C(t(s8Var));
        D(io.sentry.util.f0.g(v(s8Var)));
        B(s(s8Var));
    }

    public q8 J() {
        String l10 = l();
        String h10 = h();
        String f10 = f();
        if (l10 == null || f10 == null) {
            return null;
        }
        io.sentry.protocol.x xVar = new io.sentry.protocol.x(l10);
        io.sentry.protocol.x xVar2 = null;
        String g10 = g();
        String e10 = e();
        String o10 = o();
        String m10 = m();
        String u10 = u(j());
        String k10 = k();
        if (h10 != null) {
            xVar2 = new io.sentry.protocol.x(h10);
        }
        q8 q8Var = new q8(xVar, f10, g10, e10, o10, m10, u10, k10, xVar2, u(i()));
        q8Var.c(n());
        return q8Var;
    }

    public void a(Double d10) {
        this.f28074c = d10;
    }

    public void b() {
        this.f28077f = false;
    }

    public String d(String str) {
        if (str == null) {
            return null;
        }
        return (String) this.f28072a.get(str);
    }

    public String e() {
        return d("sentry-environment");
    }

    public String f() {
        return d("sentry-public_key");
    }

    public String g() {
        return d("sentry-release");
    }

    public String h() {
        return d("sentry-replay_id");
    }

    public Double i() {
        return this.f28075d;
    }

    public Double j() {
        return this.f28074c;
    }

    public String k() {
        return d("sentry-sampled");
    }

    public String l() {
        return d("sentry-trace_id");
    }

    public String m() {
        return d("sentry-transaction");
    }

    public Map n() {
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        a1 a10 = this.f28073b.a();
        try {
            for (Map.Entry entry : this.f28072a.entrySet()) {
                String str = (String) entry.getKey();
                String str2 = (String) entry.getValue();
                if (!b.f28080a.contains(str) && str2 != null) {
                    concurrentHashMap.put(str.replaceFirst("sentry-", ""), str2);
                }
            }
            if (a10 != null) {
                a10.close();
            }
            return concurrentHashMap;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public String o() {
        return d("sentry-user_id");
    }

    public boolean q() {
        return this.f28077f;
    }

    public boolean r() {
        return this.f28078g;
    }

    public void w(String str, String str2) {
        if (this.f28077f) {
            if (str2 == null) {
                this.f28072a.remove(str);
            } else {
                this.f28072a.put(str, str2);
            }
        }
    }

    public void x(String str) {
        w("sentry-environment", str);
    }

    public void y(String str) {
        w("sentry-public_key", str);
    }

    public void z(String str) {
        w("sentry-release", str);
    }

    public d(ConcurrentHashMap concurrentHashMap, Double d10, Double d11, String str, boolean z10, boolean z11, ILogger iLogger) {
        this.f28073b = new io.sentry.util.a();
        this.f28072a = concurrentHashMap;
        this.f28074c = d10;
        this.f28075d = d11;
        this.f28079h = iLogger;
        this.f28076e = str;
        this.f28077f = z10;
        this.f28078g = z11;
    }
}
