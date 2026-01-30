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
    private String f30434d;

    /* renamed from: e  reason: collision with root package name */
    private String f30435e;

    /* renamed from: i  reason: collision with root package name */
    private String f30436i;

    /* renamed from: o  reason: collision with root package name */
    private Object f30437o;

    /* renamed from: p  reason: collision with root package name */
    private String f30438p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30439q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30440r;

    /* renamed from: s  reason: collision with root package name */
    private Long f30441s;

    /* renamed from: t  reason: collision with root package name */
    private Map f30442t;

    /* renamed from: u  reason: collision with root package name */
    private String f30443u;

    /* renamed from: v  reason: collision with root package name */
    private String f30444v;

    /* renamed from: w  reason: collision with root package name */
    private Map f30445w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public o a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            o oVar = new o();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1650269616:
                        if (l02.equals("fragment")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1077554975:
                        if (l02.equals("method")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 100589:
                        if (l02.equals("env")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 116079:
                        if (l02.equals("url")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3076010:
                        if (l02.equals("data")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 106069776:
                        if (l02.equals("other")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 795307910:
                        if (l02.equals("headers")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 952189583:
                        if (l02.equals("cookies")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1252988030:
                        if (l02.equals("body_size")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1595298664:
                        if (l02.equals("query_string")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1980646230:
                        if (l02.equals("api_target")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        oVar.f30443u = e3Var.r1();
                        break;
                    case 1:
                        oVar.f30435e = e3Var.r1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.V1();
                        if (map == null) {
                            break;
                        } else {
                            oVar.f30440r = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        oVar.f30434d = e3Var.r1();
                        break;
                    case 4:
                        oVar.f30437o = e3Var.V1();
                        break;
                    case 5:
                        Map map2 = (Map) e3Var.V1();
                        if (map2 == null) {
                            break;
                        } else {
                            oVar.f30442t = io.sentry.util.c.b(map2);
                            break;
                        }
                    case 6:
                        Map map3 = (Map) e3Var.V1();
                        if (map3 == null) {
                            break;
                        } else {
                            oVar.f30439q = io.sentry.util.c.b(map3);
                            break;
                        }
                    case 7:
                        oVar.f30438p = e3Var.r1();
                        break;
                    case '\b':
                        oVar.f30441s = e3Var.m1();
                        break;
                    case '\t':
                        oVar.f30436i = e3Var.r1();
                        break;
                    case '\n':
                        oVar.f30444v = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            oVar.m(concurrentHashMap);
            e3Var.y();
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
            if (io.sentry.util.y.a(this.f30434d, oVar.f30434d) && io.sentry.util.y.a(this.f30435e, oVar.f30435e) && io.sentry.util.y.a(this.f30436i, oVar.f30436i) && io.sentry.util.y.a(this.f30438p, oVar.f30438p) && io.sentry.util.y.a(this.f30439q, oVar.f30439q) && io.sentry.util.y.a(this.f30440r, oVar.f30440r) && io.sentry.util.y.a(this.f30441s, oVar.f30441s) && io.sentry.util.y.a(this.f30443u, oVar.f30443u) && io.sentry.util.y.a(this.f30444v, oVar.f30444v)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30434d, this.f30435e, this.f30436i, this.f30438p, this.f30439q, this.f30440r, this.f30441s, this.f30443u, this.f30444v);
    }

    public Map l() {
        return this.f30439q;
    }

    public void m(Map map) {
        this.f30445w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30434d != null) {
            f3Var.e("url").f(this.f30434d);
        }
        if (this.f30435e != null) {
            f3Var.e("method").f(this.f30435e);
        }
        if (this.f30436i != null) {
            f3Var.e("query_string").f(this.f30436i);
        }
        if (this.f30437o != null) {
            f3Var.e("data").j(iLogger, this.f30437o);
        }
        if (this.f30438p != null) {
            f3Var.e("cookies").f(this.f30438p);
        }
        if (this.f30439q != null) {
            f3Var.e("headers").j(iLogger, this.f30439q);
        }
        if (this.f30440r != null) {
            f3Var.e("env").j(iLogger, this.f30440r);
        }
        if (this.f30442t != null) {
            f3Var.e("other").j(iLogger, this.f30442t);
        }
        if (this.f30443u != null) {
            f3Var.e("fragment").j(iLogger, this.f30443u);
        }
        if (this.f30441s != null) {
            f3Var.e("body_size").j(iLogger, this.f30441s);
        }
        if (this.f30444v != null) {
            f3Var.e("api_target").j(iLogger, this.f30444v);
        }
        Map map = this.f30445w;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30445w.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public o(o oVar) {
        this.f30434d = oVar.f30434d;
        this.f30438p = oVar.f30438p;
        this.f30435e = oVar.f30435e;
        this.f30436i = oVar.f30436i;
        this.f30439q = io.sentry.util.c.b(oVar.f30439q);
        this.f30440r = io.sentry.util.c.b(oVar.f30440r);
        this.f30442t = io.sentry.util.c.b(oVar.f30442t);
        this.f30445w = io.sentry.util.c.b(oVar.f30445w);
        this.f30437o = oVar.f30437o;
        this.f30443u = oVar.f30443u;
        this.f30441s = oVar.f30441s;
        this.f30444v = oVar.f30444v;
    }
}
