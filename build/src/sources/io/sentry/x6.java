package io.sentry;

import io.sentry.a7;
import io.sentry.protocol.x;
import io.sentry.y6;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private io.sentry.protocol.x f29942d;

    /* renamed from: e  reason: collision with root package name */
    private Double f29943e;

    /* renamed from: i  reason: collision with root package name */
    private String f29944i;

    /* renamed from: o  reason: collision with root package name */
    private a7 f29945o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f29946p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29947q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29948r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public x6 a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            io.sentry.protocol.x xVar = null;
            Double d10 = null;
            String str = null;
            HashMap hashMap = null;
            a7 a7Var = null;
            Map map = null;
            Integer num = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1615012149:
                        if (m02.equals("severity_number")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3029410:
                        if (m02.equals("body")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 55126294:
                        if (m02.equals("timestamp")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 102865796:
                        if (m02.equals("level")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 405645655:
                        if (m02.equals("attributes")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 1270300245:
                        if (m02.equals("trace_id")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        num = e3Var.k1();
                        break;
                    case 1:
                        str = e3Var.r1();
                        break;
                    case 2:
                        d10 = e3Var.l0();
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
                        e3Var.v1(iLogger, hashMap, m02);
                        break;
                }
            }
            e3Var.z();
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
        this.f29942d = xVar;
        this.f29943e = d10;
        this.f29944i = str;
        this.f29945o = a7Var;
    }

    public void a(Map map) {
        this.f29947q = map;
    }

    public void b(Integer num) {
        this.f29946p = num;
    }

    public void c(Map map) {
        this.f29948r = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("timestamp").j(iLogger, k.c(this.f29943e));
        f3Var.e("trace_id").j(iLogger, this.f29942d);
        f3Var.e("body").f(this.f29944i);
        f3Var.e("level").j(iLogger, this.f29945o);
        if (this.f29946p != null) {
            f3Var.e("severity_number").j(iLogger, this.f29946p);
        }
        if (this.f29947q != null) {
            f3Var.e("attributes").j(iLogger, this.f29947q);
        }
        Map map = this.f29948r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29948r.get(str));
            }
        }
        f3Var.z();
    }
}
