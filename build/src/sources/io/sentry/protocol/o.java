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
    private String f28811d;

    /* renamed from: e  reason: collision with root package name */
    private String f28812e;

    /* renamed from: i  reason: collision with root package name */
    private String f28813i;

    /* renamed from: o  reason: collision with root package name */
    private Object f28814o;

    /* renamed from: p  reason: collision with root package name */
    private String f28815p;

    /* renamed from: q  reason: collision with root package name */
    private Map f28816q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28817r;

    /* renamed from: s  reason: collision with root package name */
    private Long f28818s;

    /* renamed from: t  reason: collision with root package name */
    private Map f28819t;

    /* renamed from: u  reason: collision with root package name */
    private String f28820u;

    /* renamed from: v  reason: collision with root package name */
    private String f28821v;

    /* renamed from: w  reason: collision with root package name */
    private Map f28822w;

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
                        oVar.f28820u = e3Var.m1();
                        break;
                    case 1:
                        oVar.f28812e = e3Var.m1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.T1();
                        if (map == null) {
                            break;
                        } else {
                            oVar.f28817r = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        oVar.f28811d = e3Var.m1();
                        break;
                    case 4:
                        oVar.f28814o = e3Var.T1();
                        break;
                    case 5:
                        Map map2 = (Map) e3Var.T1();
                        if (map2 == null) {
                            break;
                        } else {
                            oVar.f28819t = io.sentry.util.c.b(map2);
                            break;
                        }
                    case 6:
                        Map map3 = (Map) e3Var.T1();
                        if (map3 == null) {
                            break;
                        } else {
                            oVar.f28816q = io.sentry.util.c.b(map3);
                            break;
                        }
                    case 7:
                        oVar.f28815p = e3Var.m1();
                        break;
                    case '\b':
                        oVar.f28818s = e3Var.i1();
                        break;
                    case '\t':
                        oVar.f28813i = e3Var.m1();
                        break;
                    case '\n':
                        oVar.f28821v = e3Var.m1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap, o02);
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
            if (io.sentry.util.y.a(this.f28811d, oVar.f28811d) && io.sentry.util.y.a(this.f28812e, oVar.f28812e) && io.sentry.util.y.a(this.f28813i, oVar.f28813i) && io.sentry.util.y.a(this.f28815p, oVar.f28815p) && io.sentry.util.y.a(this.f28816q, oVar.f28816q) && io.sentry.util.y.a(this.f28817r, oVar.f28817r) && io.sentry.util.y.a(this.f28818s, oVar.f28818s) && io.sentry.util.y.a(this.f28820u, oVar.f28820u) && io.sentry.util.y.a(this.f28821v, oVar.f28821v)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28811d, this.f28812e, this.f28813i, this.f28815p, this.f28816q, this.f28817r, this.f28818s, this.f28820u, this.f28821v);
    }

    public Map l() {
        return this.f28816q;
    }

    public void m(Map map) {
        this.f28822w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28811d != null) {
            f3Var.e("url").f(this.f28811d);
        }
        if (this.f28812e != null) {
            f3Var.e("method").f(this.f28812e);
        }
        if (this.f28813i != null) {
            f3Var.e("query_string").f(this.f28813i);
        }
        if (this.f28814o != null) {
            f3Var.e("data").j(iLogger, this.f28814o);
        }
        if (this.f28815p != null) {
            f3Var.e("cookies").f(this.f28815p);
        }
        if (this.f28816q != null) {
            f3Var.e("headers").j(iLogger, this.f28816q);
        }
        if (this.f28817r != null) {
            f3Var.e("env").j(iLogger, this.f28817r);
        }
        if (this.f28819t != null) {
            f3Var.e("other").j(iLogger, this.f28819t);
        }
        if (this.f28820u != null) {
            f3Var.e("fragment").j(iLogger, this.f28820u);
        }
        if (this.f28818s != null) {
            f3Var.e("body_size").j(iLogger, this.f28818s);
        }
        if (this.f28821v != null) {
            f3Var.e("api_target").j(iLogger, this.f28821v);
        }
        Map map = this.f28822w;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28822w.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public o(o oVar) {
        this.f28811d = oVar.f28811d;
        this.f28815p = oVar.f28815p;
        this.f28812e = oVar.f28812e;
        this.f28813i = oVar.f28813i;
        this.f28816q = io.sentry.util.c.b(oVar.f28816q);
        this.f28817r = io.sentry.util.c.b(oVar.f28817r);
        this.f28819t = io.sentry.util.c.b(oVar.f28819t);
        this.f28822w = io.sentry.util.c.b(oVar.f28822w);
        this.f28814o = oVar.f28814o;
        this.f28820u = oVar.f28820u;
        this.f28818s = oVar.f28818s;
        this.f28821v = oVar.f28821v;
    }
}
