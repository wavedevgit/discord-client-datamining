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
    private String f29364d;

    /* renamed from: e  reason: collision with root package name */
    private String f29365e;

    /* renamed from: i  reason: collision with root package name */
    private String f29366i;

    /* renamed from: o  reason: collision with root package name */
    private Map f29367o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public i a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            i iVar = new i();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -934795532:
                        if (m02.equals("region")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3053931:
                        if (m02.equals("city")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 1481071862:
                        if (m02.equals("country_code")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        iVar.f29366i = e3Var.r1();
                        break;
                    case 1:
                        iVar.f29364d = e3Var.r1();
                        break;
                    case 2:
                        iVar.f29365e = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            iVar.g(concurrentHashMap);
            e3Var.z();
            return iVar;
        }
    }

    public void d(String str) {
        this.f29364d = str;
    }

    public void e(String str) {
        this.f29365e = str;
    }

    public void f(String str) {
        this.f29366i = str;
    }

    public void g(Map map) {
        this.f29367o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29364d != null) {
            f3Var.e("city").f(this.f29364d);
        }
        if (this.f29365e != null) {
            f3Var.e("country_code").f(this.f29365e);
        }
        if (this.f29366i != null) {
            f3Var.e("region").f(this.f29366i);
        }
        Map map = this.f29367o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29367o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }
}
