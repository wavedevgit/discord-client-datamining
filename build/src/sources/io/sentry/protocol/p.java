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
    private String f30012d;

    /* renamed from: e  reason: collision with root package name */
    private Map f30013e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f30014i;

    /* renamed from: o  reason: collision with root package name */
    private Long f30015o;

    /* renamed from: p  reason: collision with root package name */
    private Object f30016p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30017q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public p a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            p pVar = new p();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -891699686:
                        if (m02.equals("status_code")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3076010:
                        if (m02.equals("data")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 795307910:
                        if (m02.equals("headers")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 952189583:
                        if (m02.equals("cookies")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 1252988030:
                        if (m02.equals("body_size")) {
                            c10 = 4;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        pVar.f30014i = e3Var.k1();
                        break;
                    case 1:
                        pVar.f30016p = e3Var.V1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.V1();
                        if (map == null) {
                            break;
                        } else {
                            pVar.f30013e = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        pVar.f30012d = e3Var.r1();
                        break;
                    case 4:
                        pVar.f30015o = e3Var.m1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
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
        this.f30017q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30012d != null) {
            f3Var.e("cookies").f(this.f30012d);
        }
        if (this.f30013e != null) {
            f3Var.e("headers").j(iLogger, this.f30013e);
        }
        if (this.f30014i != null) {
            f3Var.e("status_code").j(iLogger, this.f30014i);
        }
        if (this.f30015o != null) {
            f3Var.e("body_size").j(iLogger, this.f30015o);
        }
        if (this.f30016p != null) {
            f3Var.e("data").j(iLogger, this.f30016p);
        }
        Map map = this.f30017q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30017q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public p(p pVar) {
        this.f30012d = pVar.f30012d;
        this.f30013e = io.sentry.util.c.b(pVar.f30013e);
        this.f30017q = io.sentry.util.c.b(pVar.f30017q);
        this.f30014i = pVar.f30014i;
        this.f30015o = pVar.f30015o;
        this.f30016p = pVar.f30016p;
    }
}
