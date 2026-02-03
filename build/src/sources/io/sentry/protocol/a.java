package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f30217d;

    /* renamed from: e  reason: collision with root package name */
    private Date f30218e;

    /* renamed from: i  reason: collision with root package name */
    private String f30219i;

    /* renamed from: o  reason: collision with root package name */
    private String f30220o;

    /* renamed from: p  reason: collision with root package name */
    private String f30221p;

    /* renamed from: q  reason: collision with root package name */
    private String f30222q;

    /* renamed from: r  reason: collision with root package name */
    private String f30223r;

    /* renamed from: s  reason: collision with root package name */
    private Map f30224s;

    /* renamed from: t  reason: collision with root package name */
    private List f30225t;

    /* renamed from: u  reason: collision with root package name */
    private String f30226u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f30227v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f30228w;

    /* renamed from: x  reason: collision with root package name */
    private List f30229x;

    /* renamed from: y  reason: collision with root package name */
    private Map f30230y;

    /* renamed from: io.sentry.protocol.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0401a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public a a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            a aVar = new a();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1950148125:
                        if (l02.equals("split_names")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1898053579:
                        if (l02.equals("device_app_hash")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1573129993:
                        if (l02.equals("start_type")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1524619986:
                        if (l02.equals("view_names")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -901870406:
                        if (l02.equals("app_version")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case -650544995:
                        if (l02.equals("in_foreground")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case -470395285:
                        if (l02.equals("build_type")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 746297735:
                        if (l02.equals("app_identifier")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 791585128:
                        if (l02.equals("app_start_time")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1133704324:
                        if (l02.equals("permissions")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1167648233:
                        if (l02.equals("app_name")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 1826866896:
                        if (l02.equals("app_build")) {
                            c10 = 11;
                            break;
                        }
                        break;
                    case 1965003281:
                        if (l02.equals("is_split_apks")) {
                            c10 = '\f';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        List list = (List) e3Var.V1();
                        if (list == null) {
                            break;
                        } else {
                            aVar.u(list);
                            break;
                        }
                    case 1:
                        aVar.f30219i = e3Var.r1();
                        break;
                    case 2:
                        aVar.f30226u = e3Var.r1();
                        break;
                    case 3:
                        List list2 = (List) e3Var.V1();
                        if (list2 == null) {
                            break;
                        } else {
                            aVar.x(list2);
                            break;
                        }
                    case 4:
                        aVar.f30222q = e3Var.r1();
                        break;
                    case 5:
                        aVar.f30227v = e3Var.v0();
                        break;
                    case 6:
                        aVar.f30220o = e3Var.r1();
                        break;
                    case 7:
                        aVar.f30217d = e3Var.r1();
                        break;
                    case '\b':
                        aVar.f30218e = e3Var.r0(iLogger);
                        break;
                    case '\t':
                        aVar.f30224s = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case '\n':
                        aVar.f30221p = e3Var.r1();
                        break;
                    case 11:
                        aVar.f30223r = e3Var.r1();
                        break;
                    case '\f':
                        aVar.f30228w = e3Var.v0();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            aVar.w(concurrentHashMap);
            e3Var.y();
            return aVar;
        }
    }

    public a() {
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (io.sentry.util.y.a(this.f30217d, aVar.f30217d) && io.sentry.util.y.a(this.f30218e, aVar.f30218e) && io.sentry.util.y.a(this.f30219i, aVar.f30219i) && io.sentry.util.y.a(this.f30220o, aVar.f30220o) && io.sentry.util.y.a(this.f30221p, aVar.f30221p) && io.sentry.util.y.a(this.f30222q, aVar.f30222q) && io.sentry.util.y.a(this.f30223r, aVar.f30223r) && io.sentry.util.y.a(this.f30224s, aVar.f30224s) && io.sentry.util.y.a(this.f30227v, aVar.f30227v) && io.sentry.util.y.a(this.f30225t, aVar.f30225t) && io.sentry.util.y.a(this.f30226u, aVar.f30226u) && io.sentry.util.y.a(this.f30228w, aVar.f30228w) && io.sentry.util.y.a(this.f30229x, aVar.f30229x)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30217d, this.f30218e, this.f30219i, this.f30220o, this.f30221p, this.f30222q, this.f30223r, this.f30224s, this.f30227v, this.f30225t, this.f30226u, this.f30228w, this.f30229x);
    }

    public Boolean l() {
        return this.f30227v;
    }

    public void m(String str) {
        this.f30223r = str;
    }

    public void n(String str) {
        this.f30217d = str;
    }

    public void o(String str) {
        this.f30221p = str;
    }

    public void p(Date date) {
        this.f30218e = date;
    }

    public void q(String str) {
        this.f30222q = str;
    }

    public void r(Boolean bool) {
        this.f30227v = bool;
    }

    public void s(Map map) {
        this.f30224s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30217d != null) {
            f3Var.e("app_identifier").f(this.f30217d);
        }
        if (this.f30218e != null) {
            f3Var.e("app_start_time").j(iLogger, this.f30218e);
        }
        if (this.f30219i != null) {
            f3Var.e("device_app_hash").f(this.f30219i);
        }
        if (this.f30220o != null) {
            f3Var.e("build_type").f(this.f30220o);
        }
        if (this.f30221p != null) {
            f3Var.e("app_name").f(this.f30221p);
        }
        if (this.f30222q != null) {
            f3Var.e("app_version").f(this.f30222q);
        }
        if (this.f30223r != null) {
            f3Var.e("app_build").f(this.f30223r);
        }
        Map map = this.f30224s;
        if (map != null && !map.isEmpty()) {
            f3Var.e("permissions").j(iLogger, this.f30224s);
        }
        if (this.f30227v != null) {
            f3Var.e("in_foreground").k(this.f30227v);
        }
        if (this.f30225t != null) {
            f3Var.e("view_names").j(iLogger, this.f30225t);
        }
        if (this.f30226u != null) {
            f3Var.e("start_type").f(this.f30226u);
        }
        if (this.f30228w != null) {
            f3Var.e("is_split_apks").k(this.f30228w);
        }
        List list = this.f30229x;
        if (list != null && !list.isEmpty()) {
            f3Var.e("split_names").j(iLogger, this.f30229x);
        }
        Map map2 = this.f30230y;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                f3Var.e(str).j(iLogger, this.f30230y.get(str));
            }
        }
        f3Var.y();
    }

    public void t(Boolean bool) {
        this.f30228w = bool;
    }

    public void u(List list) {
        this.f30229x = list;
    }

    public void v(String str) {
        this.f30226u = str;
    }

    public void w(Map map) {
        this.f30230y = map;
    }

    public void x(List list) {
        this.f30225t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(a aVar) {
        this.f30223r = aVar.f30223r;
        this.f30217d = aVar.f30217d;
        this.f30221p = aVar.f30221p;
        this.f30218e = aVar.f30218e;
        this.f30222q = aVar.f30222q;
        this.f30220o = aVar.f30220o;
        this.f30219i = aVar.f30219i;
        this.f30224s = io.sentry.util.c.b(aVar.f30224s);
        this.f30227v = aVar.f30227v;
        this.f30225t = io.sentry.util.c.a(aVar.f30225t);
        this.f30226u = aVar.f30226u;
        this.f30228w = aVar.f30228w;
        this.f30229x = aVar.f30229x;
        this.f30230y = io.sentry.util.c.b(aVar.f30230y);
    }
}
