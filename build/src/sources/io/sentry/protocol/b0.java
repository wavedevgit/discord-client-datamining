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
    private List f28697d;

    /* renamed from: e  reason: collision with root package name */
    private Map f28698e;

    /* renamed from: i  reason: collision with root package name */
    private Boolean f28699i;

    /* renamed from: o  reason: collision with root package name */
    private Map f28700o;

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
                        b0Var.f28697d = e3Var.f2(iLogger, new SentryStackFrame.a());
                        break;
                    case 1:
                        b0Var.f28698e = io.sentry.util.c.b((Map) e3Var.T1());
                        break;
                    case 2:
                        b0Var.f28699i = e3Var.w0();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap, o02);
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
        return this.f28697d;
    }

    public void e(List list) {
        this.f28697d = list;
    }

    public void f(Boolean bool) {
        this.f28699i = bool;
    }

    public void g(Map map) {
        this.f28700o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28697d != null) {
            f3Var.e("frames").j(iLogger, this.f28697d);
        }
        if (this.f28698e != null) {
            f3Var.e("registers").j(iLogger, this.f28698e);
        }
        if (this.f28699i != null) {
            f3Var.e("snapshot").k(this.f28699i);
        }
        Map map = this.f28700o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28700o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public b0(List list) {
        this.f28697d = list;
    }
}
