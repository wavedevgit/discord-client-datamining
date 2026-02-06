package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f28508d;

    /* renamed from: e  reason: collision with root package name */
    private String f28509e;

    /* renamed from: i  reason: collision with root package name */
    private String f28510i;

    /* renamed from: o  reason: collision with root package name */
    private Map f28511o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public i a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            i iVar = new i();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -934795532:
                        if (o02.equals("region")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3053931:
                        if (o02.equals("city")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 1481071862:
                        if (o02.equals("country_code")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        iVar.f28510i = e3Var.q1();
                        break;
                    case 1:
                        iVar.f28508d = e3Var.q1();
                        break;
                    case 2:
                        iVar.f28509e = e3Var.q1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            iVar.g(concurrentHashMap);
            e3Var.D();
            return iVar;
        }
    }

    public void d(String str) {
        this.f28508d = str;
    }

    public void e(String str) {
        this.f28509e = str;
    }

    public void f(String str) {
        this.f28510i = str;
    }

    public void g(Map map) {
        this.f28511o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28508d != null) {
            f3Var.e("city").f(this.f28508d);
        }
        if (this.f28509e != null) {
            f3Var.e("country_code").f(this.f28509e);
        }
        if (this.f28510i != null) {
            f3Var.e("region").f(this.f28510i);
        }
        Map map = this.f28511o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28511o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }
}
