package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String[] f28732d;

    /* renamed from: e  reason: collision with root package name */
    private Map f28733e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public e0 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            e0 e0Var = new e0();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("active_profiles")) {
                    if (concurrentHashMap == null) {
                        concurrentHashMap = new ConcurrentHashMap();
                    }
                    e3Var.p1(iLogger, concurrentHashMap, o02);
                } else {
                    List list = (List) e3Var.T1();
                    if (list != null) {
                        String[] strArr = new String[list.size()];
                        list.toArray(strArr);
                        e0Var.f28732d = strArr;
                    }
                }
            }
            e0Var.b(concurrentHashMap);
            e3Var.D();
            return e0Var;
        }
    }

    public e0() {
    }

    public void b(Map map) {
        this.f28733e = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && e0.class == obj.getClass()) {
            return Arrays.equals(this.f28732d, ((e0) obj).f28732d);
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(this.f28732d);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28732d != null) {
            f3Var.e("active_profiles").j(iLogger, this.f28732d);
        }
        Map map = this.f28733e;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28733e.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public e0(e0 e0Var) {
        this.f28732d = e0Var.f28732d;
        this.f28733e = io.sentry.util.c.b(e0Var.f28733e);
    }
}
