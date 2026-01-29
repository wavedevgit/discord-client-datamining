package io.sentry;

import io.sentry.protocol.x;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n3 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private io.sentry.protocol.x f30231d;

    /* renamed from: e  reason: collision with root package name */
    private Map f30232e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public n3 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            n3 n3Var = new n3();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("profiler_id")) {
                    if (concurrentHashMap == null) {
                        concurrentHashMap = new ConcurrentHashMap();
                    }
                    e3Var.v1(iLogger, concurrentHashMap, l02);
                } else {
                    io.sentry.protocol.x xVar = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                    if (xVar != null) {
                        n3Var.f30231d = xVar;
                    }
                }
            }
            n3Var.b(concurrentHashMap);
            e3Var.y();
            return n3Var;
        }
    }

    public n3() {
        this(io.sentry.protocol.x.f30470e);
    }

    public void b(Map map) {
        this.f30232e = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n3)) {
            return false;
        }
        return this.f30231d.equals(((n3) obj).f30231d);
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30231d);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("profiler_id").j(iLogger, this.f30231d);
        Map map = this.f30232e;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30232e.get(str));
            }
        }
        f3Var.y();
    }

    public n3(io.sentry.protocol.x xVar) {
        this.f30231d = xVar;
    }

    public n3(n3 n3Var) {
        this.f30231d = n3Var.f30231d;
        Map b10 = io.sentry.util.c.b(n3Var.f30232e);
        if (b10 != null) {
            this.f30232e = b10;
        }
    }
}
