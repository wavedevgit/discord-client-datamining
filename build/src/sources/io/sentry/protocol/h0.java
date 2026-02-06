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
    private String f28500d;

    /* renamed from: e  reason: collision with root package name */
    private String f28501e;

    /* renamed from: i  reason: collision with root package name */
    private String f28502i;

    /* renamed from: o  reason: collision with root package name */
    private String f28503o;

    /* renamed from: p  reason: collision with root package name */
    private String f28504p;

    /* renamed from: q  reason: collision with root package name */
    private i f28505q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28506r;

    /* renamed from: s  reason: collision with root package name */
    private Map f28507s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public h0 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            h0 h0Var = new h0();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -265713450:
                        if (o02.equals(NotificationRenderer.USERNAME)) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3355:
                        if (o02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 102225:
                        if (o02.equals("geo")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3076010:
                        if (o02.equals("data")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3373707:
                        if (o02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 96619420:
                        if (o02.equals("email")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 1480014044:
                        if (o02.equals("ip_address")) {
                            c10 = 6;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        h0Var.f28502i = e3Var.q1();
                        break;
                    case 1:
                        h0Var.f28501e = e3Var.q1();
                        break;
                    case 2:
                        h0Var.f28505q = new i.a().a(e3Var, iLogger);
                        break;
                    case 3:
                        h0Var.f28506r = io.sentry.util.c.b((Map) e3Var.U1());
                        break;
                    case 4:
                        h0Var.f28504p = e3Var.q1();
                        break;
                    case 5:
                        h0Var.f28500d = e3Var.q1();
                        break;
                    case 6:
                        h0Var.f28503o = e3Var.q1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            h0Var.q(concurrentHashMap);
            e3Var.D();
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
            if (io.sentry.util.y.a(this.f28500d, h0Var.f28500d) && io.sentry.util.y.a(this.f28501e, h0Var.f28501e) && io.sentry.util.y.a(this.f28502i, h0Var.f28502i) && io.sentry.util.y.a(this.f28503o, h0Var.f28503o)) {
                return true;
            }
        }
        return false;
    }

    public String h() {
        return this.f28500d;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28500d, this.f28501e, this.f28502i, this.f28503o);
    }

    public String i() {
        return this.f28501e;
    }

    public String j() {
        return this.f28503o;
    }

    public String k() {
        return this.f28502i;
    }

    public void l(Map map) {
        this.f28506r = io.sentry.util.c.b(map);
    }

    public void m(String str) {
        this.f28500d = str;
    }

    public void n(i iVar) {
        this.f28505q = iVar;
    }

    public void o(String str) {
        this.f28501e = str;
    }

    public void p(String str) {
        this.f28503o = str;
    }

    public void q(Map map) {
        this.f28507s = map;
    }

    public void r(String str) {
        this.f28502i = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28500d != null) {
            f3Var.e("email").f(this.f28500d);
        }
        if (this.f28501e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).f(this.f28501e);
        }
        if (this.f28502i != null) {
            f3Var.e(NotificationRenderer.USERNAME).f(this.f28502i);
        }
        if (this.f28503o != null) {
            f3Var.e("ip_address").f(this.f28503o);
        }
        if (this.f28504p != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28504p);
        }
        if (this.f28505q != null) {
            f3Var.e("geo");
            this.f28505q.serialize(f3Var, iLogger);
        }
        if (this.f28506r != null) {
            f3Var.e("data").j(iLogger, this.f28506r);
        }
        Map map = this.f28507s;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28507s.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public h0(h0 h0Var) {
        this.f28500d = h0Var.f28500d;
        this.f28502i = h0Var.f28502i;
        this.f28501e = h0Var.f28501e;
        this.f28503o = h0Var.f28503o;
        this.f28504p = h0Var.f28504p;
        this.f28505q = h0Var.f28505q;
        this.f28506r = io.sentry.util.c.b(h0Var.f28506r);
        this.f28507s = io.sentry.util.c.b(h0Var.f28507s);
    }
}
