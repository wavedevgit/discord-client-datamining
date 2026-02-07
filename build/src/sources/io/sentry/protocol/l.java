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
    private final transient Thread f28588d;

    /* renamed from: e  reason: collision with root package name */
    private String f28589e;

    /* renamed from: i  reason: collision with root package name */
    private String f28590i;

    /* renamed from: o  reason: collision with root package name */
    private String f28591o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f28592p;

    /* renamed from: q  reason: collision with root package name */
    private Map f28593q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28594r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f28595s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f28596t;

    /* renamed from: u  reason: collision with root package name */
    private Integer f28597u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f28598v;

    /* renamed from: w  reason: collision with root package name */
    private Map f28599w;

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
                        lVar.f28590i = e3Var.q1();
                        break;
                    case 1:
                        lVar.f28596t = e3Var.j1();
                        break;
                    case 2:
                        lVar.f28594r = io.sentry.util.c.b((Map) e3Var.U1());
                        break;
                    case 3:
                        lVar.f28593q = io.sentry.util.c.b((Map) e3Var.U1());
                        break;
                    case 4:
                        lVar.f28589e = e3Var.q1();
                        break;
                    case 5:
                        lVar.f28592p = e3Var.y0();
                        break;
                    case 6:
                        lVar.f28595s = e3Var.y0();
                        break;
                    case 7:
                        lVar.f28598v = e3Var.y0();
                        break;
                    case '\b':
                        lVar.f28591o = e3Var.q1();
                        break;
                    case '\t':
                        lVar.f28597u = e3Var.j1();
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
        return this.f28589e;
    }

    public Boolean l() {
        return this.f28592p;
    }

    public void m(Integer num) {
        this.f28596t = num;
    }

    public void n(Boolean bool) {
        this.f28592p = bool;
    }

    public void o(Integer num) {
        this.f28597u = num;
    }

    public void p(String str) {
        this.f28589e = str;
    }

    public void q(Map map) {
        this.f28599w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28589e != null) {
            f3Var.e("type").f(this.f28589e);
        }
        if (this.f28590i != null) {
            f3Var.e("description").f(this.f28590i);
        }
        if (this.f28591o != null) {
            f3Var.e("help_link").f(this.f28591o);
        }
        if (this.f28592p != null) {
            f3Var.e("handled").k(this.f28592p);
        }
        if (this.f28593q != null) {
            f3Var.e("meta").j(iLogger, this.f28593q);
        }
        if (this.f28594r != null) {
            f3Var.e("data").j(iLogger, this.f28594r);
        }
        if (this.f28595s != null) {
            f3Var.e("synthetic").k(this.f28595s);
        }
        if (this.f28596t != null) {
            f3Var.e("exception_id").j(iLogger, this.f28596t);
        }
        if (this.f28597u != null) {
            f3Var.e("parent_id").j(iLogger, this.f28597u);
        }
        if (this.f28598v != null) {
            f3Var.e("is_exception_group").k(this.f28598v);
        }
        Map map = this.f28599w;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28599w.get(str));
            }
        }
        f3Var.D();
    }

    public l(Thread thread) {
        this.f28588d = thread;
    }
}
