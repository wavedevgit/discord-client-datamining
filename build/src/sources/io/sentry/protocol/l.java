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
    private final transient Thread f28788d;

    /* renamed from: e  reason: collision with root package name */
    private String f28789e;

    /* renamed from: i  reason: collision with root package name */
    private String f28790i;

    /* renamed from: o  reason: collision with root package name */
    private String f28791o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f28792p;

    /* renamed from: q  reason: collision with root package name */
    private Map f28793q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28794r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f28795s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f28796t;

    /* renamed from: u  reason: collision with root package name */
    private Integer f28797u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f28798v;

    /* renamed from: w  reason: collision with root package name */
    private Map f28799w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public l a(e3 e3Var, ILogger iLogger) {
            l lVar = new l();
            e3Var.u();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1724546052:
                        if (o02.equals("description")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -268203253:
                        if (o02.equals("exception_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3076010:
                        if (o02.equals("data")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3347973:
                        if (o02.equals("meta")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3575610:
                        if (o02.equals("type")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 692803388:
                        if (o02.equals("handled")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 989128517:
                        if (o02.equals("synthetic")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 1032012154:
                        if (o02.equals("is_exception_group")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1297152568:
                        if (o02.equals("help_link")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 2070327504:
                        if (o02.equals("parent_id")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        lVar.f28790i = e3Var.m1();
                        break;
                    case 1:
                        lVar.f28796t = e3Var.g1();
                        break;
                    case 2:
                        lVar.f28794r = io.sentry.util.c.b((Map) e3Var.T1());
                        break;
                    case 3:
                        lVar.f28793q = io.sentry.util.c.b((Map) e3Var.T1());
                        break;
                    case 4:
                        lVar.f28789e = e3Var.m1();
                        break;
                    case 5:
                        lVar.f28792p = e3Var.w0();
                        break;
                    case 6:
                        lVar.f28795s = e3Var.w0();
                        break;
                    case 7:
                        lVar.f28798v = e3Var.w0();
                        break;
                    case '\b':
                        lVar.f28791o = e3Var.m1();
                        break;
                    case '\t':
                        lVar.f28797u = e3Var.g1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.p1(iLogger, hashMap, o02);
                        break;
                }
            }
            e3Var.D();
            lVar.q(hashMap);
            return lVar;
        }
    }

    public l() {
        this(null);
    }

    public String k() {
        return this.f28789e;
    }

    public Boolean l() {
        return this.f28792p;
    }

    public void m(Integer num) {
        this.f28796t = num;
    }

    public void n(Boolean bool) {
        this.f28792p = bool;
    }

    public void o(Integer num) {
        this.f28797u = num;
    }

    public void p(String str) {
        this.f28789e = str;
    }

    public void q(Map map) {
        this.f28799w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28789e != null) {
            f3Var.e("type").f(this.f28789e);
        }
        if (this.f28790i != null) {
            f3Var.e("description").f(this.f28790i);
        }
        if (this.f28791o != null) {
            f3Var.e("help_link").f(this.f28791o);
        }
        if (this.f28792p != null) {
            f3Var.e("handled").k(this.f28792p);
        }
        if (this.f28793q != null) {
            f3Var.e("meta").j(iLogger, this.f28793q);
        }
        if (this.f28794r != null) {
            f3Var.e("data").j(iLogger, this.f28794r);
        }
        if (this.f28795s != null) {
            f3Var.e("synthetic").k(this.f28795s);
        }
        if (this.f28796t != null) {
            f3Var.e("exception_id").j(iLogger, this.f28796t);
        }
        if (this.f28797u != null) {
            f3Var.e("parent_id").j(iLogger, this.f28797u);
        }
        if (this.f28798v != null) {
            f3Var.e("is_exception_group").k(this.f28798v);
        }
        Map map = this.f28799w;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28799w.get(str));
            }
        }
        f3Var.D();
    }

    public l(Thread thread) {
        this.f28788d = thread;
    }
}
