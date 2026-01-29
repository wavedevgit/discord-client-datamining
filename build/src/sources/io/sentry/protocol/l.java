package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final transient Thread f30395d;

    /* renamed from: e  reason: collision with root package name */
    private String f30396e;

    /* renamed from: i  reason: collision with root package name */
    private String f30397i;

    /* renamed from: o  reason: collision with root package name */
    private String f30398o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f30399p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30400q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30401r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f30402s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f30403t;

    /* renamed from: u  reason: collision with root package name */
    private Integer f30404u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f30405v;

    /* renamed from: w  reason: collision with root package name */
    private Map f30406w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public l a(e3 e3Var, ILogger iLogger) {
            l lVar = new l();
            e3Var.r();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1724546052:
                        if (l02.equals("description")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -268203253:
                        if (l02.equals("exception_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3076010:
                        if (l02.equals("data")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3347973:
                        if (l02.equals("meta")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3575610:
                        if (l02.equals("type")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 692803388:
                        if (l02.equals("handled")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 989128517:
                        if (l02.equals("synthetic")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 1032012154:
                        if (l02.equals("is_exception_group")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1297152568:
                        if (l02.equals("help_link")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 2070327504:
                        if (l02.equals("parent_id")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        lVar.f30397i = e3Var.r1();
                        break;
                    case 1:
                        lVar.f30403t = e3Var.j1();
                        break;
                    case 2:
                        lVar.f30401r = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 3:
                        lVar.f30400q = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 4:
                        lVar.f30396e = e3Var.r1();
                        break;
                    case 5:
                        lVar.f30399p = e3Var.v0();
                        break;
                    case 6:
                        lVar.f30402s = e3Var.v0();
                        break;
                    case 7:
                        lVar.f30405v = e3Var.v0();
                        break;
                    case '\b':
                        lVar.f30398o = e3Var.r1();
                        break;
                    case '\t':
                        lVar.f30404u = e3Var.j1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                        break;
                }
            }
            e3Var.y();
            lVar.q(hashMap);
            return lVar;
        }
    }

    public l() {
        this(null);
    }

    public String k() {
        return this.f30396e;
    }

    public Boolean l() {
        return this.f30399p;
    }

    public void m(Integer num) {
        this.f30403t = num;
    }

    public void n(Boolean bool) {
        this.f30399p = bool;
    }

    public void o(Integer num) {
        this.f30404u = num;
    }

    public void p(String str) {
        this.f30396e = str;
    }

    public void q(Map map) {
        this.f30406w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30396e != null) {
            f3Var.e("type").f(this.f30396e);
        }
        if (this.f30397i != null) {
            f3Var.e("description").f(this.f30397i);
        }
        if (this.f30398o != null) {
            f3Var.e("help_link").f(this.f30398o);
        }
        if (this.f30399p != null) {
            f3Var.e("handled").k(this.f30399p);
        }
        if (this.f30400q != null) {
            f3Var.e("meta").j(iLogger, this.f30400q);
        }
        if (this.f30401r != null) {
            f3Var.e("data").j(iLogger, this.f30401r);
        }
        if (this.f30402s != null) {
            f3Var.e("synthetic").k(this.f30402s);
        }
        if (this.f30403t != null) {
            f3Var.e("exception_id").j(iLogger, this.f30403t);
        }
        if (this.f30404u != null) {
            f3Var.e("parent_id").j(iLogger, this.f30404u);
        }
        if (this.f30405v != null) {
            f3Var.e("is_exception_group").k(this.f30405v);
        }
        Map map = this.f30406w;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30406w.get(str));
            }
        }
        f3Var.y();
    }

    public l(Thread thread) {
        this.f30395d = thread;
    }
}
