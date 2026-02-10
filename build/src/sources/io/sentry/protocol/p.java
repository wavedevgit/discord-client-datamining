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
    private String f29758d;

    /* renamed from: e  reason: collision with root package name */
    private Map f29759e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f29760i;

    /* renamed from: o  reason: collision with root package name */
    private Long f29761o;

    /* renamed from: p  reason: collision with root package name */
    private Object f29762p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29763q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public p a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            p pVar = new p();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -891699686:
                        if (o02.equals("status_code")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3076010:
                        if (o02.equals("data")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 795307910:
                        if (o02.equals("headers")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 952189583:
                        if (o02.equals("cookies")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 1252988030:
                        if (o02.equals("body_size")) {
                            c10 = 4;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        pVar.f29760i = e3Var.l1();
                        break;
                    case 1:
                        pVar.f29762p = e3Var.Z1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.Z1();
                        if (map == null) {
                            break;
                        } else {
                            pVar.f29759e = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        pVar.f29758d = e3Var.r1();
                        break;
                    case 4:
                        pVar.f29761o = e3Var.n1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            pVar.f(concurrentHashMap);
            e3Var.D();
            return pVar;
        }
    }

    public p() {
    }

    public void f(Map map) {
        this.f29763q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29758d != null) {
            f3Var.e("cookies").f(this.f29758d);
        }
        if (this.f29759e != null) {
            f3Var.e("headers").j(iLogger, this.f29759e);
        }
        if (this.f29760i != null) {
            f3Var.e("status_code").j(iLogger, this.f29760i);
        }
        if (this.f29761o != null) {
            f3Var.e("body_size").j(iLogger, this.f29761o);
        }
        if (this.f29762p != null) {
            f3Var.e("data").j(iLogger, this.f29762p);
        }
        Map map = this.f29763q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29763q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public p(p pVar) {
        this.f29758d = pVar.f29758d;
        this.f29759e = io.sentry.util.c.b(pVar.f29759e);
        this.f29763q = io.sentry.util.c.b(pVar.f29763q);
        this.f29760i = pVar.f29760i;
        this.f29761o = pVar.f29761o;
        this.f29762p = pVar.f29762p;
    }
}
