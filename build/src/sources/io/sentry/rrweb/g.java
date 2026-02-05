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
    private String f29658i;

    /* renamed from: o  reason: collision with root package name */
    private int f29659o;

    /* renamed from: p  reason: collision with root package name */
    private int f29660p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29661q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29662r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(g gVar, e3 e3Var, ILogger iLogger) {
            e3Var.s();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                int i10 = 0;
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1221029593:
                        if (m02.equals("height")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3211051:
                        if (m02.equals("href")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 113126854:
                        if (m02.equals("width")) {
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
                        gVar.f29659o = i10;
                        break;
                    case 1:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            r12 = "";
                        }
                        gVar.f29658i = r12;
                        break;
                    case 2:
                        Integer k13 = e3Var.k1();
                        if (k13 != null) {
                            i10 = k13.intValue();
                        }
                        gVar.f29660p = i10;
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            gVar.k(concurrentHashMap);
            e3Var.z();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public g a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            g gVar = new g();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("data")) {
                    if (!aVar.a(gVar, m02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                    }
                } else {
                    c(gVar, e3Var, iLogger);
                }
            }
            gVar.m(hashMap);
            e3Var.z();
            return gVar;
        }
    }

    public g() {
        super(c.Meta);
        this.f29658i = "";
    }

    private void j(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("href").f(this.f29658i);
        f3Var.e("height").b(this.f29659o);
        f3Var.e("width").b(this.f29660p);
        Map map = this.f29661q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29661q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
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
        if (this.f29659o == gVar.f29659o && this.f29660p == gVar.f29660p && y.a(this.f29658i, gVar.f29658i)) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.rrweb.b
    public int hashCode() {
        return y.b(Integer.valueOf(super.hashCode()), this.f29658i, Integer.valueOf(this.f29659o), Integer.valueOf(this.f29660p));
    }

    public void k(Map map) {
        this.f29662r = map;
    }

    public void l(int i10) {
        this.f29659o = i10;
    }

    public void m(Map map) {
        this.f29661q = map;
    }

    public void n(int i10) {
        this.f29660p = i10;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        new b.C0412b().a(this, f3Var, iLogger);
        f3Var.e("data");
        j(f3Var, iLogger);
        f3Var.z();
    }
}
