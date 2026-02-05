package io.sentry.protocol;

import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f29473d;

    /* renamed from: e  reason: collision with root package name */
    private String f29474e;

    /* renamed from: i  reason: collision with root package name */
    private Map f29475i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public y a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            String str = null;
            String str2 = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals(StackTraceHelper.NAME_KEY)) {
                    if (!m02.equals("version")) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                    } else {
                        str2 = e3Var.f1();
                    }
                } else {
                    str = e3Var.f1();
                }
            }
            e3Var.z();
            if (str != null) {
                if (str2 != null) {
                    y yVar = new y(str, str2);
                    yVar.c(hashMap);
                    return yVar;
                }
                IllegalStateException illegalStateException = new IllegalStateException("Missing required field \"version\"");
                iLogger.b(SentryLevel.ERROR, "Missing required field \"version\"", illegalStateException);
                throw illegalStateException;
            }
            IllegalStateException illegalStateException2 = new IllegalStateException("Missing required field \"name\"");
            iLogger.b(SentryLevel.ERROR, "Missing required field \"name\"", illegalStateException2);
            throw illegalStateException2;
        }
    }

    public y(String str, String str2) {
        this.f29473d = (String) io.sentry.util.y.c(str, "name is required.");
        this.f29474e = (String) io.sentry.util.y.c(str2, "version is required.");
    }

    public String a() {
        return this.f29473d;
    }

    public String b() {
        return this.f29474e;
    }

    public void c(Map map) {
        this.f29475i = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && y.class == obj.getClass()) {
            y yVar = (y) obj;
            if (Objects.equals(this.f29473d, yVar.f29473d) && Objects.equals(this.f29474e, yVar.f29474e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f29473d, this.f29474e);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29473d);
        f3Var.e("version").f(this.f29474e);
        Map map = this.f29475i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29475i.get(str));
            }
        }
        f3Var.z();
    }
}
