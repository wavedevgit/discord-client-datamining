package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final Number f28537d;

    /* renamed from: e  reason: collision with root package name */
    private final String f28538e;

    /* renamed from: i  reason: collision with root package name */
    private Map f28539i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public k a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            Number number = null;
            String str = null;
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("unit")) {
                    if (!o02.equals("value")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                    } else {
                        number = (Number) e3Var.U1();
                    }
                } else {
                    str = e3Var.q1();
                }
            }
            e3Var.D();
            if (number != null) {
                k kVar = new k(number, str);
                kVar.a(concurrentHashMap);
                return kVar;
            }
            IllegalStateException illegalStateException = new IllegalStateException("Missing required field \"value\"");
            iLogger.b(SentryLevel.ERROR, "Missing required field \"value\"", illegalStateException);
            throw illegalStateException;
        }
    }

    public k(Number number, String str) {
        this.f28537d = number;
        this.f28538e = str;
    }

    public void a(Map map) {
        this.f28539i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("value").i(this.f28537d);
        if (this.f28538e != null) {
            f3Var.e("unit").f(this.f28538e);
        }
        Map map = this.f28539i;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28539i.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }
}
