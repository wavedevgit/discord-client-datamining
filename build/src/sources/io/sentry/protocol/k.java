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
    private final Number f29393d;

    /* renamed from: e  reason: collision with root package name */
    private final String f29394e;

    /* renamed from: i  reason: collision with root package name */
    private Map f29395i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public k a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            Number number = null;
            String str = null;
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("unit")) {
                    if (!m02.equals("value")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                    } else {
                        number = (Number) e3Var.V1();
                    }
                } else {
                    str = e3Var.r1();
                }
            }
            e3Var.z();
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
        this.f29393d = number;
        this.f29394e = str;
    }

    public void a(Map map) {
        this.f29395i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("value").i(this.f29393d);
        if (this.f29394e != null) {
            f3Var.e("unit").f(this.f29394e);
        }
        Map map = this.f29395i;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29395i.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }
}
