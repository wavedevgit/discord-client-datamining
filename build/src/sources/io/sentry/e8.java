package io.sentry;

import io.sentry.j8;
import io.sentry.l8;
import io.sentry.protocol.x;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e8 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.protocol.x f28154d;

    /* renamed from: e  reason: collision with root package name */
    private final j8 f28155e;

    /* renamed from: i  reason: collision with root package name */
    private j8 f28156i;

    /* renamed from: o  reason: collision with root package name */
    private transient s8 f28157o;

    /* renamed from: p  reason: collision with root package name */
    protected String f28158p;

    /* renamed from: q  reason: collision with root package name */
    protected String f28159q;

    /* renamed from: r  reason: collision with root package name */
    protected l8 f28160r;

    /* renamed from: s  reason: collision with root package name */
    protected Map f28161s;

    /* renamed from: t  reason: collision with root package name */
    protected String f28162t;

    /* renamed from: u  reason: collision with root package name */
    protected Map f28163u;

    /* renamed from: v  reason: collision with root package name */
    private Map f28164v;

    /* renamed from: w  reason: collision with root package name */
    private j1 f28165w;

    /* renamed from: x  reason: collision with root package name */
    protected d f28166x;

    /* renamed from: y  reason: collision with root package name */
    protected io.sentry.featureflags.b f28167y;

    /* renamed from: z  reason: collision with root package name */
    private io.sentry.protocol.x f28168z;

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
                        map2 = (Map) e3Var.U1();
                        break;
                    case 7:
                        map = io.sentry.util.c.b((Map) e3Var.U1());
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
                        e8Var.f28161s = map;
                    }
                    if (map2 != null) {
                        e8Var.f28163u = map2;
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
        io.sentry.protocol.x xVar = this.f28154d;
        if (j8Var2 == null) {
            j8Var2 = new j8();
        }
        return new e8(xVar, j8Var2, j8Var, str, null, this.f28157o, null, "manual");
    }

    public d b() {
        return this.f28166x;
    }

    public String c() {
        return this.f28159q;
    }

    public io.sentry.featureflags.b d() {
        return this.f28167y;
    }

    public j1 e() {
        return this.f28165w;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e8)) {
            return false;
        }
        e8 e8Var = (e8) obj;
        if (this.f28154d.equals(e8Var.f28154d) && this.f28155e.equals(e8Var.f28155e) && io.sentry.util.y.a(this.f28156i, e8Var.f28156i) && this.f28158p.equals(e8Var.f28158p) && io.sentry.util.y.a(this.f28159q, e8Var.f28159q) && n() == e8Var.n()) {
            return true;
        }
        return false;
    }

    public String f() {
        return this.f28158p;
    }

    public String g() {
        return this.f28162t;
    }

    public j8 h() {
        return this.f28156i;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28154d, this.f28155e, this.f28156i, this.f28158p, this.f28159q, n());
    }

    public Boolean i() {
        s8 s8Var = this.f28157o;
        if (s8Var == null) {
            return null;
        }
        return s8Var.b();
    }

    public io.sentry.protocol.x j() {
        return this.f28168z;
    }

    public Boolean k() {
        s8 s8Var = this.f28157o;
        if (s8Var == null) {
            return null;
        }
        return s8Var.e();
    }

    public s8 l() {
        return this.f28157o;
    }

    public j8 m() {
        return this.f28155e;
    }

    public l8 n() {
        return this.f28160r;
    }

    public Map o() {
        return this.f28161s;
    }

    public io.sentry.protocol.x p() {
        return this.f28154d;
    }

    public void q(String str, Object obj) {
        if (str == null) {
            return;
        }
        if (obj == null) {
            this.f28163u.remove(str);
        } else {
            this.f28163u.put(str, obj);
        }
    }

    public void r(String str) {
        this.f28159q = str;
    }

    public void s(j1 j1Var) {
        this.f28165w = j1Var;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("trace_id");
        this.f28154d.serialize(f3Var, iLogger);
        f3Var.e("span_id");
        this.f28155e.serialize(f3Var, iLogger);
        if (this.f28156i != null) {
            f3Var.e("parent_span_id");
            this.f28156i.serialize(f3Var, iLogger);
        }
        f3Var.e("op").f(this.f28158p);
        if (this.f28159q != null) {
            f3Var.e("description").f(this.f28159q);
        }
        if (n() != null) {
            f3Var.e("status").j(iLogger, n());
        }
        if (this.f28162t != null) {
            f3Var.e("origin").j(iLogger, this.f28162t);
        }
        if (!this.f28161s.isEmpty()) {
            f3Var.e("tags").j(iLogger, this.f28161s);
        }
        if (!this.f28163u.isEmpty()) {
            f3Var.e("data").j(iLogger, this.f28163u);
        }
        Map map = this.f28164v;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28164v.get(str));
            }
        }
        f3Var.D();
    }

    public void t(String str) {
        this.f28162t = str;
    }

    public void u(s8 s8Var) {
        this.f28157o = s8Var;
        d dVar = this.f28166x;
        if (dVar != null) {
            dVar.G(s8Var);
        }
    }

    public void v(l8 l8Var) {
        this.f28160r = l8Var;
    }

    public void w(Map map) {
        this.f28164v = map;
    }

    public e8(io.sentry.protocol.x xVar, j8 j8Var, String str, j8 j8Var2, s8 s8Var) {
        this(xVar, j8Var, j8Var2, str, null, s8Var, null, "manual");
    }

    public e8(io.sentry.protocol.x xVar, j8 j8Var, j8 j8Var2, String str, String str2, s8 s8Var, l8 l8Var, String str3) {
        this.f28161s = new ConcurrentHashMap();
        this.f28162t = "manual";
        this.f28163u = new ConcurrentHashMap();
        this.f28165w = j1.SENTRY;
        this.f28167y = io.sentry.featureflags.d.a();
        this.f28168z = io.sentry.protocol.x.f28663e;
        this.f28154d = (io.sentry.protocol.x) io.sentry.util.y.c(xVar, "traceId is required");
        this.f28155e = (j8) io.sentry.util.y.c(j8Var, "spanId is required");
        this.f28158p = (String) io.sentry.util.y.c(str, "operation is required");
        this.f28156i = j8Var2;
        this.f28159q = str2;
        this.f28160r = l8Var;
        this.f28162t = str3;
        u(s8Var);
        io.sentry.util.thread.a threadChecker = l4.g().b().getThreadChecker();
        this.f28163u.put("thread.id", String.valueOf(threadChecker.c()));
        this.f28163u.put("thread.name", threadChecker.b());
    }

    public e8(e8 e8Var) {
        this.f28161s = new ConcurrentHashMap();
        this.f28162t = "manual";
        this.f28163u = new ConcurrentHashMap();
        this.f28165w = j1.SENTRY;
        this.f28167y = io.sentry.featureflags.d.a();
        this.f28168z = io.sentry.protocol.x.f28663e;
        this.f28154d = e8Var.f28154d;
        this.f28155e = e8Var.f28155e;
        this.f28156i = e8Var.f28156i;
        u(e8Var.f28157o);
        this.f28158p = e8Var.f28158p;
        this.f28159q = e8Var.f28159q;
        this.f28160r = e8Var.f28160r;
        Map b10 = io.sentry.util.c.b(e8Var.f28161s);
        if (b10 != null) {
            this.f28161s = b10;
        }
        Map b11 = io.sentry.util.c.b(e8Var.f28164v);
        if (b11 != null) {
            this.f28164v = b11;
        }
        this.f28166x = e8Var.f28166x;
        Map b12 = io.sentry.util.c.b(e8Var.f28163u);
        if (b12 != null) {
            this.f28163u = b12;
        }
    }
}
