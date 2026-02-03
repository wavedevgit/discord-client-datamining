package io.sentry;

import io.sentry.j8;
import io.sentry.l8;
import io.sentry.protocol.x;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e8 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.protocol.x f29543d;

    /* renamed from: e  reason: collision with root package name */
    private final j8 f29544e;

    /* renamed from: i  reason: collision with root package name */
    private j8 f29545i;

    /* renamed from: o  reason: collision with root package name */
    private transient s8 f29546o;

    /* renamed from: p  reason: collision with root package name */
    protected String f29547p;

    /* renamed from: q  reason: collision with root package name */
    protected String f29548q;

    /* renamed from: r  reason: collision with root package name */
    protected l8 f29549r;

    /* renamed from: s  reason: collision with root package name */
    protected Map f29550s;

    /* renamed from: t  reason: collision with root package name */
    protected String f29551t;

    /* renamed from: u  reason: collision with root package name */
    protected Map f29552u;

    /* renamed from: v  reason: collision with root package name */
    private Map f29553v;

    /* renamed from: w  reason: collision with root package name */
    private j1 f29554w;

    /* renamed from: x  reason: collision with root package name */
    protected d f29555x;

    /* renamed from: y  reason: collision with root package name */
    protected io.sentry.featureflags.b f29556y;

    /* renamed from: z  reason: collision with root package name */
    private io.sentry.protocol.x f29557z;

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
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -2011840976:
                        if (m02.equals("span_id")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1757797477:
                        if (m02.equals("parent_span_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1724546052:
                        if (m02.equals("description")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1008619738:
                        if (m02.equals("origin")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -892481550:
                        if (m02.equals("status")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 3553:
                        if (m02.equals("op")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 3076010:
                        if (m02.equals("data")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 3552281:
                        if (m02.equals("tags")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1270300245:
                        if (m02.equals("trace_id")) {
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
                        j8Var2 = (j8) e3Var.H0(iLogger, new j8.a());
                        break;
                    case 2:
                        str2 = e3Var.f1();
                        break;
                    case 3:
                        str3 = e3Var.f1();
                        break;
                    case 4:
                        l8Var = (l8) e3Var.H0(iLogger, new l8.a());
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
                        e3Var.v1(iLogger, concurrentHashMap, m02);
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
                        e8Var.f29550s = map;
                    }
                    if (map2 != null) {
                        e8Var.f29552u = map2;
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
        io.sentry.protocol.x xVar = this.f29543d;
        if (j8Var2 == null) {
            j8Var2 = new j8();
        }
        return new e8(xVar, j8Var2, j8Var, str, null, this.f29546o, null, "manual");
    }

    public d b() {
        return this.f29555x;
    }

    public String c() {
        return this.f29548q;
    }

    public io.sentry.featureflags.b d() {
        return this.f29556y;
    }

    public j1 e() {
        return this.f29554w;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e8)) {
            return false;
        }
        e8 e8Var = (e8) obj;
        if (this.f29543d.equals(e8Var.f29543d) && this.f29544e.equals(e8Var.f29544e) && io.sentry.util.y.a(this.f29545i, e8Var.f29545i) && this.f29547p.equals(e8Var.f29547p) && io.sentry.util.y.a(this.f29548q, e8Var.f29548q) && n() == e8Var.n()) {
            return true;
        }
        return false;
    }

    public String f() {
        return this.f29547p;
    }

    public String g() {
        return this.f29551t;
    }

    public j8 h() {
        return this.f29545i;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29543d, this.f29544e, this.f29545i, this.f29547p, this.f29548q, n());
    }

    public Boolean i() {
        s8 s8Var = this.f29546o;
        if (s8Var == null) {
            return null;
        }
        return s8Var.b();
    }

    public io.sentry.protocol.x j() {
        return this.f29557z;
    }

    public Boolean k() {
        s8 s8Var = this.f29546o;
        if (s8Var == null) {
            return null;
        }
        return s8Var.e();
    }

    public s8 l() {
        return this.f29546o;
    }

    public j8 m() {
        return this.f29544e;
    }

    public l8 n() {
        return this.f29549r;
    }

    public Map o() {
        return this.f29550s;
    }

    public io.sentry.protocol.x p() {
        return this.f29543d;
    }

    public void q(String str, Object obj) {
        if (str == null) {
            return;
        }
        if (obj == null) {
            this.f29552u.remove(str);
        } else {
            this.f29552u.put(str, obj);
        }
    }

    public void r(String str) {
        this.f29548q = str;
    }

    public void s(j1 j1Var) {
        this.f29554w = j1Var;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("trace_id");
        this.f29543d.serialize(f3Var, iLogger);
        f3Var.e("span_id");
        this.f29544e.serialize(f3Var, iLogger);
        if (this.f29545i != null) {
            f3Var.e("parent_span_id");
            this.f29545i.serialize(f3Var, iLogger);
        }
        f3Var.e("op").f(this.f29547p);
        if (this.f29548q != null) {
            f3Var.e("description").f(this.f29548q);
        }
        if (n() != null) {
            f3Var.e("status").j(iLogger, n());
        }
        if (this.f29551t != null) {
            f3Var.e("origin").j(iLogger, this.f29551t);
        }
        if (!this.f29550s.isEmpty()) {
            f3Var.e("tags").j(iLogger, this.f29550s);
        }
        if (!this.f29552u.isEmpty()) {
            f3Var.e("data").j(iLogger, this.f29552u);
        }
        Map map = this.f29553v;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29553v.get(str));
            }
        }
        f3Var.y();
    }

    public void t(String str) {
        this.f29551t = str;
    }

    public void u(s8 s8Var) {
        this.f29546o = s8Var;
        d dVar = this.f29555x;
        if (dVar != null) {
            dVar.G(s8Var);
        }
    }

    public void v(l8 l8Var) {
        this.f29549r = l8Var;
    }

    public void w(Map map) {
        this.f29553v = map;
    }

    public e8(io.sentry.protocol.x xVar, j8 j8Var, String str, j8 j8Var2, s8 s8Var) {
        this(xVar, j8Var, j8Var2, str, null, s8Var, null, "manual");
    }

    public e8(io.sentry.protocol.x xVar, j8 j8Var, j8 j8Var2, String str, String str2, s8 s8Var, l8 l8Var, String str3) {
        this.f29550s = new ConcurrentHashMap();
        this.f29551t = "manual";
        this.f29552u = new ConcurrentHashMap();
        this.f29554w = j1.SENTRY;
        this.f29556y = io.sentry.featureflags.d.a();
        this.f29557z = io.sentry.protocol.x.f30052e;
        this.f29543d = (io.sentry.protocol.x) io.sentry.util.y.c(xVar, "traceId is required");
        this.f29544e = (j8) io.sentry.util.y.c(j8Var, "spanId is required");
        this.f29547p = (String) io.sentry.util.y.c(str, "operation is required");
        this.f29545i = j8Var2;
        this.f29548q = str2;
        this.f29549r = l8Var;
        this.f29551t = str3;
        u(s8Var);
        io.sentry.util.thread.a threadChecker = l4.h().b().getThreadChecker();
        this.f29552u.put("thread.id", String.valueOf(threadChecker.c()));
        this.f29552u.put("thread.name", threadChecker.b());
    }

    public e8(e8 e8Var) {
        this.f29550s = new ConcurrentHashMap();
        this.f29551t = "manual";
        this.f29552u = new ConcurrentHashMap();
        this.f29554w = j1.SENTRY;
        this.f29556y = io.sentry.featureflags.d.a();
        this.f29557z = io.sentry.protocol.x.f30052e;
        this.f29543d = e8Var.f29543d;
        this.f29544e = e8Var.f29544e;
        this.f29545i = e8Var.f29545i;
        u(e8Var.f29546o);
        this.f29547p = e8Var.f29547p;
        this.f29548q = e8Var.f29548q;
        this.f29549r = e8Var.f29549r;
        Map b10 = io.sentry.util.c.b(e8Var.f29550s);
        if (b10 != null) {
            this.f29550s = b10;
        }
        Map b11 = io.sentry.util.c.b(e8Var.f29553v);
        if (b11 != null) {
            this.f29553v = b11;
        }
        this.f29555x = e8Var.f29555x;
        Map b12 = io.sentry.util.c.b(e8Var.f29552u);
        if (b12 != null) {
            this.f29552u = b12;
        }
    }
}
