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
    private String f28446d;

    /* renamed from: e  reason: collision with root package name */
    private String f28447e;

    /* renamed from: i  reason: collision with root package name */
    private Map f28448i;

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
                    bVar.f28446d = e3Var.q1();
                } else if (o02.equals("version")) {
                    bVar.f28447e = e3Var.q1();
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
        this.f28448i = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (io.sentry.util.y.a(this.f28446d, bVar.f28446d) && io.sentry.util.y.a(this.f28447e, bVar.f28447e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28446d, this.f28447e);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28446d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28446d);
        }
        if (this.f28447e != null) {
            f3Var.e("version").f(this.f28447e);
        }
        Map map = this.f28448i;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28448i.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(b bVar) {
        this.f28446d = bVar.f28446d;
        this.f28447e = bVar.f28447e;
        this.f28448i = io.sentry.util.c.b(bVar.f28448i);
    }
}
