package io.sentry;

import com.facebook.react.modules.dialog.AlertFragment;
import io.sentry.x6;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private List f30585d;

    /* renamed from: e  reason: collision with root package name */
    private Map f30586e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public z6 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            List list = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals(AlertFragment.ARG_ITEMS)) {
                    if (hashMap == null) {
                        hashMap = new HashMap();
                    }
                    e3Var.v1(iLogger, hashMap, m02);
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
        this.f30585d = list;
    }

    public List a() {
        return this.f30585d;
    }

    public void b(Map map) {
        this.f30586e = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e(AlertFragment.ARG_ITEMS).j(iLogger, this.f30585d);
        Map map = this.f30586e;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30586e.get(str));
            }
        }
        f3Var.y();
    }
}
