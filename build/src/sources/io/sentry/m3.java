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
    private io.sentry.protocol.d f29170d;

    /* renamed from: e  reason: collision with root package name */
    private io.sentry.protocol.x f29171e;

    /* renamed from: i  reason: collision with root package name */
    private io.sentry.protocol.x f29172i;

    /* renamed from: o  reason: collision with root package name */
    private io.sentry.protocol.r f29173o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f29174p;

    /* renamed from: q  reason: collision with root package name */
    private String f29175q;

    /* renamed from: r  reason: collision with root package name */
    private String f29176r;

    /* renamed from: s  reason: collision with root package name */
    private String f29177s;

    /* renamed from: t  reason: collision with root package name */
    private String f29178t;

    /* renamed from: u  reason: collision with root package name */
    private double f29179u;

    /* renamed from: v  reason: collision with root package name */
    private final File f29180v;

    /* renamed from: w  reason: collision with root package name */
    private String f29181w;

    /* renamed from: x  reason: collision with root package name */
    private io.sentry.protocol.profiling.a f29182x;

    /* renamed from: y  reason: collision with root package name */
    private Map f29183y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final io.sentry.protocol.x f29184a;

        /* renamed from: b  reason: collision with root package name */
        private final io.sentry.protocol.x f29185b;

        /* renamed from: c  reason: collision with root package name */
        private final Map f29186c;

        /* renamed from: d  reason: collision with root package name */
        private final File f29187d;

        /* renamed from: e  reason: collision with root package name */
        private final double f29188e;

        /* renamed from: f  reason: collision with root package name */
        private final String f29189f;

        public a(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, Map map, File file, j5 j5Var, String str) {
            this.f29184a = xVar;
            this.f29185b = xVar2;
            this.f29186c = new ConcurrentHashMap(map);
            this.f29187d = file;
            this.f29188e = k.m(j5Var.h());
            this.f29189f = str;
        }

        public m3 a(k7 k7Var) {
            return new m3(this.f29184a, this.f29185b, this.f29187d, this.f29186c, Double.valueOf(this.f29188e), this.f29189f, k7Var);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public m3 a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
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
                        io.sentry.protocol.d dVar = (io.sentry.protocol.d) e3Var.G0(iLogger, new d.a());
                        if (dVar == null) {
                            break;
                        } else {
                            m3Var.f29170d = dVar;
                            break;
                        }
                    case 1:
                        Map u12 = e3Var.u1(iLogger, new a.C0407a());
                        if (u12 == null) {
                            break;
                        } else {
                            m3Var.f29174p.putAll(u12);
                            break;
                        }
                    case 2:
                        io.sentry.protocol.profiling.a aVar = (io.sentry.protocol.profiling.a) e3Var.G0(iLogger, new a.b());
                        if (aVar == null) {
                            break;
                        } else {
                            m3Var.f29182x = aVar;
                            break;
                        }
                    case 3:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            m3Var.f29177s = r12;
                            break;
                        }
                    case 4:
                        Double l02 = e3Var.l0();
                        if (l02 == null) {
                            break;
                        } else {
                            m3Var.f29179u = l02.doubleValue();
                            break;
                        }
                    case 5:
                        io.sentry.protocol.x xVar = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        if (xVar == null) {
                            break;
                        } else {
                            m3Var.f29171e = xVar;
                            break;
                        }
                    case 6:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            m3Var.f29178t = r13;
                            break;
                        }
                    case 7:
                        String r14 = e3Var.r1();
                        if (r14 == null) {
                            break;
                        } else {
                            m3Var.f29176r = r14;
                            break;
                        }
                    case '\b':
                        io.sentry.protocol.r rVar = (io.sentry.protocol.r) e3Var.G0(iLogger, new r.a());
                        if (rVar == null) {
                            break;
                        } else {
                            m3Var.f29173o = rVar;
                            break;
                        }
                    case '\t':
                        String r15 = e3Var.r1();
                        if (r15 == null) {
                            break;
                        } else {
                            m3Var.f29175q = r15;
                            break;
                        }
                    case '\n':
                        String r16 = e3Var.r1();
                        if (r16 == null) {
                            break;
                        } else {
                            m3Var.f29181w = r16;
                            break;
                        }
                    case 11:
                        io.sentry.protocol.x xVar2 = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        if (xVar2 == null) {
                            break;
                        } else {
                            m3Var.f29172i = xVar2;
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
            e3Var.z();
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
            io.sentry.protocol.x r1 = io.sentry.protocol.x.f29471e
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
        if (Objects.equals(this.f29170d, m3Var.f29170d) && Objects.equals(this.f29171e, m3Var.f29171e) && Objects.equals(this.f29172i, m3Var.f29172i) && Objects.equals(this.f29173o, m3Var.f29173o) && Objects.equals(this.f29174p, m3Var.f29174p) && Objects.equals(this.f29175q, m3Var.f29175q) && Objects.equals(this.f29176r, m3Var.f29176r) && Objects.equals(this.f29177s, m3Var.f29177s) && Objects.equals(this.f29178t, m3Var.f29178t) && Objects.equals(this.f29181w, m3Var.f29181w) && Objects.equals(this.f29183y, m3Var.f29183y) && Objects.equals(this.f29182x, m3Var.f29182x)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f29170d, this.f29171e, this.f29172i, this.f29173o, this.f29174p, this.f29175q, this.f29176r, this.f29177s, this.f29178t, this.f29181w, this.f29182x, this.f29183y);
    }

    public io.sentry.protocol.x n() {
        return this.f29172i;
    }

    public io.sentry.protocol.d o() {
        return this.f29170d;
    }

    public String p() {
        return this.f29175q;
    }

    public File q() {
        return this.f29180v;
    }

    public void r(io.sentry.protocol.d dVar) {
        this.f29170d = dVar;
    }

    public void s(String str) {
        this.f29181w = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29170d != null) {
            f3Var.e("debug_meta").j(iLogger, this.f29170d);
        }
        f3Var.e("profiler_id").j(iLogger, this.f29171e);
        f3Var.e("chunk_id").j(iLogger, this.f29172i);
        if (this.f29173o != null) {
            f3Var.e("client_sdk").j(iLogger, this.f29173o);
        }
        if (!this.f29174p.isEmpty()) {
            String a10 = f3Var.a();
            f3Var.h("");
            f3Var.e("measurements").j(iLogger, this.f29174p);
            f3Var.h(a10);
        }
        f3Var.e("platform").j(iLogger, this.f29175q);
        f3Var.e("release").j(iLogger, this.f29176r);
        if (this.f29177s != null) {
            f3Var.e("environment").j(iLogger, this.f29177s);
        }
        f3Var.e("version").j(iLogger, this.f29178t);
        if (this.f29181w != null) {
            f3Var.e("sampled_profile").j(iLogger, this.f29181w);
        }
        f3Var.e("timestamp").j(iLogger, m(Double.valueOf(this.f29179u)));
        if (this.f29182x != null) {
            f3Var.e("profile").j(iLogger, this.f29182x);
        }
        Map map = this.f29183y;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29183y.get(str));
            }
        }
        f3Var.z();
    }

    public void t(io.sentry.protocol.profiling.a aVar) {
        this.f29182x = aVar;
    }

    public void u(Map map) {
        this.f29183y = map;
    }

    public m3(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, File file, Map map, Double d10, String str, k7 k7Var) {
        this.f29181w = null;
        this.f29171e = xVar;
        this.f29172i = xVar2;
        this.f29180v = file;
        this.f29174p = map;
        this.f29170d = null;
        this.f29173o = k7Var.getSdkVersion();
        this.f29176r = k7Var.getRelease() != null ? k7Var.getRelease() : "";
        this.f29177s = k7Var.getEnvironment();
        this.f29175q = str;
        this.f29178t = "2";
        this.f29179u = d10.doubleValue();
    }
}
