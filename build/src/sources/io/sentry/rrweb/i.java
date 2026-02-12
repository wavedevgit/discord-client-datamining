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
    private String f29995i;

    /* renamed from: o  reason: collision with root package name */
    private String f29996o;

    /* renamed from: p  reason: collision with root package name */
    private String f29997p;

    /* renamed from: q  reason: collision with root package name */
    private double f29998q;

    /* renamed from: r  reason: collision with root package name */
    private double f29999r;

    /* renamed from: s  reason: collision with root package name */
    private Map f30000s;

    /* renamed from: t  reason: collision with root package name */
    private Map f30001t;

    /* renamed from: u  reason: collision with root package name */
    private Map f30002u;

    /* renamed from: v  reason: collision with root package name */
    private Map f30003v;

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
                        iVar.f29995i = r12;
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
                        iVar.f29997p = e3Var.r1();
                        break;
                    case 1:
                        iVar.f29999r = e3Var.nextDouble();
                        break;
                    case 2:
                        iVar.f29998q = e3Var.nextDouble();
                        break;
                    case 3:
                        iVar.f29996o = e3Var.r1();
                        break;
                    case 4:
                        Map b10 = io.sentry.util.c.b((Map) e3Var.Z1());
                        if (b10 == null) {
                            break;
                        } else {
                            iVar.f30000s = b10;
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
        this.f29995i = "performanceSpan";
    }

    private void m(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("tag").f(this.f29995i);
        f3Var.e("payload");
        n(f3Var, iLogger);
        Map map = this.f30003v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30003v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    private void n(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29996o != null) {
            f3Var.e("op").f(this.f29996o);
        }
        if (this.f29997p != null) {
            f3Var.e("description").f(this.f29997p);
        }
        f3Var.e("startTimestamp").j(iLogger, BigDecimal.valueOf(this.f29998q));
        f3Var.e("endTimestamp").j(iLogger, BigDecimal.valueOf(this.f29999r));
        if (this.f30000s != null) {
            f3Var.e("data").j(iLogger, this.f30000s);
        }
        Map map = this.f30002u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30002u.get(str);
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
        this.f30000s = concurrentHashMap;
    }

    public void p(Map map) {
        this.f30003v = map;
    }

    public void q(String str) {
        this.f29997p = str;
    }

    public void r(double d10) {
        this.f29999r = d10;
    }

    public void s(String str) {
        this.f29996o = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new b.C0407b().a(this, f3Var, iLogger);
        f3Var.e("data");
        m(f3Var, iLogger);
        Map map = this.f30001t;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30001t.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void t(Map map) {
        this.f30002u = map;
    }

    public void u(double d10) {
        this.f29998q = d10;
    }

    public void v(Map map) {
        this.f30001t = map;
    }
}
