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
    private String f29431d;

    /* renamed from: e  reason: collision with root package name */
    private Map f29432e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f29433i;

    /* renamed from: o  reason: collision with root package name */
    private Long f29434o;

    /* renamed from: p  reason: collision with root package name */
    private Object f29435p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29436q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public p a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
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
                        pVar.f29433i = e3Var.k1();
                        break;
                    case 1:
                        pVar.f29435p = e3Var.V1();
                        break;
                    case 2:
                        Map map = (Map) e3Var.V1();
                        if (map == null) {
                            break;
                        } else {
                            pVar.f29432e = io.sentry.util.c.b(map);
                            break;
                        }
                    case 3:
                        pVar.f29431d = e3Var.r1();
                        break;
                    case 4:
                        pVar.f29434o = e3Var.m1();
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
            e3Var.z();
            return pVar;
        }
    }

    public p() {
    }

    public void f(Map map) {
        this.f29436q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29431d != null) {
            f3Var.e("cookies").f(this.f29431d);
        }
        if (this.f29432e != null) {
            f3Var.e("headers").j(iLogger, this.f29432e);
        }
        if (this.f29433i != null) {
            f3Var.e("status_code").j(iLogger, this.f29433i);
        }
        if (this.f29434o != null) {
            f3Var.e("body_size").j(iLogger, this.f29434o);
        }
        if (this.f29435p != null) {
            f3Var.e("data").j(iLogger, this.f29435p);
        }
        Map map = this.f29436q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29436q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public p(p pVar) {
        this.f29431d = pVar.f29431d;
        this.f29432e = io.sentry.util.c.b(pVar.f29432e);
        this.f29436q = io.sentry.util.c.b(pVar.f29436q);
        this.f29433i = pVar.f29433i;
        this.f29434o = pVar.f29434o;
        this.f29435p = pVar.f29435p;
    }
}
