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
    private String f30423d;

    /* renamed from: e  reason: collision with root package name */
    private String f30424e;

    /* renamed from: i  reason: collision with root package name */
    private List f30425i;

    /* renamed from: o  reason: collision with root package name */
    private Map f30426o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public m a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            m mVar = new m();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -995427962:
                        if (l02.equals("params")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 954925063:
                        if (l02.equals("message")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 1811591356:
                        if (l02.equals("formatted")) {
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
                            mVar.f30425i = list;
                            break;
                        }
                    case 1:
                        mVar.f30424e = e3Var.r1();
                        break;
                    case 2:
                        mVar.f30423d = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            mVar.g(concurrentHashMap);
            e3Var.y();
            return mVar;
        }
    }

    public String d() {
        return this.f30423d;
    }

    public String e() {
        return this.f30424e;
    }

    public void f(String str) {
        this.f30423d = str;
    }

    public void g(Map map) {
        this.f30426o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30423d != null) {
            f3Var.e("formatted").f(this.f30423d);
        }
        if (this.f30424e != null) {
            f3Var.e("message").f(this.f30424e);
        }
        List list = this.f30425i;
        if (list != null && !list.isEmpty()) {
            f3Var.e("params").j(iLogger, this.f30425i);
        }
        Map map = this.f30426o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30426o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }
}
