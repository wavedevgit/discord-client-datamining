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
    private final transient Thread f29977d;

    /* renamed from: e  reason: collision with root package name */
    private String f29978e;

    /* renamed from: i  reason: collision with root package name */
    private String f29979i;

    /* renamed from: o  reason: collision with root package name */
    private String f29980o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f29981p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29982q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29983r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f29984s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f29985t;

    /* renamed from: u  reason: collision with root package name */
    private Integer f29986u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f29987v;

    /* renamed from: w  reason: collision with root package name */
    private Map f29988w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public l a(e3 e3Var, ILogger iLogger) {
            l lVar = new l();
            e3Var.r();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1724546052:
                        if (m02.equals("description")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -268203253:
                        if (m02.equals("exception_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3076010:
                        if (m02.equals("data")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3347973:
                        if (m02.equals("meta")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3575610:
                        if (m02.equals("type")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 692803388:
                        if (m02.equals("handled")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 989128517:
                        if (m02.equals("synthetic")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 1032012154:
                        if (m02.equals("is_exception_group")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1297152568:
                        if (m02.equals("help_link")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 2070327504:
                        if (m02.equals("parent_id")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        lVar.f29979i = e3Var.r1();
                        break;
                    case 1:
                        lVar.f29985t = e3Var.k1();
                        break;
                    case 2:
                        lVar.f29983r = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 3:
                        lVar.f29982q = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 4:
                        lVar.f29978e = e3Var.r1();
                        break;
                    case 5:
                        lVar.f29981p = e3Var.x0();
                        break;
                    case 6:
                        lVar.f29984s = e3Var.x0();
                        break;
                    case 7:
                        lVar.f29987v = e3Var.x0();
                        break;
                    case '\b':
                        lVar.f29980o = e3Var.r1();
                        break;
                    case '\t':
                        lVar.f29986u = e3Var.k1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
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
        return this.f29978e;
    }

    public Boolean l() {
        return this.f29981p;
    }

    public void m(Integer num) {
        this.f29985t = num;
    }

    public void n(Boolean bool) {
        this.f29981p = bool;
    }

    public void o(Integer num) {
        this.f29986u = num;
    }

    public void p(String str) {
        this.f29978e = str;
    }

    public void q(Map map) {
        this.f29988w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f29978e != null) {
            f3Var.e("type").f(this.f29978e);
        }
        if (this.f29979i != null) {
            f3Var.e("description").f(this.f29979i);
        }
        if (this.f29980o != null) {
            f3Var.e("help_link").f(this.f29980o);
        }
        if (this.f29981p != null) {
            f3Var.e("handled").k(this.f29981p);
        }
        if (this.f29982q != null) {
            f3Var.e("meta").j(iLogger, this.f29982q);
        }
        if (this.f29983r != null) {
            f3Var.e("data").j(iLogger, this.f29983r);
        }
        if (this.f29984s != null) {
            f3Var.e("synthetic").k(this.f29984s);
        }
        if (this.f29985t != null) {
            f3Var.e("exception_id").j(iLogger, this.f29985t);
        }
        if (this.f29986u != null) {
            f3Var.e("parent_id").j(iLogger, this.f29986u);
        }
        if (this.f29987v != null) {
            f3Var.e("is_exception_group").k(this.f29987v);
        }
        Map map = this.f29988w;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29988w.get(str));
            }
        }
        f3Var.y();
    }

    public l(Thread thread) {
        this.f29977d = thread;
    }
}
