package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f28537d;

    /* renamed from: e  reason: collision with root package name */
    private Map f28538e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public f0 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            String str = null;
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("source")) {
                    if (concurrentHashMap == null) {
                        concurrentHashMap = new ConcurrentHashMap();
                    }
                    e3Var.u1(iLogger, concurrentHashMap, o02);
                } else {
                    str = e3Var.q1();
                }
            }
            f0 f0Var = new f0(str);
            f0Var.a(concurrentHashMap);
            e3Var.D();
            return f0Var;
        }
    }

    public f0(String str) {
        this.f28537d = str;
    }

    public void a(Map map) {
        this.f28538e = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28537d != null) {
            f3Var.e("source").j(iLogger, this.f28537d);
        }
        Map map = this.f28538e;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28538e.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }
}
