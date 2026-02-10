package io.sentry;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private int f29295d;

    /* renamed from: e  reason: collision with root package name */
    private String f29296e;

    /* renamed from: i  reason: collision with root package name */
    private String f29297i;

    /* renamed from: o  reason: collision with root package name */
    private String f29298o;

    /* renamed from: p  reason: collision with root package name */
    private Long f29299p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29300q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public w6 a(e3 e3Var, ILogger iLogger) {
            w6 w6Var = new w6();
            e3Var.u();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1877165340:
                        if (o02.equals("package_name")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1562235024:
                        if (o02.equals("thread_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1147692044:
                        if (o02.equals("address")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -290474766:
                        if (o02.equals("class_name")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3575610:
                        if (o02.equals("type")) {
                            c10 = 4;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        w6Var.f29297i = e3Var.m1();
                        break;
                    case 1:
                        w6Var.f29299p = e3Var.i1();
                        break;
                    case 2:
                        w6Var.f29296e = e3Var.m1();
                        break;
                    case 3:
                        w6Var.f29298o = e3Var.m1();
                        break;
                    case 4:
                        w6Var.f29295d = e3Var.nextInt();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            w6Var.m(concurrentHashMap);
            e3Var.D();
            return w6Var;
        }
    }

    public w6() {
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && w6.class == obj.getClass()) {
            return io.sentry.util.y.a(this.f29296e, ((w6) obj).f29296e);
        }
        return false;
    }

    public String f() {
        return this.f29296e;
    }

    public int g() {
        return this.f29295d;
    }

    public void h(String str) {
        this.f29296e = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29296e);
    }

    public void i(String str) {
        this.f29298o = str;
    }

    public void j(String str) {
        this.f29297i = str;
    }

    public void k(Long l10) {
        this.f29299p = l10;
    }

    public void l(int i10) {
        this.f29295d = i10;
    }

    public void m(Map map) {
        this.f29300q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("type").b(this.f29295d);
        if (this.f29296e != null) {
            f3Var.e("address").f(this.f29296e);
        }
        if (this.f29297i != null) {
            f3Var.e("package_name").f(this.f29297i);
        }
        if (this.f29298o != null) {
            f3Var.e("class_name").f(this.f29298o);
        }
        if (this.f29299p != null) {
            f3Var.e("thread_id").i(this.f29299p);
        }
        Map map = this.f29300q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29300q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public w6(w6 w6Var) {
        this.f29295d = w6Var.f29295d;
        this.f29296e = w6Var.f29296e;
        this.f29297i = w6Var.f29297i;
        this.f29298o = w6Var.f29298o;
        this.f29299p = w6Var.f29299p;
        this.f29300q = io.sentry.util.c.b(w6Var.f29300q);
    }
}
