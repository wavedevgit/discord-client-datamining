package io.sentry;

import io.sentry.profilemeasurements.a;
import io.sentry.protocol.d;
import io.sentry.protocol.profiling.a;
import io.sentry.protocol.r;
import io.sentry.protocol.x;
import java.io.File;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m3 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private io.sentry.protocol.d f28314d;

    /* renamed from: e  reason: collision with root package name */
    private io.sentry.protocol.x f28315e;

    /* renamed from: i  reason: collision with root package name */
    private io.sentry.protocol.x f28316i;

    /* renamed from: o  reason: collision with root package name */
    private io.sentry.protocol.r f28317o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f28318p;

    /* renamed from: q  reason: collision with root package name */
    private String f28319q;

    /* renamed from: r  reason: collision with root package name */
    private String f28320r;

    /* renamed from: s  reason: collision with root package name */
    private String f28321s;

    /* renamed from: t  reason: collision with root package name */
    private String f28322t;

    /* renamed from: u  reason: collision with root package name */
    private double f28323u;

    /* renamed from: v  reason: collision with root package name */
    private final File f28324v;

    /* renamed from: w  reason: collision with root package name */
    private String f28325w;

    /* renamed from: x  reason: collision with root package name */
    private io.sentry.protocol.profiling.a f28326x;

    /* renamed from: y  reason: collision with root package name */
    private Map f28327y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final io.sentry.protocol.x f28328a;

        /* renamed from: b  reason: collision with root package name */
        private final io.sentry.protocol.x f28329b;

        /* renamed from: c  reason: collision with root package name */
        private final Map f28330c;

        /* renamed from: d  reason: collision with root package name */
        private final File f28331d;

        /* renamed from: e  reason: collision with root package name */
        private final double f28332e;

        /* renamed from: f  reason: collision with root package name */
        private final String f28333f;

        public a(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, Map map, File file, j5 j5Var, String str) {
            this.f28328a = xVar;
            this.f28329b = xVar2;
            this.f28330c = new ConcurrentHashMap(map);
            this.f28331d = file;
            this.f28332e = k.m(j5Var.h());
            this.f28333f = str;
        }

        public m3 a(k7 k7Var) {
            return new m3(this.f28328a, this.f28329b, this.f28331d, this.f28330c, Double.valueOf(this.f28332e), this.f28333f, k7Var);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public m3 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            m3 m3Var = new m3();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1840434063:
                        if (o02.equals("debug_meta")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -362243017:
                        if (o02.equals("measurements")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -309425751:
                        if (o02.equals("profile")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -85904877:
                        if (o02.equals("environment")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 55126294:
                        if (o02.equals("timestamp")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 178573617:
                        if (o02.equals("profiler_id")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 351608024:
                        if (o02.equals("version")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 1090594823:
                        if (o02.equals("release")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1102774726:
                        if (o02.equals("client_sdk")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1874684019:
                        if (o02.equals("platform")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1953158756:
                        if (o02.equals("sampled_profile")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 2005113901:
                        if (o02.equals("chunk_id")) {
                            c10 = 11;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        io.sentry.protocol.d dVar = (io.sentry.protocol.d) e3Var.G0(iLogger, new d.a());
                        if (dVar == null) {
                            break;
                        } else {
                            m3Var.f28314d = dVar;
                            break;
                        }
                    case 1:
                        Map t12 = e3Var.t1(iLogger, new a.C0401a());
                        if (t12 == null) {
                            break;
                        } else {
                            m3Var.f28318p.putAll(t12);
                            break;
                        }
                    case 2:
                        io.sentry.protocol.profiling.a aVar = (io.sentry.protocol.profiling.a) e3Var.G0(iLogger, new a.b());
                        if (aVar == null) {
                            break;
                        } else {
                            m3Var.f28326x = aVar;
                            break;
                        }
                    case 3:
                        String q12 = e3Var.q1();
                        if (q12 == null) {
                            break;
                        } else {
                            m3Var.f28321s = q12;
                            break;
                        }
                    case 4:
                        Double n02 = e3Var.n0();
                        if (n02 == null) {
                            break;
                        } else {
                            m3Var.f28323u = n02.doubleValue();
                            break;
                        }
                    case 5:
                        io.sentry.protocol.x xVar = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        if (xVar == null) {
                            break;
                        } else {
                            m3Var.f28315e = xVar;
                            break;
                        }
                    case 6:
                        String q13 = e3Var.q1();
                        if (q13 == null) {
                            break;
                        } else {
                            m3Var.f28322t = q13;
                            break;
                        }
                    case 7:
                        String q14 = e3Var.q1();
                        if (q14 == null) {
                            break;
                        } else {
                            m3Var.f28320r = q14;
                            break;
                        }
                    case '\b':
                        io.sentry.protocol.r rVar = (io.sentry.protocol.r) e3Var.G0(iLogger, new r.a());
                        if (rVar == null) {
                            break;
                        } else {
                            m3Var.f28317o = rVar;
                            break;
                        }
                    case '\t':
                        String q15 = e3Var.q1();
                        if (q15 == null) {
                            break;
                        } else {
                            m3Var.f28319q = q15;
                            break;
                        }
                    case '\n':
                        String q16 = e3Var.q1();
                        if (q16 == null) {
                            break;
                        } else {
                            m3Var.f28325w = q16;
                            break;
                        }
                    case 11:
                        io.sentry.protocol.x xVar2 = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        if (xVar2 == null) {
                            break;
                        } else {
                            m3Var.f28316i = xVar2;
                            break;
                        }
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            m3Var.u(concurrentHashMap);
            e3Var.D();
            return m3Var;
        }
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public m3() {
        /*
            r8 = this;
            io.sentry.protocol.x r1 = io.sentry.protocol.x.f28615e
            java.io.File r3 = new java.io.File
            java.lang.String r0 = "dummy"
            r3.<init>(r0)
            java.util.HashMap r4 = new java.util.HashMap
            r4.<init>()
            r5 = 0
            java.lang.Double r5 = java.lang.Double.valueOf(r5)
            java.lang.String r6 = "android"
            io.sentry.k7 r7 = io.sentry.k7.empty()
            r2 = r1
            r0 = r8
            r0.<init>(r1, r2, r3, r4, r5, r6, r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.m3.<init>():void");
    }

    private BigDecimal m(Double d10) {
        return BigDecimal.valueOf(d10.doubleValue()).setScale(6, RoundingMode.DOWN);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m3)) {
            return false;
        }
        m3 m3Var = (m3) obj;
        if (Objects.equals(this.f28314d, m3Var.f28314d) && Objects.equals(this.f28315e, m3Var.f28315e) && Objects.equals(this.f28316i, m3Var.f28316i) && Objects.equals(this.f28317o, m3Var.f28317o) && Objects.equals(this.f28318p, m3Var.f28318p) && Objects.equals(this.f28319q, m3Var.f28319q) && Objects.equals(this.f28320r, m3Var.f28320r) && Objects.equals(this.f28321s, m3Var.f28321s) && Objects.equals(this.f28322t, m3Var.f28322t) && Objects.equals(this.f28325w, m3Var.f28325w) && Objects.equals(this.f28327y, m3Var.f28327y) && Objects.equals(this.f28326x, m3Var.f28326x)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f28314d, this.f28315e, this.f28316i, this.f28317o, this.f28318p, this.f28319q, this.f28320r, this.f28321s, this.f28322t, this.f28325w, this.f28326x, this.f28327y);
    }

    public io.sentry.protocol.x n() {
        return this.f28316i;
    }

    public io.sentry.protocol.d o() {
        return this.f28314d;
    }

    public String p() {
        return this.f28319q;
    }

    public File q() {
        return this.f28324v;
    }

    public void r(io.sentry.protocol.d dVar) {
        this.f28314d = dVar;
    }

    public void s(String str) {
        this.f28325w = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28314d != null) {
            f3Var.e("debug_meta").j(iLogger, this.f28314d);
        }
        f3Var.e("profiler_id").j(iLogger, this.f28315e);
        f3Var.e("chunk_id").j(iLogger, this.f28316i);
        if (this.f28317o != null) {
            f3Var.e("client_sdk").j(iLogger, this.f28317o);
        }
        if (!this.f28318p.isEmpty()) {
            String a10 = f3Var.a();
            f3Var.h("");
            f3Var.e("measurements").j(iLogger, this.f28318p);
            f3Var.h(a10);
        }
        f3Var.e("platform").j(iLogger, this.f28319q);
        f3Var.e("release").j(iLogger, this.f28320r);
        if (this.f28321s != null) {
            f3Var.e("environment").j(iLogger, this.f28321s);
        }
        f3Var.e("version").j(iLogger, this.f28322t);
        if (this.f28325w != null) {
            f3Var.e("sampled_profile").j(iLogger, this.f28325w);
        }
        f3Var.e("timestamp").j(iLogger, m(Double.valueOf(this.f28323u)));
        if (this.f28326x != null) {
            f3Var.e("profile").j(iLogger, this.f28326x);
        }
        Map map = this.f28327y;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28327y.get(str));
            }
        }
        f3Var.D();
    }

    public void t(io.sentry.protocol.profiling.a aVar) {
        this.f28326x = aVar;
    }

    public void u(Map map) {
        this.f28327y = map;
    }

    public m3(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, File file, Map map, Double d10, String str, k7 k7Var) {
        this.f28325w = null;
        this.f28315e = xVar;
        this.f28316i = xVar2;
        this.f28324v = file;
        this.f28318p = map;
        this.f28314d = null;
        this.f28317o = k7Var.getSdkVersion();
        this.f28320r = k7Var.getRelease() != null ? k7Var.getRelease() : "";
        this.f28321s = k7Var.getEnvironment();
        this.f28319q = str;
        this.f28322t = "2";
        this.f28323u = d10.doubleValue();
    }
}
