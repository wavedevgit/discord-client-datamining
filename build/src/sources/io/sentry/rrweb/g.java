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
    private String f29985i;

    /* renamed from: o  reason: collision with root package name */
    private int f29986o;

    /* renamed from: p  reason: collision with root package name */
    private int f29987p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29988q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29989r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(g gVar, e3 e3Var, ILogger iLogger) {
            e3Var.u();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                int i10 = 0;
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1221029593:
                        if (o02.equals("height")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3211051:
                        if (o02.equals("href")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 113126854:
                        if (o02.equals("width")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        Integer l12 = e3Var.l1();
                        if (l12 != null) {
                            i10 = l12.intValue();
                        }
                        gVar.f29986o = i10;
                        break;
                    case 1:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            r12 = "";
                        }
                        gVar.f29985i = r12;
                        break;
                    case 2:
                        Integer l13 = e3Var.l1();
                        if (l13 != null) {
                            i10 = l13.intValue();
                        }
                        gVar.f29987p = i10;
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            gVar.k(concurrentHashMap);
            e3Var.D();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public g a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            g gVar = new g();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("data")) {
                    if (!aVar.a(gVar, o02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
                    }
                } else {
                    c(gVar, e3Var, iLogger);
                }
            }
            gVar.m(hashMap);
            e3Var.D();
            return gVar;
        }
    }

    public g() {
        super(c.Meta);
        this.f29985i = "";
    }

    private void j(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("href").f(this.f29985i);
        f3Var.e("height").b(this.f29986o);
        f3Var.e("width").b(this.f29987p);
        Map map = this.f29988q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29988q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
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
        if (this.f29986o == gVar.f29986o && this.f29987p == gVar.f29987p && y.a(this.f29985i, gVar.f29985i)) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.rrweb.b
    public int hashCode() {
        return y.b(Integer.valueOf(super.hashCode()), this.f29985i, Integer.valueOf(this.f29986o), Integer.valueOf(this.f29987p));
    }

    public void k(Map map) {
        this.f29989r = map;
    }

    public void l(int i10) {
        this.f29986o = i10;
    }

    public void m(Map map) {
        this.f29988q = map;
    }

    public void n(int i10) {
        this.f29987p = i10;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new b.C0407b().a(this, f3Var, iLogger);
        f3Var.e("data");
        j(f3Var, iLogger);
        f3Var.D();
    }
}
