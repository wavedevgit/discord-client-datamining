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
    private String f29603d;

    /* renamed from: e  reason: collision with root package name */
    private Date f29604e;

    /* renamed from: i  reason: collision with root package name */
    private String f29605i;

    /* renamed from: o  reason: collision with root package name */
    private String f29606o;

    /* renamed from: p  reason: collision with root package name */
    private String f29607p;

    /* renamed from: q  reason: collision with root package name */
    private String f29608q;

    /* renamed from: r  reason: collision with root package name */
    private String f29609r;

    /* renamed from: s  reason: collision with root package name */
    private Map f29610s;

    /* renamed from: t  reason: collision with root package name */
    private List f29611t;

    /* renamed from: u  reason: collision with root package name */
    private String f29612u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f29613v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f29614w;

    /* renamed from: x  reason: collision with root package name */
    private List f29615x;

    /* renamed from: y  reason: collision with root package name */
    private Map f29616y;

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
                        aVar.f29605i = e3Var.r1();
                        break;
                    case 2:
                        aVar.f29612u = e3Var.r1();
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
                        aVar.f29608q = e3Var.r1();
                        break;
                    case 5:
                        aVar.f29613v = e3Var.w0();
                        break;
                    case 6:
                        aVar.f29606o = e3Var.r1();
                        break;
                    case 7:
                        aVar.f29603d = e3Var.r1();
                        break;
                    case '\b':
                        aVar.f29604e = e3Var.s0(iLogger);
                        break;
                    case '\t':
                        aVar.f29610s = io.sentry.util.c.b((Map) e3Var.Z1());
                        break;
                    case '\n':
                        aVar.f29607p = e3Var.r1();
                        break;
                    case 11:
                        aVar.f29609r = e3Var.r1();
                        break;
                    case '\f':
                        aVar.f29614w = e3Var.w0();
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
            if (io.sentry.util.y.a(this.f29603d, aVar.f29603d) && io.sentry.util.y.a(this.f29604e, aVar.f29604e) && io.sentry.util.y.a(this.f29605i, aVar.f29605i) && io.sentry.util.y.a(this.f29606o, aVar.f29606o) && io.sentry.util.y.a(this.f29607p, aVar.f29607p) && io.sentry.util.y.a(this.f29608q, aVar.f29608q) && io.sentry.util.y.a(this.f29609r, aVar.f29609r) && io.sentry.util.y.a(this.f29610s, aVar.f29610s) && io.sentry.util.y.a(this.f29613v, aVar.f29613v) && io.sentry.util.y.a(this.f29611t, aVar.f29611t) && io.sentry.util.y.a(this.f29612u, aVar.f29612u) && io.sentry.util.y.a(this.f29614w, aVar.f29614w) && io.sentry.util.y.a(this.f29615x, aVar.f29615x)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29603d, this.f29604e, this.f29605i, this.f29606o, this.f29607p, this.f29608q, this.f29609r, this.f29610s, this.f29613v, this.f29611t, this.f29612u, this.f29614w, this.f29615x);
    }

    public Boolean l() {
        return this.f29613v;
    }

    public void m(String str) {
        this.f29609r = str;
    }

    public void n(String str) {
        this.f29603d = str;
    }

    public void o(String str) {
        this.f29607p = str;
    }

    public void p(Date date) {
        this.f29604e = date;
    }

    public void q(String str) {
        this.f29608q = str;
    }

    public void r(Boolean bool) {
        this.f29613v = bool;
    }

    public void s(Map map) {
        this.f29610s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29603d != null) {
            f3Var.e("app_identifier").f(this.f29603d);
        }
        if (this.f29604e != null) {
            f3Var.e("app_start_time").j(iLogger, this.f29604e);
        }
        if (this.f29605i != null) {
            f3Var.e("device_app_hash").f(this.f29605i);
        }
        if (this.f29606o != null) {
            f3Var.e("build_type").f(this.f29606o);
        }
        if (this.f29607p != null) {
            f3Var.e("app_name").f(this.f29607p);
        }
        if (this.f29608q != null) {
            f3Var.e("app_version").f(this.f29608q);
        }
        if (this.f29609r != null) {
            f3Var.e("app_build").f(this.f29609r);
        }
        Map map = this.f29610s;
        if (map != null && !map.isEmpty()) {
            f3Var.e("permissions").j(iLogger, this.f29610s);
        }
        if (this.f29613v != null) {
            f3Var.e("in_foreground").k(this.f29613v);
        }
        if (this.f29611t != null) {
            f3Var.e("view_names").j(iLogger, this.f29611t);
        }
        if (this.f29612u != null) {
            f3Var.e("start_type").f(this.f29612u);
        }
        if (this.f29614w != null) {
            f3Var.e("is_split_apks").k(this.f29614w);
        }
        List list = this.f29615x;
        if (list != null && !list.isEmpty()) {
            f3Var.e("split_names").j(iLogger, this.f29615x);
        }
        Map map2 = this.f29616y;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                f3Var.e(str).j(iLogger, this.f29616y.get(str));
            }
        }
        f3Var.D();
    }

    public void t(Boolean bool) {
        this.f29614w = bool;
    }

    public void u(List list) {
        this.f29615x = list;
    }

    public void v(String str) {
        this.f29612u = str;
    }

    public void w(Map map) {
        this.f29616y = map;
    }

    public void x(List list) {
        this.f29611t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(a aVar) {
        this.f29609r = aVar.f29609r;
        this.f29603d = aVar.f29603d;
        this.f29607p = aVar.f29607p;
        this.f29604e = aVar.f29604e;
        this.f29608q = aVar.f29608q;
        this.f29606o = aVar.f29606o;
        this.f29605i = aVar.f29605i;
        this.f29610s = io.sentry.util.c.b(aVar.f29610s);
        this.f29613v = aVar.f29613v;
        this.f29611t = io.sentry.util.c.a(aVar.f29611t);
        this.f29612u = aVar.f29612u;
        this.f29614w = aVar.f29614w;
        this.f29615x = aVar.f29615x;
        this.f29616y = io.sentry.util.c.b(aVar.f29616y);
    }
}
