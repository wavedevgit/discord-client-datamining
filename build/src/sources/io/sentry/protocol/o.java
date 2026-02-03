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
    private String f30000d;

    /* renamed from: e  reason: collision with root package name */
    private String f30001e;

    /* renamed from: i  reason: collision with root package name */
    private String f30002i;

    /* renamed from: o  reason: collision with root package name */
    private Object f30003o;

    /* renamed from: p  reason: collision with root package name */
    private String f30004p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30005q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30006r;

    /* renamed from: s  reason: collision with root package name */
    private Long f30007s;

    /* renamed from: t  reason: collision with root package name */
    private Map f30008t;

    /* renamed from: u  reason: collision with root package name */
    private String f30009u;

    /* renamed from: v  reason: collision with root package name */
    private String f30010v;

    /* renamed from: w  reason: collision with root package name */
    private Map f30011w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public o a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
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
                        oVar.f30009u = e3Var.r1();
                        break;
                    case 1:
                        oVar.f30001e = e3Var.r1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.V1();
                        if (map == null) {
                            break;
                        } else {
                            oVar.f30006r = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        oVar.f30000d = e3Var.r1();
                        break;
                    case 4:
                        oVar.f30003o = e3Var.V1();
                        break;
                    case 5:
                        Map map2 = (Map) e3Var.V1();
                        if (map2 == null) {
                            break;
                        } else {
                            oVar.f30008t = io.sentry.util.c.b(map2);
                            break;
                        }
                    case 6:
                        Map map3 = (Map) e3Var.V1();
                        if (map3 == null) {
                            break;
                        } else {
                            oVar.f30005q = io.sentry.util.c.b(map3);
                            break;
                        }
                    case 7:
                        oVar.f30004p = e3Var.r1();
                        break;
                    case '\b':
                        oVar.f30007s = e3Var.m1();
                        break;
                    case '\t':
                        oVar.f30002i = e3Var.r1();
                        break;
                    case '\n':
                        oVar.f30010v = e3Var.r1();
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
            if (io.sentry.util.y.a(this.f30000d, oVar.f30000d) && io.sentry.util.y.a(this.f30001e, oVar.f30001e) && io.sentry.util.y.a(this.f30002i, oVar.f30002i) && io.sentry.util.y.a(this.f30004p, oVar.f30004p) && io.sentry.util.y.a(this.f30005q, oVar.f30005q) && io.sentry.util.y.a(this.f30006r, oVar.f30006r) && io.sentry.util.y.a(this.f30007s, oVar.f30007s) && io.sentry.util.y.a(this.f30009u, oVar.f30009u) && io.sentry.util.y.a(this.f30010v, oVar.f30010v)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30000d, this.f30001e, this.f30002i, this.f30004p, this.f30005q, this.f30006r, this.f30007s, this.f30009u, this.f30010v);
    }

    public Map l() {
        return this.f30005q;
    }

    public void m(Map map) {
        this.f30011w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30000d != null) {
            f3Var.e("url").f(this.f30000d);
        }
        if (this.f30001e != null) {
            f3Var.e("method").f(this.f30001e);
        }
        if (this.f30002i != null) {
            f3Var.e("query_string").f(this.f30002i);
        }
        if (this.f30003o != null) {
            f3Var.e("data").j(iLogger, this.f30003o);
        }
        if (this.f30004p != null) {
            f3Var.e("cookies").f(this.f30004p);
        }
        if (this.f30005q != null) {
            f3Var.e("headers").j(iLogger, this.f30005q);
        }
        if (this.f30006r != null) {
            f3Var.e("env").j(iLogger, this.f30006r);
        }
        if (this.f30008t != null) {
            f3Var.e("other").j(iLogger, this.f30008t);
        }
        if (this.f30009u != null) {
            f3Var.e("fragment").j(iLogger, this.f30009u);
        }
        if (this.f30007s != null) {
            f3Var.e("body_size").j(iLogger, this.f30007s);
        }
        if (this.f30010v != null) {
            f3Var.e("api_target").j(iLogger, this.f30010v);
        }
        Map map = this.f30011w;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30011w.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public o(o oVar) {
        this.f30000d = oVar.f30000d;
        this.f30004p = oVar.f30004p;
        this.f30001e = oVar.f30001e;
        this.f30002i = oVar.f30002i;
        this.f30005q = io.sentry.util.c.b(oVar.f30005q);
        this.f30006r = io.sentry.util.c.b(oVar.f30006r);
        this.f30008t = io.sentry.util.c.b(oVar.f30008t);
        this.f30011w = io.sentry.util.c.b(oVar.f30011w);
        this.f30003o = oVar.f30003o;
        this.f30009u = oVar.f30009u;
        this.f30007s = oVar.f30007s;
        this.f30010v = oVar.f30010v;
    }
}
