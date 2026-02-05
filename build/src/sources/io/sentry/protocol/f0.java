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
    private final String f29345d;

    /* renamed from: e  reason: collision with root package name */
    private Map f29346e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public f0 a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            String str = null;
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("source")) {
                    if (concurrentHashMap == null) {
                        concurrentHashMap = new ConcurrentHashMap();
                    }
                    e3Var.v1(iLogger, concurrentHashMap, m02);
                } else {
                    str = e3Var.r1();
                }
            }
            f0 f0Var = new f0(str);
            f0Var.a(concurrentHashMap);
            e3Var.z();
            return f0Var;
        }
    }

    public f0(String str) {
        this.f29345d = str;
    }

    public void a(Map map) {
        this.f29346e = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29345d != null) {
            f3Var.e("source").j(iLogger, this.f29345d);
        }
        Map map = this.f29346e;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29346e.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }
}
