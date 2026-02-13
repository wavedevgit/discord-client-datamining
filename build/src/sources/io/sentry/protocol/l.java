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
    private final transient Thread f30292d;

    /* renamed from: e  reason: collision with root package name */
    private String f30293e;

    /* renamed from: i  reason: collision with root package name */
    private String f30294i;

    /* renamed from: o  reason: collision with root package name */
    private String f30295o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f30296p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30297q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30298r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f30299s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f30300t;

    /* renamed from: u  reason: collision with root package name */
    private Integer f30301u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f30302v;

    /* renamed from: w  reason: collision with root package name */
    private Map f30303w;

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
                        lVar.f30294i = e3Var.r1();
                        break;
                    case 1:
                        lVar.f30300t = e3Var.l1();
                        break;
                    case 2:
                        lVar.f30298r = io.sentry.util.c.b((Map) e3Var.Z1());
                        break;
                    case 3:
                        lVar.f30297q = io.sentry.util.c.b((Map) e3Var.Z1());
                        break;
                    case 4:
                        lVar.f30293e = e3Var.r1();
                        break;
                    case 5:
                        lVar.f30296p = e3Var.w0();
                        break;
                    case 6:
                        lVar.f30299s = e3Var.w0();
                        break;
                    case 7:
                        lVar.f30302v = e3Var.w0();
                        break;
                    case '\b':
                        lVar.f30295o = e3Var.r1();
                        break;
                    case '\t':
                        lVar.f30301u = e3Var.l1();
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
        return this.f30293e;
    }

    public Boolean l() {
        return this.f30296p;
    }

    public void m(Integer num) {
        this.f30300t = num;
    }

    public void n(Boolean bool) {
        this.f30296p = bool;
    }

    public void o(Integer num) {
        this.f30301u = num;
    }

    public void p(String str) {
        this.f30293e = str;
    }

    public void q(Map map) {
        this.f30303w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f30293e != null) {
            f3Var.e("type").f(this.f30293e);
        }
        if (this.f30294i != null) {
            f3Var.e("description").f(this.f30294i);
        }
        if (this.f30295o != null) {
            f3Var.e("help_link").f(this.f30295o);
        }
        if (this.f30296p != null) {
            f3Var.e("handled").k(this.f30296p);
        }
        if (this.f30297q != null) {
            f3Var.e("meta").j(iLogger, this.f30297q);
        }
        if (this.f30298r != null) {
            f3Var.e("data").j(iLogger, this.f30298r);
        }
        if (this.f30299s != null) {
            f3Var.e("synthetic").k(this.f30299s);
        }
        if (this.f30300t != null) {
            f3Var.e("exception_id").j(iLogger, this.f30300t);
        }
        if (this.f30301u != null) {
            f3Var.e("parent_id").j(iLogger, this.f30301u);
        }
        if (this.f30302v != null) {
            f3Var.e("is_exception_group").k(this.f30302v);
        }
        Map map = this.f30303w;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30303w.get(str));
            }
        }
        f3Var.D();
    }

    public l(Thread thread) {
        this.f30292d = thread;
    }
}
