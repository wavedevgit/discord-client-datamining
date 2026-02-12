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
    private String f29630d;

    /* renamed from: e  reason: collision with root package name */
    private String f29631e;

    /* renamed from: i  reason: collision with root package name */
    private Map f29632i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public b a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            b bVar = new b();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (o02.equals(StackTraceHelper.NAME_KEY)) {
                    bVar.f29630d = e3Var.r1();
                } else if (o02.equals("version")) {
                    bVar.f29631e = e3Var.r1();
                } else {
                    if (concurrentHashMap == null) {
                        concurrentHashMap = new ConcurrentHashMap();
                    }
                    e3Var.u1(iLogger, concurrentHashMap, o02);
                }
            }
            bVar.c(concurrentHashMap);
            e3Var.D();
            return bVar;
        }
    }

    public b() {
    }

    public void c(Map map) {
        this.f29632i = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (io.sentry.util.y.a(this.f29630d, bVar.f29630d) && io.sentry.util.y.a(this.f29631e, bVar.f29631e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29630d, this.f29631e);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29630d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29630d);
        }
        if (this.f29631e != null) {
            f3Var.e("version").f(this.f29631e);
        }
        Map map = this.f29632i;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29632i.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(b bVar) {
        this.f29630d = bVar.f29630d;
        this.f29631e = bVar.f29631e;
        this.f29632i = io.sentry.util.c.b(bVar.f29632i);
    }
}
