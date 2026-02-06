package io.sentry;

import com.facebook.react.modules.dialog.AlertFragment;
import io.sentry.x6;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private List f29148d;

    /* renamed from: e  reason: collision with root package name */
    private Map f29149e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public z6 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            List list = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals(AlertFragment.ARG_ITEMS)) {
                    if (hashMap == null) {
                        hashMap = new HashMap();
                    }
                    e3Var.u1(iLogger, hashMap, o02);
                } else {
                    list = e3Var.g2(iLogger, new x6.a());
                }
            }
            e3Var.D();
            if (list != null) {
                z6 z6Var = new z6(list);
                z6Var.b(hashMap);
                return z6Var;
            }
            IllegalStateException illegalStateException = new IllegalStateException("Missing required field \"items\"");
            iLogger.b(SentryLevel.ERROR, "Missing required field \"items\"", illegalStateException);
            throw illegalStateException;
        }
    }

    public z6(List list) {
        this.f29148d = list;
    }

    public List a() {
        return this.f29148d;
    }

    public void b(Map map) {
        this.f29149e = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e(AlertFragment.ARG_ITEMS).j(iLogger, this.f29148d);
        Map map = this.f29149e;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29149e.get(str));
            }
        }
        f3Var.D();
    }
}
