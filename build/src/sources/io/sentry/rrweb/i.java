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
    private String f28859i;

    /* renamed from: o  reason: collision with root package name */
    private String f28860o;

    /* renamed from: p  reason: collision with root package name */
    private String f28861p;

    /* renamed from: q  reason: collision with root package name */
    private double f28862q;

    /* renamed from: r  reason: collision with root package name */
    private double f28863r;

    /* renamed from: s  reason: collision with root package name */
    private Map f28864s;

    /* renamed from: t  reason: collision with root package name */
    private Map f28865t;

    /* renamed from: u  reason: collision with root package name */
    private Map f28866u;

    /* renamed from: v  reason: collision with root package name */
    private Map f28867v;

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
                        String q12 = e3Var.q1();
                        if (q12 == null) {
                            q12 = "";
                        }
                        iVar.f28859i = q12;
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
                        iVar.f28861p = e3Var.q1();
                        break;
                    case 1:
                        iVar.f28863r = e3Var.nextDouble();
                        break;
                    case 2:
                        iVar.f28862q = e3Var.nextDouble();
                        break;
                    case 3:
                        iVar.f28860o = e3Var.q1();
                        break;
                    case 4:
                        Map b10 = io.sentry.util.c.b((Map) e3Var.U1());
                        if (b10 == null) {
                            break;
                        } else {
                            iVar.f28864s = b10;
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
        this.f28859i = "performanceSpan";
    }

    private void m(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("tag").f(this.f28859i);
        f3Var.e("payload");
        n(f3Var, iLogger);
        Map map = this.f28867v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28867v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    private void n(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28860o != null) {
            f3Var.e("op").f(this.f28860o);
        }
        if (this.f28861p != null) {
            f3Var.e("description").f(this.f28861p);
        }
        f3Var.e("startTimestamp").j(iLogger, BigDecimal.valueOf(this.f28862q));
        f3Var.e("endTimestamp").j(iLogger, BigDecimal.valueOf(this.f28863r));
        if (this.f28864s != null) {
            f3Var.e("data").j(iLogger, this.f28864s);
        }
        Map map = this.f28866u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28866u.get(str);
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
        this.f28864s = concurrentHashMap;
    }

    public void p(Map map) {
        this.f28867v = map;
    }

    public void q(String str) {
        this.f28861p = str;
    }

    public void r(double d10) {
        this.f28863r = d10;
    }

    public void s(String str) {
        this.f28860o = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new b.C0406b().a(this, f3Var, iLogger);
        f3Var.e("data");
        m(f3Var, iLogger);
        Map map = this.f28865t;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28865t.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void t(Map map) {
        this.f28866u = map;
    }

    public void u(double d10) {
        this.f28862q = d10;
    }

    public void v(Map map) {
        this.f28865t = map;
    }
}
