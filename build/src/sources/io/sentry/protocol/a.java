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
    private String f28467d;

    /* renamed from: e  reason: collision with root package name */
    private Date f28468e;

    /* renamed from: i  reason: collision with root package name */
    private String f28469i;

    /* renamed from: o  reason: collision with root package name */
    private String f28470o;

    /* renamed from: p  reason: collision with root package name */
    private String f28471p;

    /* renamed from: q  reason: collision with root package name */
    private String f28472q;

    /* renamed from: r  reason: collision with root package name */
    private String f28473r;

    /* renamed from: s  reason: collision with root package name */
    private Map f28474s;

    /* renamed from: t  reason: collision with root package name */
    private List f28475t;

    /* renamed from: u  reason: collision with root package name */
    private String f28476u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f28477v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f28478w;

    /* renamed from: x  reason: collision with root package name */
    private List f28479x;

    /* renamed from: y  reason: collision with root package name */
    private Map f28480y;

    /* renamed from: io.sentry.protocol.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0402a implements m1 {
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
                        List list = (List) e3Var.U1();
                        if (list == null) {
                            break;
                        } else {
                            aVar.u(list);
                            break;
                        }
                    case 1:
                        aVar.f28469i = e3Var.q1();
                        break;
                    case 2:
                        aVar.f28476u = e3Var.q1();
                        break;
                    case 3:
                        List list2 = (List) e3Var.U1();
                        if (list2 == null) {
                            break;
                        } else {
                            aVar.x(list2);
                            break;
                        }
                    case 4:
                        aVar.f28472q = e3Var.q1();
                        break;
                    case 5:
                        aVar.f28477v = e3Var.y0();
                        break;
                    case 6:
                        aVar.f28470o = e3Var.q1();
                        break;
                    case 7:
                        aVar.f28467d = e3Var.q1();
                        break;
                    case '\b':
                        aVar.f28468e = e3Var.u0(iLogger);
                        break;
                    case '\t':
                        aVar.f28474s = io.sentry.util.c.b((Map) e3Var.U1());
                        break;
                    case '\n':
                        aVar.f28471p = e3Var.q1();
                        break;
                    case 11:
                        aVar.f28473r = e3Var.q1();
                        break;
                    case '\f':
                        aVar.f28478w = e3Var.y0();
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
            if (io.sentry.util.y.a(this.f28467d, aVar.f28467d) && io.sentry.util.y.a(this.f28468e, aVar.f28468e) && io.sentry.util.y.a(this.f28469i, aVar.f28469i) && io.sentry.util.y.a(this.f28470o, aVar.f28470o) && io.sentry.util.y.a(this.f28471p, aVar.f28471p) && io.sentry.util.y.a(this.f28472q, aVar.f28472q) && io.sentry.util.y.a(this.f28473r, aVar.f28473r) && io.sentry.util.y.a(this.f28474s, aVar.f28474s) && io.sentry.util.y.a(this.f28477v, aVar.f28477v) && io.sentry.util.y.a(this.f28475t, aVar.f28475t) && io.sentry.util.y.a(this.f28476u, aVar.f28476u) && io.sentry.util.y.a(this.f28478w, aVar.f28478w) && io.sentry.util.y.a(this.f28479x, aVar.f28479x)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28467d, this.f28468e, this.f28469i, this.f28470o, this.f28471p, this.f28472q, this.f28473r, this.f28474s, this.f28477v, this.f28475t, this.f28476u, this.f28478w, this.f28479x);
    }

    public Boolean l() {
        return this.f28477v;
    }

    public void m(String str) {
        this.f28473r = str;
    }

    public void n(String str) {
        this.f28467d = str;
    }

    public void o(String str) {
        this.f28471p = str;
    }

    public void p(Date date) {
        this.f28468e = date;
    }

    public void q(String str) {
        this.f28472q = str;
    }

    public void r(Boolean bool) {
        this.f28477v = bool;
    }

    public void s(Map map) {
        this.f28474s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28467d != null) {
            f3Var.e("app_identifier").f(this.f28467d);
        }
        if (this.f28468e != null) {
            f3Var.e("app_start_time").j(iLogger, this.f28468e);
        }
        if (this.f28469i != null) {
            f3Var.e("device_app_hash").f(this.f28469i);
        }
        if (this.f28470o != null) {
            f3Var.e("build_type").f(this.f28470o);
        }
        if (this.f28471p != null) {
            f3Var.e("app_name").f(this.f28471p);
        }
        if (this.f28472q != null) {
            f3Var.e("app_version").f(this.f28472q);
        }
        if (this.f28473r != null) {
            f3Var.e("app_build").f(this.f28473r);
        }
        Map map = this.f28474s;
        if (map != null && !map.isEmpty()) {
            f3Var.e("permissions").j(iLogger, this.f28474s);
        }
        if (this.f28477v != null) {
            f3Var.e("in_foreground").k(this.f28477v);
        }
        if (this.f28475t != null) {
            f3Var.e("view_names").j(iLogger, this.f28475t);
        }
        if (this.f28476u != null) {
            f3Var.e("start_type").f(this.f28476u);
        }
        if (this.f28478w != null) {
            f3Var.e("is_split_apks").k(this.f28478w);
        }
        List list = this.f28479x;
        if (list != null && !list.isEmpty()) {
            f3Var.e("split_names").j(iLogger, this.f28479x);
        }
        Map map2 = this.f28480y;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                f3Var.e(str).j(iLogger, this.f28480y.get(str));
            }
        }
        f3Var.D();
    }

    public void t(Boolean bool) {
        this.f28478w = bool;
    }

    public void u(List list) {
        this.f28479x = list;
    }

    public void v(String str) {
        this.f28476u = str;
    }

    public void w(Map map) {
        this.f28480y = map;
    }

    public void x(List list) {
        this.f28475t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(a aVar) {
        this.f28473r = aVar.f28473r;
        this.f28467d = aVar.f28467d;
        this.f28471p = aVar.f28471p;
        this.f28468e = aVar.f28468e;
        this.f28472q = aVar.f28472q;
        this.f28470o = aVar.f28470o;
        this.f28469i = aVar.f28469i;
        this.f28474s = io.sentry.util.c.b(aVar.f28474s);
        this.f28477v = aVar.f28477v;
        this.f28475t = io.sentry.util.c.a(aVar.f28475t);
        this.f28476u = aVar.f28476u;
        this.f28478w = aVar.f28478w;
        this.f28479x = aVar.f28479x;
        this.f28480y = io.sentry.util.c.b(aVar.f28480y);
    }
}
