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
    private io.sentry.protocol.d f28362d;

    /* renamed from: e  reason: collision with root package name */
    private io.sentry.protocol.x f28363e;

    /* renamed from: i  reason: collision with root package name */
    private io.sentry.protocol.x f28364i;

    /* renamed from: o  reason: collision with root package name */
    private io.sentry.protocol.r f28365o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f28366p;

    /* renamed from: q  reason: collision with root package name */
    private String f28367q;

    /* renamed from: r  reason: collision with root package name */
    private String f28368r;

    /* renamed from: s  reason: collision with root package name */
    private String f28369s;

    /* renamed from: t  reason: collision with root package name */
    private String f28370t;

    /* renamed from: u  reason: collision with root package name */
    private double f28371u;

    /* renamed from: v  reason: collision with root package name */
    private final File f28372v;

    /* renamed from: w  reason: collision with root package name */
    private String f28373w;

    /* renamed from: x  reason: collision with root package name */
    private io.sentry.protocol.profiling.a f28374x;

    /* renamed from: y  reason: collision with root package name */
    private Map f28375y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final io.sentry.protocol.x f28376a;

        /* renamed from: b  reason: collision with root package name */
        private final io.sentry.protocol.x f28377b;

        /* renamed from: c  reason: collision with root package name */
        private final Map f28378c;

        /* renamed from: d  reason: collision with root package name */
        private final File f28379d;

        /* renamed from: e  reason: collision with root package name */
        private final double f28380e;

        /* renamed from: f  reason: collision with root package name */
        private final String f28381f;

        public a(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, Map map, File file, j5 j5Var, String str) {
            this.f28376a = xVar;
            this.f28377b = xVar2;
            this.f28378c = new ConcurrentHashMap(map);
            this.f28379d = file;
            this.f28380e = k.m(j5Var.h());
            this.f28381f = str;
        }

        public m3 a(k7 k7Var) {
            return new m3(this.f28376a, this.f28377b, this.f28379d, this.f28378c, Double.valueOf(this.f28380e), this.f28381f, k7Var);
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
                            m3Var.f28362d = dVar;
                            break;
                        }
                    case 1:
                        Map t12 = e3Var.t1(iLogger, new a.C0401a());
                        if (t12 == null) {
                            break;
                        } else {
                            m3Var.f28366p.putAll(t12);
                            break;
                        }
                    case 2:
                        io.sentry.protocol.profiling.a aVar = (io.sentry.protocol.profiling.a) e3Var.G0(iLogger, new a.b());
                        if (aVar == null) {
                            break;
                        } else {
                            m3Var.f28374x = aVar;
                            break;
                        }
                    case 3:
                        String q12 = e3Var.q1();
                        if (q12 == null) {
                            break;
                        } else {
                            m3Var.f28369s = q12;
                            break;
                        }
                    case 4:
                        Double n02 = e3Var.n0();
                        if (n02 == null) {
                            break;
                        } else {
                            m3Var.f28371u = n02.doubleValue();
                            break;
                        }
                    case 5:
                        io.sentry.protocol.x xVar = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        if (xVar == null) {
                            break;
                        } else {
                            m3Var.f28363e = xVar;
                            break;
                        }
                    case 6:
                        String q13 = e3Var.q1();
                        if (q13 == null) {
                            break;
                        } else {
                            m3Var.f28370t = q13;
                            break;
                        }
                    case 7:
                        String q14 = e3Var.q1();
                        if (q14 == null) {
                            break;
                        } else {
                            m3Var.f28368r = q14;
                            break;
                        }
                    case '\b':
                        io.sentry.protocol.r rVar = (io.sentry.protocol.r) e3Var.G0(iLogger, new r.a());
                        if (rVar == null) {
                            break;
                        } else {
                            m3Var.f28365o = rVar;
                            break;
                        }
                    case '\t':
                        String q15 = e3Var.q1();
                        if (q15 == null) {
                            break;
                        } else {
                            m3Var.f28367q = q15;
                            break;
                        }
                    case '\n':
                        String q16 = e3Var.q1();
                        if (q16 == null) {
                            break;
                        } else {
                            m3Var.f28373w = q16;
                            break;
                        }
                    case 11:
                        io.sentry.protocol.x xVar2 = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        if (xVar2 == null) {
                            break;
                        } else {
                            m3Var.f28364i = xVar2;
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
            io.sentry.protocol.x r1 = io.sentry.protocol.x.f28663e
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
        if (Objects.equals(this.f28362d, m3Var.f28362d) && Objects.equals(this.f28363e, m3Var.f28363e) && Objects.equals(this.f28364i, m3Var.f28364i) && Objects.equals(this.f28365o, m3Var.f28365o) && Objects.equals(this.f28366p, m3Var.f28366p) && Objects.equals(this.f28367q, m3Var.f28367q) && Objects.equals(this.f28368r, m3Var.f28368r) && Objects.equals(this.f28369s, m3Var.f28369s) && Objects.equals(this.f28370t, m3Var.f28370t) && Objects.equals(this.f28373w, m3Var.f28373w) && Objects.equals(this.f28375y, m3Var.f28375y) && Objects.equals(this.f28374x, m3Var.f28374x)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f28362d, this.f28363e, this.f28364i, this.f28365o, this.f28366p, this.f28367q, this.f28368r, this.f28369s, this.f28370t, this.f28373w, this.f28374x, this.f28375y);
    }

    public io.sentry.protocol.x n() {
        return this.f28364i;
    }

    public io.sentry.protocol.d o() {
        return this.f28362d;
    }

    public String p() {
        return this.f28367q;
    }

    public File q() {
        return this.f28372v;
    }

    public void r(io.sentry.protocol.d dVar) {
        this.f28362d = dVar;
    }

    public void s(String str) {
        this.f28373w = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28362d != null) {
            f3Var.e("debug_meta").j(iLogger, this.f28362d);
        }
        f3Var.e("profiler_id").j(iLogger, this.f28363e);
        f3Var.e("chunk_id").j(iLogger, this.f28364i);
        if (this.f28365o != null) {
            f3Var.e("client_sdk").j(iLogger, this.f28365o);
        }
        if (!this.f28366p.isEmpty()) {
            String a10 = f3Var.a();
            f3Var.h("");
            f3Var.e("measurements").j(iLogger, this.f28366p);
            f3Var.h(a10);
        }
        f3Var.e("platform").j(iLogger, this.f28367q);
        f3Var.e("release").j(iLogger, this.f28368r);
        if (this.f28369s != null) {
            f3Var.e("environment").j(iLogger, this.f28369s);
        }
        f3Var.e("version").j(iLogger, this.f28370t);
        if (this.f28373w != null) {
            f3Var.e("sampled_profile").j(iLogger, this.f28373w);
        }
        f3Var.e("timestamp").j(iLogger, m(Double.valueOf(this.f28371u)));
        if (this.f28374x != null) {
            f3Var.e("profile").j(iLogger, this.f28374x);
        }
        Map map = this.f28375y;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28375y.get(str));
            }
        }
        f3Var.D();
    }

    public void t(io.sentry.protocol.profiling.a aVar) {
        this.f28374x = aVar;
    }

    public void u(Map map) {
        this.f28375y = map;
    }

    public m3(io.sentry.protocol.x xVar, io.sentry.protocol.x xVar2, File file, Map map, Double d10, String str, k7 k7Var) {
        this.f28373w = null;
        this.f28363e = xVar;
        this.f28364i = xVar2;
        this.f28372v = file;
        this.f28366p = map;
        this.f28362d = null;
        this.f28365o = k7Var.getSdkVersion();
        this.f28368r = k7Var.getRelease() != null ? k7Var.getRelease() : "";
        this.f28369s = k7Var.getEnvironment();
        this.f28367q = str;
        this.f28370t = "2";
        this.f28371u = d10.doubleValue();
    }
}
