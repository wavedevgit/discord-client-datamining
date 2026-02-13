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
    private Long f30207d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f30208e;

    /* renamed from: i  reason: collision with root package name */
    private String f30209i;

    /* renamed from: o  reason: collision with root package name */
    private String f30210o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f30211p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f30212q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f30213r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f30214s;

    /* renamed from: t  reason: collision with root package name */
    private b0 f30215t;

    /* renamed from: u  reason: collision with root package name */
    private Map f30216u;

    /* renamed from: v  reason: collision with root package name */
    private Map f30217v;

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
                        c0Var.f30213r = e3Var.w0();
                        break;
                    case 1:
                        c0Var.f30208e = e3Var.l1();
                        break;
                    case 2:
                        Map t12 = e3Var.t1(iLogger, new w6.a());
                        if (t12 == null) {
                            break;
                        } else {
                            c0Var.f30216u = new HashMap(t12);
                            break;
                        }
                    case 3:
                        c0Var.f30207d = e3Var.n1();
                        break;
                    case 4:
                        c0Var.f30214s = e3Var.w0();
                        break;
                    case 5:
                        c0Var.f30209i = e3Var.r1();
                        break;
                    case 6:
                        c0Var.f30210o = e3Var.r1();
                        break;
                    case 7:
                        c0Var.f30211p = e3Var.w0();
                        break;
                    case '\b':
                        c0Var.f30212q = e3Var.w0();
                        break;
                    case '\t':
                        c0Var.f30215t = (b0) e3Var.I0(iLogger, new b0.a());
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
        this.f30217v = map;
    }

    public Map k() {
        return this.f30216u;
    }

    public Long l() {
        return this.f30207d;
    }

    public String m() {
        return this.f30209i;
    }

    public b0 n() {
        return this.f30215t;
    }

    public Boolean o() {
        return this.f30212q;
    }

    public Boolean p() {
        return this.f30214s;
    }

    public void q(Boolean bool) {
        this.f30211p = bool;
    }

    public void r(Boolean bool) {
        this.f30212q = bool;
    }

    public void s(Boolean bool) {
        this.f30213r = bool;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f30207d != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f30207d);
        }
        if (this.f30208e != null) {
            f3Var.e("priority").i(this.f30208e);
        }
        if (this.f30209i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30209i);
        }
        if (this.f30210o != null) {
            f3Var.e("state").f(this.f30210o);
        }
        if (this.f30211p != null) {
            f3Var.e("crashed").k(this.f30211p);
        }
        if (this.f30212q != null) {
            f3Var.e("current").k(this.f30212q);
        }
        if (this.f30213r != null) {
            f3Var.e("daemon").k(this.f30213r);
        }
        if (this.f30214s != null) {
            f3Var.e("main").k(this.f30214s);
        }
        if (this.f30215t != null) {
            f3Var.e("stacktrace").j(iLogger, this.f30215t);
        }
        if (this.f30216u != null) {
            f3Var.e("held_locks").j(iLogger, this.f30216u);
        }
        Map map = this.f30217v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30217v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void t(Map map) {
        this.f30216u = map;
    }

    public void u(Long l10) {
        this.f30207d = l10;
    }

    public void v(Boolean bool) {
        this.f30214s = bool;
    }

    public void w(String str) {
        this.f30209i = str;
    }

    public void x(Integer num) {
        this.f30208e = num;
    }

    public void y(b0 b0Var) {
        this.f30215t = b0Var;
    }

    public void z(String str) {
        this.f30210o = str;
    }
}
