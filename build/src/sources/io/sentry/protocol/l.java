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
    private final transient Thread f29396d;

    /* renamed from: e  reason: collision with root package name */
    private String f29397e;

    /* renamed from: i  reason: collision with root package name */
    private String f29398i;

    /* renamed from: o  reason: collision with root package name */
    private String f29399o;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f29400p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29401q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29402r;

    /* renamed from: s  reason: collision with root package name */
    private Boolean f29403s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f29404t;

    /* renamed from: u  reason: collision with root package name */
    private Integer f29405u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f29406v;

    /* renamed from: w  reason: collision with root package name */
    private Map f29407w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public l a(e3 e3Var, ILogger iLogger) {
            l lVar = new l();
            e3Var.s();
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
                        lVar.f29398i = e3Var.r1();
                        break;
                    case 1:
                        lVar.f29404t = e3Var.k1();
                        break;
                    case 2:
                        lVar.f29402r = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 3:
                        lVar.f29401q = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 4:
                        lVar.f29397e = e3Var.r1();
                        break;
                    case 5:
                        lVar.f29400p = e3Var.w0();
                        break;
                    case 6:
                        lVar.f29403s = e3Var.w0();
                        break;
                    case 7:
                        lVar.f29406v = e3Var.w0();
                        break;
                    case '\b':
                        lVar.f29399o = e3Var.r1();
                        break;
                    case '\t':
                        lVar.f29405u = e3Var.k1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                        break;
                }
            }
            e3Var.z();
            lVar.q(hashMap);
            return lVar;
        }
    }

    public l() {
        this(null);
    }

    public String k() {
        return this.f29397e;
    }

    public Boolean l() {
        return this.f29400p;
    }

    public void m(Integer num) {
        this.f29404t = num;
    }

    public void n(Boolean bool) {
        this.f29400p = bool;
    }

    public void o(Integer num) {
        this.f29405u = num;
    }

    public void p(String str) {
        this.f29397e = str;
    }

    public void q(Map map) {
        this.f29407w = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29397e != null) {
            f3Var.e("type").f(this.f29397e);
        }
        if (this.f29398i != null) {
            f3Var.e("description").f(this.f29398i);
        }
        if (this.f29399o != null) {
            f3Var.e("help_link").f(this.f29399o);
        }
        if (this.f29400p != null) {
            f3Var.e("handled").k(this.f29400p);
        }
        if (this.f29401q != null) {
            f3Var.e("meta").j(iLogger, this.f29401q);
        }
        if (this.f29402r != null) {
            f3Var.e("data").j(iLogger, this.f29402r);
        }
        if (this.f29403s != null) {
            f3Var.e("synthetic").k(this.f29403s);
        }
        if (this.f29404t != null) {
            f3Var.e("exception_id").j(iLogger, this.f29404t);
        }
        if (this.f29405u != null) {
            f3Var.e("parent_id").j(iLogger, this.f29405u);
        }
        if (this.f29406v != null) {
            f3Var.e("is_exception_group").k(this.f29406v);
        }
        Map map = this.f29407w;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29407w.get(str));
            }
        }
        f3Var.z();
    }

    public l(Thread thread) {
        this.f29396d = thread;
    }
}
