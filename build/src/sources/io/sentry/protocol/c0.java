package io.sentry.protocol;

import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.protocol.b0;
import io.sentry.w1;
import io.sentry.w6;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c0 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private Long f29639d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f29640e;

    /* renamed from: i  reason: collision with root package name */
    private String f29641i;

    /* renamed from: o  reason: collision with root package name */
    private String f29642o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f29643p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f29644q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f29645r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f29646s;

    /* renamed from: t  reason: collision with root package name */
    private b0 f29647t;

    /* renamed from: u  reason: collision with root package name */
    private Map f29648u;

    /* renamed from: v  reason: collision with root package name */
    private Map f29649v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public c0 a(e3 e3Var, ILogger iLogger) {
            c0 c0Var = new c0();
            e3Var.u();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1339353468:
                        if (o02.equals("daemon")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1165461084:
                        if (o02.equals("priority")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -502917346:
                        if (o02.equals("held_locks")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3355:
                        if (o02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3343801:
                        if (o02.equals("main")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 3373707:
                        if (o02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 109757585:
                        if (o02.equals("state")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 1025385094:
                        if (o02.equals("crashed")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1126940025:
                        if (o02.equals("current")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 2055832509:
                        if (o02.equals("stacktrace")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        c0Var.f29645r = e3Var.w0();
                        break;
                    case 1:
                        c0Var.f29640e = e3Var.l1();
                        break;
                    case 2:
                        Map t12 = e3Var.t1(iLogger, new w6.a());
                        if (t12 == null) {
                            break;
                        } else {
                            c0Var.f29648u = new HashMap(t12);
                            break;
                        }
                    case 3:
                        c0Var.f29639d = e3Var.n1();
                        break;
                    case 4:
                        c0Var.f29646s = e3Var.w0();
                        break;
                    case 5:
                        c0Var.f29641i = e3Var.r1();
                        break;
                    case 6:
                        c0Var.f29642o = e3Var.r1();
                        break;
                    case 7:
                        c0Var.f29643p = e3Var.w0();
                        break;
                    case '\b':
                        c0Var.f29644q = e3Var.w0();
                        break;
                    case '\t':
                        c0Var.f29647t = (b0) e3Var.I0(iLogger, new b0.a());
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            c0Var.A(concurrentHashMap);
            e3Var.D();
            return c0Var;
        }
    }

    public void A(Map map) {
        this.f29649v = map;
    }

    public Map k() {
        return this.f29648u;
    }

    public Long l() {
        return this.f29639d;
    }

    public String m() {
        return this.f29641i;
    }

    public b0 n() {
        return this.f29647t;
    }

    public Boolean o() {
        return this.f29644q;
    }

    public Boolean p() {
        return this.f29646s;
    }

    public void q(Boolean bool) {
        this.f29643p = bool;
    }

    public void r(Boolean bool) {
        this.f29644q = bool;
    }

    public void s(Boolean bool) {
        this.f29645r = bool;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29639d != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f29639d);
        }
        if (this.f29640e != null) {
            f3Var.e("priority").i(this.f29640e);
        }
        if (this.f29641i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29641i);
        }
        if (this.f29642o != null) {
            f3Var.e("state").f(this.f29642o);
        }
        if (this.f29643p != null) {
            f3Var.e("crashed").k(this.f29643p);
        }
        if (this.f29644q != null) {
            f3Var.e("current").k(this.f29644q);
        }
        if (this.f29645r != null) {
            f3Var.e("daemon").k(this.f29645r);
        }
        if (this.f29646s != null) {
            f3Var.e("main").k(this.f29646s);
        }
        if (this.f29647t != null) {
            f3Var.e("stacktrace").j(iLogger, this.f29647t);
        }
        if (this.f29648u != null) {
            f3Var.e("held_locks").j(iLogger, this.f29648u);
        }
        Map map = this.f29649v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29649v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void t(Map map) {
        this.f29648u = map;
    }

    public void u(Long l10) {
        this.f29639d = l10;
    }

    public void v(Boolean bool) {
        this.f29646s = bool;
    }

    public void w(String str) {
        this.f29641i = str;
    }

    public void x(Integer num) {
        this.f29640e = num;
    }

    public void y(b0 b0Var) {
        this.f29647t = b0Var;
    }

    public void z(String str) {
        this.f29642o = str;
    }
}
