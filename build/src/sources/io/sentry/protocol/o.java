package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f30315d;

    /* renamed from: e  reason: collision with root package name */
    private String f30316e;

    /* renamed from: i  reason: collision with root package name */
    private String f30317i;

    /* renamed from: o  reason: collision with root package name */
    private Object f30318o;

    /* renamed from: p  reason: collision with root package name */
    private String f30319p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30320q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30321r;

    /* renamed from: s  reason: collision with root package name */
    private Long f30322s;

    /* renamed from: t  reason: collision with root package name */
    private Map f30323t;

    /* renamed from: u  reason: collision with root package name */
    private String f30324u;

    /* renamed from: v  reason: collision with root package name */
    private String f30325v;

    /* renamed from: w  reason: collision with root package name */
    private Map f30326w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public o a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            o oVar = new o();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1650269616:
                        if (o02.equals("fragment")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1077554975:
                        if (o02.equals("method")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 100589:
                        if (o02.equals("env")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 116079:
                        if (o02.equals("url")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3076010:
                        if (o02.equals("data")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 106069776:
                        if (o02.equals("other")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 795307910:
                        if (o02.equals("headers")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 952189583:
                        if (o02.equals("cookies")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1252988030:
                        if (o02.equals("body_size")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1595298664:
                        if (o02.equals("query_string")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1980646230:
                        if (o02.equals("api_target")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        oVar.f30324u = e3Var.r1();
                        break;
                    case 1:
                        oVar.f30316e = e3Var.r1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.Z1();
                        if (map == null) {
                            break;
                        } else {
                            oVar.f30321r = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        oVar.f30315d = e3Var.r1();
                        break;
                    case 4:
                        oVar.f30318o = e3Var.Z1();
                        break;
                    case 5:
                        Map map2 = (Map) e3Var.Z1();
                        if (map2 == null) {
                            break;
                        } else {
                            oVar.f30323t = io.sentry.util.c.b(map2);
                            break;
                        }
                    case 6:
                        Map map3 = (Map) e3Var.Z1();
                        if (map3 == null) {
                            break;
                        } else {
                            oVar.f30320q = io.sentry.util.c.b(map3);
                            break;
                        }
                    case 7:
                        oVar.f30319p = e3Var.r1();
                        break;
                    case '\b':
                        oVar.f30322s = e3Var.n1();
                        break;
                    case '\t':
                        oVar.f30317i = e3Var.r1();
                        break;
                    case '\n':
                        oVar.f30325v = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            oVar.m(concurrentHashMap);
            e3Var.D();
            return oVar;
        }
    }

    public o() {
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && o.class == obj.getClass()) {
            o oVar = (o) obj;
            if (io.sentry.util.y.a(this.f30315d, oVar.f30315d) && io.sentry.util.y.a(this.f30316e, oVar.f30316e) && io.sentry.util.y.a(this.f30317i, oVar.f30317i) && io.sentry.util.y.a(this.f30319p, oVar.f30319p) && io.sentry.util.y.a(this.f30320q, oVar.f30320q) && io.sentry.util.y.a(this.f30321r, oVar.f30321r) && io.sentry.util.y.a(this.f30322s, oVar.f30322s) && io.sentry.util.y.a(this.f30324u, oVar.f30324u) && io.sentry.util.y.a(this.f30325v, oVar.f30325v)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30315d, this.f30316e, this.f30317i, this.f30319p, this.f30320q, this.f30321r, this.f30322s, this.f30324u, this.f30325v);
    }

    public Map l() {
        return this.f30320q;
    }

    public void m(Map map) {
        this.f30326w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f30315d != null) {
            f3Var.e("url").f(this.f30315d);
        }
        if (this.f30316e != null) {
            f3Var.e("method").f(this.f30316e);
        }
        if (this.f30317i != null) {
            f3Var.e("query_string").f(this.f30317i);
        }
        if (this.f30318o != null) {
            f3Var.e("data").j(iLogger, this.f30318o);
        }
        if (this.f30319p != null) {
            f3Var.e("cookies").f(this.f30319p);
        }
        if (this.f30320q != null) {
            f3Var.e("headers").j(iLogger, this.f30320q);
        }
        if (this.f30321r != null) {
            f3Var.e("env").j(iLogger, this.f30321r);
        }
        if (this.f30323t != null) {
            f3Var.e("other").j(iLogger, this.f30323t);
        }
        if (this.f30324u != null) {
            f3Var.e("fragment").j(iLogger, this.f30324u);
        }
        if (this.f30322s != null) {
            f3Var.e("body_size").j(iLogger, this.f30322s);
        }
        if (this.f30325v != null) {
            f3Var.e("api_target").j(iLogger, this.f30325v);
        }
        Map map = this.f30326w;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30326w.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public o(o oVar) {
        this.f30315d = oVar.f30315d;
        this.f30319p = oVar.f30319p;
        this.f30316e = oVar.f30316e;
        this.f30317i = oVar.f30317i;
        this.f30320q = io.sentry.util.c.b(oVar.f30320q);
        this.f30321r = io.sentry.util.c.b(oVar.f30321r);
        this.f30323t = io.sentry.util.c.b(oVar.f30323t);
        this.f30326w = io.sentry.util.c.b(oVar.f30326w);
        this.f30318o = oVar.f30318o;
        this.f30324u = oVar.f30324u;
        this.f30322s = oVar.f30322s;
        this.f30325v = oVar.f30325v;
    }
}
