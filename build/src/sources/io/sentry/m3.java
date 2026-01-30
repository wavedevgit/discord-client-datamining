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
    private io.sentry.protocol.d f30185d;

    /* renamed from: e  reason: collision with root package name */
    private io.sentry.protocol.x f30186e;

    /* renamed from: i  reason: collision with root package name */
    private io.sentry.protocol.x f30187i;

    /* renamed from: o  reason: collision with root package name */
    private io.sentry.protocol.r f30188o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f30189p;

    /* renamed from: q  reason: collision with root package name */
    private String f30190q;

    /* renamed from: r  reason: collision with root package name */
    private String f30191r;

    /* renamed from: s  reason: collision with root package name */
    private String f30192s;

    /* renamed from: t  reason: collision with root package name */
    private String f30193t;

    /* renamed from: u  reason: collision with root package name */
    private double f30194u;

    /* renamed from: v  reason: collision with root package name */
    private final File f30195v;

    /* renamed from: w  reason: collision with root package name */
    private String f30196w;

    /* renamed from: x  reason: collision with root package name */
    private io.sentry.protocol.profiling.a f30197x;

    /* renamed from: y  reason: collision with root package name */
    private Map f30198y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final io.sentry.protocol.x f30199a;

        /* renamed from: b  reason: collision with root package name */
        private final io.sentry.protocol.x f30200b;

        /* renamed from: c  reason: collision with root package name */
        private final Map f30201c;

        /* renamed from: d  reason: collision with root package name */
        private final File f30202d;

        /* renamed from: e  reason: collision with root package name */
        private final double f30203e;

        /* renamed from: f  reason: collision with root package name */
        private final String f30204f;

        public a(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, Map map, File file, j5 j5Var, String str) {
            this.f30199a = xVar;
            this.f30200b = xVar2;
            this.f30201c = new ConcurrentHashMap(map);
            this.f30202d = file;
            this.f30203e = k.m(j5Var.h());
            this.f30204f = str;
        }

        public m3 a(k7 k7Var) {
            return new m3(this.f30199a, this.f30200b, this.f30202d, this.f30201c, Double.valueOf(this.f30203e), this.f30204f, k7Var);
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
                            m3Var.f30185d = dVar;
                            break;
                        }
                    case 1:
                        Map u12 = e3Var.u1(iLogger, new a.C0398a());
                        if (u12 == null) {
                            break;
                        } else {
                            m3Var.f30189p.putAll(u12);
                            break;
                        }
                    case 2:
                        io.sentry.protocol.profiling.a aVar = (io.sentry.protocol.profiling.a) e3Var.G0(iLogger, new a.b());
                        if (aVar == null) {
                            break;
                        } else {
                            m3Var.f30197x = aVar;
                            break;
                        }
                    case 3:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            m3Var.f30192s = r12;
                            break;
                        }
                    case 4:
                        Double k02 = e3Var.k0();
                        if (k02 == null) {
                            break;
                        } else {
                            m3Var.f30194u = k02.doubleValue();
                            break;
                        }
                    case 5:
                        io.sentry.protocol.x xVar = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        if (xVar == null) {
                            break;
                        } else {
                            m3Var.f30186e = xVar;
                            break;
                        }
                    case 6:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            m3Var.f30193t = r13;
                            break;
                        }
                    case 7:
                        String r14 = e3Var.r1();
                        if (r14 == null) {
                            break;
                        } else {
                            m3Var.f30191r = r14;
                            break;
                        }
                    case '\b':
                        io.sentry.protocol.r rVar = (io.sentry.protocol.r) e3Var.G0(iLogger, new r.a());
                        if (rVar == null) {
                            break;
                        } else {
                            m3Var.f30188o = rVar;
                            break;
                        }
                    case '\t':
                        String r15 = e3Var.r1();
                        if (r15 == null) {
                            break;
                        } else {
                            m3Var.f30190q = r15;
                            break;
                        }
                    case '\n':
                        String r16 = e3Var.r1();
                        if (r16 == null) {
                            break;
                        } else {
                            m3Var.f30196w = r16;
                            break;
                        }
                    case 11:
                        io.sentry.protocol.x xVar2 = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        if (xVar2 == null) {
                            break;
                        } else {
                            m3Var.f30187i = xVar2;
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
            io.sentry.protocol.x r1 = io.sentry.protocol.x.f30486e
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
        if (Objects.equals(this.f30185d, m3Var.f30185d) && Objects.equals(this.f30186e, m3Var.f30186e) && Objects.equals(this.f30187i, m3Var.f30187i) && Objects.equals(this.f30188o, m3Var.f30188o) && Objects.equals(this.f30189p, m3Var.f30189p) && Objects.equals(this.f30190q, m3Var.f30190q) && Objects.equals(this.f30191r, m3Var.f30191r) && Objects.equals(this.f30192s, m3Var.f30192s) && Objects.equals(this.f30193t, m3Var.f30193t) && Objects.equals(this.f30196w, m3Var.f30196w) && Objects.equals(this.f30198y, m3Var.f30198y) && Objects.equals(this.f30197x, m3Var.f30197x)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f30185d, this.f30186e, this.f30187i, this.f30188o, this.f30189p, this.f30190q, this.f30191r, this.f30192s, this.f30193t, this.f30196w, this.f30197x, this.f30198y);
    }

    public io.sentry.protocol.x n() {
        return this.f30187i;
    }

    public io.sentry.protocol.d o() {
        return this.f30185d;
    }

    public String p() {
        return this.f30190q;
    }

    public File q() {
        return this.f30195v;
    }

    public void r(io.sentry.protocol.d dVar) {
        this.f30185d = dVar;
    }

    public void s(String str) {
        this.f30196w = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30185d != null) {
            f3Var.e("debug_meta").j(iLogger, this.f30185d);
        }
        f3Var.e("profiler_id").j(iLogger, this.f30186e);
        f3Var.e("chunk_id").j(iLogger, this.f30187i);
        if (this.f30188o != null) {
            f3Var.e("client_sdk").j(iLogger, this.f30188o);
        }
        if (!this.f30189p.isEmpty()) {
            String a10 = f3Var.a();
            f3Var.h("");
            f3Var.e("measurements").j(iLogger, this.f30189p);
            f3Var.h(a10);
        }
        f3Var.e("platform").j(iLogger, this.f30190q);
        f3Var.e("release").j(iLogger, this.f30191r);
        if (this.f30192s != null) {
            f3Var.e("environment").j(iLogger, this.f30192s);
        }
        f3Var.e("version").j(iLogger, this.f30193t);
        if (this.f30196w != null) {
            f3Var.e("sampled_profile").j(iLogger, this.f30196w);
        }
        f3Var.e("timestamp").j(iLogger, m(Double.valueOf(this.f30194u)));
        if (this.f30197x != null) {
            f3Var.e("profile").j(iLogger, this.f30197x);
        }
        Map map = this.f30198y;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30198y.get(str));
            }
        }
        f3Var.y();
    }

    public void t(io.sentry.protocol.profiling.a aVar) {
        this.f30197x = aVar;
    }

    public void u(Map map) {
        this.f30198y = map;
    }

    public m3(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, File file, Map map, Double d10, String str, k7 k7Var) {
        this.f30196w = null;
        this.f30186e = xVar;
        this.f30187i = xVar2;
        this.f30195v = file;
        this.f30189p = map;
        this.f30185d = null;
        this.f30188o = k7Var.getSdkVersion();
        this.f30191r = k7Var.getRelease() != null ? k7Var.getRelease() : "";
        this.f30192s = k7Var.getEnvironment();
        this.f30190q = str;
        this.f30193t = "2";
        this.f30194u = d10.doubleValue();
    }
}
