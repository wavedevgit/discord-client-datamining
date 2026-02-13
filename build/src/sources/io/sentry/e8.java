package io.sentry;

import io.sentry.j8;
import io.sentry.l8;
import io.sentry.protocol.x;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e8 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.protocol.x f29858d;

    /* renamed from: e  reason: collision with root package name */
    private final j8 f29859e;

    /* renamed from: i  reason: collision with root package name */
    private j8 f29860i;

    /* renamed from: o  reason: collision with root package name */
    private transient s8 f29861o;

    /* renamed from: p  reason: collision with root package name */
    protected String f29862p;

    /* renamed from: q  reason: collision with root package name */
    protected String f29863q;

    /* renamed from: r  reason: collision with root package name */
    protected l8 f29864r;

    /* renamed from: s  reason: collision with root package name */
    protected Map f29865s;

    /* renamed from: t  reason: collision with root package name */
    protected String f29866t;

    /* renamed from: u  reason: collision with root package name */
    protected Map f29867u;

    /* renamed from: v  reason: collision with root package name */
    private Map f29868v;

    /* renamed from: w  reason: collision with root package name */
    private j1 f29869w;

    /* renamed from: x  reason: collision with root package name */
    protected d f29870x;

    /* renamed from: y  reason: collision with root package name */
    protected io.sentry.featureflags.b f29871y;

    /* renamed from: z  reason: collision with root package name */
    private io.sentry.protocol.x f29872z;

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
                        e8Var.f29865s = map;
                    }
                    if (map2 != null) {
                        e8Var.f29867u = map2;
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
        io.sentry.protocol.x xVar = this.f29858d;
        if (j8Var2 == null) {
            j8Var2 = new j8();
        }
        return new e8(xVar, j8Var2, j8Var, str, null, this.f29861o, null, "manual");
    }

    public d b() {
        return this.f29870x;
    }

    public String c() {
        return this.f29863q;
    }

    public io.sentry.featureflags.b d() {
        return this.f29871y;
    }

    public j1 e() {
        return this.f29869w;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e8)) {
            return false;
        }
        e8 e8Var = (e8) obj;
        if (this.f29858d.equals(e8Var.f29858d) && this.f29859e.equals(e8Var.f29859e) && io.sentry.util.y.a(this.f29860i, e8Var.f29860i) && this.f29862p.equals(e8Var.f29862p) && io.sentry.util.y.a(this.f29863q, e8Var.f29863q) && n() == e8Var.n()) {
            return true;
        }
        return false;
    }

    public String f() {
        return this.f29862p;
    }

    public String g() {
        return this.f29866t;
    }

    public j8 h() {
        return this.f29860i;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29858d, this.f29859e, this.f29860i, this.f29862p, this.f29863q, n());
    }

    public Boolean i() {
        s8 s8Var = this.f29861o;
        if (s8Var == null) {
            return null;
        }
        return s8Var.b();
    }

    public io.sentry.protocol.x j() {
        return this.f29872z;
    }

    public Boolean k() {
        s8 s8Var = this.f29861o;
        if (s8Var == null) {
            return null;
        }
        return s8Var.e();
    }

    public s8 l() {
        return this.f29861o;
    }

    public j8 m() {
        return this.f29859e;
    }

    public l8 n() {
        return this.f29864r;
    }

    public Map o() {
        return this.f29865s;
    }

    public io.sentry.protocol.x p() {
        return this.f29858d;
    }

    public void q(String str, Object obj) {
        if (str == null) {
            return;
        }
        if (obj == null) {
            this.f29867u.remove(str);
        } else {
            this.f29867u.put(str, obj);
        }
    }

    public void r(String str) {
        this.f29863q = str;
    }

    public void s(j1 j1Var) {
        this.f29869w = j1Var;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("trace_id");
        this.f29858d.serialize(f3Var, iLogger);
        f3Var.e("span_id");
        this.f29859e.serialize(f3Var, iLogger);
        if (this.f29860i != null) {
            f3Var.e("parent_span_id");
            this.f29860i.serialize(f3Var, iLogger);
        }
        f3Var.e("op").f(this.f29862p);
        if (this.f29863q != null) {
            f3Var.e("description").f(this.f29863q);
        }
        if (n() != null) {
            f3Var.e("status").j(iLogger, n());
        }
        if (this.f29866t != null) {
            f3Var.e("origin").j(iLogger, this.f29866t);
        }
        if (!this.f29865s.isEmpty()) {
            f3Var.e("tags").j(iLogger, this.f29865s);
        }
        if (!this.f29867u.isEmpty()) {
            f3Var.e("data").j(iLogger, this.f29867u);
        }
        Map map = this.f29868v;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29868v.get(str));
            }
        }
        f3Var.D();
    }

    public void t(String str) {
        this.f29866t = str;
    }

    public void u(s8 s8Var) {
        this.f29861o = s8Var;
        d dVar = this.f29870x;
        if (dVar != null) {
            dVar.G(s8Var);
        }
    }

    public void v(l8 l8Var) {
        this.f29864r = l8Var;
    }

    public void w(Map map) {
        this.f29868v = map;
    }

    public e8(io.sentry.protocol.x xVar, j8 j8Var, String str, j8 j8Var2, s8 s8Var) {
        this(xVar, j8Var, j8Var2, str, null, s8Var, null, "manual");
    }

    public e8(io.sentry.protocol.x xVar, j8 j8Var, j8 j8Var2, String str, String str2, s8 s8Var, l8 l8Var, String str3) {
        this.f29865s = new ConcurrentHashMap();
        this.f29866t = "manual";
        this.f29867u = new ConcurrentHashMap();
        this.f29869w = j1.SENTRY;
        this.f29871y = io.sentry.featureflags.d.a();
        this.f29872z = io.sentry.protocol.x.f30367e;
        this.f29858d = (io.sentry.protocol.x) io.sentry.util.y.c(xVar, "traceId is required");
        this.f29859e = (j8) io.sentry.util.y.c(j8Var, "spanId is required");
        this.f29862p = (String) io.sentry.util.y.c(str, "operation is required");
        this.f29860i = j8Var2;
        this.f29863q = str2;
        this.f29864r = l8Var;
        this.f29866t = str3;
        u(s8Var);
        io.sentry.util.thread.a threadChecker = l4.f().b().getThreadChecker();
        this.f29867u.put("thread.id", String.valueOf(threadChecker.c()));
        this.f29867u.put("thread.name", threadChecker.b());
    }

    public e8(e8 e8Var) {
        this.f29865s = new ConcurrentHashMap();
        this.f29866t = "manual";
        this.f29867u = new ConcurrentHashMap();
        this.f29869w = j1.SENTRY;
        this.f29871y = io.sentry.featureflags.d.a();
        this.f29872z = io.sentry.protocol.x.f30367e;
        this.f29858d = e8Var.f29858d;
        this.f29859e = e8Var.f29859e;
        this.f29860i = e8Var.f29860i;
        u(e8Var.f29861o);
        this.f29862p = e8Var.f29862p;
        this.f29863q = e8Var.f29863q;
        this.f29864r = e8Var.f29864r;
        Map b10 = io.sentry.util.c.b(e8Var.f29865s);
        if (b10 != null) {
            this.f29865s = b10;
        }
        Map b11 = io.sentry.util.c.b(e8Var.f29868v);
        if (b11 != null) {
            this.f29868v = b11;
        }
        this.f29870x = e8Var.f29870x;
        Map b12 = io.sentry.util.c.b(e8Var.f29867u);
        if (b12 != null) {
            this.f29867u = b12;
        }
    }
}
