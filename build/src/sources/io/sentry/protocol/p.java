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
    private String f30430d;

    /* renamed from: e  reason: collision with root package name */
    private Map f30431e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f30432i;

    /* renamed from: o  reason: collision with root package name */
    private Long f30433o;

    /* renamed from: p  reason: collision with root package name */
    private Object f30434p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30435q;

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
                        pVar.f30432i = e3Var.j1();
                        break;
                    case 1:
                        pVar.f30434p = e3Var.V1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.V1();
                        if (map == null) {
                            break;
                        } else {
                            pVar.f30431e = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        pVar.f30430d = e3Var.r1();
                        break;
                    case 4:
                        pVar.f30433o = e3Var.m1();
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
        this.f30435q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30430d != null) {
            f3Var.e("cookies").f(this.f30430d);
        }
        if (this.f30431e != null) {
            f3Var.e("headers").j(iLogger, this.f30431e);
        }
        if (this.f30432i != null) {
            f3Var.e("status_code").j(iLogger, this.f30432i);
        }
        if (this.f30433o != null) {
            f3Var.e("body_size").j(iLogger, this.f30433o);
        }
        if (this.f30434p != null) {
            f3Var.e("data").j(iLogger, this.f30434p);
        }
        Map map = this.f30435q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30435q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public p(p pVar) {
        this.f30430d = pVar.f30430d;
        this.f30431e = io.sentry.util.c.b(pVar.f30431e);
        this.f30435q = io.sentry.util.c.b(pVar.f30435q);
        this.f30432i = pVar.f30432i;
        this.f30433o = pVar.f30433o;
        this.f30434p = pVar.f30434p;
    }
}
