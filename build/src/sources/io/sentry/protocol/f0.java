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
    private final String f30344d;

    /* renamed from: e  reason: collision with root package name */
    private Map f30345e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public f0 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            String str = null;
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("source")) {
                    if (concurrentHashMap == null) {
                        concurrentHashMap = new ConcurrentHashMap();
                    }
                    e3Var.v1(iLogger, concurrentHashMap, l02);
                } else {
                    str = e3Var.r1();
                }
            }
            f0 f0Var = new f0(str);
            f0Var.a(concurrentHashMap);
            e3Var.y();
            return f0Var;
        }
    }

    public f0(String str) {
        this.f30344d = str;
    }

    public void a(Map map) {
        this.f30345e = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30344d != null) {
            f3Var.e("source").j(iLogger, this.f30344d);
        }
        Map map = this.f30345e;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30345e.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }
}
