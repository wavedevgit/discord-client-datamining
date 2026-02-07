package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.protocol.SentryStackFrame;
import io.sentry.w1;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private List f28497d;

    /* renamed from: e  reason: collision with root package name */
    private Map f28498e;

    /* renamed from: i  reason: collision with root package name */
    private Boolean f28499i;

    /* renamed from: o  reason: collision with root package name */
    private Map f28500o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public b0 a(e3 e3Var, ILogger iLogger) {
            b0 b0Var = new b0();
            e3Var.u();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1266514778:
                        if (o02.equals("frames")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 78226992:
                        if (o02.equals("registers")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 284874180:
                        if (o02.equals("snapshot")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        b0Var.f28497d = e3Var.g2(iLogger, new SentryStackFrame.a());
                        break;
                    case 1:
                        b0Var.f28498e = io.sentry.util.c.b((Map) e3Var.U1());
                        break;
                    case 2:
                        b0Var.f28499i = e3Var.y0();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            b0Var.g(concurrentHashMap);
            e3Var.D();
            return b0Var;
        }
    }

    public b0() {
    }

    public List d() {
        return this.f28497d;
    }

    public void e(List list) {
        this.f28497d = list;
    }

    public void f(Boolean bool) {
        this.f28499i = bool;
    }

    public void g(Map map) {
        this.f28500o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28497d != null) {
            f3Var.e("frames").j(iLogger, this.f28497d);
        }
        if (this.f28498e != null) {
            f3Var.e("registers").j(iLogger, this.f28498e);
        }
        if (this.f28499i != null) {
            f3Var.e("snapshot").k(this.f28499i);
        }
        Map map = this.f28500o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28500o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public b0(List list) {
        this.f28497d = list;
    }
}
