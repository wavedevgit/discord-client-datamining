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
    private String f29342d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f29343e;

    /* renamed from: i  reason: collision with root package name */
    private Map f29344i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public f a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            String str = null;
            Boolean bool = null;
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("result")) {
                    if (!m02.equals("flag")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                    } else {
                        str = e3Var.r1();
                    }
                } else {
                    bool = e3Var.w0();
                }
            }
            if (str != null) {
                if (bool != null) {
                    f fVar = new f(str, bool.booleanValue());
                    fVar.c(concurrentHashMap);
                    e3Var.z();
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
        this.f29342d = str;
        this.f29343e = z10;
    }

    public String a() {
        return this.f29342d;
    }

    public Boolean b() {
        return Boolean.valueOf(this.f29343e);
    }

    public void c(Map map) {
        this.f29344i = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && f.class == obj.getClass()) {
            f fVar = (f) obj;
            if (io.sentry.util.y.a(this.f29342d, fVar.f29342d) && io.sentry.util.y.a(Boolean.valueOf(this.f29343e), Boolean.valueOf(fVar.f29343e))) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29342d, Boolean.valueOf(this.f29343e));
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("flag").f(this.f29342d);
        f3Var.e("result").d(this.f29343e);
        Map map = this.f29344i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29344i.get(str));
            }
        }
        f3Var.z();
    }
}
