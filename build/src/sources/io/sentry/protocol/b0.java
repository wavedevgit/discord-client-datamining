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
    private List f30304d;

    /* renamed from: e  reason: collision with root package name */
    private Map f30305e;

    /* renamed from: i  reason: collision with root package name */
    private Boolean f30306i;

    /* renamed from: o  reason: collision with root package name */
    private Map f30307o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public b0 a(e3 e3Var, ILogger iLogger) {
            b0 b0Var = new b0();
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1266514778:
                        if (l02.equals("frames")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 78226992:
                        if (l02.equals("registers")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 284874180:
                        if (l02.equals("snapshot")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        b0Var.f30304d = e3Var.g2(iLogger, new SentryStackFrame.a());
                        break;
                    case 1:
                        b0Var.f30305e = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 2:
                        b0Var.f30306i = e3Var.v0();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            b0Var.g(concurrentHashMap);
            e3Var.y();
            return b0Var;
        }
    }

    public b0() {
    }

    public List d() {
        return this.f30304d;
    }

    public void e(List list) {
        this.f30304d = list;
    }

    public void f(Boolean bool) {
        this.f30306i = bool;
    }

    public void g(Map map) {
        this.f30307o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30304d != null) {
            f3Var.e("frames").j(iLogger, this.f30304d);
        }
        if (this.f30305e != null) {
            f3Var.e("registers").j(iLogger, this.f30305e);
        }
        if (this.f30306i != null) {
            f3Var.e("snapshot").k(this.f30306i);
        }
        Map map = this.f30307o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30307o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public b0(List list) {
        this.f30304d = list;
    }
}
