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
    private Long f30326d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f30327e;

    /* renamed from: i  reason: collision with root package name */
    private String f30328i;

    /* renamed from: o  reason: collision with root package name */
    private String f30329o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f30330p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f30331q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f30332r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f30333s;

    /* renamed from: t  reason: collision with root package name */
    private b0 f30334t;

    /* renamed from: u  reason: collision with root package name */
    private Map f30335u;

    /* renamed from: v  reason: collision with root package name */
    private Map f30336v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public c0 a(e3 e3Var, ILogger iLogger) {
            c0 c0Var = new c0();
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1339353468:
                        if (l02.equals("daemon")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1165461084:
                        if (l02.equals("priority")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -502917346:
                        if (l02.equals("held_locks")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3355:
                        if (l02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3343801:
                        if (l02.equals("main")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 3373707:
                        if (l02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 109757585:
                        if (l02.equals("state")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 1025385094:
                        if (l02.equals("crashed")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1126940025:
                        if (l02.equals("current")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 2055832509:
                        if (l02.equals("stacktrace")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        c0Var.f30332r = e3Var.v0();
                        break;
                    case 1:
                        c0Var.f30327e = e3Var.j1();
                        break;
                    case 2:
                        Map u12 = e3Var.u1(iLogger, new w6.a());
                        if (u12 == null) {
                            break;
                        } else {
                            c0Var.f30335u = new HashMap(u12);
                            break;
                        }
                    case 3:
                        c0Var.f30326d = e3Var.m1();
                        break;
                    case 4:
                        c0Var.f30333s = e3Var.v0();
                        break;
                    case 5:
                        c0Var.f30328i = e3Var.r1();
                        break;
                    case 6:
                        c0Var.f30329o = e3Var.r1();
                        break;
                    case 7:
                        c0Var.f30330p = e3Var.v0();
                        break;
                    case '\b':
                        c0Var.f30331q = e3Var.v0();
                        break;
                    case '\t':
                        c0Var.f30334t = (b0) e3Var.G0(iLogger, new b0.a());
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            c0Var.A(concurrentHashMap);
            e3Var.y();
            return c0Var;
        }
    }

    public void A(Map map) {
        this.f30336v = map;
    }

    public Map k() {
        return this.f30335u;
    }

    public Long l() {
        return this.f30326d;
    }

    public String m() {
        return this.f30328i;
    }

    public b0 n() {
        return this.f30334t;
    }

    public Boolean o() {
        return this.f30331q;
    }

    public Boolean p() {
        return this.f30333s;
    }

    public void q(Boolean bool) {
        this.f30330p = bool;
    }

    public void r(Boolean bool) {
        this.f30331q = bool;
    }

    public void s(Boolean bool) {
        this.f30332r = bool;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30326d != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f30326d);
        }
        if (this.f30327e != null) {
            f3Var.e("priority").i(this.f30327e);
        }
        if (this.f30328i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30328i);
        }
        if (this.f30329o != null) {
            f3Var.e("state").f(this.f30329o);
        }
        if (this.f30330p != null) {
            f3Var.e("crashed").k(this.f30330p);
        }
        if (this.f30331q != null) {
            f3Var.e("current").k(this.f30331q);
        }
        if (this.f30332r != null) {
            f3Var.e("daemon").k(this.f30332r);
        }
        if (this.f30333s != null) {
            f3Var.e("main").k(this.f30333s);
        }
        if (this.f30334t != null) {
            f3Var.e("stacktrace").j(iLogger, this.f30334t);
        }
        if (this.f30335u != null) {
            f3Var.e("held_locks").j(iLogger, this.f30335u);
        }
        Map map = this.f30336v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30336v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public void t(Map map) {
        this.f30335u = map;
    }

    public void u(Long l10) {
        this.f30326d = l10;
    }

    public void v(Boolean bool) {
        this.f30333s = bool;
    }

    public void w(String str) {
        this.f30328i = str;
    }

    public void x(Integer num) {
        this.f30327e = num;
    }

    public void y(b0 b0Var) {
        this.f30334t = b0Var;
    }

    public void z(String str) {
        this.f30329o = str;
    }
}
