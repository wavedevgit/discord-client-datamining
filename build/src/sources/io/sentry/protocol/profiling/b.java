package io.sentry.protocol.profiling;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private double f28634d;

    /* renamed from: e  reason: collision with root package name */
    private int f28635e;

    /* renamed from: i  reason: collision with root package name */
    private String f28636i;

    /* renamed from: o  reason: collision with root package name */
    private Map f28637o;

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
                    case -1562235024:
                        if (o02.equals("thread_id")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 55126294:
                        if (o02.equals("timestamp")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 1302676018:
                        if (o02.equals("stack_id")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        bVar.f28636i = e3Var.q1();
                        break;
                    case 1:
                        bVar.f28634d = e3Var.nextDouble();
                        break;
                    case 2:
                        bVar.f28635e = e3Var.nextInt();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
                        break;
                }
            }
            bVar.e(hashMap);
            e3Var.D();
            return bVar;
        }
    }

    private BigDecimal d(Double d10) {
        return BigDecimal.valueOf(d10.doubleValue()).setScale(6, RoundingMode.DOWN);
    }

    public void e(Map map) {
        this.f28637o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("timestamp").j(iLogger, d(Double.valueOf(this.f28634d)));
        f3Var.e("stack_id").j(iLogger, Integer.valueOf(this.f28635e));
        if (this.f28636i != null) {
            f3Var.e("thread_id").j(iLogger, this.f28636i);
        }
        Map map = this.f28637o;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28637o.get(str));
            }
        }
        f3Var.D();
    }
}
