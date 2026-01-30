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
    private String f30371d;

    /* renamed from: e  reason: collision with root package name */
    private String f30372e;

    /* renamed from: i  reason: collision with root package name */
    private String f30373i;

    /* renamed from: o  reason: collision with root package name */
    private String f30374o;

    /* renamed from: p  reason: collision with root package name */
    private String f30375p;

    /* renamed from: q  reason: collision with root package name */
    private i f30376q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30377r;

    /* renamed from: s  reason: collision with root package name */
    private Map f30378s;

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
                        h0Var.f30373i = e3Var.r1();
                        break;
                    case 1:
                        h0Var.f30372e = e3Var.r1();
                        break;
                    case 2:
                        h0Var.f30376q = new i.a().a(e3Var, iLogger);
                        break;
                    case 3:
                        h0Var.f30377r = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 4:
                        h0Var.f30375p = e3Var.r1();
                        break;
                    case 5:
                        h0Var.f30371d = e3Var.r1();
                        break;
                    case 6:
                        h0Var.f30374o = e3Var.r1();
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
            if (io.sentry.util.y.a(this.f30371d, h0Var.f30371d) && io.sentry.util.y.a(this.f30372e, h0Var.f30372e) && io.sentry.util.y.a(this.f30373i, h0Var.f30373i) && io.sentry.util.y.a(this.f30374o, h0Var.f30374o)) {
                return true;
            }
        }
        return false;
    }

    public String h() {
        return this.f30371d;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30371d, this.f30372e, this.f30373i, this.f30374o);
    }

    public String i() {
        return this.f30372e;
    }

    public String j() {
        return this.f30374o;
    }

    public String k() {
        return this.f30373i;
    }

    public void l(Map map) {
        this.f30377r = io.sentry.util.c.b(map);
    }

    public void m(String str) {
        this.f30371d = str;
    }

    public void n(i iVar) {
        this.f30376q = iVar;
    }

    public void o(String str) {
        this.f30372e = str;
    }

    public void p(String str) {
        this.f30374o = str;
    }

    public void q(Map map) {
        this.f30378s = map;
    }

    public void r(String str) {
        this.f30373i = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30371d != null) {
            f3Var.e("email").f(this.f30371d);
        }
        if (this.f30372e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).f(this.f30372e);
        }
        if (this.f30373i != null) {
            f3Var.e(NotificationRenderer.USERNAME).f(this.f30373i);
        }
        if (this.f30374o != null) {
            f3Var.e("ip_address").f(this.f30374o);
        }
        if (this.f30375p != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30375p);
        }
        if (this.f30376q != null) {
            f3Var.e("geo");
            this.f30376q.serialize(f3Var, iLogger);
        }
        if (this.f30377r != null) {
            f3Var.e("data").j(iLogger, this.f30377r);
        }
        Map map = this.f30378s;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30378s.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public h0(h0 h0Var) {
        this.f30371d = h0Var.f30371d;
        this.f30373i = h0Var.f30373i;
        this.f30372e = h0Var.f30372e;
        this.f30374o = h0Var.f30374o;
        this.f30375p = h0Var.f30375p;
        this.f30376q = h0Var.f30376q;
        this.f30377r = io.sentry.util.c.b(h0Var.f30377r);
        this.f30378s = io.sentry.util.c.b(h0Var.f30378s);
    }
}
