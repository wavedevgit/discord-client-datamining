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
    private String f29419d;

    /* renamed from: e  reason: collision with root package name */
    private String f29420e;

    /* renamed from: i  reason: collision with root package name */
    private String f29421i;

    /* renamed from: o  reason: collision with root package name */
    private Object f29422o;

    /* renamed from: p  reason: collision with root package name */
    private String f29423p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29424q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29425r;

    /* renamed from: s  reason: collision with root package name */
    private Long f29426s;

    /* renamed from: t  reason: collision with root package name */
    private Map f29427t;

    /* renamed from: u  reason: collision with root package name */
    private String f29428u;

    /* renamed from: v  reason: collision with root package name */
    private String f29429v;

    /* renamed from: w  reason: collision with root package name */
    private Map f29430w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public o a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            o oVar = new o();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1650269616:
                        if (m02.equals("fragment")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1077554975:
                        if (m02.equals("method")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 100589:
                        if (m02.equals("env")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 116079:
                        if (m02.equals("url")) {
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
                    case 106069776:
                        if (m02.equals("other")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 795307910:
                        if (m02.equals("headers")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 952189583:
                        if (m02.equals("cookies")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1252988030:
                        if (m02.equals("body_size")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1595298664:
                        if (m02.equals("query_string")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1980646230:
                        if (m02.equals("api_target")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        oVar.f29428u = e3Var.r1();
                        break;
                    case 1:
                        oVar.f29420e = e3Var.r1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.V1();
                        if (map == null) {
                            break;
                        } else {
                            oVar.f29425r = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        oVar.f29419d = e3Var.r1();
                        break;
                    case 4:
                        oVar.f29422o = e3Var.V1();
                        break;
                    case 5:
                        Map map2 = (Map) e3Var.V1();
                        if (map2 == null) {
                            break;
                        } else {
                            oVar.f29427t = io.sentry.util.c.b(map2);
                            break;
                        }
                    case 6:
                        Map map3 = (Map) e3Var.V1();
                        if (map3 == null) {
                            break;
                        } else {
                            oVar.f29424q = io.sentry.util.c.b(map3);
                            break;
                        }
                    case 7:
                        oVar.f29423p = e3Var.r1();
                        break;
                    case '\b':
                        oVar.f29426s = e3Var.m1();
                        break;
                    case '\t':
                        oVar.f29421i = e3Var.r1();
                        break;
                    case '\n':
                        oVar.f29429v = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            oVar.m(concurrentHashMap);
            e3Var.z();
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
            if (io.sentry.util.y.a(this.f29419d, oVar.f29419d) && io.sentry.util.y.a(this.f29420e, oVar.f29420e) && io.sentry.util.y.a(this.f29421i, oVar.f29421i) && io.sentry.util.y.a(this.f29423p, oVar.f29423p) && io.sentry.util.y.a(this.f29424q, oVar.f29424q) && io.sentry.util.y.a(this.f29425r, oVar.f29425r) && io.sentry.util.y.a(this.f29426s, oVar.f29426s) && io.sentry.util.y.a(this.f29428u, oVar.f29428u) && io.sentry.util.y.a(this.f29429v, oVar.f29429v)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29419d, this.f29420e, this.f29421i, this.f29423p, this.f29424q, this.f29425r, this.f29426s, this.f29428u, this.f29429v);
    }

    public Map l() {
        return this.f29424q;
    }

    public void m(Map map) {
        this.f29430w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29419d != null) {
            f3Var.e("url").f(this.f29419d);
        }
        if (this.f29420e != null) {
            f3Var.e("method").f(this.f29420e);
        }
        if (this.f29421i != null) {
            f3Var.e("query_string").f(this.f29421i);
        }
        if (this.f29422o != null) {
            f3Var.e("data").j(iLogger, this.f29422o);
        }
        if (this.f29423p != null) {
            f3Var.e("cookies").f(this.f29423p);
        }
        if (this.f29424q != null) {
            f3Var.e("headers").j(iLogger, this.f29424q);
        }
        if (this.f29425r != null) {
            f3Var.e("env").j(iLogger, this.f29425r);
        }
        if (this.f29427t != null) {
            f3Var.e("other").j(iLogger, this.f29427t);
        }
        if (this.f29428u != null) {
            f3Var.e("fragment").j(iLogger, this.f29428u);
        }
        if (this.f29426s != null) {
            f3Var.e("body_size").j(iLogger, this.f29426s);
        }
        if (this.f29429v != null) {
            f3Var.e("api_target").j(iLogger, this.f29429v);
        }
        Map map = this.f29430w;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29430w.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public o(o oVar) {
        this.f29419d = oVar.f29419d;
        this.f29423p = oVar.f29423p;
        this.f29420e = oVar.f29420e;
        this.f29421i = oVar.f29421i;
        this.f29424q = io.sentry.util.c.b(oVar.f29424q);
        this.f29425r = io.sentry.util.c.b(oVar.f29425r);
        this.f29427t = io.sentry.util.c.b(oVar.f29427t);
        this.f29430w = io.sentry.util.c.b(oVar.f29430w);
        this.f29422o = oVar.f29422o;
        this.f29428u = oVar.f29428u;
        this.f29426s = oVar.f29426s;
        this.f29429v = oVar.f29429v;
    }
}
