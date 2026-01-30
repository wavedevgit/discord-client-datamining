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
    private String f30317d;

    /* renamed from: e  reason: collision with root package name */
    private String f30318e;

    /* renamed from: i  reason: collision with root package name */
    private Map f30319i;

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
                    bVar.f30317d = e3Var.r1();
                } else if (l02.equals("version")) {
                    bVar.f30318e = e3Var.r1();
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
        this.f30319i = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (io.sentry.util.y.a(this.f30317d, bVar.f30317d) && io.sentry.util.y.a(this.f30318e, bVar.f30318e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30317d, this.f30318e);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30317d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30317d);
        }
        if (this.f30318e != null) {
            f3Var.e("version").f(this.f30318e);
        }
        Map map = this.f30319i;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30319i.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(b bVar) {
        this.f30317d = bVar.f30317d;
        this.f30318e = bVar.f30318e;
        this.f30319i = io.sentry.util.c.b(bVar.f30319i);
    }
}
