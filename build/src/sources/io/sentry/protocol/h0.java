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
    private String f29356d;

    /* renamed from: e  reason: collision with root package name */
    private String f29357e;

    /* renamed from: i  reason: collision with root package name */
    private String f29358i;

    /* renamed from: o  reason: collision with root package name */
    private String f29359o;

    /* renamed from: p  reason: collision with root package name */
    private String f29360p;

    /* renamed from: q  reason: collision with root package name */
    private i f29361q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29362r;

    /* renamed from: s  reason: collision with root package name */
    private Map f29363s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public h0 a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
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
                        h0Var.f29358i = e3Var.r1();
                        break;
                    case 1:
                        h0Var.f29357e = e3Var.r1();
                        break;
                    case 2:
                        h0Var.f29361q = new i.a().a(e3Var, iLogger);
                        break;
                    case 3:
                        h0Var.f29362r = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 4:
                        h0Var.f29360p = e3Var.r1();
                        break;
                    case 5:
                        h0Var.f29356d = e3Var.r1();
                        break;
                    case 6:
                        h0Var.f29359o = e3Var.r1();
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
            e3Var.z();
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
            if (io.sentry.util.y.a(this.f29356d, h0Var.f29356d) && io.sentry.util.y.a(this.f29357e, h0Var.f29357e) && io.sentry.util.y.a(this.f29358i, h0Var.f29358i) && io.sentry.util.y.a(this.f29359o, h0Var.f29359o)) {
                return true;
            }
        }
        return false;
    }

    public String h() {
        return this.f29356d;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29356d, this.f29357e, this.f29358i, this.f29359o);
    }

    public String i() {
        return this.f29357e;
    }

    public String j() {
        return this.f29359o;
    }

    public String k() {
        return this.f29358i;
    }

    public void l(Map map) {
        this.f29362r = io.sentry.util.c.b(map);
    }

    public void m(String str) {
        this.f29356d = str;
    }

    public void n(i iVar) {
        this.f29361q = iVar;
    }

    public void o(String str) {
        this.f29357e = str;
    }

    public void p(String str) {
        this.f29359o = str;
    }

    public void q(Map map) {
        this.f29363s = map;
    }

    public void r(String str) {
        this.f29358i = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29356d != null) {
            f3Var.e("email").f(this.f29356d);
        }
        if (this.f29357e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).f(this.f29357e);
        }
        if (this.f29358i != null) {
            f3Var.e(NotificationRenderer.USERNAME).f(this.f29358i);
        }
        if (this.f29359o != null) {
            f3Var.e("ip_address").f(this.f29359o);
        }
        if (this.f29360p != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29360p);
        }
        if (this.f29361q != null) {
            f3Var.e("geo");
            this.f29361q.serialize(f3Var, iLogger);
        }
        if (this.f29362r != null) {
            f3Var.e("data").j(iLogger, this.f29362r);
        }
        Map map = this.f29363s;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29363s.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public h0(h0 h0Var) {
        this.f29356d = h0Var.f29356d;
        this.f29358i = h0Var.f29358i;
        this.f29357e = h0Var.f29357e;
        this.f29359o = h0Var.f29359o;
        this.f29360p = h0Var.f29360p;
        this.f29361q = h0Var.f29361q;
        this.f29362r = io.sentry.util.c.b(h0Var.f29362r);
        this.f29363s = io.sentry.util.c.b(h0Var.f29363s);
    }
}
