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
    private io.sentry.protocol.d f30169d;

    /* renamed from: e  reason: collision with root package name */
    private io.sentry.protocol.x f30170e;

    /* renamed from: i  reason: collision with root package name */
    private io.sentry.protocol.x f30171i;

    /* renamed from: o  reason: collision with root package name */
    private io.sentry.protocol.r f30172o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f30173p;

    /* renamed from: q  reason: collision with root package name */
    private String f30174q;

    /* renamed from: r  reason: collision with root package name */
    private String f30175r;

    /* renamed from: s  reason: collision with root package name */
    private String f30176s;

    /* renamed from: t  reason: collision with root package name */
    private String f30177t;

    /* renamed from: u  reason: collision with root package name */
    private double f30178u;

    /* renamed from: v  reason: collision with root package name */
    private final File f30179v;

    /* renamed from: w  reason: collision with root package name */
    private String f30180w;

    /* renamed from: x  reason: collision with root package name */
    private io.sentry.protocol.profiling.a f30181x;

    /* renamed from: y  reason: collision with root package name */
    private Map f30182y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final io.sentry.protocol.x f30183a;

        /* renamed from: b  reason: collision with root package name */
        private final io.sentry.protocol.x f30184b;

        /* renamed from: c  reason: collision with root package name */
        private final Map f30185c;

        /* renamed from: d  reason: collision with root package name */
        private final File f30186d;

        /* renamed from: e  reason: collision with root package name */
        private final double f30187e;

        /* renamed from: f  reason: collision with root package name */
        private final String f30188f;

        public a(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, Map map, File file, j5 j5Var, String str) {
            this.f30183a = xVar;
            this.f30184b = xVar2;
            this.f30185c = new ConcurrentHashMap(map);
            this.f30186d = file;
            this.f30187e = k.m(j5Var.h());
            this.f30188f = str;
        }

        public m3 a(k7 k7Var) {
            return new m3(this.f30183a, this.f30184b, this.f30186d, this.f30185c, Double.valueOf(this.f30187e), this.f30188f, k7Var);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public m3 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            m3 m3Var = new m3();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1840434063:
                        if (l02.equals("debug_meta")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -362243017:
                        if (l02.equals("measurements")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -309425751:
                        if (l02.equals("profile")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -85904877:
                        if (l02.equals("environment")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 55126294:
                        if (l02.equals("timestamp")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 178573617:
                        if (l02.equals("profiler_id")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 351608024:
                        if (l02.equals("version")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 1090594823:
                        if (l02.equals("release")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1102774726:
                        if (l02.equals("client_sdk")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1874684019:
                        if (l02.equals("platform")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1953158756:
                        if (l02.equals("sampled_profile")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 2005113901:
                        if (l02.equals("chunk_id")) {
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
                            m3Var.f30169d = dVar;
                            break;
                        }
                    case 1:
                        Map u12 = e3Var.u1(iLogger, new a.C0398a());
                        if (u12 == null) {
                            break;
                        } else {
                            m3Var.f30173p.putAll(u12);
                            break;
                        }
                    case 2:
                        io.sentry.protocol.profiling.a aVar = (io.sentry.protocol.profiling.a) e3Var.G0(iLogger, new a.b());
                        if (aVar == null) {
                            break;
                        } else {
                            m3Var.f30181x = aVar;
                            break;
                        }
                    case 3:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            m3Var.f30176s = r12;
                            break;
                        }
                    case 4:
                        Double k02 = e3Var.k0();
                        if (k02 == null) {
                            break;
                        } else {
                            m3Var.f30178u = k02.doubleValue();
                            break;
                        }
                    case 5:
                        io.sentry.protocol.x xVar = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        if (xVar == null) {
                            break;
                        } else {
                            m3Var.f30170e = xVar;
                            break;
                        }
                    case 6:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            m3Var.f30177t = r13;
                            break;
                        }
                    case 7:
                        String r14 = e3Var.r1();
                        if (r14 == null) {
                            break;
                        } else {
                            m3Var.f30175r = r14;
                            break;
                        }
                    case '\b':
                        io.sentry.protocol.r rVar = (io.sentry.protocol.r) e3Var.G0(iLogger, new r.a());
                        if (rVar == null) {
                            break;
                        } else {
                            m3Var.f30172o = rVar;
                            break;
                        }
                    case '\t':
                        String r15 = e3Var.r1();
                        if (r15 == null) {
                            break;
                        } else {
                            m3Var.f30174q = r15;
                            break;
                        }
                    case '\n':
                        String r16 = e3Var.r1();
                        if (r16 == null) {
                            break;
                        } else {
                            m3Var.f30180w = r16;
                            break;
                        }
                    case 11:
                        io.sentry.protocol.x xVar2 = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        if (xVar2 == null) {
                            break;
                        } else {
                            m3Var.f30171i = xVar2;
                            break;
                        }
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            m3Var.u(concurrentHashMap);
            e3Var.y();
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
            io.sentry.protocol.x r1 = io.sentry.protocol.x.f30470e
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
        if (Objects.equals(this.f30169d, m3Var.f30169d) && Objects.equals(this.f30170e, m3Var.f30170e) && Objects.equals(this.f30171i, m3Var.f30171i) && Objects.equals(this.f30172o, m3Var.f30172o) && Objects.equals(this.f30173p, m3Var.f30173p) && Objects.equals(this.f30174q, m3Var.f30174q) && Objects.equals(this.f30175r, m3Var.f30175r) && Objects.equals(this.f30176s, m3Var.f30176s) && Objects.equals(this.f30177t, m3Var.f30177t) && Objects.equals(this.f30180w, m3Var.f30180w) && Objects.equals(this.f30182y, m3Var.f30182y) && Objects.equals(this.f30181x, m3Var.f30181x)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f30169d, this.f30170e, this.f30171i, this.f30172o, this.f30173p, this.f30174q, this.f30175r, this.f30176s, this.f30177t, this.f30180w, this.f30181x, this.f30182y);
    }

    public io.sentry.protocol.x n() {
        return this.f30171i;
    }

    public io.sentry.protocol.d o() {
        return this.f30169d;
    }

    public String p() {
        return this.f30174q;
    }

    public File q() {
        return this.f30179v;
    }

    public void r(io.sentry.protocol.d dVar) {
        this.f30169d = dVar;
    }

    public void s(String str) {
        this.f30180w = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30169d != null) {
            f3Var.e("debug_meta").j(iLogger, this.f30169d);
        }
        f3Var.e("profiler_id").j(iLogger, this.f30170e);
        f3Var.e("chunk_id").j(iLogger, this.f30171i);
        if (this.f30172o != null) {
            f3Var.e("client_sdk").j(iLogger, this.f30172o);
        }
        if (!this.f30173p.isEmpty()) {
            String a10 = f3Var.a();
            f3Var.h("");
            f3Var.e("measurements").j(iLogger, this.f30173p);
            f3Var.h(a10);
        }
        f3Var.e("platform").j(iLogger, this.f30174q);
        f3Var.e("release").j(iLogger, this.f30175r);
        if (this.f30176s != null) {
            f3Var.e("environment").j(iLogger, this.f30176s);
        }
        f3Var.e("version").j(iLogger, this.f30177t);
        if (this.f30180w != null) {
            f3Var.e("sampled_profile").j(iLogger, this.f30180w);
        }
        f3Var.e("timestamp").j(iLogger, m(Double.valueOf(this.f30178u)));
        if (this.f30181x != null) {
            f3Var.e("profile").j(iLogger, this.f30181x);
        }
        Map map = this.f30182y;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30182y.get(str));
            }
        }
        f3Var.y();
    }

    public void t(io.sentry.protocol.profiling.a aVar) {
        this.f30181x = aVar;
    }

    public void u(Map map) {
        this.f30182y = map;
    }

    public m3(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, File file, Map map, Double d10, String str, k7 k7Var) {
        this.f30180w = null;
        this.f30170e = xVar;
        this.f30171i = xVar2;
        this.f30179v = file;
        this.f30173p = map;
        this.f30169d = null;
        this.f30172o = k7Var.getSdkVersion();
        this.f30175r = k7Var.getRelease() != null ? k7Var.getRelease() : "";
        this.f30176s = k7Var.getEnvironment();
        this.f30174q = str;
        this.f30177t = "2";
        this.f30178u = d10.doubleValue();
    }
}
