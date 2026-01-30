package io.sentry;

import io.sentry.a7;
import io.sentry.protocol.x;
import io.sentry.y6;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private io.sentry.protocol.x f30957d;

    /* renamed from: e  reason: collision with root package name */
    private Double f30958e;

    /* renamed from: i  reason: collision with root package name */
    private String f30959i;

    /* renamed from: o  reason: collision with root package name */
    private a7 f30960o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f30961p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30962q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30963r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public x6 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            io.sentry.protocol.x xVar = null;
            Double d10 = null;
            String str = null;
            HashMap hashMap = null;
            a7 a7Var = null;
            Map map = null;
            Integer num = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1615012149:
                        if (l02.equals("severity_number")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3029410:
                        if (l02.equals("body")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 55126294:
                        if (l02.equals("timestamp")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 102865796:
                        if (l02.equals("level")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 405645655:
                        if (l02.equals("attributes")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 1270300245:
                        if (l02.equals("trace_id")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        num = e3Var.j1();
                        break;
                    case 1:
                        str = e3Var.r1();
                        break;
                    case 2:
                        d10 = e3Var.k0();
                        break;
                    case 3:
                        a7Var = (a7) e3Var.G0(iLogger, new a7.a());
                        break;
                    case 4:
                        map = e3Var.u1(iLogger, new y6.a());
                        break;
                    case 5:
                        xVar = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                        break;
                }
            }
            e3Var.y();
            if (xVar != null) {
                if (d10 != null) {
                    if (str != null) {
                        if (a7Var != null) {
                            x6 x6Var = new x6(xVar, d10, str, a7Var);
                            x6Var.a(map);
                            x6Var.b(num);
                            x6Var.c(hashMap);
                            return x6Var;
                        }
                        IllegalStateException illegalStateException = new IllegalStateException("Missing required field \"level\"");
                        iLogger.b(SentryLevel.ERROR, "Missing required field \"level\"", illegalStateException);
                        throw illegalStateException;
                    }
                    IllegalStateException illegalStateException2 = new IllegalStateException("Missing required field \"body\"");
                    iLogger.b(SentryLevel.ERROR, "Missing required field \"body\"", illegalStateException2);
                    throw illegalStateException2;
                }
                IllegalStateException illegalStateException3 = new IllegalStateException("Missing required field \"timestamp\"");
                iLogger.b(SentryLevel.ERROR, "Missing required field \"timestamp\"", illegalStateException3);
                throw illegalStateException3;
            }
            IllegalStateException illegalStateException4 = new IllegalStateException("Missing required field \"trace_id\"");
            iLogger.b(SentryLevel.ERROR, "Missing required field \"trace_id\"", illegalStateException4);
            throw illegalStateException4;
        }
    }

    public x6(io.sentry.protocol.x xVar, Double d10, String str, a7 a7Var) {
        this.f30957d = xVar;
        this.f30958e = d10;
        this.f30959i = str;
        this.f30960o = a7Var;
    }

    public void a(Map map) {
        this.f30962q = map;
    }

    public void b(Integer num) {
        this.f30961p = num;
    }

    public void c(Map map) {
        this.f30963r = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("timestamp").j(iLogger, k.c(this.f30958e));
        f3Var.e("trace_id").j(iLogger, this.f30957d);
        f3Var.e("body").f(this.f30959i);
        f3Var.e("level").j(iLogger, this.f30960o);
        if (this.f30961p != null) {
            f3Var.e("severity_number").j(iLogger, this.f30961p);
        }
        if (this.f30962q != null) {
            f3Var.e("attributes").j(iLogger, this.f30962q);
        }
        Map map = this.f30963r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30963r.get(str));
            }
        }
        f3Var.y();
    }
}
