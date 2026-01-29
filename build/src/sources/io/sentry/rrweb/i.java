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
    private String f30666i;

    /* renamed from: o  reason: collision with root package name */
    private String f30667o;

    /* renamed from: p  reason: collision with root package name */
    private String f30668p;

    /* renamed from: q  reason: collision with root package name */
    private double f30669q;

    /* renamed from: r  reason: collision with root package name */
    private double f30670r;

    /* renamed from: s  reason: collision with root package name */
    private Map f30671s;

    /* renamed from: t  reason: collision with root package name */
    private Map f30672t;

    /* renamed from: u  reason: collision with root package name */
    private Map f30673u;

    /* renamed from: v  reason: collision with root package name */
    private Map f30674v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(i iVar, e3 e3Var, ILogger iLogger) {
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("payload")) {
                    if (!l02.equals("tag")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                    } else {
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            r12 = "";
                        }
                        iVar.f30666i = r12;
                    }
                } else {
                    d(iVar, e3Var, iLogger);
                }
            }
            iVar.p(concurrentHashMap);
            e3Var.y();
        }

        private void d(i iVar, e3 e3Var, ILogger iLogger) {
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1724546052:
                        if (l02.equals("description")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -356088197:
                        if (l02.equals("endTimestamp")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -299216172:
                        if (l02.equals("startTimestamp")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3553:
                        if (l02.equals("op")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3076010:
                        if (l02.equals("data")) {
                            c10 = 4;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        iVar.f30668p = e3Var.r1();
                        break;
                    case 1:
                        iVar.f30670r = e3Var.nextDouble();
                        break;
                    case 2:
                        iVar.f30669q = e3Var.nextDouble();
                        break;
                    case 3:
                        iVar.f30667o = e3Var.r1();
                        break;
                    case 4:
                        Map b10 = io.sentry.util.c.b((Map) e3Var.V1());
                        if (b10 == null) {
                            break;
                        } else {
                            iVar.f30671s = b10;
                            break;
                        }
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            iVar.t(concurrentHashMap);
            e3Var.y();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public i a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            i iVar = new i();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("data")) {
                    if (!aVar.a(iVar, l02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                    }
                } else {
                    c(iVar, e3Var, iLogger);
                }
            }
            iVar.v(hashMap);
            e3Var.y();
            return iVar;
        }
    }

    public i() {
        super(c.Custom);
        this.f30666i = "performanceSpan";
    }

    private void m(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("tag").f(this.f30666i);
        f3Var.e("payload");
        n(f3Var, iLogger);
        Map map = this.f30674v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30674v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    private void n(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30667o != null) {
            f3Var.e("op").f(this.f30667o);
        }
        if (this.f30668p != null) {
            f3Var.e("description").f(this.f30668p);
        }
        f3Var.e("startTimestamp").j(iLogger, BigDecimal.valueOf(this.f30669q));
        f3Var.e("endTimestamp").j(iLogger, BigDecimal.valueOf(this.f30670r));
        if (this.f30671s != null) {
            f3Var.e("data").j(iLogger, this.f30671s);
        }
        Map map = this.f30673u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30673u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public void o(Map map) {
        ConcurrentHashMap concurrentHashMap;
        if (map == null) {
            concurrentHashMap = null;
        } else {
            concurrentHashMap = new ConcurrentHashMap(map);
        }
        this.f30671s = concurrentHashMap;
    }

    public void p(Map map) {
        this.f30674v = map;
    }

    public void q(String str) {
        this.f30668p = str;
    }

    public void r(double d10) {
        this.f30670r = d10;
    }

    public void s(String str) {
        this.f30667o = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        new b.C0403b().a(this, f3Var, iLogger);
        f3Var.e("data");
        m(f3Var, iLogger);
        Map map = this.f30672t;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30672t.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public void t(Map map) {
        this.f30673u = map;
    }

    public void u(double d10) {
        this.f30669q = d10;
    }

    public void v(Map map) {
        this.f30672t = map;
    }
}
