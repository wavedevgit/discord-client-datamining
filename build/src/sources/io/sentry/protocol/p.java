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
    private String f28823d;

    /* renamed from: e  reason: collision with root package name */
    private Map f28824e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f28825i;

    /* renamed from: o  reason: collision with root package name */
    private Long f28826o;

    /* renamed from: p  reason: collision with root package name */
    private Object f28827p;

    /* renamed from: q  reason: collision with root package name */
    private Map f28828q;

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
                        pVar.f28825i = e3Var.g1();
                        break;
                    case 1:
                        pVar.f28827p = e3Var.T1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.T1();
                        if (map == null) {
                            break;
                        } else {
                            pVar.f28824e = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        pVar.f28823d = e3Var.m1();
                        break;
                    case 4:
                        pVar.f28826o = e3Var.i1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap, o02);
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
        this.f28828q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28823d != null) {
            f3Var.e("cookies").f(this.f28823d);
        }
        if (this.f28824e != null) {
            f3Var.e("headers").j(iLogger, this.f28824e);
        }
        if (this.f28825i != null) {
            f3Var.e("status_code").j(iLogger, this.f28825i);
        }
        if (this.f28826o != null) {
            f3Var.e("body_size").j(iLogger, this.f28826o);
        }
        if (this.f28827p != null) {
            f3Var.e("data").j(iLogger, this.f28827p);
        }
        Map map = this.f28828q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28828q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public p(p pVar) {
        this.f28823d = pVar.f28823d;
        this.f28824e = io.sentry.util.c.b(pVar.f28824e);
        this.f28828q = io.sentry.util.c.b(pVar.f28828q);
        this.f28825i = pVar.f28825i;
        this.f28826o = pVar.f28826o;
        this.f28827p = pVar.f28827p;
    }
}
