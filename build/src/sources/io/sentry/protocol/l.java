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
    private final transient Thread f28540d;

    /* renamed from: e  reason: collision with root package name */
    private String f28541e;

    /* renamed from: i  reason: collision with root package name */
    private String f28542i;

    /* renamed from: o  reason: collision with root package name */
    private String f28543o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f28544p;

    /* renamed from: q  reason: collision with root package name */
    private Map f28545q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28546r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f28547s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f28548t;

    /* renamed from: u  reason: collision with root package name */
    private Integer f28549u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f28550v;

    /* renamed from: w  reason: collision with root package name */
    private Map f28551w;

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
                        lVar.f28542i = e3Var.q1();
                        break;
                    case 1:
                        lVar.f28548t = e3Var.j1();
                        break;
                    case 2:
                        lVar.f28546r = io.sentry.util.c.b((Map) e3Var.U1());
                        break;
                    case 3:
                        lVar.f28545q = io.sentry.util.c.b((Map) e3Var.U1());
                        break;
                    case 4:
                        lVar.f28541e = e3Var.q1();
                        break;
                    case 5:
                        lVar.f28544p = e3Var.y0();
                        break;
                    case 6:
                        lVar.f28547s = e3Var.y0();
                        break;
                    case 7:
                        lVar.f28550v = e3Var.y0();
                        break;
                    case '\b':
                        lVar.f28543o = e3Var.q1();
                        break;
                    case '\t':
                        lVar.f28549u = e3Var.j1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
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
        return this.f28541e;
    }

    public Boolean l() {
        return this.f28544p;
    }

    public void m(Integer num) {
        this.f28548t = num;
    }

    public void n(Boolean bool) {
        this.f28544p = bool;
    }

    public void o(Integer num) {
        this.f28549u = num;
    }

    public void p(String str) {
        this.f28541e = str;
    }

    public void q(Map map) {
        this.f28551w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28541e != null) {
            f3Var.e("type").f(this.f28541e);
        }
        if (this.f28542i != null) {
            f3Var.e("description").f(this.f28542i);
        }
        if (this.f28543o != null) {
            f3Var.e("help_link").f(this.f28543o);
        }
        if (this.f28544p != null) {
            f3Var.e("handled").k(this.f28544p);
        }
        if (this.f28545q != null) {
            f3Var.e("meta").j(iLogger, this.f28545q);
        }
        if (this.f28546r != null) {
            f3Var.e("data").j(iLogger, this.f28546r);
        }
        if (this.f28547s != null) {
            f3Var.e("synthetic").k(this.f28547s);
        }
        if (this.f28548t != null) {
            f3Var.e("exception_id").j(iLogger, this.f28548t);
        }
        if (this.f28549u != null) {
            f3Var.e("parent_id").j(iLogger, this.f28549u);
        }
        if (this.f28550v != null) {
            f3Var.e("is_exception_group").k(this.f28550v);
        }
        Map map = this.f28551w;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28551w.get(str));
            }
        }
        f3Var.D();
    }

    public l(Thread thread) {
        this.f28540d = thread;
    }
}
