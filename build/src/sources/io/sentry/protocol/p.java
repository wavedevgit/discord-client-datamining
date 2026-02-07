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
    private String f28623d;

    /* renamed from: e  reason: collision with root package name */
    private Map f28624e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f28625i;

    /* renamed from: o  reason: collision with root package name */
    private Long f28626o;

    /* renamed from: p  reason: collision with root package name */
    private Object f28627p;

    /* renamed from: q  reason: collision with root package name */
    private Map f28628q;

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
                        pVar.f28625i = e3Var.j1();
                        break;
                    case 1:
                        pVar.f28627p = e3Var.U1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.U1();
                        if (map == null) {
                            break;
                        } else {
                            pVar.f28624e = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        pVar.f28623d = e3Var.q1();
                        break;
                    case 4:
                        pVar.f28626o = e3Var.l1();
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
        this.f28628q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28623d != null) {
            f3Var.e("cookies").f(this.f28623d);
        }
        if (this.f28624e != null) {
            f3Var.e("headers").j(iLogger, this.f28624e);
        }
        if (this.f28625i != null) {
            f3Var.e("status_code").j(iLogger, this.f28625i);
        }
        if (this.f28626o != null) {
            f3Var.e("body_size").j(iLogger, this.f28626o);
        }
        if (this.f28627p != null) {
            f3Var.e("data").j(iLogger, this.f28627p);
        }
        Map map = this.f28628q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28628q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public p(p pVar) {
        this.f28623d = pVar.f28623d;
        this.f28624e = io.sentry.util.c.b(pVar.f28624e);
        this.f28628q = io.sentry.util.c.b(pVar.f28628q);
        this.f28625i = pVar.f28625i;
        this.f28626o = pVar.f28626o;
        this.f28627p = pVar.f28627p;
    }
}
