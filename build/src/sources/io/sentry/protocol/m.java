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
    private String f28552d;

    /* renamed from: e  reason: collision with root package name */
    private String f28553e;

    /* renamed from: i  reason: collision with root package name */
    private List f28554i;

    /* renamed from: o  reason: collision with root package name */
    private Map f28555o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public m a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            m mVar = new m();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -995427962:
                        if (o02.equals("params")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 954925063:
                        if (o02.equals("message")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 1811591356:
                        if (o02.equals("formatted")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        List list = (List) e3Var.U1();
                        if (list == null) {
                            break;
                        } else {
                            mVar.f28554i = list;
                            break;
                        }
                    case 1:
                        mVar.f28553e = e3Var.q1();
                        break;
                    case 2:
                        mVar.f28552d = e3Var.q1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            mVar.g(concurrentHashMap);
            e3Var.D();
            return mVar;
        }
    }

    public String d() {
        return this.f28552d;
    }

    public String e() {
        return this.f28553e;
    }

    public void f(String str) {
        this.f28552d = str;
    }

    public void g(Map map) {
        this.f28555o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28552d != null) {
            f3Var.e("formatted").f(this.f28552d);
        }
        if (this.f28553e != null) {
            f3Var.e("message").f(this.f28553e);
        }
        List list = this.f28554i;
        if (list != null && !list.isEmpty()) {
            f3Var.e("params").j(iLogger, this.f28554i);
        }
        Map map = this.f28555o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28555o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }
}
