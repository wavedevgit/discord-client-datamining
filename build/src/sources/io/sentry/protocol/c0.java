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
    private Long f28703d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f28704e;

    /* renamed from: i  reason: collision with root package name */
    private String f28705i;

    /* renamed from: o  reason: collision with root package name */
    private String f28706o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f28707p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f28708q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f28709r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f28710s;

    /* renamed from: t  reason: collision with root package name */
    private b0 f28711t;

    /* renamed from: u  reason: collision with root package name */
    private Map f28712u;

    /* renamed from: v  reason: collision with root package name */
    private Map f28713v;

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
                        c0Var.f28709r = e3Var.w0();
                        break;
                    case 1:
                        c0Var.f28704e = e3Var.g1();
                        break;
                    case 2:
                        Map o12 = e3Var.o1(iLogger, new w6.a());
                        if (o12 == null) {
                            break;
                        } else {
                            c0Var.f28712u = new HashMap(o12);
                            break;
                        }
                    case 3:
                        c0Var.f28703d = e3Var.i1();
                        break;
                    case 4:
                        c0Var.f28710s = e3Var.w0();
                        break;
                    case 5:
                        c0Var.f28705i = e3Var.m1();
                        break;
                    case 6:
                        c0Var.f28706o = e3Var.m1();
                        break;
                    case 7:
                        c0Var.f28707p = e3Var.w0();
                        break;
                    case '\b':
                        c0Var.f28708q = e3Var.w0();
                        break;
                    case '\t':
                        c0Var.f28711t = (b0) e3Var.E0(iLogger, new b0.a());
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            c0Var.A(concurrentHashMap);
            e3Var.D();
            return c0Var;
        }
    }

    public void A(Map map) {
        this.f28713v = map;
    }

    public Map k() {
        return this.f28712u;
    }

    public Long l() {
        return this.f28703d;
    }

    public String m() {
        return this.f28705i;
    }

    public b0 n() {
        return this.f28711t;
    }

    public Boolean o() {
        return this.f28708q;
    }

    public Boolean p() {
        return this.f28710s;
    }

    public void q(Boolean bool) {
        this.f28707p = bool;
    }

    public void r(Boolean bool) {
        this.f28708q = bool;
    }

    public void s(Boolean bool) {
        this.f28709r = bool;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28703d != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f28703d);
        }
        if (this.f28704e != null) {
            f3Var.e("priority").i(this.f28704e);
        }
        if (this.f28705i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28705i);
        }
        if (this.f28706o != null) {
            f3Var.e("state").f(this.f28706o);
        }
        if (this.f28707p != null) {
            f3Var.e("crashed").k(this.f28707p);
        }
        if (this.f28708q != null) {
            f3Var.e("current").k(this.f28708q);
        }
        if (this.f28709r != null) {
            f3Var.e("daemon").k(this.f28709r);
        }
        if (this.f28710s != null) {
            f3Var.e("main").k(this.f28710s);
        }
        if (this.f28711t != null) {
            f3Var.e("stacktrace").j(iLogger, this.f28711t);
        }
        if (this.f28712u != null) {
            f3Var.e("held_locks").j(iLogger, this.f28712u);
        }
        Map map = this.f28713v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28713v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void t(Map map) {
        this.f28712u = map;
    }

    public void u(Long l10) {
        this.f28703d = l10;
    }

    public void v(Boolean bool) {
        this.f28710s = bool;
    }

    public void w(String str) {
        this.f28705i = str;
    }

    public void x(Integer num) {
        this.f28704e = num;
    }

    public void y(b0 b0Var) {
        this.f28711t = b0Var;
    }

    public void z(String str) {
        this.f28706o = str;
    }
}
