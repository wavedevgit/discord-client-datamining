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
    private String f30274d;

    /* renamed from: e  reason: collision with root package name */
    private Date f30275e;

    /* renamed from: i  reason: collision with root package name */
    private String f30276i;

    /* renamed from: o  reason: collision with root package name */
    private String f30277o;

    /* renamed from: p  reason: collision with root package name */
    private String f30278p;

    /* renamed from: q  reason: collision with root package name */
    private String f30279q;

    /* renamed from: r  reason: collision with root package name */
    private String f30280r;

    /* renamed from: s  reason: collision with root package name */
    private Map f30281s;

    /* renamed from: t  reason: collision with root package name */
    private List f30282t;

    /* renamed from: u  reason: collision with root package name */
    private String f30283u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f30284v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f30285w;

    /* renamed from: x  reason: collision with root package name */
    private List f30286x;

    /* renamed from: y  reason: collision with root package name */
    private Map f30287y;

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
                        aVar.f30276i = e3Var.r1();
                        break;
                    case 2:
                        aVar.f30283u = e3Var.r1();
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
                        aVar.f30279q = e3Var.r1();
                        break;
                    case 5:
                        aVar.f30284v = e3Var.v0();
                        break;
                    case 6:
                        aVar.f30277o = e3Var.r1();
                        break;
                    case 7:
                        aVar.f30274d = e3Var.r1();
                        break;
                    case '\b':
                        aVar.f30275e = e3Var.r0(iLogger);
                        break;
                    case '\t':
                        aVar.f30281s = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case '\n':
                        aVar.f30278p = e3Var.r1();
                        break;
                    case 11:
                        aVar.f30280r = e3Var.r1();
                        break;
                    case '\f':
                        aVar.f30285w = e3Var.v0();
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
            if (io.sentry.util.y.a(this.f30274d, aVar.f30274d) && io.sentry.util.y.a(this.f30275e, aVar.f30275e) && io.sentry.util.y.a(this.f30276i, aVar.f30276i) && io.sentry.util.y.a(this.f30277o, aVar.f30277o) && io.sentry.util.y.a(this.f30278p, aVar.f30278p) && io.sentry.util.y.a(this.f30279q, aVar.f30279q) && io.sentry.util.y.a(this.f30280r, aVar.f30280r) && io.sentry.util.y.a(this.f30281s, aVar.f30281s) && io.sentry.util.y.a(this.f30284v, aVar.f30284v) && io.sentry.util.y.a(this.f30282t, aVar.f30282t) && io.sentry.util.y.a(this.f30283u, aVar.f30283u) && io.sentry.util.y.a(this.f30285w, aVar.f30285w) && io.sentry.util.y.a(this.f30286x, aVar.f30286x)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30274d, this.f30275e, this.f30276i, this.f30277o, this.f30278p, this.f30279q, this.f30280r, this.f30281s, this.f30284v, this.f30282t, this.f30283u, this.f30285w, this.f30286x);
    }

    public Boolean l() {
        return this.f30284v;
    }

    public void m(String str) {
        this.f30280r = str;
    }

    public void n(String str) {
        this.f30274d = str;
    }

    public void o(String str) {
        this.f30278p = str;
    }

    public void p(Date date) {
        this.f30275e = date;
    }

    public void q(String str) {
        this.f30279q = str;
    }

    public void r(Boolean bool) {
        this.f30284v = bool;
    }

    public void s(Map map) {
        this.f30281s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30274d != null) {
            f3Var.e("app_identifier").f(this.f30274d);
        }
        if (this.f30275e != null) {
            f3Var.e("app_start_time").j(iLogger, this.f30275e);
        }
        if (this.f30276i != null) {
            f3Var.e("device_app_hash").f(this.f30276i);
        }
        if (this.f30277o != null) {
            f3Var.e("build_type").f(this.f30277o);
        }
        if (this.f30278p != null) {
            f3Var.e("app_name").f(this.f30278p);
        }
        if (this.f30279q != null) {
            f3Var.e("app_version").f(this.f30279q);
        }
        if (this.f30280r != null) {
            f3Var.e("app_build").f(this.f30280r);
        }
        Map map = this.f30281s;
        if (map != null && !map.isEmpty()) {
            f3Var.e("permissions").j(iLogger, this.f30281s);
        }
        if (this.f30284v != null) {
            f3Var.e("in_foreground").k(this.f30284v);
        }
        if (this.f30282t != null) {
            f3Var.e("view_names").j(iLogger, this.f30282t);
        }
        if (this.f30283u != null) {
            f3Var.e("start_type").f(this.f30283u);
        }
        if (this.f30285w != null) {
            f3Var.e("is_split_apks").k(this.f30285w);
        }
        List list = this.f30286x;
        if (list != null && !list.isEmpty()) {
            f3Var.e("split_names").j(iLogger, this.f30286x);
        }
        Map map2 = this.f30287y;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                f3Var.e(str).j(iLogger, this.f30287y.get(str));
            }
        }
        f3Var.y();
    }

    public void t(Boolean bool) {
        this.f30285w = bool;
    }

    public void u(List list) {
        this.f30286x = list;
    }

    public void v(String str) {
        this.f30283u = str;
    }

    public void w(Map map) {
        this.f30287y = map;
    }

    public void x(List list) {
        this.f30282t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(a aVar) {
        this.f30280r = aVar.f30280r;
        this.f30274d = aVar.f30274d;
        this.f30278p = aVar.f30278p;
        this.f30275e = aVar.f30275e;
        this.f30279q = aVar.f30279q;
        this.f30277o = aVar.f30277o;
        this.f30276i = aVar.f30276i;
        this.f30281s = io.sentry.util.c.b(aVar.f30281s);
        this.f30284v = aVar.f30284v;
        this.f30282t = io.sentry.util.c.a(aVar.f30282t);
        this.f30283u = aVar.f30283u;
        this.f30285w = aVar.f30285w;
        this.f30286x = aVar.f30286x;
        this.f30287y = io.sentry.util.c.b(aVar.f30287y);
    }
}
