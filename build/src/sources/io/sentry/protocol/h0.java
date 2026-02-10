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
    private String f29683d;

    /* renamed from: e  reason: collision with root package name */
    private String f29684e;

    /* renamed from: i  reason: collision with root package name */
    private String f29685i;

    /* renamed from: o  reason: collision with root package name */
    private String f29686o;

    /* renamed from: p  reason: collision with root package name */
    private String f29687p;

    /* renamed from: q  reason: collision with root package name */
    private i f29688q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29689r;

    /* renamed from: s  reason: collision with root package name */
    private Map f29690s;

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
                        h0Var.f29685i = e3Var.r1();
                        break;
                    case 1:
                        h0Var.f29684e = e3Var.r1();
                        break;
                    case 2:
                        h0Var.f29688q = new i.a().a(e3Var, iLogger);
                        break;
                    case 3:
                        h0Var.f29689r = io.sentry.util.c.b((Map) e3Var.Z1());
                        break;
                    case 4:
                        h0Var.f29687p = e3Var.r1();
                        break;
                    case 5:
                        h0Var.f29683d = e3Var.r1();
                        break;
                    case 6:
                        h0Var.f29686o = e3Var.r1();
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
            if (io.sentry.util.y.a(this.f29683d, h0Var.f29683d) && io.sentry.util.y.a(this.f29684e, h0Var.f29684e) && io.sentry.util.y.a(this.f29685i, h0Var.f29685i) && io.sentry.util.y.a(this.f29686o, h0Var.f29686o)) {
                return true;
            }
        }
        return false;
    }

    public String h() {
        return this.f29683d;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29683d, this.f29684e, this.f29685i, this.f29686o);
    }

    public String i() {
        return this.f29684e;
    }

    public String j() {
        return this.f29686o;
    }

    public String k() {
        return this.f29685i;
    }

    public void l(Map map) {
        this.f29689r = io.sentry.util.c.b(map);
    }

    public void m(String str) {
        this.f29683d = str;
    }

    public void n(i iVar) {
        this.f29688q = iVar;
    }

    public void o(String str) {
        this.f29684e = str;
    }

    public void p(String str) {
        this.f29686o = str;
    }

    public void q(Map map) {
        this.f29690s = map;
    }

    public void r(String str) {
        this.f29685i = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29683d != null) {
            f3Var.e("email").f(this.f29683d);
        }
        if (this.f29684e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).f(this.f29684e);
        }
        if (this.f29685i != null) {
            f3Var.e(NotificationRenderer.USERNAME).f(this.f29685i);
        }
        if (this.f29686o != null) {
            f3Var.e("ip_address").f(this.f29686o);
        }
        if (this.f29687p != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29687p);
        }
        if (this.f29688q != null) {
            f3Var.e("geo");
            this.f29688q.serialize(f3Var, iLogger);
        }
        if (this.f29689r != null) {
            f3Var.e("data").j(iLogger, this.f29689r);
        }
        Map map = this.f29690s;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29690s.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public h0(h0 h0Var) {
        this.f29683d = h0Var.f29683d;
        this.f29685i = h0Var.f29685i;
        this.f29684e = h0Var.f29684e;
        this.f29686o = h0Var.f29686o;
        this.f29687p = h0Var.f29687p;
        this.f29688q = h0Var.f29688q;
        this.f29689r = io.sentry.util.c.b(h0Var.f29689r);
        this.f29690s = io.sentry.util.c.b(h0Var.f29690s);
    }
}
