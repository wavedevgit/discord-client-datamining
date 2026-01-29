package io.sentry;

import com.facebook.react.modules.dialog.AlertFragment;
import io.sentry.x6;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private List f31003d;

    /* renamed from: e  reason: collision with root package name */
    private Map f31004e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public z6 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            List list = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals(AlertFragment.ARG_ITEMS)) {
                    if (hashMap == null) {
                        hashMap = new HashMap();
                    }
                    e3Var.v1(iLogger, hashMap, l02);
                } else {
                    list = e3Var.g2(iLogger, new x6.a());
                }
            }
            e3Var.y();
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
        this.f31003d = list;
    }

    public List a() {
        return this.f31003d;
    }

    public void b(Map map) {
        this.f31004e = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e(AlertFragment.ARG_ITEMS).j(iLogger, this.f31003d);
        Map map = this.f31004e;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f31004e.get(str));
            }
        }
        f3Var.y();
    }
}
