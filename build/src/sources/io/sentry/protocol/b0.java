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
    private List f29886d;

    /* renamed from: e  reason: collision with root package name */
    private Map f29887e;

    /* renamed from: i  reason: collision with root package name */
    private Boolean f29888i;

    /* renamed from: o  reason: collision with root package name */
    private Map f29889o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public b0 a(e3 e3Var, ILogger iLogger) {
            b0 b0Var = new b0();
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1266514778:
                        if (m02.equals("frames")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 78226992:
                        if (m02.equals("registers")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 284874180:
                        if (m02.equals("snapshot")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        b0Var.f29886d = e3Var.g2(iLogger, new SentryStackFrame.a());
                        break;
                    case 1:
                        b0Var.f29887e = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 2:
                        b0Var.f29888i = e3Var.x0();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
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
        return this.f29886d;
    }

    public void e(List list) {
        this.f29886d = list;
    }

    public void f(Boolean bool) {
        this.f29888i = bool;
    }

    public void g(Map map) {
        this.f29889o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f29886d != null) {
            f3Var.e("frames").j(iLogger, this.f29886d);
        }
        if (this.f29887e != null) {
            f3Var.e("registers").j(iLogger, this.f29887e);
        }
        if (this.f29888i != null) {
            f3Var.e("snapshot").k(this.f29888i);
        }
        Map map = this.f29889o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29889o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public b0(List list) {
        this.f29886d = list;
    }
}
