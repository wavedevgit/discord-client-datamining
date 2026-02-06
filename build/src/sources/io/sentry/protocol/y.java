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
    private String f28617d;

    /* renamed from: e  reason: collision with root package name */
    private String f28618e;

    /* renamed from: i  reason: collision with root package name */
    private Map f28619i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public y a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            String str = null;
            String str2 = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals(StackTraceHelper.NAME_KEY)) {
                    if (!o02.equals("version")) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
                    } else {
                        str2 = e3Var.e1();
                    }
                } else {
                    str = e3Var.e1();
                }
            }
            e3Var.D();
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
        this.f28617d = (String) io.sentry.util.y.c(str, "name is required.");
        this.f28618e = (String) io.sentry.util.y.c(str2, "version is required.");
    }

    public String a() {
        return this.f28617d;
    }

    public String b() {
        return this.f28618e;
    }

    public void c(Map map) {
        this.f28619i = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && y.class == obj.getClass()) {
            y yVar = (y) obj;
            if (Objects.equals(this.f28617d, yVar.f28617d) && Objects.equals(this.f28618e, yVar.f28618e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f28617d, this.f28618e);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28617d);
        f3Var.e("version").f(this.f28618e);
        Map map = this.f28619i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28619i.get(str));
            }
        }
        f3Var.D();
    }
}
