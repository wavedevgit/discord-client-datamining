package io.sentry;

import io.sentry.j8;
import io.sentry.l8;
import io.sentry.protocol.x;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e8 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.protocol.x f29904d;

    /* renamed from: e  reason: collision with root package name */
    private final j8 f29905e;

    /* renamed from: i  reason: collision with root package name */
    private j8 f29906i;

    /* renamed from: o  reason: collision with root package name */
    private transient s8 f29907o;

    /* renamed from: p  reason: collision with root package name */
    protected String f29908p;

    /* renamed from: q  reason: collision with root package name */
    protected String f29909q;

    /* renamed from: r  reason: collision with root package name */
    protected l8 f29910r;

    /* renamed from: s  reason: collision with root package name */
    protected Map f29911s;

    /* renamed from: t  reason: collision with root package name */
    protected String f29912t;

    /* renamed from: u  reason: collision with root package name */
    protected Map f29913u;

    /* renamed from: v  reason: collision with root package name */
    private Map f29914v;

    /* renamed from: w  reason: collision with root package name */
    private j1 f29915w;

    /* renamed from: x  reason: collision with root package name */
    protected d f29916x;

    /* renamed from: y  reason: collision with root package name */
    protected io.sentry.featureflags.b f29917y;

    /* renamed from: z  reason: collision with root package name */
    private io.sentry.protocol.x f29918z;

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
                        str2 = e3Var.f1();
                        break;
                    case 3:
                        str3 = e3Var.f1();
                        break;
                    case 4:
                        l8Var = (l8) e3Var.G0(iLogger, new l8.a());
                        break;
                    case 5:
                        str = e3Var.f1();
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
                        e8Var.f29911s = map;
                    }
                    if (map2 != null) {
                        e8Var.f29913u = map2;
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
        io.sentry.protocol.x xVar = this.f29904d;
        if (j8Var2 == null) {
            j8Var2 = new j8();
        }
        return new e8(xVar, j8Var2, j8Var, str, null, this.f29907o, null, "manual");
    }

    public d b() {
        return this.f29916x;
    }

    public String c() {
        return this.f29909q;
    }

    public io.sentry.featureflags.b d() {
        return this.f29917y;
    }

    public j1 e() {
        return this.f29915w;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e8)) {
            return false;
        }
        e8 e8Var = (e8) obj;
        if (this.f29904d.equals(e8Var.f29904d) && this.f29905e.equals(e8Var.f29905e) && io.sentry.util.y.a(this.f29906i, e8Var.f29906i) && this.f29908p.equals(e8Var.f29908p) && io.sentry.util.y.a(this.f29909q, e8Var.f29909q) && n() == e8Var.n()) {
            return true;
        }
        return false;
    }

    public String f() {
        return this.f29908p;
    }

    public String g() {
        return this.f29912t;
    }

    public j8 h() {
        return this.f29906i;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29904d, this.f29905e, this.f29906i, this.f29908p, this.f29909q, n());
    }

    public Boolean i() {
        s8 s8Var = this.f29907o;
        if (s8Var == null) {
            return null;
        }
        return s8Var.b();
    }

    public io.sentry.protocol.x j() {
        return this.f29918z;
    }

    public Boolean k() {
        s8 s8Var = this.f29907o;
        if (s8Var == null) {
            return null;
        }
        return s8Var.e();
    }

    public s8 l() {
        return this.f29907o;
    }

    public j8 m() {
        return this.f29905e;
    }

    public l8 n() {
        return this.f29910r;
    }

    public Map o() {
        return this.f29911s;
    }

    public io.sentry.protocol.x p() {
        return this.f29904d;
    }

    public void q(String str, Object obj) {
        if (str == null) {
            return;
        }
        if (obj == null) {
            this.f29913u.remove(str);
        } else {
            this.f29913u.put(str, obj);
        }
    }

    public void r(String str) {
        this.f29909q = str;
    }

    public void s(j1 j1Var) {
        this.f29915w = j1Var;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("trace_id");
        this.f29904d.serialize(f3Var, iLogger);
        f3Var.e("span_id");
        this.f29905e.serialize(f3Var, iLogger);
        if (this.f29906i != null) {
            f3Var.e("parent_span_id");
            this.f29906i.serialize(f3Var, iLogger);
        }
        f3Var.e("op").f(this.f29908p);
        if (this.f29909q != null) {
            f3Var.e("description").f(this.f29909q);
        }
        if (n() != null) {
            f3Var.e("status").j(iLogger, n());
        }
        if (this.f29912t != null) {
            f3Var.e("origin").j(iLogger, this.f29912t);
        }
        if (!this.f29911s.isEmpty()) {
            f3Var.e("tags").j(iLogger, this.f29911s);
        }
        if (!this.f29913u.isEmpty()) {
            f3Var.e("data").j(iLogger, this.f29913u);
        }
        Map map = this.f29914v;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29914v.get(str));
            }
        }
        f3Var.y();
    }

    public void t(String str) {
        this.f29912t = str;
    }

    public void u(s8 s8Var) {
        this.f29907o = s8Var;
        d dVar = this.f29916x;
        if (dVar != null) {
            dVar.G(s8Var);
        }
    }

    public void v(l8 l8Var) {
        this.f29910r = l8Var;
    }

    public void w(Map map) {
        this.f29914v = map;
    }

    public e8(io.sentry.protocol.x xVar, j8 j8Var, String str, j8 j8Var2, s8 s8Var) {
        this(xVar, j8Var, j8Var2, str, null, s8Var, null, "manual");
    }

    public e8(io.sentry.protocol.x xVar, j8 j8Var, j8 j8Var2, String str, String str2, s8 s8Var, l8 l8Var, String str3) {
        this.f29911s = new ConcurrentHashMap();
        this.f29912t = "manual";
        this.f29913u = new ConcurrentHashMap();
        this.f29915w = j1.SENTRY;
        this.f29917y = io.sentry.featureflags.d.a();
        this.f29918z = io.sentry.protocol.x.f30413e;
        this.f29904d = (io.sentry.protocol.x) io.sentry.util.y.c(xVar, "traceId is required");
        this.f29905e = (j8) io.sentry.util.y.c(j8Var, "spanId is required");
        this.f29908p = (String) io.sentry.util.y.c(str, "operation is required");
        this.f29906i = j8Var2;
        this.f29909q = str2;
        this.f29910r = l8Var;
        this.f29912t = str3;
        u(s8Var);
        io.sentry.util.thread.a threadChecker = l4.h().b().getThreadChecker();
        this.f29913u.put("thread.id", String.valueOf(threadChecker.c()));
        this.f29913u.put("thread.name", threadChecker.b());
    }

    public e8(e8 e8Var) {
        this.f29911s = new ConcurrentHashMap();
        this.f29912t = "manual";
        this.f29913u = new ConcurrentHashMap();
        this.f29915w = j1.SENTRY;
        this.f29917y = io.sentry.featureflags.d.a();
        this.f29918z = io.sentry.protocol.x.f30413e;
        this.f29904d = e8Var.f29904d;
        this.f29905e = e8Var.f29905e;
        this.f29906i = e8Var.f29906i;
        u(e8Var.f29907o);
        this.f29908p = e8Var.f29908p;
        this.f29909q = e8Var.f29909q;
        this.f29910r = e8Var.f29910r;
        Map b10 = io.sentry.util.c.b(e8Var.f29911s);
        if (b10 != null) {
            this.f29911s = b10;
        }
        Map b11 = io.sentry.util.c.b(e8Var.f29914v);
        if (b11 != null) {
            this.f29914v = b11;
        }
        this.f29916x = e8Var.f29916x;
        Map b12 = io.sentry.util.c.b(e8Var.f29913u);
        if (b12 != null) {
            this.f29913u = b12;
        }
    }
}
