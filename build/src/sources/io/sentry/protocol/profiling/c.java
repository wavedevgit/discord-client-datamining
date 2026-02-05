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
    private String f29446d;

    /* renamed from: e  reason: collision with root package name */
    private int f29447e;

    /* renamed from: i  reason: collision with root package name */
    private Map f29448i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public c a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            c cVar = new c();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (m02.equals("priority")) {
                    cVar.f29447e = e3Var.nextInt();
                } else if (m02.equals(StackTraceHelper.NAME_KEY)) {
                    cVar.f29446d = e3Var.r1();
                } else {
                    if (hashMap == null) {
                        hashMap = new HashMap();
                    }
                    e3Var.v1(iLogger, hashMap, m02);
                }
            }
            cVar.c(hashMap);
            e3Var.z();
            return cVar;
        }
    }

    public void c(Map map) {
        this.f29448i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29446d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).j(iLogger, this.f29446d);
        }
        f3Var.e("priority").j(iLogger, Integer.valueOf(this.f29447e));
        Map map = this.f29448i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29448i.get(str));
            }
        }
        f3Var.z();
    }
}
