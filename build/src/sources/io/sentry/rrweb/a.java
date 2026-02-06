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
    private String f28772i;

    /* renamed from: o  reason: collision with root package name */
    private double f28773o;

    /* renamed from: p  reason: collision with root package name */
    private String f28774p;

    /* renamed from: q  reason: collision with root package name */
    private String f28775q;

    /* renamed from: r  reason: collision with root package name */
    private String f28776r;

    /* renamed from: s  reason: collision with root package name */
    private SentryLevel f28777s;

    /* renamed from: t  reason: collision with root package name */
    private Map f28778t;

    /* renamed from: u  reason: collision with root package name */
    private Map f28779u;

    /* renamed from: v  reason: collision with root package name */
    private Map f28780v;

    /* renamed from: w  reason: collision with root package name */
    private Map f28781w;

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
                        aVar.f28772i = q12;
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
                            aVar.f28778t = b10;
                            break;
                        }
                    case 1:
                        aVar.f28774p = e3Var.q1();
                        break;
                    case 2:
                        aVar.f28775q = e3Var.q1();
                        break;
                    case 3:
                        aVar.f28773o = e3Var.nextDouble();
                        break;
                    case 4:
                        try {
                            aVar.f28777s = new SentryLevel.a().a(e3Var, iLogger);
                            break;
                        } catch (Exception e10) {
                            iLogger.a(SentryLevel.DEBUG, e10, "Error when deserializing SentryLevel", new Object[0]);
                            break;
                        }
                    case 5:
                        aVar.f28776r = e3Var.q1();
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
        this.f28772i = "breadcrumb";
    }

    private void p(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("tag").f(this.f28772i);
        f3Var.e("payload");
        q(f3Var, iLogger);
        Map map = this.f28781w;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28781w.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    private void q(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28774p != null) {
            f3Var.e("type").f(this.f28774p);
        }
        f3Var.e("timestamp").j(iLogger, BigDecimal.valueOf(this.f28773o));
        if (this.f28775q != null) {
            f3Var.e("category").f(this.f28775q);
        }
        if (this.f28776r != null) {
            f3Var.e("message").f(this.f28776r);
        }
        if (this.f28777s != null) {
            f3Var.e("level").j(iLogger, this.f28777s);
        }
        if (this.f28778t != null) {
            f3Var.e("data").j(iLogger, this.f28778t);
        }
        Map map = this.f28780v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28780v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public String n() {
        return this.f28775q;
    }

    public Map o() {
        return this.f28778t;
    }

    public void r(double d10) {
        this.f28773o = d10;
    }

    public void s(String str) {
        this.f28774p = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new b.C0406b().a(this, f3Var, iLogger);
        f3Var.e("data");
        p(f3Var, iLogger);
        Map map = this.f28779u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28779u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void t(String str) {
        this.f28775q = str;
    }

    public void u(Map map) {
        ConcurrentHashMap concurrentHashMap;
        if (map == null) {
            concurrentHashMap = null;
        } else {
            concurrentHashMap = new ConcurrentHashMap(map);
        }
        this.f28778t = concurrentHashMap;
    }

    public void v(Map map) {
        this.f28781w = map;
    }

    public void w(SentryLevel sentryLevel) {
        this.f28777s = sentryLevel;
    }

    public void x(String str) {
        this.f28776r = str;
    }

    public void y(Map map) {
        this.f28780v = map;
    }

    public void z(Map map) {
        this.f28779u = map;
    }
}
