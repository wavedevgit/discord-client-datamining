package io.sentry;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private int f29903d;

    /* renamed from: e  reason: collision with root package name */
    private String f29904e;

    /* renamed from: i  reason: collision with root package name */
    private String f29905i;

    /* renamed from: o  reason: collision with root package name */
    private String f29906o;

    /* renamed from: p  reason: collision with root package name */
    private Long f29907p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29908q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public w6 a(e3 e3Var, ILogger iLogger) {
            w6 w6Var = new w6();
            e3Var.s();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1877165340:
                        if (m02.equals("package_name")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1562235024:
                        if (m02.equals("thread_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1147692044:
                        if (m02.equals("address")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -290474766:
                        if (m02.equals("class_name")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3575610:
                        if (m02.equals("type")) {
                            c10 = 4;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        w6Var.f29905i = e3Var.r1();
                        break;
                    case 1:
                        w6Var.f29907p = e3Var.m1();
                        break;
                    case 2:
                        w6Var.f29904e = e3Var.r1();
                        break;
                    case 3:
                        w6Var.f29906o = e3Var.r1();
                        break;
                    case 4:
                        w6Var.f29903d = e3Var.nextInt();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            w6Var.m(concurrentHashMap);
            e3Var.z();
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
            return io.sentry.util.y.a(this.f29904e, ((w6) obj).f29904e);
        }
        return false;
    }

    public String f() {
        return this.f29904e;
    }

    public int g() {
        return this.f29903d;
    }

    public void h(String str) {
        this.f29904e = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29904e);
    }

    public void i(String str) {
        this.f29906o = str;
    }

    public void j(String str) {
        this.f29905i = str;
    }

    public void k(Long l10) {
        this.f29907p = l10;
    }

    public void l(int i10) {
        this.f29903d = i10;
    }

    public void m(Map map) {
        this.f29908q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("type").b(this.f29903d);
        if (this.f29904e != null) {
            f3Var.e("address").f(this.f29904e);
        }
        if (this.f29905i != null) {
            f3Var.e("package_name").f(this.f29905i);
        }
        if (this.f29906o != null) {
            f3Var.e("class_name").f(this.f29906o);
        }
        if (this.f29907p != null) {
            f3Var.e("thread_id").i(this.f29907p);
        }
        Map map = this.f29908q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29908q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public w6(w6 w6Var) {
        this.f29903d = w6Var.f29903d;
        this.f29904e = w6Var.f29904e;
        this.f29905i = w6Var.f29905i;
        this.f29906o = w6Var.f29906o;
        this.f29907p = w6Var.f29907p;
        this.f29908q = io.sentry.util.c.b(w6Var.f29908q);
    }
}
