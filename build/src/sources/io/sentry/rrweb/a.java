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
    private String f28820i;

    /* renamed from: o  reason: collision with root package name */
    private double f28821o;

    /* renamed from: p  reason: collision with root package name */
    private String f28822p;

    /* renamed from: q  reason: collision with root package name */
    private String f28823q;

    /* renamed from: r  reason: collision with root package name */
    private String f28824r;

    /* renamed from: s  reason: collision with root package name */
    private SentryLevel f28825s;

    /* renamed from: t  reason: collision with root package name */
    private Map f28826t;

    /* renamed from: u  reason: collision with root package name */
    private Map f28827u;

    /* renamed from: v  reason: collision with root package name */
    private Map f28828v;

    /* renamed from: w  reason: collision with root package name */
    private Map f28829w;

    /* renamed from: io.sentry.rrweb.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0405a implements m1 {
        private void c(a aVar, e3 e3Var, ILogger iLogger) {
            e3Var.u();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("payload")) {
                    if (!o02.equals("tag")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                    } else {
                        String q12 = e3Var.q1();
                        if (q12 == null) {
                            q12 = "";
                        }
                        aVar.f28820i = q12;
                    }
                } else {
                    d(aVar, e3Var, iLogger);
                }
            }
            aVar.v(concurrentHashMap);
            e3Var.D();
        }

        private void d(a aVar, e3 e3Var, ILogger iLogger) {
            e3Var.u();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case 3076010:
                        if (o02.equals("data")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3575610:
                        if (o02.equals("type")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 50511102:
                        if (o02.equals("category")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 55126294:
                        if (o02.equals("timestamp")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 102865796:
                        if (o02.equals("level")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 954925063:
                        if (o02.equals("message")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        Map b10 = io.sentry.util.c.b((Map) e3Var.U1());
                        if (b10 == null) {
                            break;
                        } else {
                            aVar.f28826t = b10;
                            break;
                        }
                    case 1:
                        aVar.f28822p = e3Var.q1();
                        break;
                    case 2:
                        aVar.f28823q = e3Var.q1();
                        break;
                    case 3:
                        aVar.f28821o = e3Var.nextDouble();
                        break;
                    case 4:
                        try {
                            aVar.f28825s = new SentryLevel.a().a(e3Var, iLogger);
                            break;
                        } catch (Exception e10) {
                            iLogger.a(SentryLevel.DEBUG, e10, "Error when deserializing SentryLevel", new Object[0]);
                            break;
                        }
                    case 5:
                        aVar.f28824r = e3Var.q1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            aVar.y(concurrentHashMap);
            e3Var.D();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public a a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            a aVar = new a();
            b.a aVar2 = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("data")) {
                    if (!aVar2.a(aVar, o02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
                    }
                } else {
                    c(aVar, e3Var, iLogger);
                }
            }
            aVar.z(hashMap);
            e3Var.D();
            return aVar;
        }
    }

    public a() {
        super(c.Custom);
        this.f28820i = "breadcrumb";
    }

    private void p(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("tag").f(this.f28820i);
        f3Var.e("payload");
        q(f3Var, iLogger);
        Map map = this.f28829w;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28829w.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    private void q(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28822p != null) {
            f3Var.e("type").f(this.f28822p);
        }
        f3Var.e("timestamp").j(iLogger, BigDecimal.valueOf(this.f28821o));
        if (this.f28823q != null) {
            f3Var.e("category").f(this.f28823q);
        }
        if (this.f28824r != null) {
            f3Var.e("message").f(this.f28824r);
        }
        if (this.f28825s != null) {
            f3Var.e("level").j(iLogger, this.f28825s);
        }
        if (this.f28826t != null) {
            f3Var.e("data").j(iLogger, this.f28826t);
        }
        Map map = this.f28828v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28828v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public String n() {
        return this.f28823q;
    }

    public Map o() {
        return this.f28826t;
    }

    public void r(double d10) {
        this.f28821o = d10;
    }

    public void s(String str) {
        this.f28822p = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new b.C0406b().a(this, f3Var, iLogger);
        f3Var.e("data");
        p(f3Var, iLogger);
        Map map = this.f28827u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28827u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void t(String str) {
        this.f28823q = str;
    }

    public void u(Map map) {
        ConcurrentHashMap concurrentHashMap;
        if (map == null) {
            concurrentHashMap = null;
        } else {
            concurrentHashMap = new ConcurrentHashMap(map);
        }
        this.f28826t = concurrentHashMap;
    }

    public void v(Map map) {
        this.f28829w = map;
    }

    public void w(SentryLevel sentryLevel) {
        this.f28825s = sentryLevel;
    }

    public void x(String str) {
        this.f28824r = str;
    }

    public void y(Map map) {
        this.f28828v = map;
    }

    public void z(Map map) {
        this.f28827u = map;
    }
}
