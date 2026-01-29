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
    private String f30627i;

    /* renamed from: o  reason: collision with root package name */
    private double f30628o;

    /* renamed from: p  reason: collision with root package name */
    private String f30629p;

    /* renamed from: q  reason: collision with root package name */
    private String f30630q;

    /* renamed from: r  reason: collision with root package name */
    private String f30631r;

    /* renamed from: s  reason: collision with root package name */
    private SentryLevel f30632s;

    /* renamed from: t  reason: collision with root package name */
    private Map f30633t;

    /* renamed from: u  reason: collision with root package name */
    private Map f30634u;

    /* renamed from: v  reason: collision with root package name */
    private Map f30635v;

    /* renamed from: w  reason: collision with root package name */
    private Map f30636w;

    /* renamed from: io.sentry.rrweb.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0402a implements m1 {
        private void c(a aVar, e3 e3Var, ILogger iLogger) {
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("payload")) {
                    if (!l02.equals("tag")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                    } else {
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            r12 = "";
                        }
                        aVar.f30627i = r12;
                    }
                } else {
                    d(aVar, e3Var, iLogger);
                }
            }
            aVar.v(concurrentHashMap);
            e3Var.y();
        }

        private void d(a aVar, e3 e3Var, ILogger iLogger) {
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case 3076010:
                        if (l02.equals("data")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3575610:
                        if (l02.equals("type")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 50511102:
                        if (l02.equals("category")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 55126294:
                        if (l02.equals("timestamp")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 102865796:
                        if (l02.equals("level")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 954925063:
                        if (l02.equals("message")) {
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
                            aVar.f30633t = b10;
                            break;
                        }
                    case 1:
                        aVar.f30629p = e3Var.r1();
                        break;
                    case 2:
                        aVar.f30630q = e3Var.r1();
                        break;
                    case 3:
                        aVar.f30628o = e3Var.nextDouble();
                        break;
                    case 4:
                        try {
                            aVar.f30632s = new SentryLevel.a().a(e3Var, iLogger);
                            break;
                        } catch (Exception e10) {
                            iLogger.a(SentryLevel.DEBUG, e10, "Error when deserializing SentryLevel", new Object[0]);
                            break;
                        }
                    case 5:
                        aVar.f30631r = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            aVar.y(concurrentHashMap);
            e3Var.y();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public a a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            a aVar = new a();
            b.a aVar2 = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("data")) {
                    if (!aVar2.a(aVar, l02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                    }
                } else {
                    c(aVar, e3Var, iLogger);
                }
            }
            aVar.z(hashMap);
            e3Var.y();
            return aVar;
        }
    }

    public a() {
        super(c.Custom);
        this.f30627i = "breadcrumb";
    }

    private void p(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("tag").f(this.f30627i);
        f3Var.e("payload");
        q(f3Var, iLogger);
        Map map = this.f30636w;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30636w.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    private void q(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30629p != null) {
            f3Var.e("type").f(this.f30629p);
        }
        f3Var.e("timestamp").j(iLogger, BigDecimal.valueOf(this.f30628o));
        if (this.f30630q != null) {
            f3Var.e("category").f(this.f30630q);
        }
        if (this.f30631r != null) {
            f3Var.e("message").f(this.f30631r);
        }
        if (this.f30632s != null) {
            f3Var.e("level").j(iLogger, this.f30632s);
        }
        if (this.f30633t != null) {
            f3Var.e("data").j(iLogger, this.f30633t);
        }
        Map map = this.f30635v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30635v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public String n() {
        return this.f30630q;
    }

    public Map o() {
        return this.f30633t;
    }

    public void r(double d10) {
        this.f30628o = d10;
    }

    public void s(String str) {
        this.f30629p = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        new b.C0403b().a(this, f3Var, iLogger);
        f3Var.e("data");
        p(f3Var, iLogger);
        Map map = this.f30634u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30634u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public void t(String str) {
        this.f30630q = str;
    }

    public void u(Map map) {
        ConcurrentHashMap concurrentHashMap;
        if (map == null) {
            concurrentHashMap = null;
        } else {
            concurrentHashMap = new ConcurrentHashMap(map);
        }
        this.f30633t = concurrentHashMap;
    }

    public void v(Map map) {
        this.f30636w = map;
    }

    public void w(SentryLevel sentryLevel) {
        this.f30632s = sentryLevel;
    }

    public void x(String str) {
        this.f30631r = str;
    }

    public void y(Map map) {
        this.f30635v = map;
    }

    public void z(Map map) {
        this.f30634u = map;
    }
}
