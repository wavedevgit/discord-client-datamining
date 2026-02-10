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
    private io.sentry.protocol.d f29497d;

    /* renamed from: e  reason: collision with root package name */
    private io.sentry.protocol.x f29498e;

    /* renamed from: i  reason: collision with root package name */
    private io.sentry.protocol.x f29499i;

    /* renamed from: o  reason: collision with root package name */
    private io.sentry.protocol.r f29500o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f29501p;

    /* renamed from: q  reason: collision with root package name */
    private String f29502q;

    /* renamed from: r  reason: collision with root package name */
    private String f29503r;

    /* renamed from: s  reason: collision with root package name */
    private String f29504s;

    /* renamed from: t  reason: collision with root package name */
    private String f29505t;

    /* renamed from: u  reason: collision with root package name */
    private double f29506u;

    /* renamed from: v  reason: collision with root package name */
    private final File f29507v;

    /* renamed from: w  reason: collision with root package name */
    private String f29508w;

    /* renamed from: x  reason: collision with root package name */
    private io.sentry.protocol.profiling.a f29509x;

    /* renamed from: y  reason: collision with root package name */
    private Map f29510y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final io.sentry.protocol.x f29511a;

        /* renamed from: b  reason: collision with root package name */
        private final io.sentry.protocol.x f29512b;

        /* renamed from: c  reason: collision with root package name */
        private final Map f29513c;

        /* renamed from: d  reason: collision with root package name */
        private final File f29514d;

        /* renamed from: e  reason: collision with root package name */
        private final double f29515e;

        /* renamed from: f  reason: collision with root package name */
        private final String f29516f;

        public a(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, Map map, File file, j5 j5Var, String str) {
            this.f29511a = xVar;
            this.f29512b = xVar2;
            this.f29513c = new ConcurrentHashMap(map);
            this.f29514d = file;
            this.f29515e = k.m(j5Var.h());
            this.f29516f = str;
        }

        public m3 a(k7 k7Var) {
            return new m3(this.f29511a, this.f29512b, this.f29514d, this.f29513c, Double.valueOf(this.f29515e), this.f29516f, k7Var);
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
                        io.sentry.protocol.d dVar = (io.sentry.protocol.d) e3Var.I0(iLogger, new d.a());
                        if (dVar == null) {
                            break;
                        } else {
                            m3Var.f29497d = dVar;
                            break;
                        }
                    case 1:
                        Map t12 = e3Var.t1(iLogger, new a.C0402a());
                        if (t12 == null) {
                            break;
                        } else {
                            m3Var.f29501p.putAll(t12);
                            break;
                        }
                    case 2:
                        io.sentry.protocol.profiling.a aVar = (io.sentry.protocol.profiling.a) e3Var.I0(iLogger, new a.b());
                        if (aVar == null) {
                            break;
                        } else {
                            m3Var.f29509x = aVar;
                            break;
                        }
                    case 3:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            m3Var.f29504s = r12;
                            break;
                        }
                    case 4:
                        Double n02 = e3Var.n0();
                        if (n02 == null) {
                            break;
                        } else {
                            m3Var.f29506u = n02.doubleValue();
                            break;
                        }
                    case 5:
                        io.sentry.protocol.x xVar = (io.sentry.protocol.x) e3Var.I0(iLogger, new x.a());
                        if (xVar == null) {
                            break;
                        } else {
                            m3Var.f29498e = xVar;
                            break;
                        }
                    case 6:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            m3Var.f29505t = r13;
                            break;
                        }
                    case 7:
                        String r14 = e3Var.r1();
                        if (r14 == null) {
                            break;
                        } else {
                            m3Var.f29503r = r14;
                            break;
                        }
                    case '\b':
                        io.sentry.protocol.r rVar = (io.sentry.protocol.r) e3Var.I0(iLogger, new r.a());
                        if (rVar == null) {
                            break;
                        } else {
                            m3Var.f29500o = rVar;
                            break;
                        }
                    case '\t':
                        String r15 = e3Var.r1();
                        if (r15 == null) {
                            break;
                        } else {
                            m3Var.f29502q = r15;
                            break;
                        }
                    case '\n':
                        String r16 = e3Var.r1();
                        if (r16 == null) {
                            break;
                        } else {
                            m3Var.f29508w = r16;
                            break;
                        }
                    case 11:
                        io.sentry.protocol.x xVar2 = (io.sentry.protocol.x) e3Var.I0(iLogger, new x.a());
                        if (xVar2 == null) {
                            break;
                        } else {
                            m3Var.f29499i = xVar2;
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
            io.sentry.protocol.x r1 = io.sentry.protocol.x.f29798e
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
        if (Objects.equals(this.f29497d, m3Var.f29497d) && Objects.equals(this.f29498e, m3Var.f29498e) && Objects.equals(this.f29499i, m3Var.f29499i) && Objects.equals(this.f29500o, m3Var.f29500o) && Objects.equals(this.f29501p, m3Var.f29501p) && Objects.equals(this.f29502q, m3Var.f29502q) && Objects.equals(this.f29503r, m3Var.f29503r) && Objects.equals(this.f29504s, m3Var.f29504s) && Objects.equals(this.f29505t, m3Var.f29505t) && Objects.equals(this.f29508w, m3Var.f29508w) && Objects.equals(this.f29510y, m3Var.f29510y) && Objects.equals(this.f29509x, m3Var.f29509x)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f29497d, this.f29498e, this.f29499i, this.f29500o, this.f29501p, this.f29502q, this.f29503r, this.f29504s, this.f29505t, this.f29508w, this.f29509x, this.f29510y);
    }

    public io.sentry.protocol.x n() {
        return this.f29499i;
    }

    public io.sentry.protocol.d o() {
        return this.f29497d;
    }

    public String p() {
        return this.f29502q;
    }

    public File q() {
        return this.f29507v;
    }

    public void r(io.sentry.protocol.d dVar) {
        this.f29497d = dVar;
    }

    public void s(String str) {
        this.f29508w = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29497d != null) {
            f3Var.e("debug_meta").j(iLogger, this.f29497d);
        }
        f3Var.e("profiler_id").j(iLogger, this.f29498e);
        f3Var.e("chunk_id").j(iLogger, this.f29499i);
        if (this.f29500o != null) {
            f3Var.e("client_sdk").j(iLogger, this.f29500o);
        }
        if (!this.f29501p.isEmpty()) {
            String a10 = f3Var.a();
            f3Var.h("");
            f3Var.e("measurements").j(iLogger, this.f29501p);
            f3Var.h(a10);
        }
        f3Var.e("platform").j(iLogger, this.f29502q);
        f3Var.e("release").j(iLogger, this.f29503r);
        if (this.f29504s != null) {
            f3Var.e("environment").j(iLogger, this.f29504s);
        }
        f3Var.e("version").j(iLogger, this.f29505t);
        if (this.f29508w != null) {
            f3Var.e("sampled_profile").j(iLogger, this.f29508w);
        }
        f3Var.e("timestamp").j(iLogger, m(Double.valueOf(this.f29506u)));
        if (this.f29509x != null) {
            f3Var.e("profile").j(iLogger, this.f29509x);
        }
        Map map = this.f29510y;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29510y.get(str));
            }
        }
        f3Var.D();
    }

    public void t(io.sentry.protocol.profiling.a aVar) {
        this.f29509x = aVar;
    }

    public void u(Map map) {
        this.f29510y = map;
    }

    public m3(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, File file, Map map, Double d10, String str, k7 k7Var) {
        this.f29508w = null;
        this.f29498e = xVar;
        this.f29499i = xVar2;
        this.f29507v = file;
        this.f29501p = map;
        this.f29497d = null;
        this.f29500o = k7Var.getSdkVersion();
        this.f29503r = k7Var.getRelease() != null ? k7Var.getRelease() : "";
        this.f29504s = k7Var.getEnvironment();
        this.f29502q = str;
        this.f29505t = "2";
        this.f29506u = d10.doubleValue();
    }
}
