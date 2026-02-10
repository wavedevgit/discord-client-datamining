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
    private String f29602d;

    /* renamed from: e  reason: collision with root package name */
    private Date f29603e;

    /* renamed from: i  reason: collision with root package name */
    private String f29604i;

    /* renamed from: o  reason: collision with root package name */
    private String f29605o;

    /* renamed from: p  reason: collision with root package name */
    private String f29606p;

    /* renamed from: q  reason: collision with root package name */
    private String f29607q;

    /* renamed from: r  reason: collision with root package name */
    private String f29608r;

    /* renamed from: s  reason: collision with root package name */
    private Map f29609s;

    /* renamed from: t  reason: collision with root package name */
    private List f29610t;

    /* renamed from: u  reason: collision with root package name */
    private String f29611u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f29612v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f29613w;

    /* renamed from: x  reason: collision with root package name */
    private List f29614x;

    /* renamed from: y  reason: collision with root package name */
    private Map f29615y;

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
                        aVar.f29604i = e3Var.r1();
                        break;
                    case 2:
                        aVar.f29611u = e3Var.r1();
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
                        aVar.f29607q = e3Var.r1();
                        break;
                    case 5:
                        aVar.f29612v = e3Var.w0();
                        break;
                    case 6:
                        aVar.f29605o = e3Var.r1();
                        break;
                    case 7:
                        aVar.f29602d = e3Var.r1();
                        break;
                    case '\b':
                        aVar.f29603e = e3Var.s0(iLogger);
                        break;
                    case '\t':
                        aVar.f29609s = io.sentry.util.c.b((Map) e3Var.Z1());
                        break;
                    case '\n':
                        aVar.f29606p = e3Var.r1();
                        break;
                    case 11:
                        aVar.f29608r = e3Var.r1();
                        break;
                    case '\f':
                        aVar.f29613w = e3Var.w0();
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
            if (io.sentry.util.y.a(this.f29602d, aVar.f29602d) && io.sentry.util.y.a(this.f29603e, aVar.f29603e) && io.sentry.util.y.a(this.f29604i, aVar.f29604i) && io.sentry.util.y.a(this.f29605o, aVar.f29605o) && io.sentry.util.y.a(this.f29606p, aVar.f29606p) && io.sentry.util.y.a(this.f29607q, aVar.f29607q) && io.sentry.util.y.a(this.f29608r, aVar.f29608r) && io.sentry.util.y.a(this.f29609s, aVar.f29609s) && io.sentry.util.y.a(this.f29612v, aVar.f29612v) && io.sentry.util.y.a(this.f29610t, aVar.f29610t) && io.sentry.util.y.a(this.f29611u, aVar.f29611u) && io.sentry.util.y.a(this.f29613w, aVar.f29613w) && io.sentry.util.y.a(this.f29614x, aVar.f29614x)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29602d, this.f29603e, this.f29604i, this.f29605o, this.f29606p, this.f29607q, this.f29608r, this.f29609s, this.f29612v, this.f29610t, this.f29611u, this.f29613w, this.f29614x);
    }

    public Boolean l() {
        return this.f29612v;
    }

    public void m(String str) {
        this.f29608r = str;
    }

    public void n(String str) {
        this.f29602d = str;
    }

    public void o(String str) {
        this.f29606p = str;
    }

    public void p(Date date) {
        this.f29603e = date;
    }

    public void q(String str) {
        this.f29607q = str;
    }

    public void r(Boolean bool) {
        this.f29612v = bool;
    }

    public void s(Map map) {
        this.f29609s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29602d != null) {
            f3Var.e("app_identifier").f(this.f29602d);
        }
        if (this.f29603e != null) {
            f3Var.e("app_start_time").j(iLogger, this.f29603e);
        }
        if (this.f29604i != null) {
            f3Var.e("device_app_hash").f(this.f29604i);
        }
        if (this.f29605o != null) {
            f3Var.e("build_type").f(this.f29605o);
        }
        if (this.f29606p != null) {
            f3Var.e("app_name").f(this.f29606p);
        }
        if (this.f29607q != null) {
            f3Var.e("app_version").f(this.f29607q);
        }
        if (this.f29608r != null) {
            f3Var.e("app_build").f(this.f29608r);
        }
        Map map = this.f29609s;
        if (map != null && !map.isEmpty()) {
            f3Var.e("permissions").j(iLogger, this.f29609s);
        }
        if (this.f29612v != null) {
            f3Var.e("in_foreground").k(this.f29612v);
        }
        if (this.f29610t != null) {
            f3Var.e("view_names").j(iLogger, this.f29610t);
        }
        if (this.f29611u != null) {
            f3Var.e("start_type").f(this.f29611u);
        }
        if (this.f29613w != null) {
            f3Var.e("is_split_apks").k(this.f29613w);
        }
        List list = this.f29614x;
        if (list != null && !list.isEmpty()) {
            f3Var.e("split_names").j(iLogger, this.f29614x);
        }
        Map map2 = this.f29615y;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                f3Var.e(str).j(iLogger, this.f29615y.get(str));
            }
        }
        f3Var.D();
    }

    public void t(Boolean bool) {
        this.f29613w = bool;
    }

    public void u(List list) {
        this.f29614x = list;
    }

    public void v(String str) {
        this.f29611u = str;
    }

    public void w(Map map) {
        this.f29615y = map;
    }

    public void x(List list) {
        this.f29610t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(a aVar) {
        this.f29608r = aVar.f29608r;
        this.f29602d = aVar.f29602d;
        this.f29606p = aVar.f29606p;
        this.f29603e = aVar.f29603e;
        this.f29607q = aVar.f29607q;
        this.f29605o = aVar.f29605o;
        this.f29604i = aVar.f29604i;
        this.f29609s = io.sentry.util.c.b(aVar.f29609s);
        this.f29612v = aVar.f29612v;
        this.f29610t = io.sentry.util.c.a(aVar.f29610t);
        this.f29611u = aVar.f29611u;
        this.f29613w = aVar.f29613w;
        this.f29614x = aVar.f29614x;
        this.f29615y = io.sentry.util.c.b(aVar.f29615y);
    }
}
