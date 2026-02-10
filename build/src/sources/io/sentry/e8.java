package io.sentry;

import io.sentry.j8;
import io.sentry.l8;
import io.sentry.protocol.x;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e8 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.protocol.x f29289d;

    /* renamed from: e  reason: collision with root package name */
    private final j8 f29290e;

    /* renamed from: i  reason: collision with root package name */
    private j8 f29291i;

    /* renamed from: o  reason: collision with root package name */
    private transient s8 f29292o;

    /* renamed from: p  reason: collision with root package name */
    protected String f29293p;

    /* renamed from: q  reason: collision with root package name */
    protected String f29294q;

    /* renamed from: r  reason: collision with root package name */
    protected l8 f29295r;

    /* renamed from: s  reason: collision with root package name */
    protected Map f29296s;

    /* renamed from: t  reason: collision with root package name */
    protected String f29297t;

    /* renamed from: u  reason: collision with root package name */
    protected Map f29298u;

    /* renamed from: v  reason: collision with root package name */
    private Map f29299v;

    /* renamed from: w  reason: collision with root package name */
    private j1 f29300w;

    /* renamed from: x  reason: collision with root package name */
    protected d f29301x;

    /* renamed from: y  reason: collision with root package name */
    protected io.sentry.featureflags.b f29302y;

    /* renamed from: z  reason: collision with root package name */
    private io.sentry.protocol.x f29303z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public e8 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
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
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -2011840976:
                        if (o02.equals("span_id")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1757797477:
                        if (o02.equals("parent_span_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1724546052:
                        if (o02.equals("description")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1008619738:
                        if (o02.equals("origin")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -892481550:
                        if (o02.equals("status")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 3553:
                        if (o02.equals("op")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 3076010:
                        if (o02.equals("data")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 3552281:
                        if (o02.equals("tags")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1270300245:
                        if (o02.equals("trace_id")) {
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
                        j8Var2 = (j8) e3Var.I0(iLogger, new j8.a());
                        break;
                    case 2:
                        str2 = e3Var.g1();
                        break;
                    case 3:
                        str3 = e3Var.g1();
                        break;
                    case 4:
                        l8Var = (l8) e3Var.I0(iLogger, new l8.a());
                        break;
                    case 5:
                        str = e3Var.g1();
                        break;
                    case 6:
                        map2 = (Map) e3Var.Z1();
                        break;
                    case 7:
                        map = io.sentry.util.c.b((Map) e3Var.Z1());
                        break;
                    case '\b':
                        xVar = new x.a().a(e3Var, iLogger);
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
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
                        e8Var.f29296s = map;
                    }
                    if (map2 != null) {
                        e8Var.f29298u = map2;
                    }
                    e8Var.w(concurrentHashMap);
                    e3Var.D();
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
        io.sentry.protocol.x xVar = this.f29289d;
        if (j8Var2 == null) {
            j8Var2 = new j8();
        }
        return new e8(xVar, j8Var2, j8Var, str, null, this.f29292o, null, "manual");
    }

    public d b() {
        return this.f29301x;
    }

    public String c() {
        return this.f29294q;
    }

    public io.sentry.featureflags.b d() {
        return this.f29302y;
    }

    public j1 e() {
        return this.f29300w;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e8)) {
            return false;
        }
        e8 e8Var = (e8) obj;
        if (this.f29289d.equals(e8Var.f29289d) && this.f29290e.equals(e8Var.f29290e) && io.sentry.util.y.a(this.f29291i, e8Var.f29291i) && this.f29293p.equals(e8Var.f29293p) && io.sentry.util.y.a(this.f29294q, e8Var.f29294q) && n() == e8Var.n()) {
            return true;
        }
        return false;
    }

    public String f() {
        return this.f29293p;
    }

    public String g() {
        return this.f29297t;
    }

    public j8 h() {
        return this.f29291i;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29289d, this.f29290e, this.f29291i, this.f29293p, this.f29294q, n());
    }

    public Boolean i() {
        s8 s8Var = this.f29292o;
        if (s8Var == null) {
            return null;
        }
        return s8Var.b();
    }

    public io.sentry.protocol.x j() {
        return this.f29303z;
    }

    public Boolean k() {
        s8 s8Var = this.f29292o;
        if (s8Var == null) {
            return null;
        }
        return s8Var.e();
    }

    public s8 l() {
        return this.f29292o;
    }

    public j8 m() {
        return this.f29290e;
    }

    public l8 n() {
        return this.f29295r;
    }

    public Map o() {
        return this.f29296s;
    }

    public io.sentry.protocol.x p() {
        return this.f29289d;
    }

    public void q(String str, Object obj) {
        if (str == null) {
            return;
        }
        if (obj == null) {
            this.f29298u.remove(str);
        } else {
            this.f29298u.put(str, obj);
        }
    }

    public void r(String str) {
        this.f29294q = str;
    }

    public void s(j1 j1Var) {
        this.f29300w = j1Var;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("trace_id");
        this.f29289d.serialize(f3Var, iLogger);
        f3Var.e("span_id");
        this.f29290e.serialize(f3Var, iLogger);
        if (this.f29291i != null) {
            f3Var.e("parent_span_id");
            this.f29291i.serialize(f3Var, iLogger);
        }
        f3Var.e("op").f(this.f29293p);
        if (this.f29294q != null) {
            f3Var.e("description").f(this.f29294q);
        }
        if (n() != null) {
            f3Var.e("status").j(iLogger, n());
        }
        if (this.f29297t != null) {
            f3Var.e("origin").j(iLogger, this.f29297t);
        }
        if (!this.f29296s.isEmpty()) {
            f3Var.e("tags").j(iLogger, this.f29296s);
        }
        if (!this.f29298u.isEmpty()) {
            f3Var.e("data").j(iLogger, this.f29298u);
        }
        Map map = this.f29299v;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29299v.get(str));
            }
        }
        f3Var.D();
    }

    public void t(String str) {
        this.f29297t = str;
    }

    public void u(s8 s8Var) {
        this.f29292o = s8Var;
        d dVar = this.f29301x;
        if (dVar != null) {
            dVar.G(s8Var);
        }
    }

    public void v(l8 l8Var) {
        this.f29295r = l8Var;
    }

    public void w(Map map) {
        this.f29299v = map;
    }

    public e8(io.sentry.protocol.x xVar, j8 j8Var, String str, j8 j8Var2, s8 s8Var) {
        this(xVar, j8Var, j8Var2, str, null, s8Var, null, "manual");
    }

    public e8(io.sentry.protocol.x xVar, j8 j8Var, j8 j8Var2, String str, String str2, s8 s8Var, l8 l8Var, String str3) {
        this.f29296s = new ConcurrentHashMap();
        this.f29297t = "manual";
        this.f29298u = new ConcurrentHashMap();
        this.f29300w = j1.SENTRY;
        this.f29302y = io.sentry.featureflags.d.a();
        this.f29303z = io.sentry.protocol.x.f29798e;
        this.f29289d = (io.sentry.protocol.x) io.sentry.util.y.c(xVar, "traceId is required");
        this.f29290e = (j8) io.sentry.util.y.c(j8Var, "spanId is required");
        this.f29293p = (String) io.sentry.util.y.c(str, "operation is required");
        this.f29291i = j8Var2;
        this.f29294q = str2;
        this.f29295r = l8Var;
        this.f29297t = str3;
        u(s8Var);
        io.sentry.util.thread.a threadChecker = l4.f().b().getThreadChecker();
        this.f29298u.put("thread.id", String.valueOf(threadChecker.c()));
        this.f29298u.put("thread.name", threadChecker.b());
    }

    public e8(e8 e8Var) {
        this.f29296s = new ConcurrentHashMap();
        this.f29297t = "manual";
        this.f29298u = new ConcurrentHashMap();
        this.f29300w = j1.SENTRY;
        this.f29302y = io.sentry.featureflags.d.a();
        this.f29303z = io.sentry.protocol.x.f29798e;
        this.f29289d = e8Var.f29289d;
        this.f29290e = e8Var.f29290e;
        this.f29291i = e8Var.f29291i;
        u(e8Var.f29292o);
        this.f29293p = e8Var.f29293p;
        this.f29294q = e8Var.f29294q;
        this.f29295r = e8Var.f29295r;
        Map b10 = io.sentry.util.c.b(e8Var.f29296s);
        if (b10 != null) {
            this.f29296s = b10;
        }
        Map b11 = io.sentry.util.c.b(e8Var.f29299v);
        if (b11 != null) {
            this.f29299v = b11;
        }
        this.f29301x = e8Var.f29301x;
        Map b12 = io.sentry.util.c.b(e8Var.f29298u);
        if (b12 != null) {
            this.f29298u = b12;
        }
    }
}
