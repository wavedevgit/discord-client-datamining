package io.sentry;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private int f30231d;

    /* renamed from: e  reason: collision with root package name */
    private String f30232e;

    /* renamed from: i  reason: collision with root package name */
    private String f30233i;

    /* renamed from: o  reason: collision with root package name */
    private String f30234o;

    /* renamed from: p  reason: collision with root package name */
    private Long f30235p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30236q;

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
                        w6Var.f30233i = e3Var.r1();
                        break;
                    case 1:
                        w6Var.f30235p = e3Var.n1();
                        break;
                    case 2:
                        w6Var.f30232e = e3Var.r1();
                        break;
                    case 3:
                        w6Var.f30234o = e3Var.r1();
                        break;
                    case 4:
                        w6Var.f30231d = e3Var.nextInt();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
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
            return io.sentry.util.y.a(this.f30232e, ((w6) obj).f30232e);
        }
        return false;
    }

    public String f() {
        return this.f30232e;
    }

    public int g() {
        return this.f30231d;
    }

    public void h(String str) {
        this.f30232e = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30232e);
    }

    public void i(String str) {
        this.f30234o = str;
    }

    public void j(String str) {
        this.f30233i = str;
    }

    public void k(Long l10) {
        this.f30235p = l10;
    }

    public void l(int i10) {
        this.f30231d = i10;
    }

    public void m(Map map) {
        this.f30236q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("type").b(this.f30231d);
        if (this.f30232e != null) {
            f3Var.e("address").f(this.f30232e);
        }
        if (this.f30233i != null) {
            f3Var.e("package_name").f(this.f30233i);
        }
        if (this.f30234o != null) {
            f3Var.e("class_name").f(this.f30234o);
        }
        if (this.f30235p != null) {
            f3Var.e("thread_id").i(this.f30235p);
        }
        Map map = this.f30236q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30236q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public w6(w6 w6Var) {
        this.f30231d = w6Var.f30231d;
        this.f30232e = w6Var.f30232e;
        this.f30233i = w6Var.f30233i;
        this.f30234o = w6Var.f30234o;
        this.f30235p = w6Var.f30235p;
        this.f30236q = io.sentry.util.c.b(w6Var.f30236q);
    }
}
