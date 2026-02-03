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
    private io.sentry.protocol.d f29751d;

    /* renamed from: e  reason: collision with root package name */
    private io.sentry.protocol.x f29752e;

    /* renamed from: i  reason: collision with root package name */
    private io.sentry.protocol.x f29753i;

    /* renamed from: o  reason: collision with root package name */
    private io.sentry.protocol.r f29754o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f29755p;

    /* renamed from: q  reason: collision with root package name */
    private String f29756q;

    /* renamed from: r  reason: collision with root package name */
    private String f29757r;

    /* renamed from: s  reason: collision with root package name */
    private String f29758s;

    /* renamed from: t  reason: collision with root package name */
    private String f29759t;

    /* renamed from: u  reason: collision with root package name */
    private double f29760u;

    /* renamed from: v  reason: collision with root package name */
    private final File f29761v;

    /* renamed from: w  reason: collision with root package name */
    private String f29762w;

    /* renamed from: x  reason: collision with root package name */
    private io.sentry.protocol.profiling.a f29763x;

    /* renamed from: y  reason: collision with root package name */
    private Map f29764y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final io.sentry.protocol.x f29765a;

        /* renamed from: b  reason: collision with root package name */
        private final io.sentry.protocol.x f29766b;

        /* renamed from: c  reason: collision with root package name */
        private final Map f29767c;

        /* renamed from: d  reason: collision with root package name */
        private final File f29768d;

        /* renamed from: e  reason: collision with root package name */
        private final double f29769e;

        /* renamed from: f  reason: collision with root package name */
        private final String f29770f;

        public a(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, Map map, File file, j5 j5Var, String str) {
            this.f29765a = xVar;
            this.f29766b = xVar2;
            this.f29767c = new ConcurrentHashMap(map);
            this.f29768d = file;
            this.f29769e = k.m(j5Var.h());
            this.f29770f = str;
        }

        public m3 a(k7 k7Var) {
            return new m3(this.f29765a, this.f29766b, this.f29768d, this.f29767c, Double.valueOf(this.f29769e), this.f29770f, k7Var);
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
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1840434063:
                        if (m02.equals("debug_meta")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -362243017:
                        if (m02.equals("measurements")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -309425751:
                        if (m02.equals("profile")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -85904877:
                        if (m02.equals("environment")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 55126294:
                        if (m02.equals("timestamp")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 178573617:
                        if (m02.equals("profiler_id")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 351608024:
                        if (m02.equals("version")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 1090594823:
                        if (m02.equals("release")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1102774726:
                        if (m02.equals("client_sdk")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1874684019:
                        if (m02.equals("platform")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1953158756:
                        if (m02.equals("sampled_profile")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 2005113901:
                        if (m02.equals("chunk_id")) {
                            c10 = 11;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        io.sentry.protocol.d dVar = (io.sentry.protocol.d) e3Var.H0(iLogger, new d.a());
                        if (dVar == null) {
                            break;
                        } else {
                            m3Var.f29751d = dVar;
                            break;
                        }
                    case 1:
                        Map u12 = e3Var.u1(iLogger, new a.C0401a());
                        if (u12 == null) {
                            break;
                        } else {
                            m3Var.f29755p.putAll(u12);
                            break;
                        }
                    case 2:
                        io.sentry.protocol.profiling.a aVar = (io.sentry.protocol.profiling.a) e3Var.H0(iLogger, new a.b());
                        if (aVar == null) {
                            break;
                        } else {
                            m3Var.f29763x = aVar;
                            break;
                        }
                    case 3:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            m3Var.f29758s = r12;
                            break;
                        }
                    case 4:
                        Double l02 = e3Var.l0();
                        if (l02 == null) {
                            break;
                        } else {
                            m3Var.f29760u = l02.doubleValue();
                            break;
                        }
                    case 5:
                        io.sentry.protocol.x xVar = (io.sentry.protocol.x) e3Var.H0(iLogger, new x.a());
                        if (xVar == null) {
                            break;
                        } else {
                            m3Var.f29752e = xVar;
                            break;
                        }
                    case 6:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            m3Var.f29759t = r13;
                            break;
                        }
                    case 7:
                        String r14 = e3Var.r1();
                        if (r14 == null) {
                            break;
                        } else {
                            m3Var.f29757r = r14;
                            break;
                        }
                    case '\b':
                        io.sentry.protocol.r rVar = (io.sentry.protocol.r) e3Var.H0(iLogger, new r.a());
                        if (rVar == null) {
                            break;
                        } else {
                            m3Var.f29754o = rVar;
                            break;
                        }
                    case '\t':
                        String r15 = e3Var.r1();
                        if (r15 == null) {
                            break;
                        } else {
                            m3Var.f29756q = r15;
                            break;
                        }
                    case '\n':
                        String r16 = e3Var.r1();
                        if (r16 == null) {
                            break;
                        } else {
                            m3Var.f29762w = r16;
                            break;
                        }
                    case 11:
                        io.sentry.protocol.x xVar2 = (io.sentry.protocol.x) e3Var.H0(iLogger, new x.a());
                        if (xVar2 == null) {
                            break;
                        } else {
                            m3Var.f29753i = xVar2;
                            break;
                        }
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
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
            io.sentry.protocol.x r1 = io.sentry.protocol.x.f30052e
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
        if (Objects.equals(this.f29751d, m3Var.f29751d) && Objects.equals(this.f29752e, m3Var.f29752e) && Objects.equals(this.f29753i, m3Var.f29753i) && Objects.equals(this.f29754o, m3Var.f29754o) && Objects.equals(this.f29755p, m3Var.f29755p) && Objects.equals(this.f29756q, m3Var.f29756q) && Objects.equals(this.f29757r, m3Var.f29757r) && Objects.equals(this.f29758s, m3Var.f29758s) && Objects.equals(this.f29759t, m3Var.f29759t) && Objects.equals(this.f29762w, m3Var.f29762w) && Objects.equals(this.f29764y, m3Var.f29764y) && Objects.equals(this.f29763x, m3Var.f29763x)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f29751d, this.f29752e, this.f29753i, this.f29754o, this.f29755p, this.f29756q, this.f29757r, this.f29758s, this.f29759t, this.f29762w, this.f29763x, this.f29764y);
    }

    public io.sentry.protocol.x n() {
        return this.f29753i;
    }

    public io.sentry.protocol.d o() {
        return this.f29751d;
    }

    public String p() {
        return this.f29756q;
    }

    public File q() {
        return this.f29761v;
    }

    public void r(io.sentry.protocol.d dVar) {
        this.f29751d = dVar;
    }

    public void s(String str) {
        this.f29762w = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f29751d != null) {
            f3Var.e("debug_meta").j(iLogger, this.f29751d);
        }
        f3Var.e("profiler_id").j(iLogger, this.f29752e);
        f3Var.e("chunk_id").j(iLogger, this.f29753i);
        if (this.f29754o != null) {
            f3Var.e("client_sdk").j(iLogger, this.f29754o);
        }
        if (!this.f29755p.isEmpty()) {
            String a10 = f3Var.a();
            f3Var.h("");
            f3Var.e("measurements").j(iLogger, this.f29755p);
            f3Var.h(a10);
        }
        f3Var.e("platform").j(iLogger, this.f29756q);
        f3Var.e("release").j(iLogger, this.f29757r);
        if (this.f29758s != null) {
            f3Var.e("environment").j(iLogger, this.f29758s);
        }
        f3Var.e("version").j(iLogger, this.f29759t);
        if (this.f29762w != null) {
            f3Var.e("sampled_profile").j(iLogger, this.f29762w);
        }
        f3Var.e("timestamp").j(iLogger, m(Double.valueOf(this.f29760u)));
        if (this.f29763x != null) {
            f3Var.e("profile").j(iLogger, this.f29763x);
        }
        Map map = this.f29764y;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29764y.get(str));
            }
        }
        f3Var.y();
    }

    public void t(io.sentry.protocol.profiling.a aVar) {
        this.f29763x = aVar;
    }

    public void u(Map map) {
        this.f29764y = map;
    }

    public m3(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, File file, Map map, Double d10, String str, k7 k7Var) {
        this.f29762w = null;
        this.f29752e = xVar;
        this.f29753i = xVar2;
        this.f29761v = file;
        this.f29755p = map;
        this.f29751d = null;
        this.f29754o = k7Var.getSdkVersion();
        this.f29757r = k7Var.getRelease() != null ? k7Var.getRelease() : "";
        this.f29758s = k7Var.getEnvironment();
        this.f29756q = str;
        this.f29759t = "2";
        this.f29760u = d10.doubleValue();
    }
}
