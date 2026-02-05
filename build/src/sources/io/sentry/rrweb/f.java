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
    private int f29649o;

    /* renamed from: p  reason: collision with root package name */
    private List f29650p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29651q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29652r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(f fVar, e3 e3Var, ILogger iLogger) {
            d.a aVar = new d.a();
            e3Var.s();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (m02.equals("pointerId")) {
                    fVar.f29649o = e3Var.nextInt();
                } else if (m02.equals("positions")) {
                    fVar.f29650p = e3Var.g2(iLogger, new b.a());
                } else if (!aVar.a(fVar, m02, e3Var, iLogger)) {
                    if (hashMap == null) {
                        hashMap = new HashMap();
                    }
                    e3Var.v1(iLogger, hashMap, m02);
                }
            }
            fVar.l(hashMap);
            e3Var.z();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public f a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            f fVar = new f();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("data")) {
                    if (!aVar.a(fVar, m02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                    }
                } else {
                    c(fVar, e3Var, iLogger);
                }
            }
            fVar.o(hashMap);
            e3Var.z();
            return fVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements w1 {

        /* renamed from: d  reason: collision with root package name */
        private int f29653d;

        /* renamed from: e  reason: collision with root package name */
        private float f29654e;

        /* renamed from: i  reason: collision with root package name */
        private float f29655i;

        /* renamed from: o  reason: collision with root package name */
        private long f29656o;

        /* renamed from: p  reason: collision with root package name */
        private Map f29657p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements m1 {
            @Override // io.sentry.m1
            /* renamed from: b */
            public b a(e3 e3Var, ILogger iLogger) {
                e3Var.s();
                b bVar = new b();
                HashMap hashMap = null;
                while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                    String m02 = e3Var.m0();
                    m02.getClass();
                    char c10 = 65535;
                    switch (m02.hashCode()) {
                        case 120:
                            if (m02.equals("x")) {
                                c10 = 0;
                                break;
                            }
                            break;
                        case 121:
                            if (m02.equals("y")) {
                                c10 = 1;
                                break;
                            }
                            break;
                        case 3355:
                            if (m02.equals(StackTraceHelper.ID_KEY)) {
                                c10 = 2;
                                break;
                            }
                            break;
                        case 665490880:
                            if (m02.equals("timeOffset")) {
                                c10 = 3;
                                break;
                            }
                            break;
                    }
                    switch (c10) {
                        case 0:
                            bVar.f29654e = e3Var.nextFloat();
                            break;
                        case 1:
                            bVar.f29655i = e3Var.nextFloat();
                            break;
                        case 2:
                            bVar.f29653d = e3Var.nextInt();
                            break;
                        case 3:
                            bVar.f29656o = e3Var.nextLong();
                            break;
                        default:
                            if (hashMap == null) {
                                hashMap = new HashMap();
                            }
                            e3Var.v1(iLogger, hashMap, m02);
                            break;
                    }
                }
                bVar.h(hashMap);
                e3Var.z();
                return bVar;
            }
        }

        public long e() {
            return this.f29656o;
        }

        public void f(int i10) {
            this.f29653d = i10;
        }

        public void g(long j10) {
            this.f29656o = j10;
        }

        public void h(Map map) {
            this.f29657p = map;
        }

        public void i(float f10) {
            this.f29654e = f10;
        }

        public void j(float f10) {
            this.f29655i = f10;
        }

        @Override // io.sentry.w1
        public void serialize(f3 f3Var, ILogger iLogger) {
            f3Var.s();
            f3Var.e(StackTraceHelper.ID_KEY).b(this.f29653d);
            f3Var.e("x").c(this.f29654e);
            f3Var.e("y").c(this.f29655i);
            f3Var.e("timeOffset").b(this.f29656o);
            Map map = this.f29657p;
            if (map != null) {
                for (String str : map.keySet()) {
                    Object obj = this.f29657p.get(str);
                    f3Var.e(str);
                    f3Var.j(iLogger, obj);
                }
            }
            f3Var.z();
        }
    }

    public f() {
        super(d.b.TouchMove);
    }

    private void k(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        new d.c().a(this, f3Var, iLogger);
        List list = this.f29650p;
        if (list != null && !list.isEmpty()) {
            f3Var.e("positions").j(iLogger, this.f29650p);
        }
        f3Var.e("pointerId").b(this.f29649o);
        Map map = this.f29652r;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29652r.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public void l(Map map) {
        this.f29652r = map;
    }

    public void m(int i10) {
        this.f29649o = i10;
    }

    public void n(List list) {
        this.f29650p = list;
    }

    public void o(Map map) {
        this.f29651q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        new b.C0412b().a(this, f3Var, iLogger);
        f3Var.e("data");
        k(f3Var, iLogger);
        Map map = this.f29651q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29651q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }
}
