package io.sentry.protocol;

import com.discord.notifications.renderer.NotificationRenderer;
import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.protocol.i;
import io.sentry.w1;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h0 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f30355d;

    /* renamed from: e  reason: collision with root package name */
    private String f30356e;

    /* renamed from: i  reason: collision with root package name */
    private String f30357i;

    /* renamed from: o  reason: collision with root package name */
    private String f30358o;

    /* renamed from: p  reason: collision with root package name */
    private String f30359p;

    /* renamed from: q  reason: collision with root package name */
    private i f30360q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30361r;

    /* renamed from: s  reason: collision with root package name */
    private Map f30362s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public h0 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            h0 h0Var = new h0();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -265713450:
                        if (l02.equals(NotificationRenderer.USERNAME)) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3355:
                        if (l02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 102225:
                        if (l02.equals("geo")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3076010:
                        if (l02.equals("data")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3373707:
                        if (l02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 96619420:
                        if (l02.equals("email")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 1480014044:
                        if (l02.equals("ip_address")) {
                            c10 = 6;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        h0Var.f30357i = e3Var.r1();
                        break;
                    case 1:
                        h0Var.f30356e = e3Var.r1();
                        break;
                    case 2:
                        h0Var.f30360q = new i.a().a(e3Var, iLogger);
                        break;
                    case 3:
                        h0Var.f30361r = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 4:
                        h0Var.f30359p = e3Var.r1();
                        break;
                    case 5:
                        h0Var.f30355d = e3Var.r1();
                        break;
                    case 6:
                        h0Var.f30358o = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            h0Var.q(concurrentHashMap);
            e3Var.y();
            return h0Var;
        }
    }

    public h0() {
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && h0.class == obj.getClass()) {
            h0 h0Var = (h0) obj;
            if (io.sentry.util.y.a(this.f30355d, h0Var.f30355d) && io.sentry.util.y.a(this.f30356e, h0Var.f30356e) && io.sentry.util.y.a(this.f30357i, h0Var.f30357i) && io.sentry.util.y.a(this.f30358o, h0Var.f30358o)) {
                return true;
            }
        }
        return false;
    }

    public String h() {
        return this.f30355d;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30355d, this.f30356e, this.f30357i, this.f30358o);
    }

    public String i() {
        return this.f30356e;
    }

    public String j() {
        return this.f30358o;
    }

    public String k() {
        return this.f30357i;
    }

    public void l(Map map) {
        this.f30361r = io.sentry.util.c.b(map);
    }

    public void m(String str) {
        this.f30355d = str;
    }

    public void n(i iVar) {
        this.f30360q = iVar;
    }

    public void o(String str) {
        this.f30356e = str;
    }

    public void p(String str) {
        this.f30358o = str;
    }

    public void q(Map map) {
        this.f30362s = map;
    }

    public void r(String str) {
        this.f30357i = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30355d != null) {
            f3Var.e("email").f(this.f30355d);
        }
        if (this.f30356e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).f(this.f30356e);
        }
        if (this.f30357i != null) {
            f3Var.e(NotificationRenderer.USERNAME).f(this.f30357i);
        }
        if (this.f30358o != null) {
            f3Var.e("ip_address").f(this.f30358o);
        }
        if (this.f30359p != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30359p);
        }
        if (this.f30360q != null) {
            f3Var.e("geo");
            this.f30360q.serialize(f3Var, iLogger);
        }
        if (this.f30361r != null) {
            f3Var.e("data").j(iLogger, this.f30361r);
        }
        Map map = this.f30362s;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30362s.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public h0(h0 h0Var) {
        this.f30355d = h0Var.f30355d;
        this.f30357i = h0Var.f30357i;
        this.f30356e = h0Var.f30356e;
        this.f30358o = h0Var.f30358o;
        this.f30359p = h0Var.f30359p;
        this.f30360q = h0Var.f30360q;
        this.f30361r = io.sentry.util.c.b(h0Var.f30361r);
        this.f30362s = io.sentry.util.c.b(h0Var.f30362s);
    }
}
