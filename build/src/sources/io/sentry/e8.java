package io.sentry;

import io.sentry.j8;
import io.sentry.l8;
import io.sentry.protocol.x;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e8 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.protocol.x f29961d;

    /* renamed from: e  reason: collision with root package name */
    private final j8 f29962e;

    /* renamed from: i  reason: collision with root package name */
    private j8 f29963i;

    /* renamed from: o  reason: collision with root package name */
    private transient s8 f29964o;

    /* renamed from: p  reason: collision with root package name */
    protected String f29965p;

    /* renamed from: q  reason: collision with root package name */
    protected String f29966q;

    /* renamed from: r  reason: collision with root package name */
    protected l8 f29967r;

    /* renamed from: s  reason: collision with root package name */
    protected Map f29968s;

    /* renamed from: t  reason: collision with root package name */
    protected String f29969t;

    /* renamed from: u  reason: collision with root package name */
    protected Map f29970u;

    /* renamed from: v  reason: collision with root package name */
    private Map f29971v;

    /* renamed from: w  reason: collision with root package name */
    private j1 f29972w;

    /* renamed from: x  reason: collision with root package name */
    protected d f29973x;

    /* renamed from: y  reason: collision with root package name */
    protected io.sentry.featureflags.b f29974y;

    /* renamed from: z  reason: collision with root package name */
    private io.sentry.protocol.x f29975z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public e8 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            String str = null;
            io.sentry.protocol.x xVar = null;
            j8 j8Var = null;
            j8 j8Var2 = null;
            ConcurrentHashMap concurrentHashMap = null;
            String str2 = null;
            l8 l8Var = null;
            String str3 = null;
            Map map = null;
            Map map2 = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -2011840976:
                        if (l02.equals("span_id")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1757797477:
                        if (l02.equals("parent_span_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1724546052:
                        if (l02.equals("description")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1008619738:
                        if (l02.equals("origin")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -892481550:
                        if (l02.equals("status")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 3553:
                        if (l02.equals("op")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 3076010:
                        if (l02.equals("data")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 3552281:
                        if (l02.equals("tags")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1270300245:
                        if (l02.equals("trace_id")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        j8Var = new j8.a().a(e3Var, iLogger);
                        break;
                    case 1:
                        j8Var2 = (j8) e3Var.G0(iLogger, new j8.a());
                        break;
                    case 2:
                        str2 = e3Var.e1();
                        break;
                    case 3:
                        str3 = e3Var.e1();
                        break;
                    case 4:
                        l8Var = (l8) e3Var.G0(iLogger, new l8.a());
                        break;
                    case 5:
                        str = e3Var.e1();
                        break;
                    case 6:
                        map2 = (Map) e3Var.V1();
                        break;
                    case 7:
                        map = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case '\b':
                        xVar = new x.a().a(e3Var, iLogger);
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            if (xVar != null) {
                if (j8Var != null) {
                    if (str == null) {
                        str = "";
                    }
                    e8 e8Var = new e8(xVar, j8Var, str, j8Var2, null);
                    e8Var.r(str2);
                    e8Var.v(l8Var);
                    e8Var.t(str3);
                    if (map != null) {
                        e8Var.f29968s = map;
                    }
                    if (map2 != null) {
                        e8Var.f29970u = map2;
                    }
                    e8Var.w(concurrentHashMap);
                    e3Var.y();
                    return e8Var;
                }
                IllegalStateException illegalStateException = new IllegalStateException("Missing required field \"span_id\"");
                iLogger.b(SentryLevel.ERROR, "Missing required field \"span_id\"", illegalStateException);
                throw illegalStateException;
            }
            IllegalStateException illegalStateException2 = new IllegalStateException("Missing required field \"trace_id\"");
            iLogger.b(SentryLevel.ERROR, "Missing required field \"trace_id\"", illegalStateException2);
            throw illegalStateException2;
        }
    }

    public e8(String str) {
        this(new io.sentry.protocol.x(), new j8(), str, null, null);
    }

    public e8 a(String str, j8 j8Var, j8 j8Var2) {
        io.sentry.protocol.x xVar = this.f29961d;
        if (j8Var2 == null) {
            j8Var2 = new j8();
        }
        return new e8(xVar, j8Var2, j8Var, str, null, this.f29964o, null, "manual");
    }

    public d b() {
        return this.f29973x;
    }

    public String c() {
        return this.f29966q;
    }

    public io.sentry.featureflags.b d() {
        return this.f29974y;
    }

    public j1 e() {
        return this.f29972w;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e8)) {
            return false;
        }
        e8 e8Var = (e8) obj;
        if (this.f29961d.equals(e8Var.f29961d) && this.f29962e.equals(e8Var.f29962e) && io.sentry.util.y.a(this.f29963i, e8Var.f29963i) && this.f29965p.equals(e8Var.f29965p) && io.sentry.util.y.a(this.f29966q, e8Var.f29966q) && n() == e8Var.n()) {
            return true;
        }
        return false;
    }

    public String f() {
        return this.f29965p;
    }

    public String g() {
        return this.f29969t;
    }

    public j8 h() {
        return this.f29963i;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29961d, this.f29962e, this.f29963i, this.f29965p, this.f29966q, n());
    }

    public Boolean i() {
        s8 s8Var = this.f29964o;
        if (s8Var == null) {
            return null;
        }
        return s8Var.b();
    }

    public io.sentry.protocol.x j() {
        return this.f29975z;
    }

    public Boolean k() {
        s8 s8Var = this.f29964o;
        if (s8Var == null) {
            return null;
        }
        return s8Var.e();
    }

    public s8 l() {
        return this.f29964o;
    }

    public j8 m() {
        return this.f29962e;
    }

    public l8 n() {
        return this.f29967r;
    }

    public Map o() {
        return this.f29968s;
    }

    public io.sentry.protocol.x p() {
        return this.f29961d;
    }

    public void q(String str, Object obj) {
        if (str == null) {
            return;
        }
        if (obj == null) {
            this.f29970u.remove(str);
        } else {
            this.f29970u.put(str, obj);
        }
    }

    public void r(String str) {
        this.f29966q = str;
    }

    public void s(j1 j1Var) {
        this.f29972w = j1Var;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("trace_id");
        this.f29961d.serialize(f3Var, iLogger);
        f3Var.e("span_id");
        this.f29962e.serialize(f3Var, iLogger);
        if (this.f29963i != null) {
            f3Var.e("parent_span_id");
            this.f29963i.serialize(f3Var, iLogger);
        }
        f3Var.e("op").f(this.f29965p);
        if (this.f29966q != null) {
            f3Var.e("description").f(this.f29966q);
        }
        if (n() != null) {
            f3Var.e("status").j(iLogger, n());
        }
        if (this.f29969t != null) {
            f3Var.e("origin").j(iLogger, this.f29969t);
        }
        if (!this.f29968s.isEmpty()) {
            f3Var.e("tags").j(iLogger, this.f29968s);
        }
        if (!this.f29970u.isEmpty()) {
            f3Var.e("data").j(iLogger, this.f29970u);
        }
        Map map = this.f29971v;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29971v.get(str));
            }
        }
        f3Var.y();
    }

    public void t(String str) {
        this.f29969t = str;
    }

    public void u(s8 s8Var) {
        this.f29964o = s8Var;
        d dVar = this.f29973x;
        if (dVar != null) {
            dVar.G(s8Var);
        }
    }

    public void v(l8 l8Var) {
        this.f29967r = l8Var;
    }

    public void w(Map map) {
        this.f29971v = map;
    }

    public e8(io.sentry.protocol.x xVar, j8 j8Var, String str, j8 j8Var2, s8 s8Var) {
        this(xVar, j8Var, j8Var2, str, null, s8Var, null, "manual");
    }

    public e8(io.sentry.protocol.x xVar, j8 j8Var, j8 j8Var2, String str, String str2, s8 s8Var, l8 l8Var, String str3) {
        this.f29968s = new ConcurrentHashMap();
        this.f29969t = "manual";
        this.f29970u = new ConcurrentHashMap();
        this.f29972w = j1.SENTRY;
        this.f29974y = io.sentry.featureflags.d.a();
        this.f29975z = io.sentry.protocol.x.f30470e;
        this.f29961d = (io.sentry.protocol.x) io.sentry.util.y.c(xVar, "traceId is required");
        this.f29962e = (j8) io.sentry.util.y.c(j8Var, "spanId is required");
        this.f29965p = (String) io.sentry.util.y.c(str, "operation is required");
        this.f29963i = j8Var2;
        this.f29966q = str2;
        this.f29967r = l8Var;
        this.f29969t = str3;
        u(s8Var);
        io.sentry.util.thread.a threadChecker = l4.h().b().getThreadChecker();
        this.f29970u.put("thread.id", String.valueOf(threadChecker.c()));
        this.f29970u.put("thread.name", threadChecker.b());
    }

    public e8(e8 e8Var) {
        this.f29968s = new ConcurrentHashMap();
        this.f29969t = "manual";
        this.f29970u = new ConcurrentHashMap();
        this.f29972w = j1.SENTRY;
        this.f29974y = io.sentry.featureflags.d.a();
        this.f29975z = io.sentry.protocol.x.f30470e;
        this.f29961d = e8Var.f29961d;
        this.f29962e = e8Var.f29962e;
        this.f29963i = e8Var.f29963i;
        u(e8Var.f29964o);
        this.f29965p = e8Var.f29965p;
        this.f29966q = e8Var.f29966q;
        this.f29967r = e8Var.f29967r;
        Map b10 = io.sentry.util.c.b(e8Var.f29968s);
        if (b10 != null) {
            this.f29968s = b10;
        }
        Map b11 = io.sentry.util.c.b(e8Var.f29971v);
        if (b11 != null) {
            this.f29971v = b11;
        }
        this.f29973x = e8Var.f29973x;
        Map b12 = io.sentry.util.c.b(e8Var.f29970u);
        if (b12 != null) {
            this.f29970u = b12;
        }
    }
}
