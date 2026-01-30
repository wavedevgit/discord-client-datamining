package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f30446d;

    /* renamed from: e  reason: collision with root package name */
    private Map f30447e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f30448i;

    /* renamed from: o  reason: collision with root package name */
    private Long f30449o;

    /* renamed from: p  reason: collision with root package name */
    private Object f30450p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30451q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public p a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            p pVar = new p();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -891699686:
                        if (l02.equals("status_code")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3076010:
                        if (l02.equals("data")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 795307910:
                        if (l02.equals("headers")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 952189583:
                        if (l02.equals("cookies")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 1252988030:
                        if (l02.equals("body_size")) {
                            c10 = 4;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        pVar.f30448i = e3Var.j1();
                        break;
                    case 1:
                        pVar.f30450p = e3Var.V1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.V1();
                        if (map == null) {
                            break;
                        } else {
                            pVar.f30447e = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        pVar.f30446d = e3Var.r1();
                        break;
                    case 4:
                        pVar.f30449o = e3Var.m1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            pVar.f(concurrentHashMap);
            e3Var.y();
            return pVar;
        }
    }

    public p() {
    }

    public void f(Map map) {
        this.f30451q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30446d != null) {
            f3Var.e("cookies").f(this.f30446d);
        }
        if (this.f30447e != null) {
            f3Var.e("headers").j(iLogger, this.f30447e);
        }
        if (this.f30448i != null) {
            f3Var.e("status_code").j(iLogger, this.f30448i);
        }
        if (this.f30449o != null) {
            f3Var.e("body_size").j(iLogger, this.f30449o);
        }
        if (this.f30450p != null) {
            f3Var.e("data").j(iLogger, this.f30450p);
        }
        Map map = this.f30451q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30451q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public p(p pVar) {
        this.f30446d = pVar.f30446d;
        this.f30447e = io.sentry.util.c.b(pVar.f30447e);
        this.f30451q = io.sentry.util.c.b(pVar.f30451q);
        this.f30448i = pVar.f30448i;
        this.f30449o = pVar.f30449o;
        this.f30450p = pVar.f30450p;
    }
}
