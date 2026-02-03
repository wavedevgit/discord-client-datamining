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
    private int f30230o;

    /* renamed from: p  reason: collision with root package name */
    private List f30231p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30232q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30233r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(f fVar, e3 e3Var, ILogger iLogger) {
            d.a aVar = new d.a();
            e3Var.r();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (m02.equals("pointerId")) {
                    fVar.f30230o = e3Var.nextInt();
                } else if (m02.equals("positions")) {
                    fVar.f30231p = e3Var.g2(iLogger, new b.a());
                } else if (!aVar.a(fVar, m02, e3Var, iLogger)) {
                    if (hashMap == null) {
                        hashMap = new HashMap();
                    }
                    e3Var.v1(iLogger, hashMap, m02);
                }
            }
            fVar.l(hashMap);
            e3Var.y();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public f a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
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
            e3Var.y();
            return fVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements w1 {

        /* renamed from: d  reason: collision with root package name */
        private int f30234d;

        /* renamed from: e  reason: collision with root package name */
        private float f30235e;

        /* renamed from: i  reason: collision with root package name */
        private float f30236i;

        /* renamed from: o  reason: collision with root package name */
        private long f30237o;

        /* renamed from: p  reason: collision with root package name */
        private Map f30238p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements m1 {
            @Override // io.sentry.m1
            /* renamed from: b */
            public b a(e3 e3Var, ILogger iLogger) {
                e3Var.r();
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
                            bVar.f30235e = e3Var.nextFloat();
                            break;
                        case 1:
                            bVar.f30236i = e3Var.nextFloat();
                            break;
                        case 2:
                            bVar.f30234d = e3Var.nextInt();
                            break;
                        case 3:
                            bVar.f30237o = e3Var.nextLong();
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
                e3Var.y();
                return bVar;
            }
        }

        public long e() {
            return this.f30237o;
        }

        public void f(int i10) {
            this.f30234d = i10;
        }

        public void g(long j10) {
            this.f30237o = j10;
        }

        public void h(Map map) {
            this.f30238p = map;
        }

        public void i(float f10) {
            this.f30235e = f10;
        }

        public void j(float f10) {
            this.f30236i = f10;
        }

        @Override // io.sentry.w1
        public void serialize(f3 f3Var, ILogger iLogger) {
            f3Var.r();
            f3Var.e(StackTraceHelper.ID_KEY).b(this.f30234d);
            f3Var.e("x").c(this.f30235e);
            f3Var.e("y").c(this.f30236i);
            f3Var.e("timeOffset").b(this.f30237o);
            Map map = this.f30238p;
            if (map != null) {
                for (String str : map.keySet()) {
                    Object obj = this.f30238p.get(str);
                    f3Var.e(str);
                    f3Var.j(iLogger, obj);
                }
            }
            f3Var.y();
        }
    }

    public f() {
        super(d.b.TouchMove);
    }

    private void k(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        new d.c().a(this, f3Var, iLogger);
        List list = this.f30231p;
        if (list != null && !list.isEmpty()) {
            f3Var.e("positions").j(iLogger, this.f30231p);
        }
        f3Var.e("pointerId").b(this.f30230o);
        Map map = this.f30233r;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30233r.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public void l(Map map) {
        this.f30233r = map;
    }

    public void m(int i10) {
        this.f30230o = i10;
    }

    public void n(List list) {
        this.f30231p = list;
    }

    public void o(Map map) {
        this.f30232q = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        new b.C0406b().a(this, f3Var, iLogger);
        f3Var.e("data");
        k(f3Var, iLogger);
        Map map = this.f30232q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30232q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }
}
