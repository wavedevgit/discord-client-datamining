package io.sentry.protocol;

import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f29302d;

    /* renamed from: e  reason: collision with root package name */
    private String f29303e;

    /* renamed from: i  reason: collision with root package name */
    private Map f29304i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public b a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            b bVar = new b();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (m02.equals(StackTraceHelper.NAME_KEY)) {
                    bVar.f29302d = e3Var.r1();
                } else if (m02.equals("version")) {
                    bVar.f29303e = e3Var.r1();
                } else {
                    if (concurrentHashMap == null) {
                        concurrentHashMap = new ConcurrentHashMap();
                    }
                    e3Var.v1(iLogger, concurrentHashMap, m02);
                }
            }
            bVar.c(concurrentHashMap);
            e3Var.z();
            return bVar;
        }
    }

    public b() {
    }

    public void c(Map map) {
        this.f29304i = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (io.sentry.util.y.a(this.f29302d, bVar.f29302d) && io.sentry.util.y.a(this.f29303e, bVar.f29303e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29302d, this.f29303e);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29302d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29302d);
        }
        if (this.f29303e != null) {
            f3Var.e("version").f(this.f29303e);
        }
        Map map = this.f29304i;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29304i.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(b bVar) {
        this.f29302d = bVar.f29302d;
        this.f29303e = bVar.f29303e;
        this.f29304i = io.sentry.util.c.b(bVar.f29304i);
    }
}
