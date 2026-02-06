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
    private Long f28455d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f28456e;

    /* renamed from: i  reason: collision with root package name */
    private String f28457i;

    /* renamed from: o  reason: collision with root package name */
    private String f28458o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f28459p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f28460q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f28461r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f28462s;

    /* renamed from: t  reason: collision with root package name */
    private b0 f28463t;

    /* renamed from: u  reason: collision with root package name */
    private Map f28464u;

    /* renamed from: v  reason: collision with root package name */
    private Map f28465v;

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
                        c0Var.f28461r = e3Var.y0();
                        break;
                    case 1:
                        c0Var.f28456e = e3Var.j1();
                        break;
                    case 2:
                        Map t12 = e3Var.t1(iLogger, new w6.a());
                        if (t12 == null) {
                            break;
                        } else {
                            c0Var.f28464u = new HashMap(t12);
                            break;
                        }
                    case 3:
                        c0Var.f28455d = e3Var.l1();
                        break;
                    case 4:
                        c0Var.f28462s = e3Var.y0();
                        break;
                    case 5:
                        c0Var.f28457i = e3Var.q1();
                        break;
                    case 6:
                        c0Var.f28458o = e3Var.q1();
                        break;
                    case 7:
                        c0Var.f28459p = e3Var.y0();
                        break;
                    case '\b':
                        c0Var.f28460q = e3Var.y0();
                        break;
                    case '\t':
                        c0Var.f28463t = (b0) e3Var.G0(iLogger, new b0.a());
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
        this.f28465v = map;
    }

    public Map k() {
        return this.f28464u;
    }

    public Long l() {
        return this.f28455d;
    }

    public String m() {
        return this.f28457i;
    }

    public b0 n() {
        return this.f28463t;
    }

    public Boolean o() {
        return this.f28460q;
    }

    public Boolean p() {
        return this.f28462s;
    }

    public void q(Boolean bool) {
        this.f28459p = bool;
    }

    public void r(Boolean bool) {
        this.f28460q = bool;
    }

    public void s(Boolean bool) {
        this.f28461r = bool;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28455d != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f28455d);
        }
        if (this.f28456e != null) {
            f3Var.e("priority").i(this.f28456e);
        }
        if (this.f28457i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28457i);
        }
        if (this.f28458o != null) {
            f3Var.e("state").f(this.f28458o);
        }
        if (this.f28459p != null) {
            f3Var.e("crashed").k(this.f28459p);
        }
        if (this.f28460q != null) {
            f3Var.e("current").k(this.f28460q);
        }
        if (this.f28461r != null) {
            f3Var.e("daemon").k(this.f28461r);
        }
        if (this.f28462s != null) {
            f3Var.e("main").k(this.f28462s);
        }
        if (this.f28463t != null) {
            f3Var.e("stacktrace").j(iLogger, this.f28463t);
        }
        if (this.f28464u != null) {
            f3Var.e("held_locks").j(iLogger, this.f28464u);
        }
        Map map = this.f28465v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28465v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void t(Map map) {
        this.f28464u = map;
    }

    public void u(Long l10) {
        this.f28455d = l10;
    }

    public void v(Boolean bool) {
        this.f28462s = bool;
    }

    public void w(String str) {
        this.f28457i = str;
    }

    public void x(Integer num) {
        this.f28456e = num;
    }

    public void y(b0 b0Var) {
        this.f28463t = b0Var;
    }

    public void z(String str) {
        this.f28458o = str;
    }
}
