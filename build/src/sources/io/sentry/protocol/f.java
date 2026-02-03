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
    private String f30284d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f30285e;

    /* renamed from: i  reason: collision with root package name */
    private Map f30286i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public f a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            String str = null;
            Boolean bool = null;
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("result")) {
                    if (!l02.equals("flag")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                    } else {
                        str = e3Var.r1();
                    }
                } else {
                    bool = e3Var.v0();
                }
            }
            if (str != null) {
                if (bool != null) {
                    f fVar = new f(str, bool.booleanValue());
                    fVar.c(concurrentHashMap);
                    e3Var.y();
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
        this.f30284d = str;
        this.f30285e = z10;
    }

    public String a() {
        return this.f30284d;
    }

    public Boolean b() {
        return Boolean.valueOf(this.f30285e);
    }

    public void c(Map map) {
        this.f30286i = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && f.class == obj.getClass()) {
            f fVar = (f) obj;
            if (io.sentry.util.y.a(this.f30284d, fVar.f30284d) && io.sentry.util.y.a(Boolean.valueOf(this.f30285e), Boolean.valueOf(fVar.f30285e))) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30284d, Boolean.valueOf(this.f30285e));
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("flag").f(this.f30284d);
        f3Var.e("result").d(this.f30285e);
        Map map = this.f30286i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30286i.get(str));
            }
        }
        f3Var.y();
    }
}
