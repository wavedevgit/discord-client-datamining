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
    private String f29746d;

    /* renamed from: e  reason: collision with root package name */
    private String f29747e;

    /* renamed from: i  reason: collision with root package name */
    private String f29748i;

    /* renamed from: o  reason: collision with root package name */
    private Object f29749o;

    /* renamed from: p  reason: collision with root package name */
    private String f29750p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29751q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29752r;

    /* renamed from: s  reason: collision with root package name */
    private Long f29753s;

    /* renamed from: t  reason: collision with root package name */
    private Map f29754t;

    /* renamed from: u  reason: collision with root package name */
    private String f29755u;

    /* renamed from: v  reason: collision with root package name */
    private String f29756v;

    /* renamed from: w  reason: collision with root package name */
    private Map f29757w;

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
                        oVar.f29755u = e3Var.r1();
                        break;
                    case 1:
                        oVar.f29747e = e3Var.r1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.Z1();
                        if (map == null) {
                            break;
                        } else {
                            oVar.f29752r = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        oVar.f29746d = e3Var.r1();
                        break;
                    case 4:
                        oVar.f29749o = e3Var.Z1();
                        break;
                    case 5:
                        Map map2 = (Map) e3Var.Z1();
                        if (map2 == null) {
                            break;
                        } else {
                            oVar.f29754t = io.sentry.util.c.b(map2);
                            break;
                        }
                    case 6:
                        Map map3 = (Map) e3Var.Z1();
                        if (map3 == null) {
                            break;
                        } else {
                            oVar.f29751q = io.sentry.util.c.b(map3);
                            break;
                        }
                    case 7:
                        oVar.f29750p = e3Var.r1();
                        break;
                    case '\b':
                        oVar.f29753s = e3Var.n1();
                        break;
                    case '\t':
                        oVar.f29748i = e3Var.r1();
                        break;
                    case '\n':
                        oVar.f29756v = e3Var.r1();
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
            if (io.sentry.util.y.a(this.f29746d, oVar.f29746d) && io.sentry.util.y.a(this.f29747e, oVar.f29747e) && io.sentry.util.y.a(this.f29748i, oVar.f29748i) && io.sentry.util.y.a(this.f29750p, oVar.f29750p) && io.sentry.util.y.a(this.f29751q, oVar.f29751q) && io.sentry.util.y.a(this.f29752r, oVar.f29752r) && io.sentry.util.y.a(this.f29753s, oVar.f29753s) && io.sentry.util.y.a(this.f29755u, oVar.f29755u) && io.sentry.util.y.a(this.f29756v, oVar.f29756v)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29746d, this.f29747e, this.f29748i, this.f29750p, this.f29751q, this.f29752r, this.f29753s, this.f29755u, this.f29756v);
    }

    public Map l() {
        return this.f29751q;
    }

    public void m(Map map) {
        this.f29757w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29746d != null) {
            f3Var.e("url").f(this.f29746d);
        }
        if (this.f29747e != null) {
            f3Var.e("method").f(this.f29747e);
        }
        if (this.f29748i != null) {
            f3Var.e("query_string").f(this.f29748i);
        }
        if (this.f29749o != null) {
            f3Var.e("data").j(iLogger, this.f29749o);
        }
        if (this.f29750p != null) {
            f3Var.e("cookies").f(this.f29750p);
        }
        if (this.f29751q != null) {
            f3Var.e("headers").j(iLogger, this.f29751q);
        }
        if (this.f29752r != null) {
            f3Var.e("env").j(iLogger, this.f29752r);
        }
        if (this.f29754t != null) {
            f3Var.e("other").j(iLogger, this.f29754t);
        }
        if (this.f29755u != null) {
            f3Var.e("fragment").j(iLogger, this.f29755u);
        }
        if (this.f29753s != null) {
            f3Var.e("body_size").j(iLogger, this.f29753s);
        }
        if (this.f29756v != null) {
            f3Var.e("api_target").j(iLogger, this.f29756v);
        }
        Map map = this.f29757w;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29757w.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public o(o oVar) {
        this.f29746d = oVar.f29746d;
        this.f29750p = oVar.f29750p;
        this.f29747e = oVar.f29747e;
        this.f29748i = oVar.f29748i;
        this.f29751q = io.sentry.util.c.b(oVar.f29751q);
        this.f29752r = io.sentry.util.c.b(oVar.f29752r);
        this.f29754t = io.sentry.util.c.b(oVar.f29754t);
        this.f29757w = io.sentry.util.c.b(oVar.f29757w);
        this.f29749o = oVar.f29749o;
        this.f29755u = oVar.f29755u;
        this.f29753s = oVar.f29753s;
        this.f29756v = oVar.f29756v;
    }
}
