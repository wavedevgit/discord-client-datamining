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
    private Long f29638d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f29639e;

    /* renamed from: i  reason: collision with root package name */
    private String f29640i;

    /* renamed from: o  reason: collision with root package name */
    private String f29641o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f29642p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f29643q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f29644r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f29645s;

    /* renamed from: t  reason: collision with root package name */
    private b0 f29646t;

    /* renamed from: u  reason: collision with root package name */
    private Map f29647u;

    /* renamed from: v  reason: collision with root package name */
    private Map f29648v;

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
                        c0Var.f29644r = e3Var.w0();
                        break;
                    case 1:
                        c0Var.f29639e = e3Var.l1();
                        break;
                    case 2:
                        Map t12 = e3Var.t1(iLogger, new w6.a());
                        if (t12 == null) {
                            break;
                        } else {
                            c0Var.f29647u = new HashMap(t12);
                            break;
                        }
                    case 3:
                        c0Var.f29638d = e3Var.n1();
                        break;
                    case 4:
                        c0Var.f29645s = e3Var.w0();
                        break;
                    case 5:
                        c0Var.f29640i = e3Var.r1();
                        break;
                    case 6:
                        c0Var.f29641o = e3Var.r1();
                        break;
                    case 7:
                        c0Var.f29642p = e3Var.w0();
                        break;
                    case '\b':
                        c0Var.f29643q = e3Var.w0();
                        break;
                    case '\t':
                        c0Var.f29646t = (b0) e3Var.I0(iLogger, new b0.a());
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
        this.f29648v = map;
    }

    public Map k() {
        return this.f29647u;
    }

    public Long l() {
        return this.f29638d;
    }

    public String m() {
        return this.f29640i;
    }

    public b0 n() {
        return this.f29646t;
    }

    public Boolean o() {
        return this.f29643q;
    }

    public Boolean p() {
        return this.f29645s;
    }

    public void q(Boolean bool) {
        this.f29642p = bool;
    }

    public void r(Boolean bool) {
        this.f29643q = bool;
    }

    public void s(Boolean bool) {
        this.f29644r = bool;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29638d != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f29638d);
        }
        if (this.f29639e != null) {
            f3Var.e("priority").i(this.f29639e);
        }
        if (this.f29640i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29640i);
        }
        if (this.f29641o != null) {
            f3Var.e("state").f(this.f29641o);
        }
        if (this.f29642p != null) {
            f3Var.e("crashed").k(this.f29642p);
        }
        if (this.f29643q != null) {
            f3Var.e("current").k(this.f29643q);
        }
        if (this.f29644r != null) {
            f3Var.e("daemon").k(this.f29644r);
        }
        if (this.f29645s != null) {
            f3Var.e("main").k(this.f29645s);
        }
        if (this.f29646t != null) {
            f3Var.e("stacktrace").j(iLogger, this.f29646t);
        }
        if (this.f29647u != null) {
            f3Var.e("held_locks").j(iLogger, this.f29647u);
        }
        Map map = this.f29648v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29648v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void t(Map map) {
        this.f29647u = map;
    }

    public void u(Long l10) {
        this.f29638d = l10;
    }

    public void v(Boolean bool) {
        this.f29645s = bool;
    }

    public void w(String str) {
        this.f29640i = str;
    }

    public void x(Integer num) {
        this.f29639e = num;
    }

    public void y(b0 b0Var) {
        this.f29646t = b0Var;
    }

    public void z(String str) {
        this.f29641o = str;
    }
}
