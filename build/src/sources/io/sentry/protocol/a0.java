package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.d8;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.j8;
import io.sentry.l8;
import io.sentry.m1;
import io.sentry.protocol.k;
import io.sentry.protocol.x;
import io.sentry.w1;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final Double f29617d;

    /* renamed from: e  reason: collision with root package name */
    private final Double f29618e;

    /* renamed from: i  reason: collision with root package name */
    private final x f29619i;

    /* renamed from: o  reason: collision with root package name */
    private final j8 f29620o;

    /* renamed from: p  reason: collision with root package name */
    private final j8 f29621p;

    /* renamed from: q  reason: collision with root package name */
    private final String f29622q;

    /* renamed from: r  reason: collision with root package name */
    private final String f29623r;

    /* renamed from: s  reason: collision with root package name */
    private final l8 f29624s;

    /* renamed from: t  reason: collision with root package name */
    private final String f29625t;

    /* renamed from: u  reason: collision with root package name */
    private final Map f29626u;

    /* renamed from: v  reason: collision with root package name */
    private Map f29627v;

    /* renamed from: w  reason: collision with root package name */
    private final Map f29628w;

    /* renamed from: x  reason: collision with root package name */
    private Map f29629x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private Exception c(String str, ILogger iLogger) {
            String str2 = "Missing required field \"" + str + "\"";
            IllegalStateException illegalStateException = new IllegalStateException(str2);
            iLogger.b(SentryLevel.ERROR, str2, illegalStateException);
            return illegalStateException;
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public a0 a(e3 e3Var, ILogger iLogger) {
            Object obj;
            e3Var.u();
            ConcurrentHashMap concurrentHashMap = null;
            Double d10 = null;
            Object obj2 = null;
            x xVar = null;
            j8 j8Var = null;
            Map map = null;
            String str = null;
            Double d11 = null;
            j8 j8Var2 = null;
            String str2 = null;
            l8 l8Var = null;
            String str3 = null;
            Map map2 = null;
            while (true) {
                ConcurrentHashMap concurrentHashMap2 = concurrentHashMap;
                Double d12 = d10;
                Object obj3 = obj2;
                x xVar2 = xVar;
                j8 j8Var3 = j8Var;
                if (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
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
                        case -1526966919:
                            if (o02.equals("start_timestamp")) {
                                c10 = 3;
                                break;
                            }
                            break;
                        case -1008619738:
                            if (o02.equals("origin")) {
                                c10 = 4;
                                break;
                            }
                            break;
                        case -892481550:
                            if (o02.equals("status")) {
                                c10 = 5;
                                break;
                            }
                            break;
                        case -362243017:
                            if (o02.equals("measurements")) {
                                c10 = 6;
                                break;
                            }
                            break;
                        case 3553:
                            if (o02.equals("op")) {
                                c10 = 7;
                                break;
                            }
                            break;
                        case 3076010:
                            if (o02.equals("data")) {
                                c10 = '\b';
                                break;
                            }
                            break;
                        case 3552281:
                            if (o02.equals("tags")) {
                                c10 = '\t';
                                break;
                            }
                            break;
                        case 55126294:
                            if (o02.equals("timestamp")) {
                                c10 = '\n';
                                break;
                            }
                            break;
                        case 1270300245:
                            if (o02.equals("trace_id")) {
                                c10 = 11;
                                break;
                            }
                            break;
                    }
                    switch (c10) {
                        case 0:
                            j8Var = new j8.a().a(e3Var, iLogger);
                            concurrentHashMap = concurrentHashMap2;
                            d10 = d12;
                            obj2 = obj3;
                            xVar = xVar2;
                            continue;
                        case 1:
                            j8Var2 = (j8) e3Var.I0(iLogger, new j8.a());
                            concurrentHashMap = concurrentHashMap2;
                            d10 = d12;
                            obj2 = obj3;
                            xVar = xVar2;
                            break;
                        case 2:
                            str2 = e3Var.r1();
                            concurrentHashMap = concurrentHashMap2;
                            d10 = d12;
                            obj2 = obj3;
                            xVar = xVar2;
                            break;
                        case 3:
                            try {
                                d10 = e3Var.n0();
                            } catch (NumberFormatException unused) {
                                Date s02 = e3Var.s0(iLogger);
                                if (s02 != null) {
                                    d10 = Double.valueOf(io.sentry.k.b(s02));
                                } else {
                                    d10 = null;
                                }
                            }
                            concurrentHashMap = concurrentHashMap2;
                            obj2 = obj3;
                            xVar = xVar2;
                            break;
                        case 4:
                            str3 = e3Var.r1();
                            concurrentHashMap = concurrentHashMap2;
                            d10 = d12;
                            obj2 = obj3;
                            xVar = xVar2;
                            break;
                        case 5:
                            l8Var = (l8) e3Var.I0(iLogger, new l8.a());
                            concurrentHashMap = concurrentHashMap2;
                            d10 = d12;
                            obj2 = obj3;
                            xVar = xVar2;
                            break;
                        case 6:
                            map = e3Var.t1(iLogger, new k.a());
                            concurrentHashMap = concurrentHashMap2;
                            d10 = d12;
                            obj2 = obj3;
                            xVar = xVar2;
                            break;
                        case 7:
                            str = e3Var.r1();
                            concurrentHashMap = concurrentHashMap2;
                            d10 = d12;
                            obj2 = obj3;
                            xVar = xVar2;
                            break;
                        case '\b':
                            map2 = (Map) e3Var.Z1();
                            concurrentHashMap = concurrentHashMap2;
                            d10 = d12;
                            obj2 = obj3;
                            xVar = xVar2;
                            break;
                        case '\t':
                            obj2 = (Map) e3Var.Z1();
                            concurrentHashMap = concurrentHashMap2;
                            d10 = d12;
                            xVar = xVar2;
                            break;
                        case '\n':
                            try {
                                d11 = e3Var.n0();
                            } catch (NumberFormatException unused2) {
                                Date s03 = e3Var.s0(iLogger);
                                if (s03 != null) {
                                    d11 = Double.valueOf(io.sentry.k.b(s03));
                                } else {
                                    d11 = null;
                                }
                            }
                            concurrentHashMap = concurrentHashMap2;
                            d10 = d12;
                            obj2 = obj3;
                            xVar = xVar2;
                            break;
                        case 11:
                            xVar = new x.a().a(e3Var, iLogger);
                            concurrentHashMap = concurrentHashMap2;
                            d10 = d12;
                            obj2 = obj3;
                            break;
                        default:
                            if (concurrentHashMap2 == null) {
                                concurrentHashMap = new ConcurrentHashMap();
                            } else {
                                concurrentHashMap = concurrentHashMap2;
                            }
                            e3Var.u1(iLogger, concurrentHashMap, o02);
                            d10 = d12;
                            obj2 = obj3;
                            xVar = xVar2;
                            break;
                    }
                    j8Var = j8Var3;
                } else if (d12 != null) {
                    if (xVar2 != null) {
                        if (j8Var3 != null) {
                            if (str != null) {
                                if (obj3 == null) {
                                    obj = new HashMap();
                                } else {
                                    obj = obj3;
                                }
                                if (map == null) {
                                    map = new HashMap();
                                }
                                l8 l8Var2 = l8Var;
                                HashMap hashMap = obj;
                                a0 a0Var = new a0(d12, d11, xVar2, j8Var3, j8Var2, str, str2, l8Var2, str3, hashMap, map, map2);
                                a0Var.i(concurrentHashMap2);
                                e3Var.D();
                                return a0Var;
                            }
                            throw c("op", iLogger);
                        }
                        throw c("span_id", iLogger);
                    }
                    throw c("trace_id", iLogger);
                } else {
                    throw c("start_timestamp", iLogger);
                }
            }
        }
    }

    public a0(d8 d8Var) {
        this(d8Var, d8Var.u());
    }

    private BigDecimal a(Double d10) {
        return BigDecimal.valueOf(d10.doubleValue()).setScale(6, RoundingMode.DOWN);
    }

    public Map b() {
        return this.f29627v;
    }

    public Map c() {
        return this.f29628w;
    }

    public String d() {
        return this.f29622q;
    }

    public j8 e() {
        return this.f29620o;
    }

    public Double f() {
        return this.f29617d;
    }

    public Double g() {
        return this.f29618e;
    }

    public void h(Map map) {
        this.f29627v = map;
    }

    public void i(Map map) {
        this.f29629x = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("start_timestamp").j(iLogger, a(this.f29617d));
        if (this.f29618e != null) {
            f3Var.e("timestamp").j(iLogger, a(this.f29618e));
        }
        f3Var.e("trace_id").j(iLogger, this.f29619i);
        f3Var.e("span_id").j(iLogger, this.f29620o);
        if (this.f29621p != null) {
            f3Var.e("parent_span_id").j(iLogger, this.f29621p);
        }
        f3Var.e("op").f(this.f29622q);
        if (this.f29623r != null) {
            f3Var.e("description").f(this.f29623r);
        }
        if (this.f29624s != null) {
            f3Var.e("status").j(iLogger, this.f29624s);
        }
        if (this.f29625t != null) {
            f3Var.e("origin").j(iLogger, this.f29625t);
        }
        if (!this.f29626u.isEmpty()) {
            f3Var.e("tags").j(iLogger, this.f29626u);
        }
        if (this.f29627v != null) {
            f3Var.e("data").j(iLogger, this.f29627v);
        }
        if (!this.f29628w.isEmpty()) {
            f3Var.e("measurements").j(iLogger, this.f29628w);
        }
        Map map = this.f29629x;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29629x.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public a0(d8 d8Var, Map map) {
        io.sentry.util.y.c(d8Var, "span is required");
        this.f29623r = d8Var.getDescription();
        this.f29622q = d8Var.x();
        this.f29620o = d8Var.C();
        this.f29621p = d8Var.z();
        this.f29619i = d8Var.E();
        this.f29624s = d8Var.a();
        this.f29625t = d8Var.q().g();
        Map b10 = io.sentry.util.c.b(d8Var.D());
        this.f29626u = b10 == null ? new ConcurrentHashMap() : b10;
        Map b11 = io.sentry.util.c.b(d8Var.w());
        this.f29628w = b11 == null ? new ConcurrentHashMap() : b11;
        this.f29618e = d8Var.r() == null ? null : Double.valueOf(io.sentry.k.m(d8Var.t().g(d8Var.r())));
        this.f29617d = Double.valueOf(io.sentry.k.m(d8Var.t().h()));
        this.f29627v = map;
        g o10 = d8Var.q().d().o();
        if (o10 != null) {
            if (this.f29627v == null) {
                this.f29627v = new HashMap();
            }
            for (f fVar : o10.a()) {
                Map map2 = this.f29627v;
                map2.put("flag.evaluation." + fVar.a(), fVar.b());
            }
        }
    }

    public a0(Double d10, Double d11, x xVar, j8 j8Var, j8 j8Var2, String str, String str2, l8 l8Var, String str3, Map map, Map map2, Map map3) {
        this.f29617d = d10;
        this.f29618e = d11;
        this.f29619i = xVar;
        this.f29620o = j8Var;
        this.f29621p = j8Var2;
        this.f29622q = str;
        this.f29623r = str2;
        this.f29624s = l8Var;
        this.f29625t = str3;
        this.f29626u = map;
        this.f29628w = map2;
        this.f29627v = map3;
    }
}
