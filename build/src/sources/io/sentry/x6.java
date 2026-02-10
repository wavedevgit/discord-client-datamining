package io.sentry;

import io.sentry.a7;
import io.sentry.protocol.x;
import io.sentry.y6;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private io.sentry.protocol.x f29334d;

    /* renamed from: e  reason: collision with root package name */
    private Double f29335e;

    /* renamed from: i  reason: collision with root package name */
    private String f29336i;

    /* renamed from: o  reason: collision with root package name */
    private a7 f29337o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f29338p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29339q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29340r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public x6 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            io.sentry.protocol.x xVar = null;
            Double d10 = null;
            String str = null;
            HashMap hashMap = null;
            a7 a7Var = null;
            Map map = null;
            Integer num = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1615012149:
                        if (o02.equals("severity_number")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3029410:
                        if (o02.equals("body")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 55126294:
                        if (o02.equals("timestamp")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 102865796:
                        if (o02.equals("level")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 405645655:
                        if (o02.equals("attributes")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 1270300245:
                        if (o02.equals("trace_id")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        num = e3Var.g1();
                        break;
                    case 1:
                        str = e3Var.m1();
                        break;
                    case 2:
                        d10 = e3Var.n0();
                        break;
                    case 3:
                        a7Var = (a7) e3Var.E0(iLogger, new a7.a());
                        break;
                    case 4:
                        map = e3Var.o1(iLogger, new y6.a());
                        break;
                    case 5:
                        xVar = (io.sentry.protocol.x) e3Var.E0(iLogger, new x.a());
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.p1(iLogger, hashMap, o02);
                        break;
                }
            }
            e3Var.D();
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
        this.f29334d = xVar;
        this.f29335e = d10;
        this.f29336i = str;
        this.f29337o = a7Var;
    }

    public void a(Map map) {
        this.f29339q = map;
    }

    public void b(Integer num) {
        this.f29338p = num;
    }

    public void c(Map map) {
        this.f29340r = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("timestamp").j(iLogger, k.c(this.f29335e));
        f3Var.e("trace_id").j(iLogger, this.f29334d);
        f3Var.e("body").f(this.f29336i);
        f3Var.e("level").j(iLogger, this.f29337o);
        if (this.f29338p != null) {
            f3Var.e("severity_number").j(iLogger, this.f29338p);
        }
        if (this.f29339q != null) {
            f3Var.e("attributes").j(iLogger, this.f29339q);
        }
        Map map = this.f29340r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29340r.get(str));
            }
        }
        f3Var.D();
    }
}
