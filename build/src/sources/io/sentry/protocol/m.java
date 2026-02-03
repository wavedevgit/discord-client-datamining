package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f29989d;

    /* renamed from: e  reason: collision with root package name */
    private String f29990e;

    /* renamed from: i  reason: collision with root package name */
    private List f29991i;

    /* renamed from: o  reason: collision with root package name */
    private Map f29992o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public m a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            m mVar = new m();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -995427962:
                        if (m02.equals("params")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 954925063:
                        if (m02.equals("message")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 1811591356:
                        if (m02.equals("formatted")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        List list = (List) e3Var.V1();
                        if (list == null) {
                            break;
                        } else {
                            mVar.f29991i = list;
                            break;
                        }
                    case 1:
                        mVar.f29990e = e3Var.r1();
                        break;
                    case 2:
                        mVar.f29989d = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            mVar.g(concurrentHashMap);
            e3Var.y();
            return mVar;
        }
    }

    public String d() {
        return this.f29989d;
    }

    public String e() {
        return this.f29990e;
    }

    public void f(String str) {
        this.f29989d = str;
    }

    public void g(Map map) {
        this.f29992o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f29989d != null) {
            f3Var.e("formatted").f(this.f29989d);
        }
        if (this.f29990e != null) {
            f3Var.e("message").f(this.f29990e);
        }
        List list = this.f29991i;
        if (list != null && !list.isEmpty()) {
            f3Var.e("params").j(iLogger, this.f29991i);
        }
        Map map = this.f29992o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29992o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }
}
