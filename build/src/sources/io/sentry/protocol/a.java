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
    private String f28419d;

    /* renamed from: e  reason: collision with root package name */
    private Date f28420e;

    /* renamed from: i  reason: collision with root package name */
    private String f28421i;

    /* renamed from: o  reason: collision with root package name */
    private String f28422o;

    /* renamed from: p  reason: collision with root package name */
    private String f28423p;

    /* renamed from: q  reason: collision with root package name */
    private String f28424q;

    /* renamed from: r  reason: collision with root package name */
    private String f28425r;

    /* renamed from: s  reason: collision with root package name */
    private Map f28426s;

    /* renamed from: t  reason: collision with root package name */
    private List f28427t;

    /* renamed from: u  reason: collision with root package name */
    private String f28428u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f28429v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f28430w;

    /* renamed from: x  reason: collision with root package name */
    private List f28431x;

    /* renamed from: y  reason: collision with root package name */
    private Map f28432y;

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
                        aVar.f28421i = e3Var.q1();
                        break;
                    case 2:
                        aVar.f28428u = e3Var.q1();
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
                        aVar.f28424q = e3Var.q1();
                        break;
                    case 5:
                        aVar.f28429v = e3Var.y0();
                        break;
                    case 6:
                        aVar.f28422o = e3Var.q1();
                        break;
                    case 7:
                        aVar.f28419d = e3Var.q1();
                        break;
                    case '\b':
                        aVar.f28420e = e3Var.u0(iLogger);
                        break;
                    case '\t':
                        aVar.f28426s = io.sentry.util.c.b((Map) e3Var.U1());
                        break;
                    case '\n':
                        aVar.f28423p = e3Var.q1();
                        break;
                    case 11:
                        aVar.f28425r = e3Var.q1();
                        break;
                    case '\f':
                        aVar.f28430w = e3Var.y0();
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
            if (io.sentry.util.y.a(this.f28419d, aVar.f28419d) && io.sentry.util.y.a(this.f28420e, aVar.f28420e) && io.sentry.util.y.a(this.f28421i, aVar.f28421i) && io.sentry.util.y.a(this.f28422o, aVar.f28422o) && io.sentry.util.y.a(this.f28423p, aVar.f28423p) && io.sentry.util.y.a(this.f28424q, aVar.f28424q) && io.sentry.util.y.a(this.f28425r, aVar.f28425r) && io.sentry.util.y.a(this.f28426s, aVar.f28426s) && io.sentry.util.y.a(this.f28429v, aVar.f28429v) && io.sentry.util.y.a(this.f28427t, aVar.f28427t) && io.sentry.util.y.a(this.f28428u, aVar.f28428u) && io.sentry.util.y.a(this.f28430w, aVar.f28430w) && io.sentry.util.y.a(this.f28431x, aVar.f28431x)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28419d, this.f28420e, this.f28421i, this.f28422o, this.f28423p, this.f28424q, this.f28425r, this.f28426s, this.f28429v, this.f28427t, this.f28428u, this.f28430w, this.f28431x);
    }

    public Boolean l() {
        return this.f28429v;
    }

    public void m(String str) {
        this.f28425r = str;
    }

    public void n(String str) {
        this.f28419d = str;
    }

    public void o(String str) {
        this.f28423p = str;
    }

    public void p(Date date) {
        this.f28420e = date;
    }

    public void q(String str) {
        this.f28424q = str;
    }

    public void r(Boolean bool) {
        this.f28429v = bool;
    }

    public void s(Map map) {
        this.f28426s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28419d != null) {
            f3Var.e("app_identifier").f(this.f28419d);
        }
        if (this.f28420e != null) {
            f3Var.e("app_start_time").j(iLogger, this.f28420e);
        }
        if (this.f28421i != null) {
            f3Var.e("device_app_hash").f(this.f28421i);
        }
        if (this.f28422o != null) {
            f3Var.e("build_type").f(this.f28422o);
        }
        if (this.f28423p != null) {
            f3Var.e("app_name").f(this.f28423p);
        }
        if (this.f28424q != null) {
            f3Var.e("app_version").f(this.f28424q);
        }
        if (this.f28425r != null) {
            f3Var.e("app_build").f(this.f28425r);
        }
        Map map = this.f28426s;
        if (map != null && !map.isEmpty()) {
            f3Var.e("permissions").j(iLogger, this.f28426s);
        }
        if (this.f28429v != null) {
            f3Var.e("in_foreground").k(this.f28429v);
        }
        if (this.f28427t != null) {
            f3Var.e("view_names").j(iLogger, this.f28427t);
        }
        if (this.f28428u != null) {
            f3Var.e("start_type").f(this.f28428u);
        }
        if (this.f28430w != null) {
            f3Var.e("is_split_apks").k(this.f28430w);
        }
        List list = this.f28431x;
        if (list != null && !list.isEmpty()) {
            f3Var.e("split_names").j(iLogger, this.f28431x);
        }
        Map map2 = this.f28432y;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                f3Var.e(str).j(iLogger, this.f28432y.get(str));
            }
        }
        f3Var.D();
    }

    public void t(Boolean bool) {
        this.f28430w = bool;
    }

    public void u(List list) {
        this.f28431x = list;
    }

    public void v(String str) {
        this.f28428u = str;
    }

    public void w(Map map) {
        this.f28432y = map;
    }

    public void x(List list) {
        this.f28427t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(a aVar) {
        this.f28425r = aVar.f28425r;
        this.f28419d = aVar.f28419d;
        this.f28423p = aVar.f28423p;
        this.f28420e = aVar.f28420e;
        this.f28424q = aVar.f28424q;
        this.f28422o = aVar.f28422o;
        this.f28421i = aVar.f28421i;
        this.f28426s = io.sentry.util.c.b(aVar.f28426s);
        this.f28429v = aVar.f28429v;
        this.f28427t = io.sentry.util.c.a(aVar.f28427t);
        this.f28428u = aVar.f28428u;
        this.f28430w = aVar.f28430w;
        this.f28431x = aVar.f28431x;
        this.f28432y = io.sentry.util.c.b(aVar.f28432y);
    }
}
