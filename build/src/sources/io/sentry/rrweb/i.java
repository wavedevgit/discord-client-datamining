package io.sentry.rrweb;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.rrweb.b;
import io.sentry.w1;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends b implements w1 {

    /* renamed from: i  reason: collision with root package name */
    private String f29667i;

    /* renamed from: o  reason: collision with root package name */
    private String f29668o;

    /* renamed from: p  reason: collision with root package name */
    private String f29669p;

    /* renamed from: q  reason: collision with root package name */
    private double f29670q;

    /* renamed from: r  reason: collision with root package name */
    private double f29671r;

    /* renamed from: s  reason: collision with root package name */
    private Map f29672s;

    /* renamed from: t  reason: collision with root package name */
    private Map f29673t;

    /* renamed from: u  reason: collision with root package name */
    private Map f29674u;

    /* renamed from: v  reason: collision with root package name */
    private Map f29675v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(i iVar, e3 e3Var, ILogger iLogger) {
            e3Var.s();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("payload")) {
                    if (!m02.equals("tag")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                    } else {
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            r12 = "";
                        }
                        iVar.f29667i = r12;
                    }
                } else {
                    d(iVar, e3Var, iLogger);
                }
            }
            iVar.p(concurrentHashMap);
            e3Var.z();
        }

        private void d(i iVar, e3 e3Var, ILogger iLogger) {
            e3Var.s();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1724546052:
                        if (m02.equals("description")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -356088197:
                        if (m02.equals("endTimestamp")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -299216172:
                        if (m02.equals("startTimestamp")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3553:
                        if (m02.equals("op")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3076010:
                        if (m02.equals("data")) {
                            c10 = 4;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        iVar.f29669p = e3Var.r1();
                        break;
                    case 1:
                        iVar.f29671r = e3Var.nextDouble();
                        break;
                    case 2:
                        iVar.f29670q = e3Var.nextDouble();
                        break;
                    case 3:
                        iVar.f29668o = e3Var.r1();
                        break;
                    case 4:
                        Map b10 = io.sentry.util.c.b((Map) e3Var.V1());
                        if (b10 == null) {
                            break;
                        } else {
                            iVar.f29672s = b10;
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
            iVar.t(concurrentHashMap);
            e3Var.z();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public i a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            i iVar = new i();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("data")) {
                    if (!aVar.a(iVar, m02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                    }
                } else {
                    c(iVar, e3Var, iLogger);
                }
            }
            iVar.v(hashMap);
            e3Var.z();
            return iVar;
        }
    }

    public i() {
        super(c.Custom);
        this.f29667i = "performanceSpan";
    }

    private void m(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("tag").f(this.f29667i);
        f3Var.e("payload");
        n(f3Var, iLogger);
        Map map = this.f29675v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29675v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    private void n(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29668o != null) {
            f3Var.e("op").f(this.f29668o);
        }
        if (this.f29669p != null) {
            f3Var.e("description").f(this.f29669p);
        }
        f3Var.e("startTimestamp").j(iLogger, BigDecimal.valueOf(this.f29670q));
        f3Var.e("endTimestamp").j(iLogger, BigDecimal.valueOf(this.f29671r));
        if (this.f29672s != null) {
            f3Var.e("data").j(iLogger, this.f29672s);
        }
        Map map = this.f29674u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29674u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public void o(Map map) {
        ConcurrentHashMap concurrentHashMap;
        if (map == null) {
            concurrentHashMap = null;
        } else {
            concurrentHashMap = new ConcurrentHashMap(map);
        }
        this.f29672s = concurrentHashMap;
    }

    public void p(Map map) {
        this.f29675v = map;
    }

    public void q(String str) {
        this.f29669p = str;
    }

    public void r(double d10) {
        this.f29671r = d10;
    }

    public void s(String str) {
        this.f29668o = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        new b.C0412b().a(this, f3Var, iLogger);
        f3Var.e("data");
        m(f3Var, iLogger);
        Map map = this.f29673t;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29673t.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public void t(Map map) {
        this.f29674u = map;
    }

    public void u(double d10) {
        this.f29670q = d10;
    }

    public void v(Map map) {
        this.f29673t = map;
    }
}
