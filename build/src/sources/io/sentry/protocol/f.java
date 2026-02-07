package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f28534d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f28535e;

    /* renamed from: i  reason: collision with root package name */
    private Map f28536i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public f a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            String str = null;
            Boolean bool = null;
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("result")) {
                    if (!o02.equals("flag")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                    } else {
                        str = e3Var.q1();
                    }
                } else {
                    bool = e3Var.y0();
                }
            }
            if (str != null) {
                if (bool != null) {
                    f fVar = new f(str, bool.booleanValue());
                    fVar.c(concurrentHashMap);
                    e3Var.D();
                    return fVar;
                }
                IllegalStateException illegalStateException = new IllegalStateException("Missing required field \"result\"");
                iLogger.b(SentryLevel.ERROR, "Missing required field \"result\"", illegalStateException);
                throw illegalStateException;
            }
            IllegalStateException illegalStateException2 = new IllegalStateException("Missing required field \"flag\"");
            iLogger.b(SentryLevel.ERROR, "Missing required field \"flag\"", illegalStateException2);
            throw illegalStateException2;
        }
    }

    public f(String str, boolean z10) {
        this.f28534d = str;
        this.f28535e = z10;
    }

    public String a() {
        return this.f28534d;
    }

    public Boolean b() {
        return Boolean.valueOf(this.f28535e);
    }

    public void c(Map map) {
        this.f28536i = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && f.class == obj.getClass()) {
            f fVar = (f) obj;
            if (io.sentry.util.y.a(this.f28534d, fVar.f28534d) && io.sentry.util.y.a(Boolean.valueOf(this.f28535e), Boolean.valueOf(fVar.f28535e))) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28534d, Boolean.valueOf(this.f28535e));
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("flag").f(this.f28534d);
        f3Var.e("result").d(this.f28535e);
        Map map = this.f28536i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28536i.get(str));
            }
        }
        f3Var.D();
    }
}
