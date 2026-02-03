package io.sentry.rrweb;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.rrweb.b;
import io.sentry.util.y;
import io.sentry.w1;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends b implements w1 {

    /* renamed from: i  reason: collision with root package name */
    private String f30600i;

    /* renamed from: o  reason: collision with root package name */
    private int f30601o;

    /* renamed from: p  reason: collision with root package name */
    private int f30602p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30603q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30604r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(g gVar, e3 e3Var, ILogger iLogger) {
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                int i10 = 0;
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1221029593:
                        if (l02.equals("height")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3211051:
                        if (l02.equals("href")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 113126854:
                        if (l02.equals("width")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        Integer k12 = e3Var.k1();
                        if (k12 != null) {
                            i10 = k12.intValue();
                        }
                        gVar.f30601o = i10;
                        break;
                    case 1:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            r12 = "";
                        }
                        gVar.f30600i = r12;
                        break;
                    case 2:
                        Integer k13 = e3Var.k1();
                        if (k13 != null) {
                            i10 = k13.intValue();
                        }
                        gVar.f30602p = i10;
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            gVar.k(concurrentHashMap);
            e3Var.y();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public g a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            g gVar = new g();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("data")) {
                    if (!aVar.a(gVar, l02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                    }
                } else {
                    c(gVar, e3Var, iLogger);
                }
            }
            gVar.m(hashMap);
            e3Var.y();
            return gVar;
        }
    }

    public g() {
        super(c.Meta);
        this.f30600i = "";
    }

    private void j(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("href").f(this.f30600i);
        f3Var.e("height").b(this.f30601o);
        f3Var.e("width").b(this.f30602p);
        Map map = this.f30603q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30603q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    @Override // io.sentry.rrweb.b
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || g.class != obj.getClass() || !super.equals(obj)) {
            return false;
        }
        g gVar = (g) obj;
        if (this.f30601o == gVar.f30601o && this.f30602p == gVar.f30602p && y.a(this.f30600i, gVar.f30600i)) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.rrweb.b
    public int hashCode() {
        return y.b(Integer.valueOf(super.hashCode()), this.f30600i, Integer.valueOf(this.f30601o), Integer.valueOf(this.f30602p));
    }

    public void k(Map map) {
        this.f30604r = map;
    }

    public void l(int i10) {
        this.f30601o = i10;
    }

    public void m(Map map) {
        this.f30603q = map;
    }

    public void n(int i10) {
        this.f30602p = i10;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        new b.C0405b().a(this, f3Var, iLogger);
        f3Var.e("data");
        j(f3Var, iLogger);
        f3Var.y();
    }
}
