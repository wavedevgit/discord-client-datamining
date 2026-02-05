package io.sentry;

import com.facebook.react.modules.dialog.AlertFragment;
import io.sentry.x6;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private List f30004d;

    /* renamed from: e  reason: collision with root package name */
    private Map f30005e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public z6 a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
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
            e3Var.z();
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
        this.f30004d = list;
    }

    public List a() {
        return this.f30004d;
    }

    public void b(Map map) {
        this.f30005e = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e(AlertFragment.ARG_ITEMS).j(iLogger, this.f30004d);
        Map map = this.f30005e;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30005e.get(str));
            }
        }
        f3Var.z();
    }
}
