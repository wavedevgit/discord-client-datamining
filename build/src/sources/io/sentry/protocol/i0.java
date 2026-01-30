package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.protocol.j0;
import io.sentry.w1;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i0 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f30383d;

    /* renamed from: e  reason: collision with root package name */
    private final List f30384e;

    /* renamed from: i  reason: collision with root package name */
    private Map f30385i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public i0 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            String str = null;
            List list = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("rendering_system")) {
                    if (!l02.equals("windows")) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                    } else {
                        list = e3Var.g2(iLogger, new j0.a());
                    }
                } else {
                    str = e3Var.r1();
                }
            }
            e3Var.y();
            i0 i0Var = new i0(str, list);
            i0Var.a(hashMap);
            return i0Var;
        }
    }

    public i0(String str, List list) {
        this.f30383d = str;
        this.f30384e = list;
    }

    public void a(Map map) {
        this.f30385i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30383d != null) {
            f3Var.e("rendering_system").f(this.f30383d);
        }
        if (this.f30384e != null) {
            f3Var.e("windows").j(iLogger, this.f30384e);
        }
        Map map = this.f30385i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30385i.get(str));
            }
        }
        f3Var.y();
    }
}
