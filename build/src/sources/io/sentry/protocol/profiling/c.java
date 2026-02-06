package io.sentry.protocol.profiling;

import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f28590d;

    /* renamed from: e  reason: collision with root package name */
    private int f28591e;

    /* renamed from: i  reason: collision with root package name */
    private Map f28592i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public c a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            c cVar = new c();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (o02.equals("priority")) {
                    cVar.f28591e = e3Var.nextInt();
                } else if (o02.equals(StackTraceHelper.NAME_KEY)) {
                    cVar.f28590d = e3Var.q1();
                } else {
                    if (hashMap == null) {
                        hashMap = new HashMap();
                    }
                    e3Var.u1(iLogger, hashMap, o02);
                }
            }
            cVar.c(hashMap);
            e3Var.D();
            return cVar;
        }
    }

    public void c(Map map) {
        this.f28592i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28590d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).j(iLogger, this.f28590d);
        }
        f3Var.e("priority").j(iLogger, Integer.valueOf(this.f28591e));
        Map map = this.f28592i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28592i.get(str));
            }
        }
        f3Var.D();
    }
}
