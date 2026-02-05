package io.sentry.rrweb;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
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
public final class a extends b implements w1 {

    /* renamed from: i  reason: collision with root package name */
    private String f29628i;

    /* renamed from: o  reason: collision with root package name */
    private double f29629o;

    /* renamed from: p  reason: collision with root package name */
    private String f29630p;

    /* renamed from: q  reason: collision with root package name */
    private String f29631q;

    /* renamed from: r  reason: collision with root package name */
    private String f29632r;

    /* renamed from: s  reason: collision with root package name */
    private SentryLevel f29633s;

    /* renamed from: t  reason: collision with root package name */
    private Map f29634t;

    /* renamed from: u  reason: collision with root package name */
    private Map f29635u;

    /* renamed from: v  reason: collision with root package name */
    private Map f29636v;

    /* renamed from: w  reason: collision with root package name */
    private Map f29637w;

    /* renamed from: io.sentry.rrweb.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0411a implements m1 {
        private void c(a aVar, e3 e3Var, ILogger iLogger) {
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
                        aVar.f29628i = r12;
                    }
                } else {
                    d(aVar, e3Var, iLogger);
                }
            }
            aVar.v(concurrentHashMap);
            e3Var.z();
        }

        private void d(a aVar, e3 e3Var, ILogger iLogger) {
            e3Var.s();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case 3076010:
                        if (m02.equals("data")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3575610:
                        if (m02.equals("type")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 50511102:
                        if (m02.equals("category")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 55126294:
                        if (m02.equals("timestamp")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 102865796:
                        if (m02.equals("level")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 954925063:
                        if (m02.equals("message")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        Map b10 = io.sentry.util.c.b((Map) e3Var.V1());
                        if (b10 == null) {
                            break;
                        } else {
                            aVar.f29634t = b10;
                            break;
                        }
                    case 1:
                        aVar.f29630p = e3Var.r1();
                        break;
                    case 2:
                        aVar.f29631q = e3Var.r1();
                        break;
                    case 3:
                        aVar.f29629o = e3Var.nextDouble();
                        break;
                    case 4:
                        try {
                            aVar.f29633s = new SentryLevel.a().a(e3Var, iLogger);
                            break;
                        } catch (Exception e10) {
                            iLogger.a(SentryLevel.DEBUG, e10, "Error when deserializing SentryLevel", new Object[0]);
                            break;
                        }
                    case 5:
                        aVar.f29632r = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            aVar.y(concurrentHashMap);
            e3Var.z();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public a a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            a aVar = new a();
            b.a aVar2 = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("data")) {
                    if (!aVar2.a(aVar, m02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                    }
                } else {
                    c(aVar, e3Var, iLogger);
                }
            }
            aVar.z(hashMap);
            e3Var.z();
            return aVar;
        }
    }

    public a() {
        super(c.Custom);
        this.f29628i = "breadcrumb";
    }

    private void p(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("tag").f(this.f29628i);
        f3Var.e("payload");
        q(f3Var, iLogger);
        Map map = this.f29637w;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29637w.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    private void q(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29630p != null) {
            f3Var.e("type").f(this.f29630p);
        }
        f3Var.e("timestamp").j(iLogger, BigDecimal.valueOf(this.f29629o));
        if (this.f29631q != null) {
            f3Var.e("category").f(this.f29631q);
        }
        if (this.f29632r != null) {
            f3Var.e("message").f(this.f29632r);
        }
        if (this.f29633s != null) {
            f3Var.e("level").j(iLogger, this.f29633s);
        }
        if (this.f29634t != null) {
            f3Var.e("data").j(iLogger, this.f29634t);
        }
        Map map = this.f29636v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29636v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public String n() {
        return this.f29631q;
    }

    public Map o() {
        return this.f29634t;
    }

    public void r(double d10) {
        this.f29629o = d10;
    }

    public void s(String str) {
        this.f29630p = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        new b.C0412b().a(this, f3Var, iLogger);
        f3Var.e("data");
        p(f3Var, iLogger);
        Map map = this.f29635u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29635u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public void t(String str) {
        this.f29631q = str;
    }

    public void u(Map map) {
        ConcurrentHashMap concurrentHashMap;
        if (map == null) {
            concurrentHashMap = null;
        } else {
            concurrentHashMap = new ConcurrentHashMap(map);
        }
        this.f29634t = concurrentHashMap;
    }

    public void v(Map map) {
        this.f29637w = map;
    }

    public void w(SentryLevel sentryLevel) {
        this.f29633s = sentryLevel;
    }

    public void x(String str) {
        this.f29632r = str;
    }

    public void y(Map map) {
        this.f29636v = map;
    }

    public void z(Map map) {
        this.f29635u = map;
    }
}
