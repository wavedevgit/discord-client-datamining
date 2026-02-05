package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.protocol.f;
import io.sentry.w1;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private List f29347d;

    /* renamed from: e  reason: collision with root package name */
    private Map f29348e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public g a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            List list = null;
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("values")) {
                    if (concurrentHashMap == null) {
                        concurrentHashMap = new ConcurrentHashMap();
                    }
                    e3Var.v1(iLogger, concurrentHashMap, m02);
                } else {
                    list = e3Var.g2(iLogger, new f.a());
                }
            }
            if (list == null) {
                list = new ArrayList();
            }
            g gVar = new g(list);
            gVar.b(concurrentHashMap);
            e3Var.z();
            return gVar;
        }
    }

    public g(List list) {
        this.f29347d = list;
    }

    public List a() {
        return this.f29347d;
    }

    public void b(Map map) {
        this.f29348e = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            return io.sentry.util.y.a(this.f29347d, ((g) obj).f29347d);
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29347d);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("values").j(iLogger, this.f29347d);
        Map map = this.f29348e;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29348e.get(str));
            }
        }
        f3Var.z();
    }
}
