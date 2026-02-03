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
    private String[] f30282d;

    /* renamed from: e  reason: collision with root package name */
    private Map f30283e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public e0 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            e0 e0Var = new e0();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("active_profiles")) {
                    if (concurrentHashMap == null) {
                        concurrentHashMap = new ConcurrentHashMap();
                    }
                    e3Var.v1(iLogger, concurrentHashMap, l02);
                } else {
                    List list = (List) e3Var.V1();
                    if (list != null) {
                        String[] strArr = new String[list.size()];
                        list.toArray(strArr);
                        e0Var.f30282d = strArr;
                    }
                }
            }
            e0Var.b(concurrentHashMap);
            e3Var.y();
            return e0Var;
        }
    }

    public e0() {
    }

    public void b(Map map) {
        this.f30283e = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && e0.class == obj.getClass()) {
            return Arrays.equals(this.f30282d, ((e0) obj).f30282d);
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(this.f30282d);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30282d != null) {
            f3Var.e("active_profiles").j(iLogger, this.f30282d);
        }
        Map map = this.f30283e;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30283e.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public e0(e0 e0Var) {
        this.f30282d = e0Var.f30282d;
        this.f30283e = io.sentry.util.c.b(e0Var.f30283e);
    }
}
