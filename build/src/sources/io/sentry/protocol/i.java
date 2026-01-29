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
    private String f30363d;

    /* renamed from: e  reason: collision with root package name */
    private String f30364e;

    /* renamed from: i  reason: collision with root package name */
    private String f30365i;

    /* renamed from: o  reason: collision with root package name */
    private Map f30366o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public i a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            i iVar = new i();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -934795532:
                        if (l02.equals("region")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3053931:
                        if (l02.equals("city")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 1481071862:
                        if (l02.equals("country_code")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        iVar.f30365i = e3Var.r1();
                        break;
                    case 1:
                        iVar.f30363d = e3Var.r1();
                        break;
                    case 2:
                        iVar.f30364e = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            iVar.g(concurrentHashMap);
            e3Var.y();
            return iVar;
        }
    }

    public void d(String str) {
        this.f30363d = str;
    }

    public void e(String str) {
        this.f30364e = str;
    }

    public void f(String str) {
        this.f30365i = str;
    }

    public void g(Map map) {
        this.f30366o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30363d != null) {
            f3Var.e("city").f(this.f30363d);
        }
        if (this.f30364e != null) {
            f3Var.e("country_code").f(this.f30364e);
        }
        if (this.f30365i != null) {
            f3Var.e("region").f(this.f30365i);
        }
        Map map = this.f30366o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30366o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }
}
