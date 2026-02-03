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
    private Long f29892d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f29893e;

    /* renamed from: i  reason: collision with root package name */
    private String f29894i;

    /* renamed from: o  reason: collision with root package name */
    private String f29895o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f29896p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f29897q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f29898r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f29899s;

    /* renamed from: t  reason: collision with root package name */
    private b0 f29900t;

    /* renamed from: u  reason: collision with root package name */
    private Map f29901u;

    /* renamed from: v  reason: collision with root package name */
    private Map f29902v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public c0 a(e3 e3Var, ILogger iLogger) {
            c0 c0Var = new c0();
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1339353468:
                        if (m02.equals("daemon")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1165461084:
                        if (m02.equals("priority")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -502917346:
                        if (m02.equals("held_locks")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3355:
                        if (m02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3343801:
                        if (m02.equals("main")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 3373707:
                        if (m02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 109757585:
                        if (m02.equals("state")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 1025385094:
                        if (m02.equals("crashed")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1126940025:
                        if (m02.equals("current")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 2055832509:
                        if (m02.equals("stacktrace")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        c0Var.f29898r = e3Var.x0();
                        break;
                    case 1:
                        c0Var.f29893e = e3Var.k1();
                        break;
                    case 2:
                        Map u12 = e3Var.u1(iLogger, new w6.a());
                        if (u12 == null) {
                            break;
                        } else {
                            c0Var.f29901u = new HashMap(u12);
                            break;
                        }
                    case 3:
                        c0Var.f29892d = e3Var.m1();
                        break;
                    case 4:
                        c0Var.f29899s = e3Var.x0();
                        break;
                    case 5:
                        c0Var.f29894i = e3Var.r1();
                        break;
                    case 6:
                        c0Var.f29895o = e3Var.r1();
                        break;
                    case 7:
                        c0Var.f29896p = e3Var.x0();
                        break;
                    case '\b':
                        c0Var.f29897q = e3Var.x0();
                        break;
                    case '\t':
                        c0Var.f29900t = (b0) e3Var.H0(iLogger, new b0.a());
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            c0Var.A(concurrentHashMap);
            e3Var.y();
            return c0Var;
        }
    }

    public void A(Map map) {
        this.f29902v = map;
    }

    public Map k() {
        return this.f29901u;
    }

    public Long l() {
        return this.f29892d;
    }

    public String m() {
        return this.f29894i;
    }

    public b0 n() {
        return this.f29900t;
    }

    public Boolean o() {
        return this.f29897q;
    }

    public Boolean p() {
        return this.f29899s;
    }

    public void q(Boolean bool) {
        this.f29896p = bool;
    }

    public void r(Boolean bool) {
        this.f29897q = bool;
    }

    public void s(Boolean bool) {
        this.f29898r = bool;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f29892d != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f29892d);
        }
        if (this.f29893e != null) {
            f3Var.e("priority").i(this.f29893e);
        }
        if (this.f29894i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29894i);
        }
        if (this.f29895o != null) {
            f3Var.e("state").f(this.f29895o);
        }
        if (this.f29896p != null) {
            f3Var.e("crashed").k(this.f29896p);
        }
        if (this.f29897q != null) {
            f3Var.e("current").k(this.f29897q);
        }
        if (this.f29898r != null) {
            f3Var.e("daemon").k(this.f29898r);
        }
        if (this.f29899s != null) {
            f3Var.e("main").k(this.f29899s);
        }
        if (this.f29900t != null) {
            f3Var.e("stacktrace").j(iLogger, this.f29900t);
        }
        if (this.f29901u != null) {
            f3Var.e("held_locks").j(iLogger, this.f29901u);
        }
        Map map = this.f29902v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29902v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public void t(Map map) {
        this.f29901u = map;
    }

    public void u(Long l10) {
        this.f29892d = l10;
    }

    public void v(Boolean bool) {
        this.f29899s = bool;
    }

    public void w(String str) {
        this.f29894i = str;
    }

    public void x(Integer num) {
        this.f29893e = num;
    }

    public void y(b0 b0Var) {
        this.f29900t = b0Var;
    }

    public void z(String str) {
        this.f29895o = str;
    }
}
