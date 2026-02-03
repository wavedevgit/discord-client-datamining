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
    private String f29937d;

    /* renamed from: e  reason: collision with root package name */
    private String f29938e;

    /* renamed from: i  reason: collision with root package name */
    private String f29939i;

    /* renamed from: o  reason: collision with root package name */
    private String f29940o;

    /* renamed from: p  reason: collision with root package name */
    private String f29941p;

    /* renamed from: q  reason: collision with root package name */
    private i f29942q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29943r;

    /* renamed from: s  reason: collision with root package name */
    private Map f29944s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public h0 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            h0 h0Var = new h0();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -265713450:
                        if (m02.equals(NotificationRenderer.USERNAME)) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3355:
                        if (m02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 102225:
                        if (m02.equals("geo")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3076010:
                        if (m02.equals("data")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3373707:
                        if (m02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 96619420:
                        if (m02.equals("email")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 1480014044:
                        if (m02.equals("ip_address")) {
                            c10 = 6;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        h0Var.f29939i = e3Var.r1();
                        break;
                    case 1:
                        h0Var.f29938e = e3Var.r1();
                        break;
                    case 2:
                        h0Var.f29942q = new i.a().a(e3Var, iLogger);
                        break;
                    case 3:
                        h0Var.f29943r = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 4:
                        h0Var.f29941p = e3Var.r1();
                        break;
                    case 5:
                        h0Var.f29937d = e3Var.r1();
                        break;
                    case 6:
                        h0Var.f29940o = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
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
            if (io.sentry.util.y.a(this.f29937d, h0Var.f29937d) && io.sentry.util.y.a(this.f29938e, h0Var.f29938e) && io.sentry.util.y.a(this.f29939i, h0Var.f29939i) && io.sentry.util.y.a(this.f29940o, h0Var.f29940o)) {
                return true;
            }
        }
        return false;
    }

    public String h() {
        return this.f29937d;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29937d, this.f29938e, this.f29939i, this.f29940o);
    }

    public String i() {
        return this.f29938e;
    }

    public String j() {
        return this.f29940o;
    }

    public String k() {
        return this.f29939i;
    }

    public void l(Map map) {
        this.f29943r = io.sentry.util.c.b(map);
    }

    public void m(String str) {
        this.f29937d = str;
    }

    public void n(i iVar) {
        this.f29942q = iVar;
    }

    public void o(String str) {
        this.f29938e = str;
    }

    public void p(String str) {
        this.f29940o = str;
    }

    public void q(Map map) {
        this.f29944s = map;
    }

    public void r(String str) {
        this.f29939i = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f29937d != null) {
            f3Var.e("email").f(this.f29937d);
        }
        if (this.f29938e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).f(this.f29938e);
        }
        if (this.f29939i != null) {
            f3Var.e(NotificationRenderer.USERNAME).f(this.f29939i);
        }
        if (this.f29940o != null) {
            f3Var.e("ip_address").f(this.f29940o);
        }
        if (this.f29941p != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29941p);
        }
        if (this.f29942q != null) {
            f3Var.e("geo");
            this.f29942q.serialize(f3Var, iLogger);
        }
        if (this.f29943r != null) {
            f3Var.e("data").j(iLogger, this.f29943r);
        }
        Map map = this.f29944s;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29944s.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public h0(h0 h0Var) {
        this.f29937d = h0Var.f29937d;
        this.f29939i = h0Var.f29939i;
        this.f29938e = h0Var.f29938e;
        this.f29940o = h0Var.f29940o;
        this.f29941p = h0Var.f29941p;
        this.f29942q = h0Var.f29942q;
        this.f29943r = io.sentry.util.c.b(h0Var.f29943r);
        this.f29944s = io.sentry.util.c.b(h0Var.f29944s);
    }
}
