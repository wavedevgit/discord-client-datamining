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
    private String f28611d;

    /* renamed from: e  reason: collision with root package name */
    private String f28612e;

    /* renamed from: i  reason: collision with root package name */
    private String f28613i;

    /* renamed from: o  reason: collision with root package name */
    private Object f28614o;

    /* renamed from: p  reason: collision with root package name */
    private String f28615p;

    /* renamed from: q  reason: collision with root package name */
    private Map f28616q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28617r;

    /* renamed from: s  reason: collision with root package name */
    private Long f28618s;

    /* renamed from: t  reason: collision with root package name */
    private Map f28619t;

    /* renamed from: u  reason: collision with root package name */
    private String f28620u;

    /* renamed from: v  reason: collision with root package name */
    private String f28621v;

    /* renamed from: w  reason: collision with root package name */
    private Map f28622w;

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
                        oVar.f28620u = e3Var.q1();
                        break;
                    case 1:
                        oVar.f28612e = e3Var.q1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.U1();
                        if (map == null) {
                            break;
                        } else {
                            oVar.f28617r = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        oVar.f28611d = e3Var.q1();
                        break;
                    case 4:
                        oVar.f28614o = e3Var.U1();
                        break;
                    case 5:
                        Map map2 = (Map) e3Var.U1();
                        if (map2 == null) {
                            break;
                        } else {
                            oVar.f28619t = io.sentry.util.c.b(map2);
                            break;
                        }
                    case 6:
                        Map map3 = (Map) e3Var.U1();
                        if (map3 == null) {
                            break;
                        } else {
                            oVar.f28616q = io.sentry.util.c.b(map3);
                            break;
                        }
                    case 7:
                        oVar.f28615p = e3Var.q1();
                        break;
                    case '\b':
                        oVar.f28618s = e3Var.l1();
                        break;
                    case '\t':
                        oVar.f28613i = e3Var.q1();
                        break;
                    case '\n':
                        oVar.f28621v = e3Var.q1();
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
            if (io.sentry.util.y.a(this.f28611d, oVar.f28611d) && io.sentry.util.y.a(this.f28612e, oVar.f28612e) && io.sentry.util.y.a(this.f28613i, oVar.f28613i) && io.sentry.util.y.a(this.f28615p, oVar.f28615p) && io.sentry.util.y.a(this.f28616q, oVar.f28616q) && io.sentry.util.y.a(this.f28617r, oVar.f28617r) && io.sentry.util.y.a(this.f28618s, oVar.f28618s) && io.sentry.util.y.a(this.f28620u, oVar.f28620u) && io.sentry.util.y.a(this.f28621v, oVar.f28621v)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28611d, this.f28612e, this.f28613i, this.f28615p, this.f28616q, this.f28617r, this.f28618s, this.f28620u, this.f28621v);
    }

    public Map l() {
        return this.f28616q;
    }

    public void m(Map map) {
        this.f28622w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28611d != null) {
            f3Var.e("url").f(this.f28611d);
        }
        if (this.f28612e != null) {
            f3Var.e("method").f(this.f28612e);
        }
        if (this.f28613i != null) {
            f3Var.e("query_string").f(this.f28613i);
        }
        if (this.f28614o != null) {
            f3Var.e("data").j(iLogger, this.f28614o);
        }
        if (this.f28615p != null) {
            f3Var.e("cookies").f(this.f28615p);
        }
        if (this.f28616q != null) {
            f3Var.e("headers").j(iLogger, this.f28616q);
        }
        if (this.f28617r != null) {
            f3Var.e("env").j(iLogger, this.f28617r);
        }
        if (this.f28619t != null) {
            f3Var.e("other").j(iLogger, this.f28619t);
        }
        if (this.f28620u != null) {
            f3Var.e("fragment").j(iLogger, this.f28620u);
        }
        if (this.f28618s != null) {
            f3Var.e("body_size").j(iLogger, this.f28618s);
        }
        if (this.f28621v != null) {
            f3Var.e("api_target").j(iLogger, this.f28621v);
        }
        Map map = this.f28622w;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28622w.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public o(o oVar) {
        this.f28611d = oVar.f28611d;
        this.f28615p = oVar.f28615p;
        this.f28612e = oVar.f28612e;
        this.f28613i = oVar.f28613i;
        this.f28616q = io.sentry.util.c.b(oVar.f28616q);
        this.f28617r = io.sentry.util.c.b(oVar.f28617r);
        this.f28619t = io.sentry.util.c.b(oVar.f28619t);
        this.f28622w = io.sentry.util.c.b(oVar.f28622w);
        this.f28614o = oVar.f28614o;
        this.f28620u = oVar.f28620u;
        this.f28618s = oVar.f28618s;
        this.f28621v = oVar.f28621v;
    }
}
