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
    private String f30290d;

    /* renamed from: e  reason: collision with root package name */
    private Date f30291e;

    /* renamed from: i  reason: collision with root package name */
    private String f30292i;

    /* renamed from: o  reason: collision with root package name */
    private String f30293o;

    /* renamed from: p  reason: collision with root package name */
    private String f30294p;

    /* renamed from: q  reason: collision with root package name */
    private String f30295q;

    /* renamed from: r  reason: collision with root package name */
    private String f30296r;

    /* renamed from: s  reason: collision with root package name */
    private Map f30297s;

    /* renamed from: t  reason: collision with root package name */
    private List f30298t;

    /* renamed from: u  reason: collision with root package name */
    private String f30299u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f30300v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f30301w;

    /* renamed from: x  reason: collision with root package name */
    private List f30302x;

    /* renamed from: y  reason: collision with root package name */
    private Map f30303y;

    /* renamed from: io.sentry.protocol.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0399a implements m1 {
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
                        aVar.f30292i = e3Var.r1();
                        break;
                    case 2:
                        aVar.f30299u = e3Var.r1();
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
                        aVar.f30295q = e3Var.r1();
                        break;
                    case 5:
                        aVar.f30300v = e3Var.v0();
                        break;
                    case 6:
                        aVar.f30293o = e3Var.r1();
                        break;
                    case 7:
                        aVar.f30290d = e3Var.r1();
                        break;
                    case '\b':
                        aVar.f30291e = e3Var.r0(iLogger);
                        break;
                    case '\t':
                        aVar.f30297s = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case '\n':
                        aVar.f30294p = e3Var.r1();
                        break;
                    case 11:
                        aVar.f30296r = e3Var.r1();
                        break;
                    case '\f':
                        aVar.f30301w = e3Var.v0();
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
            if (io.sentry.util.y.a(this.f30290d, aVar.f30290d) && io.sentry.util.y.a(this.f30291e, aVar.f30291e) && io.sentry.util.y.a(this.f30292i, aVar.f30292i) && io.sentry.util.y.a(this.f30293o, aVar.f30293o) && io.sentry.util.y.a(this.f30294p, aVar.f30294p) && io.sentry.util.y.a(this.f30295q, aVar.f30295q) && io.sentry.util.y.a(this.f30296r, aVar.f30296r) && io.sentry.util.y.a(this.f30297s, aVar.f30297s) && io.sentry.util.y.a(this.f30300v, aVar.f30300v) && io.sentry.util.y.a(this.f30298t, aVar.f30298t) && io.sentry.util.y.a(this.f30299u, aVar.f30299u) && io.sentry.util.y.a(this.f30301w, aVar.f30301w) && io.sentry.util.y.a(this.f30302x, aVar.f30302x)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30290d, this.f30291e, this.f30292i, this.f30293o, this.f30294p, this.f30295q, this.f30296r, this.f30297s, this.f30300v, this.f30298t, this.f30299u, this.f30301w, this.f30302x);
    }

    public Boolean l() {
        return this.f30300v;
    }

    public void m(String str) {
        this.f30296r = str;
    }

    public void n(String str) {
        this.f30290d = str;
    }

    public void o(String str) {
        this.f30294p = str;
    }

    public void p(Date date) {
        this.f30291e = date;
    }

    public void q(String str) {
        this.f30295q = str;
    }

    public void r(Boolean bool) {
        this.f30300v = bool;
    }

    public void s(Map map) {
        this.f30297s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30290d != null) {
            f3Var.e("app_identifier").f(this.f30290d);
        }
        if (this.f30291e != null) {
            f3Var.e("app_start_time").j(iLogger, this.f30291e);
        }
        if (this.f30292i != null) {
            f3Var.e("device_app_hash").f(this.f30292i);
        }
        if (this.f30293o != null) {
            f3Var.e("build_type").f(this.f30293o);
        }
        if (this.f30294p != null) {
            f3Var.e("app_name").f(this.f30294p);
        }
        if (this.f30295q != null) {
            f3Var.e("app_version").f(this.f30295q);
        }
        if (this.f30296r != null) {
            f3Var.e("app_build").f(this.f30296r);
        }
        Map map = this.f30297s;
        if (map != null && !map.isEmpty()) {
            f3Var.e("permissions").j(iLogger, this.f30297s);
        }
        if (this.f30300v != null) {
            f3Var.e("in_foreground").k(this.f30300v);
        }
        if (this.f30298t != null) {
            f3Var.e("view_names").j(iLogger, this.f30298t);
        }
        if (this.f30299u != null) {
            f3Var.e("start_type").f(this.f30299u);
        }
        if (this.f30301w != null) {
            f3Var.e("is_split_apks").k(this.f30301w);
        }
        List list = this.f30302x;
        if (list != null && !list.isEmpty()) {
            f3Var.e("split_names").j(iLogger, this.f30302x);
        }
        Map map2 = this.f30303y;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                f3Var.e(str).j(iLogger, this.f30303y.get(str));
            }
        }
        f3Var.y();
    }

    public void t(Boolean bool) {
        this.f30301w = bool;
    }

    public void u(List list) {
        this.f30302x = list;
    }

    public void v(String str) {
        this.f30299u = str;
    }

    public void w(Map map) {
        this.f30303y = map;
    }

    public void x(List list) {
        this.f30298t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(a aVar) {
        this.f30296r = aVar.f30296r;
        this.f30290d = aVar.f30290d;
        this.f30294p = aVar.f30294p;
        this.f30291e = aVar.f30291e;
        this.f30295q = aVar.f30295q;
        this.f30293o = aVar.f30293o;
        this.f30292i = aVar.f30292i;
        this.f30297s = io.sentry.util.c.b(aVar.f30297s);
        this.f30300v = aVar.f30300v;
        this.f30298t = io.sentry.util.c.a(aVar.f30298t);
        this.f30299u = aVar.f30299u;
        this.f30301w = aVar.f30301w;
        this.f30302x = aVar.f30302x;
        this.f30303y = io.sentry.util.c.b(aVar.f30303y);
    }
}
