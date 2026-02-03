package io.sentry;

import io.sentry.protocol.x;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n3 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private io.sentry.protocol.x f29813d;

    /* renamed from: e  reason: collision with root package name */
    private Map f29814e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public n3 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            n3 n3Var = new n3();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("profiler_id")) {
                    if (concurrentHashMap == null) {
                        concurrentHashMap = new ConcurrentHashMap();
                    }
                    e3Var.v1(iLogger, concurrentHashMap, m02);
                } else {
                    io.sentry.protocol.x xVar = (io.sentry.protocol.x) e3Var.H0(iLogger, new x.a());
                    if (xVar != null) {
                        n3Var.f29813d = xVar;
                    }
                }
            }
            n3Var.b(concurrentHashMap);
            e3Var.y();
            return n3Var;
        }
    }

    public n3() {
        this(io.sentry.protocol.x.f30052e);
    }

    public void b(Map map) {
        this.f29814e = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n3)) {
            return false;
        }
        return this.f29813d.equals(((n3) obj).f29813d);
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29813d);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("profiler_id").j(iLogger, this.f29813d);
        Map map = this.f29814e;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29814e.get(str));
            }
        }
        f3Var.y();
    }

    public n3(io.sentry.protocol.x xVar) {
        this.f29813d = xVar;
    }

    public n3(n3 n3Var) {
        this.f29813d = n3Var.f29813d;
        Map b10 = io.sentry.util.c.b(n3Var.f29814e);
        if (b10 != null) {
            this.f29814e = b10;
        }
    }
}
