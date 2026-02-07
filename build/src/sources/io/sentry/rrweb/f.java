package io.sentry.rrweb;

import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.rrweb.b;
import io.sentry.rrweb.d;
import io.sentry.w1;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends d implements w1 {

    /* renamed from: o  reason: collision with root package name */
    private int f28841o;

    /* renamed from: p  reason: collision with root package name */
    private List f28842p;

    /* renamed from: q  reason: collision with root package name */
    private Map f28843q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28844r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(f fVar, e3 e3Var, ILogger iLogger) {
            d.a aVar = new d.a();
            e3Var.u();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (o02.equals("pointerId")) {
                    fVar.f28841o = e3Var.nextInt();
                } else if (o02.equals("positions")) {
                    fVar.f28842p = e3Var.g2(iLogger, new b.a());
                } else if (!aVar.a(fVar, o02, e3Var, iLogger)) {
                    if (hashMap == null) {
                        hashMap = new HashMap();
                    }
                    e3Var.u1(iLogger, hashMap, o02);
                }
            }
            fVar.l(hashMap);
            e3Var.D();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public f a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            f fVar = new f();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("data")) {
                    if (!aVar.a(fVar, o02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
                    }
                } else {
                    c(fVar, e3Var, iLogger);
                }
            }
            fVar.o(hashMap);
            e3Var.D();
            return fVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements w1 {

        /* renamed from: d  reason: collision with root package name */
        private int f28845d;

        /* renamed from: e  reason: collision with root package name */
        private float f28846e;

        /* renamed from: i  reason: collision with root package name */
        private float f28847i;

        /* renamed from: o  reason: collision with root package name */
        private long f28848o;

        /* renamed from: p  reason: collision with root package name */
        private Map f28849p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements m1 {
            @Override // io.sentry.m1
            /* renamed from: b */
            public b a(e3 e3Var, ILogger iLogger) {
                e3Var.u();
                b bVar = new b();
                HashMap hashMap = null;
                while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                    String o02 = e3Var.o0();
                    o02.getClass();
                    char c10 = 65535;
                    switch (o02.hashCode()) {
                        case 120:
                            if (o02.equals("x")) {
                                c10 = 0;
                                break;
                            }
                            break;
                        case 121:
                            if (o02.equals("y")) {
                                c10 = 1;
                                break;
                            }
                            break;
                        case 3355:
                            if (o02.equals(StackTraceHelper.ID_KEY)) {
                                c10 = 2;
                                break;
                            }
                            break;
                        case 665490880:
                            if (o02.equals("timeOffset")) {
                                c10 = 3;
                                break;
                            }
                            break;
                    }
                    switch (c10) {
                        case 0:
                            bVar.f28846e = e3Var.nextFloat();
                            break;
                        case 1:
                            bVar.f28847i = e3Var.nextFloat();
                            break;
                        case 2:
                            bVar.f28845d = e3Var.nextInt();
                            break;
                        case 3:
                            bVar.f28848o = e3Var.nextLong();
                            break;
                        default:
                            if (hashMap == null) {
                                hashMap = new HashMap();
                            }
                            e3Var.u1(iLogger, hashMap, o02);
                            break;
                    }
                }
                bVar.h(hashMap);
                e3Var.D();
                return bVar;
            }
        }

        public long e() {
            return this.f28848o;
        }

        public void f(int i10) {
            this.f28845d = i10;
        }

        public void g(long j10) {
            this.f28848o = j10;
        }

        public void h(Map map) {
            this.f28849p = map;
        }

        public void i(float f10) {
            this.f28846e = f10;
        }

        public void j(float f10) {
            this.f28847i = f10;
        }

        @Override // io.sentry.w1
        public void serialize(f3 f3Var, ILogger iLogger) {
            f3Var.u();
            f3Var.e(StackTraceHelper.ID_KEY).b(this.f28845d);
            f3Var.e("x").c(this.f28846e);
            f3Var.e("y").c(this.f28847i);
            f3Var.e("timeOffset").b(this.f28848o);
            Map map = this.f28849p;
            if (map != null) {
                for (String str : map.keySet()) {
                    Object obj = this.f28849p.get(str);
                    f3Var.e(str);
                    f3Var.j(iLogger, obj);
                }
            }
            f3Var.D();
        }
    }

    public f() {
        super(d.b.TouchMove);
    }

    private void k(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new d.c().a(this, f3Var, iLogger);
        List list = this.f28842p;
        if (list != null && !list.isEmpty()) {
            f3Var.e("positions").j(iLogger, this.f28842p);
        }
        f3Var.e("pointerId").b(this.f28841o);
        Map map = this.f28844r;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28844r.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void l(Map map) {
        this.f28844r = map;
    }

    public void m(int i10) {
        this.f28841o = i10;
    }

    public void n(List list) {
        this.f28842p = list;
    }

    public void o(Map map) {
        this.f28843q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new b.C0406b().a(this, f3Var, iLogger);
        f3Var.e("data");
        k(f3Var, iLogger);
        Map map = this.f28843q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28843q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }
}
