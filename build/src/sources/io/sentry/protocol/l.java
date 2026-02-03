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
    private final transient Thread f30338d;

    /* renamed from: e  reason: collision with root package name */
    private String f30339e;

    /* renamed from: i  reason: collision with root package name */
    private String f30340i;

    /* renamed from: o  reason: collision with root package name */
    private String f30341o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f30342p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30343q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30344r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f30345s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f30346t;

    /* renamed from: u  reason: collision with root package name */
    private Integer f30347u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f30348v;

    /* renamed from: w  reason: collision with root package name */
    private Map f30349w;

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
                        lVar.f30340i = e3Var.r1();
                        break;
                    case 1:
                        lVar.f30346t = e3Var.k1();
                        break;
                    case 2:
                        lVar.f30344r = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 3:
                        lVar.f30343q = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 4:
                        lVar.f30339e = e3Var.r1();
                        break;
                    case 5:
                        lVar.f30342p = e3Var.v0();
                        break;
                    case 6:
                        lVar.f30345s = e3Var.v0();
                        break;
                    case 7:
                        lVar.f30348v = e3Var.v0();
                        break;
                    case '\b':
                        lVar.f30341o = e3Var.r1();
                        break;
                    case '\t':
                        lVar.f30347u = e3Var.k1();
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
        return this.f30339e;
    }

    public Boolean l() {
        return this.f30342p;
    }

    public void m(Integer num) {
        this.f30346t = num;
    }

    public void n(Boolean bool) {
        this.f30342p = bool;
    }

    public void o(Integer num) {
        this.f30347u = num;
    }

    public void p(String str) {
        this.f30339e = str;
    }

    public void q(Map map) {
        this.f30349w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30339e != null) {
            f3Var.e("type").f(this.f30339e);
        }
        if (this.f30340i != null) {
            f3Var.e("description").f(this.f30340i);
        }
        if (this.f30341o != null) {
            f3Var.e("help_link").f(this.f30341o);
        }
        if (this.f30342p != null) {
            f3Var.e("handled").k(this.f30342p);
        }
        if (this.f30343q != null) {
            f3Var.e("meta").j(iLogger, this.f30343q);
        }
        if (this.f30344r != null) {
            f3Var.e("data").j(iLogger, this.f30344r);
        }
        if (this.f30345s != null) {
            f3Var.e("synthetic").k(this.f30345s);
        }
        if (this.f30346t != null) {
            f3Var.e("exception_id").j(iLogger, this.f30346t);
        }
        if (this.f30347u != null) {
            f3Var.e("parent_id").j(iLogger, this.f30347u);
        }
        if (this.f30348v != null) {
            f3Var.e("is_exception_group").k(this.f30348v);
        }
        Map map = this.f30349w;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30349w.get(str));
            }
        }
        f3Var.y();
    }

    public l(Thread thread) {
        this.f30338d = thread;
    }
}
