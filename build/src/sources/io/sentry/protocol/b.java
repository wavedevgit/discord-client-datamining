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
    private String f30301d;

    /* renamed from: e  reason: collision with root package name */
    private String f30302e;

    /* renamed from: i  reason: collision with root package name */
    private Map f30303i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public b a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            b bVar = new b();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (l02.equals(StackTraceHelper.NAME_KEY)) {
                    bVar.f30301d = e3Var.r1();
                } else if (l02.equals("version")) {
                    bVar.f30302e = e3Var.r1();
                } else {
                    if (concurrentHashMap == null) {
                        concurrentHashMap = new ConcurrentHashMap();
                    }
                    e3Var.v1(iLogger, concurrentHashMap, l02);
                }
            }
            bVar.c(concurrentHashMap);
            e3Var.y();
            return bVar;
        }
    }

    public b() {
    }

    public void c(Map map) {
        this.f30303i = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (io.sentry.util.y.a(this.f30301d, bVar.f30301d) && io.sentry.util.y.a(this.f30302e, bVar.f30302e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30301d, this.f30302e);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30301d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30301d);
        }
        if (this.f30302e != null) {
            f3Var.e("version").f(this.f30302e);
        }
        Map map = this.f30303i;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30303i.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(b bVar) {
        this.f30301d = bVar.f30301d;
        this.f30302e = bVar.f30302e;
        this.f30303i = io.sentry.util.c.b(bVar.f30303i);
    }
}
