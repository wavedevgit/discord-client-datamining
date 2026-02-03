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
    private io.sentry.protocol.d f30112d;

    /* renamed from: e  reason: collision with root package name */
    private io.sentry.protocol.x f30113e;

    /* renamed from: i  reason: collision with root package name */
    private io.sentry.protocol.x f30114i;

    /* renamed from: o  reason: collision with root package name */
    private io.sentry.protocol.r f30115o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f30116p;

    /* renamed from: q  reason: collision with root package name */
    private String f30117q;

    /* renamed from: r  reason: collision with root package name */
    private String f30118r;

    /* renamed from: s  reason: collision with root package name */
    private String f30119s;

    /* renamed from: t  reason: collision with root package name */
    private String f30120t;

    /* renamed from: u  reason: collision with root package name */
    private double f30121u;

    /* renamed from: v  reason: collision with root package name */
    private final File f30122v;

    /* renamed from: w  reason: collision with root package name */
    private String f30123w;

    /* renamed from: x  reason: collision with root package name */
    private io.sentry.protocol.profiling.a f30124x;

    /* renamed from: y  reason: collision with root package name */
    private Map f30125y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final io.sentry.protocol.x f30126a;

        /* renamed from: b  reason: collision with root package name */
        private final io.sentry.protocol.x f30127b;

        /* renamed from: c  reason: collision with root package name */
        private final Map f30128c;

        /* renamed from: d  reason: collision with root package name */
        private final File f30129d;

        /* renamed from: e  reason: collision with root package name */
        private final double f30130e;

        /* renamed from: f  reason: collision with root package name */
        private final String f30131f;

        public a(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, Map map, File file, j5 j5Var, String str) {
            this.f30126a = xVar;
            this.f30127b = xVar2;
            this.f30128c = new ConcurrentHashMap(map);
            this.f30129d = file;
            this.f30130e = k.m(j5Var.h());
            this.f30131f = str;
        }

        public m3 a(k7 k7Var) {
            return new m3(this.f30126a, this.f30127b, this.f30129d, this.f30128c, Double.valueOf(this.f30130e), this.f30131f, k7Var);
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
                            m3Var.f30112d = dVar;
                            break;
                        }
                    case 1:
                        Map u12 = e3Var.u1(iLogger, new a.C0400a());
                        if (u12 == null) {
                            break;
                        } else {
                            m3Var.f30116p.putAll(u12);
                            break;
                        }
                    case 2:
                        io.sentry.protocol.profiling.a aVar = (io.sentry.protocol.profiling.a) e3Var.G0(iLogger, new a.b());
                        if (aVar == null) {
                            break;
                        } else {
                            m3Var.f30124x = aVar;
                            break;
                        }
                    case 3:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            m3Var.f30119s = r12;
                            break;
                        }
                    case 4:
                        Double k02 = e3Var.k0();
                        if (k02 == null) {
                            break;
                        } else {
                            m3Var.f30121u = k02.doubleValue();
                            break;
                        }
                    case 5:
                        io.sentry.protocol.x xVar = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        if (xVar == null) {
                            break;
                        } else {
                            m3Var.f30113e = xVar;
                            break;
                        }
                    case 6:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            m3Var.f30120t = r13;
                            break;
                        }
                    case 7:
                        String r14 = e3Var.r1();
                        if (r14 == null) {
                            break;
                        } else {
                            m3Var.f30118r = r14;
                            break;
                        }
                    case '\b':
                        io.sentry.protocol.r rVar = (io.sentry.protocol.r) e3Var.G0(iLogger, new r.a());
                        if (rVar == null) {
                            break;
                        } else {
                            m3Var.f30115o = rVar;
                            break;
                        }
                    case '\t':
                        String r15 = e3Var.r1();
                        if (r15 == null) {
                            break;
                        } else {
                            m3Var.f30117q = r15;
                            break;
                        }
                    case '\n':
                        String r16 = e3Var.r1();
                        if (r16 == null) {
                            break;
                        } else {
                            m3Var.f30123w = r16;
                            break;
                        }
                    case 11:
                        io.sentry.protocol.x xVar2 = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        if (xVar2 == null) {
                            break;
                        } else {
                            m3Var.f30114i = xVar2;
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
            io.sentry.protocol.x r1 = io.sentry.protocol.x.f30413e
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
        if (Objects.equals(this.f30112d, m3Var.f30112d) && Objects.equals(this.f30113e, m3Var.f30113e) && Objects.equals(this.f30114i, m3Var.f30114i) && Objects.equals(this.f30115o, m3Var.f30115o) && Objects.equals(this.f30116p, m3Var.f30116p) && Objects.equals(this.f30117q, m3Var.f30117q) && Objects.equals(this.f30118r, m3Var.f30118r) && Objects.equals(this.f30119s, m3Var.f30119s) && Objects.equals(this.f30120t, m3Var.f30120t) && Objects.equals(this.f30123w, m3Var.f30123w) && Objects.equals(this.f30125y, m3Var.f30125y) && Objects.equals(this.f30124x, m3Var.f30124x)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f30112d, this.f30113e, this.f30114i, this.f30115o, this.f30116p, this.f30117q, this.f30118r, this.f30119s, this.f30120t, this.f30123w, this.f30124x, this.f30125y);
    }

    public io.sentry.protocol.x n() {
        return this.f30114i;
    }

    public io.sentry.protocol.d o() {
        return this.f30112d;
    }

    public String p() {
        return this.f30117q;
    }

    public File q() {
        return this.f30122v;
    }

    public void r(io.sentry.protocol.d dVar) {
        this.f30112d = dVar;
    }

    public void s(String str) {
        this.f30123w = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30112d != null) {
            f3Var.e("debug_meta").j(iLogger, this.f30112d);
        }
        f3Var.e("profiler_id").j(iLogger, this.f30113e);
        f3Var.e("chunk_id").j(iLogger, this.f30114i);
        if (this.f30115o != null) {
            f3Var.e("client_sdk").j(iLogger, this.f30115o);
        }
        if (!this.f30116p.isEmpty()) {
            String a10 = f3Var.a();
            f3Var.h("");
            f3Var.e("measurements").j(iLogger, this.f30116p);
            f3Var.h(a10);
        }
        f3Var.e("platform").j(iLogger, this.f30117q);
        f3Var.e("release").j(iLogger, this.f30118r);
        if (this.f30119s != null) {
            f3Var.e("environment").j(iLogger, this.f30119s);
        }
        f3Var.e("version").j(iLogger, this.f30120t);
        if (this.f30123w != null) {
            f3Var.e("sampled_profile").j(iLogger, this.f30123w);
        }
        f3Var.e("timestamp").j(iLogger, m(Double.valueOf(this.f30121u)));
        if (this.f30124x != null) {
            f3Var.e("profile").j(iLogger, this.f30124x);
        }
        Map map = this.f30125y;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30125y.get(str));
            }
        }
        f3Var.y();
    }

    public void t(io.sentry.protocol.profiling.a aVar) {
        this.f30124x = aVar;
    }

    public void u(Map map) {
        this.f30125y = map;
    }

    public m3(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, File file, Map map, Double d10, String str, k7 k7Var) {
        this.f30123w = null;
        this.f30113e = xVar;
        this.f30114i = xVar2;
        this.f30122v = file;
        this.f30116p = map;
        this.f30112d = null;
        this.f30115o = k7Var.getSdkVersion();
        this.f30118r = k7Var.getRelease() != null ? k7Var.getRelease() : "";
        this.f30119s = k7Var.getEnvironment();
        this.f30117q = str;
        this.f30120t = "2";
        this.f30121u = d10.doubleValue();
    }
}
