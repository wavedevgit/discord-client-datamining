package io.sentry;

import io.sentry.protocol.x;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n3 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private io.sentry.protocol.x f29560d;

    /* renamed from: e  reason: collision with root package name */
    private Map f29561e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public n3 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            n3 n3Var = new n3();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("profiler_id")) {
                    if (concurrentHashMap == null) {
                        concurrentHashMap = new ConcurrentHashMap();
                    }
                    e3Var.u1(iLogger, concurrentHashMap, o02);
                } else {
                    io.sentry.protocol.x xVar = (io.sentry.protocol.x) e3Var.I0(iLogger, new x.a());
                    if (xVar != null) {
                        n3Var.f29560d = xVar;
                    }
                }
            }
            n3Var.b(concurrentHashMap);
            e3Var.D();
            return n3Var;
        }
    }

    public n3() {
        this(io.sentry.protocol.x.f29799e);
    }

    public void b(Map map) {
        this.f29561e = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n3)) {
            return false;
        }
        return this.f29560d.equals(((n3) obj).f29560d);
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29560d);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("profiler_id").j(iLogger, this.f29560d);
        Map map = this.f29561e;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29561e.get(str));
            }
        }
        f3Var.D();
    }

    public n3(io.sentry.protocol.x xVar) {
        this.f29560d = xVar;
    }

    public n3(n3 n3Var) {
        this.f29560d = n3Var.f29560d;
        Map b10 = io.sentry.util.c.b(n3Var.f29561e);
        if (b10 != null) {
            this.f29561e = b10;
        }
    }
}
