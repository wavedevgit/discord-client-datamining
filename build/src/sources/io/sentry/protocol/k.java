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
    private final Number f30392d;

    /* renamed from: e  reason: collision with root package name */
    private final String f30393e;

    /* renamed from: i  reason: collision with root package name */
    private Map f30394i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public k a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            Number number = null;
            String str = null;
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("unit")) {
                    if (!l02.equals("value")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                    } else {
                        number = (Number) e3Var.V1();
                    }
                } else {
                    str = e3Var.r1();
                }
            }
            e3Var.y();
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
        this.f30392d = number;
        this.f30393e = str;
    }

    public void a(Map map) {
        this.f30394i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("value").i(this.f30392d);
        if (this.f30393e != null) {
            f3Var.e("unit").f(this.f30393e);
        }
        Map map = this.f30394i;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30394i.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }
}
