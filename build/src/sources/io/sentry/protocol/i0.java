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
    private final String f29368d;

    /* renamed from: e  reason: collision with root package name */
    private final List f29369e;

    /* renamed from: i  reason: collision with root package name */
    private Map f29370i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public i0 a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            String str = null;
            List list = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("rendering_system")) {
                    if (!m02.equals("windows")) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                    } else {
                        list = e3Var.g2(iLogger, new j0.a());
                    }
                } else {
                    str = e3Var.r1();
                }
            }
            e3Var.z();
            i0 i0Var = new i0(str, list);
            i0Var.a(hashMap);
            return i0Var;
        }
    }

    public i0(String str, List list) {
        this.f29368d = str;
        this.f29369e = list;
    }

    public void a(Map map) {
        this.f29370i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29368d != null) {
            f3Var.e("rendering_system").f(this.f29368d);
        }
        if (this.f29369e != null) {
            f3Var.e("windows").j(iLogger, this.f29369e);
        }
        Map map = this.f29370i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29370i.get(str));
            }
        }
        f3Var.z();
    }
}
