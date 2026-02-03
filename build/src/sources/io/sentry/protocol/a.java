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
    private String f29856d;

    /* renamed from: e  reason: collision with root package name */
    private Date f29857e;

    /* renamed from: i  reason: collision with root package name */
    private String f29858i;

    /* renamed from: o  reason: collision with root package name */
    private String f29859o;

    /* renamed from: p  reason: collision with root package name */
    private String f29860p;

    /* renamed from: q  reason: collision with root package name */
    private String f29861q;

    /* renamed from: r  reason: collision with root package name */
    private String f29862r;

    /* renamed from: s  reason: collision with root package name */
    private Map f29863s;

    /* renamed from: t  reason: collision with root package name */
    private List f29864t;

    /* renamed from: u  reason: collision with root package name */
    private String f29865u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f29866v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f29867w;

    /* renamed from: x  reason: collision with root package name */
    private List f29868x;

    /* renamed from: y  reason: collision with root package name */
    private Map f29869y;

    /* renamed from: io.sentry.protocol.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0402a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public a a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            a aVar = new a();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1950148125:
                        if (m02.equals("split_names")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1898053579:
                        if (m02.equals("device_app_hash")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1573129993:
                        if (m02.equals("start_type")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1524619986:
                        if (m02.equals("view_names")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -901870406:
                        if (m02.equals("app_version")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case -650544995:
                        if (m02.equals("in_foreground")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case -470395285:
                        if (m02.equals("build_type")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 746297735:
                        if (m02.equals("app_identifier")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 791585128:
                        if (m02.equals("app_start_time")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1133704324:
                        if (m02.equals("permissions")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1167648233:
                        if (m02.equals("app_name")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 1826866896:
                        if (m02.equals("app_build")) {
                            c10 = 11;
                            break;
                        }
                        break;
                    case 1965003281:
                        if (m02.equals("is_split_apks")) {
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
                        aVar.f29858i = e3Var.r1();
                        break;
                    case 2:
                        aVar.f29865u = e3Var.r1();
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
                        aVar.f29861q = e3Var.r1();
                        break;
                    case 5:
                        aVar.f29866v = e3Var.x0();
                        break;
                    case 6:
                        aVar.f29859o = e3Var.r1();
                        break;
                    case 7:
                        aVar.f29856d = e3Var.r1();
                        break;
                    case '\b':
                        aVar.f29857e = e3Var.s0(iLogger);
                        break;
                    case '\t':
                        aVar.f29863s = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case '\n':
                        aVar.f29860p = e3Var.r1();
                        break;
                    case 11:
                        aVar.f29862r = e3Var.r1();
                        break;
                    case '\f':
                        aVar.f29867w = e3Var.x0();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
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
            if (io.sentry.util.y.a(this.f29856d, aVar.f29856d) && io.sentry.util.y.a(this.f29857e, aVar.f29857e) && io.sentry.util.y.a(this.f29858i, aVar.f29858i) && io.sentry.util.y.a(this.f29859o, aVar.f29859o) && io.sentry.util.y.a(this.f29860p, aVar.f29860p) && io.sentry.util.y.a(this.f29861q, aVar.f29861q) && io.sentry.util.y.a(this.f29862r, aVar.f29862r) && io.sentry.util.y.a(this.f29863s, aVar.f29863s) && io.sentry.util.y.a(this.f29866v, aVar.f29866v) && io.sentry.util.y.a(this.f29864t, aVar.f29864t) && io.sentry.util.y.a(this.f29865u, aVar.f29865u) && io.sentry.util.y.a(this.f29867w, aVar.f29867w) && io.sentry.util.y.a(this.f29868x, aVar.f29868x)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29856d, this.f29857e, this.f29858i, this.f29859o, this.f29860p, this.f29861q, this.f29862r, this.f29863s, this.f29866v, this.f29864t, this.f29865u, this.f29867w, this.f29868x);
    }

    public Boolean l() {
        return this.f29866v;
    }

    public void m(String str) {
        this.f29862r = str;
    }

    public void n(String str) {
        this.f29856d = str;
    }

    public void o(String str) {
        this.f29860p = str;
    }

    public void p(Date date) {
        this.f29857e = date;
    }

    public void q(String str) {
        this.f29861q = str;
    }

    public void r(Boolean bool) {
        this.f29866v = bool;
    }

    public void s(Map map) {
        this.f29863s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f29856d != null) {
            f3Var.e("app_identifier").f(this.f29856d);
        }
        if (this.f29857e != null) {
            f3Var.e("app_start_time").j(iLogger, this.f29857e);
        }
        if (this.f29858i != null) {
            f3Var.e("device_app_hash").f(this.f29858i);
        }
        if (this.f29859o != null) {
            f3Var.e("build_type").f(this.f29859o);
        }
        if (this.f29860p != null) {
            f3Var.e("app_name").f(this.f29860p);
        }
        if (this.f29861q != null) {
            f3Var.e("app_version").f(this.f29861q);
        }
        if (this.f29862r != null) {
            f3Var.e("app_build").f(this.f29862r);
        }
        Map map = this.f29863s;
        if (map != null && !map.isEmpty()) {
            f3Var.e("permissions").j(iLogger, this.f29863s);
        }
        if (this.f29866v != null) {
            f3Var.e("in_foreground").k(this.f29866v);
        }
        if (this.f29864t != null) {
            f3Var.e("view_names").j(iLogger, this.f29864t);
        }
        if (this.f29865u != null) {
            f3Var.e("start_type").f(this.f29865u);
        }
        if (this.f29867w != null) {
            f3Var.e("is_split_apks").k(this.f29867w);
        }
        List list = this.f29868x;
        if (list != null && !list.isEmpty()) {
            f3Var.e("split_names").j(iLogger, this.f29868x);
        }
        Map map2 = this.f29869y;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                f3Var.e(str).j(iLogger, this.f29869y.get(str));
            }
        }
        f3Var.y();
    }

    public void t(Boolean bool) {
        this.f29867w = bool;
    }

    public void u(List list) {
        this.f29868x = list;
    }

    public void v(String str) {
        this.f29865u = str;
    }

    public void w(Map map) {
        this.f29869y = map;
    }

    public void x(List list) {
        this.f29864t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(a aVar) {
        this.f29862r = aVar.f29862r;
        this.f29856d = aVar.f29856d;
        this.f29860p = aVar.f29860p;
        this.f29857e = aVar.f29857e;
        this.f29861q = aVar.f29861q;
        this.f29859o = aVar.f29859o;
        this.f29858i = aVar.f29858i;
        this.f29863s = io.sentry.util.c.b(aVar.f29863s);
        this.f29866v = aVar.f29866v;
        this.f29864t = io.sentry.util.c.a(aVar.f29864t);
        this.f29865u = aVar.f29865u;
        this.f29867w = aVar.f29867w;
        this.f29868x = aVar.f29868x;
        this.f29869y = io.sentry.util.c.b(aVar.f29869y);
    }
}
