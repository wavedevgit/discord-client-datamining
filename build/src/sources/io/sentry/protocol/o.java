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
    private String f28563d;

    /* renamed from: e  reason: collision with root package name */
    private String f28564e;

    /* renamed from: i  reason: collision with root package name */
    private String f28565i;

    /* renamed from: o  reason: collision with root package name */
    private Object f28566o;

    /* renamed from: p  reason: collision with root package name */
    private String f28567p;

    /* renamed from: q  reason: collision with root package name */
    private Map f28568q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28569r;

    /* renamed from: s  reason: collision with root package name */
    private Long f28570s;

    /* renamed from: t  reason: collision with root package name */
    private Map f28571t;

    /* renamed from: u  reason: collision with root package name */
    private String f28572u;

    /* renamed from: v  reason: collision with root package name */
    private String f28573v;

    /* renamed from: w  reason: collision with root package name */
    private Map f28574w;

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
                        oVar.f28572u = e3Var.q1();
                        break;
                    case 1:
                        oVar.f28564e = e3Var.q1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.U1();
                        if (map == null) {
                            break;
                        } else {
                            oVar.f28569r = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        oVar.f28563d = e3Var.q1();
                        break;
                    case 4:
                        oVar.f28566o = e3Var.U1();
                        break;
                    case 5:
                        Map map2 = (Map) e3Var.U1();
                        if (map2 == null) {
                            break;
                        } else {
                            oVar.f28571t = io.sentry.util.c.b(map2);
                            break;
                        }
                    case 6:
                        Map map3 = (Map) e3Var.U1();
                        if (map3 == null) {
                            break;
                        } else {
                            oVar.f28568q = io.sentry.util.c.b(map3);
                            break;
                        }
                    case 7:
                        oVar.f28567p = e3Var.q1();
                        break;
                    case '\b':
                        oVar.f28570s = e3Var.l1();
                        break;
                    case '\t':
                        oVar.f28565i = e3Var.q1();
                        break;
                    case '\n':
                        oVar.f28573v = e3Var.q1();
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
            if (io.sentry.util.y.a(this.f28563d, oVar.f28563d) && io.sentry.util.y.a(this.f28564e, oVar.f28564e) && io.sentry.util.y.a(this.f28565i, oVar.f28565i) && io.sentry.util.y.a(this.f28567p, oVar.f28567p) && io.sentry.util.y.a(this.f28568q, oVar.f28568q) && io.sentry.util.y.a(this.f28569r, oVar.f28569r) && io.sentry.util.y.a(this.f28570s, oVar.f28570s) && io.sentry.util.y.a(this.f28572u, oVar.f28572u) && io.sentry.util.y.a(this.f28573v, oVar.f28573v)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28563d, this.f28564e, this.f28565i, this.f28567p, this.f28568q, this.f28569r, this.f28570s, this.f28572u, this.f28573v);
    }

    public Map l() {
        return this.f28568q;
    }

    public void m(Map map) {
        this.f28574w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28563d != null) {
            f3Var.e("url").f(this.f28563d);
        }
        if (this.f28564e != null) {
            f3Var.e("method").f(this.f28564e);
        }
        if (this.f28565i != null) {
            f3Var.e("query_string").f(this.f28565i);
        }
        if (this.f28566o != null) {
            f3Var.e("data").j(iLogger, this.f28566o);
        }
        if (this.f28567p != null) {
            f3Var.e("cookies").f(this.f28567p);
        }
        if (this.f28568q != null) {
            f3Var.e("headers").j(iLogger, this.f28568q);
        }
        if (this.f28569r != null) {
            f3Var.e("env").j(iLogger, this.f28569r);
        }
        if (this.f28571t != null) {
            f3Var.e("other").j(iLogger, this.f28571t);
        }
        if (this.f28572u != null) {
            f3Var.e("fragment").j(iLogger, this.f28572u);
        }
        if (this.f28570s != null) {
            f3Var.e("body_size").j(iLogger, this.f28570s);
        }
        if (this.f28573v != null) {
            f3Var.e("api_target").j(iLogger, this.f28573v);
        }
        Map map = this.f28574w;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28574w.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public o(o oVar) {
        this.f28563d = oVar.f28563d;
        this.f28567p = oVar.f28567p;
        this.f28564e = oVar.f28564e;
        this.f28565i = oVar.f28565i;
        this.f28568q = io.sentry.util.c.b(oVar.f28568q);
        this.f28569r = io.sentry.util.c.b(oVar.f28569r);
        this.f28571t = io.sentry.util.c.b(oVar.f28571t);
        this.f28574w = io.sentry.util.c.b(oVar.f28574w);
        this.f28566o = oVar.f28566o;
        this.f28572u = oVar.f28572u;
        this.f28570s = oVar.f28570s;
        this.f28573v = oVar.f28573v;
    }
}
