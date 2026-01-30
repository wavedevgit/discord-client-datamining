package io.sentry;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private int f30918d;

    /* renamed from: e  reason: collision with root package name */
    private String f30919e;

    /* renamed from: i  reason: collision with root package name */
    private String f30920i;

    /* renamed from: o  reason: collision with root package name */
    private String f30921o;

    /* renamed from: p  reason: collision with root package name */
    private Long f30922p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30923q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public w6 a(e3 e3Var, ILogger iLogger) {
            w6 w6Var = new w6();
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1877165340:
                        if (l02.equals("package_name")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1562235024:
                        if (l02.equals("thread_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1147692044:
                        if (l02.equals("address")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -290474766:
                        if (l02.equals("class_name")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3575610:
                        if (l02.equals("type")) {
                            c10 = 4;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        w6Var.f30920i = e3Var.r1();
                        break;
                    case 1:
                        w6Var.f30922p = e3Var.m1();
                        break;
                    case 2:
                        w6Var.f30919e = e3Var.r1();
                        break;
                    case 3:
                        w6Var.f30921o = e3Var.r1();
                        break;
                    case 4:
                        w6Var.f30918d = e3Var.nextInt();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            w6Var.m(concurrentHashMap);
            e3Var.y();
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
            return io.sentry.util.y.a(this.f30919e, ((w6) obj).f30919e);
        }
        return false;
    }

    public String f() {
        return this.f30919e;
    }

    public int g() {
        return this.f30918d;
    }

    public void h(String str) {
        this.f30919e = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30919e);
    }

    public void i(String str) {
        this.f30921o = str;
    }

    public void j(String str) {
        this.f30920i = str;
    }

    public void k(Long l10) {
        this.f30922p = l10;
    }

    public void l(int i10) {
        this.f30918d = i10;
    }

    public void m(Map map) {
        this.f30923q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("type").b(this.f30918d);
        if (this.f30919e != null) {
            f3Var.e("address").f(this.f30919e);
        }
        if (this.f30920i != null) {
            f3Var.e("package_name").f(this.f30920i);
        }
        if (this.f30921o != null) {
            f3Var.e("class_name").f(this.f30921o);
        }
        if (this.f30922p != null) {
            f3Var.e("thread_id").i(this.f30922p);
        }
        Map map = this.f30923q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30923q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public w6(w6 w6Var) {
        this.f30918d = w6Var.f30918d;
        this.f30919e = w6Var.f30919e;
        this.f30920i = w6Var.f30920i;
        this.f30921o = w6Var.f30921o;
        this.f30922p = w6Var.f30922p;
        this.f30923q = io.sentry.util.c.b(w6Var.f30923q);
    }
}
