package io.sentry.rrweb;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.rrweb.b;
import io.sentry.w1;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends b implements w1 {

    /* renamed from: i  reason: collision with root package name */
    private String f30563i;

    /* renamed from: o  reason: collision with root package name */
    private String f30564o;

    /* renamed from: p  reason: collision with root package name */
    private String f30565p;

    /* renamed from: q  reason: collision with root package name */
    private double f30566q;

    /* renamed from: r  reason: collision with root package name */
    private double f30567r;

    /* renamed from: s  reason: collision with root package name */
    private Map f30568s;

    /* renamed from: t  reason: collision with root package name */
    private Map f30569t;

    /* renamed from: u  reason: collision with root package name */
    private Map f30570u;

    /* renamed from: v  reason: collision with root package name */
    private Map f30571v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(i iVar, e3 e3Var, ILogger iLogger) {
            e3Var.u();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("payload")) {
                    if (!o02.equals("tag")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                    } else {
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            r12 = "";
                        }
                        iVar.f30563i = r12;
                    }
                } else {
                    d(iVar, e3Var, iLogger);
                }
            }
            iVar.p(concurrentHashMap);
            e3Var.D();
        }

        private void d(i iVar, e3 e3Var, ILogger iLogger) {
            e3Var.u();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1724546052:
                        if (o02.equals("description")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -356088197:
                        if (o02.equals("endTimestamp")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -299216172:
                        if (o02.equals("startTimestamp")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3553:
                        if (o02.equals("op")) {
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
                }
                switch (c10) {
                    case 0:
                        iVar.f30565p = e3Var.r1();
                        break;
                    case 1:
                        iVar.f30567r = e3Var.nextDouble();
                        break;
                    case 2:
                        iVar.f30566q = e3Var.nextDouble();
                        break;
                    case 3:
                        iVar.f30564o = e3Var.r1();
                        break;
                    case 4:
                        Map b10 = io.sentry.util.c.b((Map) e3Var.Z1());
                        if (b10 == null) {
                            break;
                        } else {
                            iVar.f30568s = b10;
                            break;
                        }
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            iVar.t(concurrentHashMap);
            e3Var.D();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public i a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            i iVar = new i();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("data")) {
                    if (!aVar.a(iVar, o02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
                    }
                } else {
                    c(iVar, e3Var, iLogger);
                }
            }
            iVar.v(hashMap);
            e3Var.D();
            return iVar;
        }
    }

    public i() {
        super(c.Custom);
        this.f30563i = "performanceSpan";
    }

    private void m(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("tag").f(this.f30563i);
        f3Var.e("payload");
        n(f3Var, iLogger);
        Map map = this.f30571v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30571v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    private void n(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f30564o != null) {
            f3Var.e("op").f(this.f30564o);
        }
        if (this.f30565p != null) {
            f3Var.e("description").f(this.f30565p);
        }
        f3Var.e("startTimestamp").j(iLogger, BigDecimal.valueOf(this.f30566q));
        f3Var.e("endTimestamp").j(iLogger, BigDecimal.valueOf(this.f30567r));
        if (this.f30568s != null) {
            f3Var.e("data").j(iLogger, this.f30568s);
        }
        Map map = this.f30570u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30570u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void o(Map map) {
        ConcurrentHashMap concurrentHashMap;
        if (map == null) {
            concurrentHashMap = null;
        } else {
            concurrentHashMap = new ConcurrentHashMap(map);
        }
        this.f30568s = concurrentHashMap;
    }

    public void p(Map map) {
        this.f30571v = map;
    }

    public void q(String str) {
        this.f30565p = str;
    }

    public void r(double d10) {
        this.f30567r = d10;
    }

    public void s(String str) {
        this.f30564o = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new b.C0407b().a(this, f3Var, iLogger);
        f3Var.e("data");
        m(f3Var, iLogger);
        Map map = this.f30569t;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30569t.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void t(Map map) {
        this.f30570u = map;
    }

    public void u(double d10) {
        this.f30566q = d10;
    }

    public void v(Map map) {
        this.f30569t = map;
    }
}
