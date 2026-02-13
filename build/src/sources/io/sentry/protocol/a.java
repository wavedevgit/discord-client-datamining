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
    private String f30171d;

    /* renamed from: e  reason: collision with root package name */
    private Date f30172e;

    /* renamed from: i  reason: collision with root package name */
    private String f30173i;

    /* renamed from: o  reason: collision with root package name */
    private String f30174o;

    /* renamed from: p  reason: collision with root package name */
    private String f30175p;

    /* renamed from: q  reason: collision with root package name */
    private String f30176q;

    /* renamed from: r  reason: collision with root package name */
    private String f30177r;

    /* renamed from: s  reason: collision with root package name */
    private Map f30178s;

    /* renamed from: t  reason: collision with root package name */
    private List f30179t;

    /* renamed from: u  reason: collision with root package name */
    private String f30180u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f30181v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f30182w;

    /* renamed from: x  reason: collision with root package name */
    private List f30183x;

    /* renamed from: y  reason: collision with root package name */
    private Map f30184y;

    /* renamed from: io.sentry.protocol.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0403a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public a a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            a aVar = new a();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1950148125:
                        if (o02.equals("split_names")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1898053579:
                        if (o02.equals("device_app_hash")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1573129993:
                        if (o02.equals("start_type")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1524619986:
                        if (o02.equals("view_names")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -901870406:
                        if (o02.equals("app_version")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case -650544995:
                        if (o02.equals("in_foreground")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case -470395285:
                        if (o02.equals("build_type")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 746297735:
                        if (o02.equals("app_identifier")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 791585128:
                        if (o02.equals("app_start_time")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1133704324:
                        if (o02.equals("permissions")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1167648233:
                        if (o02.equals("app_name")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 1826866896:
                        if (o02.equals("app_build")) {
                            c10 = 11;
                            break;
                        }
                        break;
                    case 1965003281:
                        if (o02.equals("is_split_apks")) {
                            c10 = '\f';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        List list = (List) e3Var.Z1();
                        if (list == null) {
                            break;
                        } else {
                            aVar.u(list);
                            break;
                        }
                    case 1:
                        aVar.f30173i = e3Var.r1();
                        break;
                    case 2:
                        aVar.f30180u = e3Var.r1();
                        break;
                    case 3:
                        List list2 = (List) e3Var.Z1();
                        if (list2 == null) {
                            break;
                        } else {
                            aVar.x(list2);
                            break;
                        }
                    case 4:
                        aVar.f30176q = e3Var.r1();
                        break;
                    case 5:
                        aVar.f30181v = e3Var.w0();
                        break;
                    case 6:
                        aVar.f30174o = e3Var.r1();
                        break;
                    case 7:
                        aVar.f30171d = e3Var.r1();
                        break;
                    case '\b':
                        aVar.f30172e = e3Var.s0(iLogger);
                        break;
                    case '\t':
                        aVar.f30178s = io.sentry.util.c.b((Map) e3Var.Z1());
                        break;
                    case '\n':
                        aVar.f30175p = e3Var.r1();
                        break;
                    case 11:
                        aVar.f30177r = e3Var.r1();
                        break;
                    case '\f':
                        aVar.f30182w = e3Var.w0();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            aVar.w(concurrentHashMap);
            e3Var.D();
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
            if (io.sentry.util.y.a(this.f30171d, aVar.f30171d) && io.sentry.util.y.a(this.f30172e, aVar.f30172e) && io.sentry.util.y.a(this.f30173i, aVar.f30173i) && io.sentry.util.y.a(this.f30174o, aVar.f30174o) && io.sentry.util.y.a(this.f30175p, aVar.f30175p) && io.sentry.util.y.a(this.f30176q, aVar.f30176q) && io.sentry.util.y.a(this.f30177r, aVar.f30177r) && io.sentry.util.y.a(this.f30178s, aVar.f30178s) && io.sentry.util.y.a(this.f30181v, aVar.f30181v) && io.sentry.util.y.a(this.f30179t, aVar.f30179t) && io.sentry.util.y.a(this.f30180u, aVar.f30180u) && io.sentry.util.y.a(this.f30182w, aVar.f30182w) && io.sentry.util.y.a(this.f30183x, aVar.f30183x)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30171d, this.f30172e, this.f30173i, this.f30174o, this.f30175p, this.f30176q, this.f30177r, this.f30178s, this.f30181v, this.f30179t, this.f30180u, this.f30182w, this.f30183x);
    }

    public Boolean l() {
        return this.f30181v;
    }

    public void m(String str) {
        this.f30177r = str;
    }

    public void n(String str) {
        this.f30171d = str;
    }

    public void o(String str) {
        this.f30175p = str;
    }

    public void p(Date date) {
        this.f30172e = date;
    }

    public void q(String str) {
        this.f30176q = str;
    }

    public void r(Boolean bool) {
        this.f30181v = bool;
    }

    public void s(Map map) {
        this.f30178s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f30171d != null) {
            f3Var.e("app_identifier").f(this.f30171d);
        }
        if (this.f30172e != null) {
            f3Var.e("app_start_time").j(iLogger, this.f30172e);
        }
        if (this.f30173i != null) {
            f3Var.e("device_app_hash").f(this.f30173i);
        }
        if (this.f30174o != null) {
            f3Var.e("build_type").f(this.f30174o);
        }
        if (this.f30175p != null) {
            f3Var.e("app_name").f(this.f30175p);
        }
        if (this.f30176q != null) {
            f3Var.e("app_version").f(this.f30176q);
        }
        if (this.f30177r != null) {
            f3Var.e("app_build").f(this.f30177r);
        }
        Map map = this.f30178s;
        if (map != null && !map.isEmpty()) {
            f3Var.e("permissions").j(iLogger, this.f30178s);
        }
        if (this.f30181v != null) {
            f3Var.e("in_foreground").k(this.f30181v);
        }
        if (this.f30179t != null) {
            f3Var.e("view_names").j(iLogger, this.f30179t);
        }
        if (this.f30180u != null) {
            f3Var.e("start_type").f(this.f30180u);
        }
        if (this.f30182w != null) {
            f3Var.e("is_split_apks").k(this.f30182w);
        }
        List list = this.f30183x;
        if (list != null && !list.isEmpty()) {
            f3Var.e("split_names").j(iLogger, this.f30183x);
        }
        Map map2 = this.f30184y;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                f3Var.e(str).j(iLogger, this.f30184y.get(str));
            }
        }
        f3Var.D();
    }

    public void t(Boolean bool) {
        this.f30182w = bool;
    }

    public void u(List list) {
        this.f30183x = list;
    }

    public void v(String str) {
        this.f30180u = str;
    }

    public void w(Map map) {
        this.f30184y = map;
    }

    public void x(List list) {
        this.f30179t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(a aVar) {
        this.f30177r = aVar.f30177r;
        this.f30171d = aVar.f30171d;
        this.f30175p = aVar.f30175p;
        this.f30172e = aVar.f30172e;
        this.f30176q = aVar.f30176q;
        this.f30174o = aVar.f30174o;
        this.f30173i = aVar.f30173i;
        this.f30178s = io.sentry.util.c.b(aVar.f30178s);
        this.f30181v = aVar.f30181v;
        this.f30179t = io.sentry.util.c.a(aVar.f30179t);
        this.f30180u = aVar.f30180u;
        this.f30182w = aVar.f30182w;
        this.f30183x = aVar.f30183x;
        this.f30184y = io.sentry.util.c.b(aVar.f30184y);
    }
}
