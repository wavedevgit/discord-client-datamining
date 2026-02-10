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
    private String f28667d;

    /* renamed from: e  reason: collision with root package name */
    private Date f28668e;

    /* renamed from: i  reason: collision with root package name */
    private String f28669i;

    /* renamed from: o  reason: collision with root package name */
    private String f28670o;

    /* renamed from: p  reason: collision with root package name */
    private String f28671p;

    /* renamed from: q  reason: collision with root package name */
    private String f28672q;

    /* renamed from: r  reason: collision with root package name */
    private String f28673r;

    /* renamed from: s  reason: collision with root package name */
    private Map f28674s;

    /* renamed from: t  reason: collision with root package name */
    private List f28675t;

    /* renamed from: u  reason: collision with root package name */
    private String f28676u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f28677v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f28678w;

    /* renamed from: x  reason: collision with root package name */
    private List f28679x;

    /* renamed from: y  reason: collision with root package name */
    private Map f28680y;

    /* renamed from: io.sentry.protocol.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0428a implements m1 {
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
                        List list = (List) e3Var.T1();
                        if (list == null) {
                            break;
                        } else {
                            aVar.u(list);
                            break;
                        }
                    case 1:
                        aVar.f28669i = e3Var.m1();
                        break;
                    case 2:
                        aVar.f28676u = e3Var.m1();
                        break;
                    case 3:
                        List list2 = (List) e3Var.T1();
                        if (list2 == null) {
                            break;
                        } else {
                            aVar.x(list2);
                            break;
                        }
                    case 4:
                        aVar.f28672q = e3Var.m1();
                        break;
                    case 5:
                        aVar.f28677v = e3Var.w0();
                        break;
                    case 6:
                        aVar.f28670o = e3Var.m1();
                        break;
                    case 7:
                        aVar.f28667d = e3Var.m1();
                        break;
                    case '\b':
                        aVar.f28668e = e3Var.s0(iLogger);
                        break;
                    case '\t':
                        aVar.f28674s = io.sentry.util.c.b((Map) e3Var.T1());
                        break;
                    case '\n':
                        aVar.f28671p = e3Var.m1();
                        break;
                    case 11:
                        aVar.f28673r = e3Var.m1();
                        break;
                    case '\f':
                        aVar.f28678w = e3Var.w0();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap, o02);
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
            if (io.sentry.util.y.a(this.f28667d, aVar.f28667d) && io.sentry.util.y.a(this.f28668e, aVar.f28668e) && io.sentry.util.y.a(this.f28669i, aVar.f28669i) && io.sentry.util.y.a(this.f28670o, aVar.f28670o) && io.sentry.util.y.a(this.f28671p, aVar.f28671p) && io.sentry.util.y.a(this.f28672q, aVar.f28672q) && io.sentry.util.y.a(this.f28673r, aVar.f28673r) && io.sentry.util.y.a(this.f28674s, aVar.f28674s) && io.sentry.util.y.a(this.f28677v, aVar.f28677v) && io.sentry.util.y.a(this.f28675t, aVar.f28675t) && io.sentry.util.y.a(this.f28676u, aVar.f28676u) && io.sentry.util.y.a(this.f28678w, aVar.f28678w) && io.sentry.util.y.a(this.f28679x, aVar.f28679x)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28667d, this.f28668e, this.f28669i, this.f28670o, this.f28671p, this.f28672q, this.f28673r, this.f28674s, this.f28677v, this.f28675t, this.f28676u, this.f28678w, this.f28679x);
    }

    public Boolean l() {
        return this.f28677v;
    }

    public void m(String str) {
        this.f28673r = str;
    }

    public void n(String str) {
        this.f28667d = str;
    }

    public void o(String str) {
        this.f28671p = str;
    }

    public void p(Date date) {
        this.f28668e = date;
    }

    public void q(String str) {
        this.f28672q = str;
    }

    public void r(Boolean bool) {
        this.f28677v = bool;
    }

    public void s(Map map) {
        this.f28674s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28667d != null) {
            f3Var.e("app_identifier").f(this.f28667d);
        }
        if (this.f28668e != null) {
            f3Var.e("app_start_time").j(iLogger, this.f28668e);
        }
        if (this.f28669i != null) {
            f3Var.e("device_app_hash").f(this.f28669i);
        }
        if (this.f28670o != null) {
            f3Var.e("build_type").f(this.f28670o);
        }
        if (this.f28671p != null) {
            f3Var.e("app_name").f(this.f28671p);
        }
        if (this.f28672q != null) {
            f3Var.e("app_version").f(this.f28672q);
        }
        if (this.f28673r != null) {
            f3Var.e("app_build").f(this.f28673r);
        }
        Map map = this.f28674s;
        if (map != null && !map.isEmpty()) {
            f3Var.e("permissions").j(iLogger, this.f28674s);
        }
        if (this.f28677v != null) {
            f3Var.e("in_foreground").k(this.f28677v);
        }
        if (this.f28675t != null) {
            f3Var.e("view_names").j(iLogger, this.f28675t);
        }
        if (this.f28676u != null) {
            f3Var.e("start_type").f(this.f28676u);
        }
        if (this.f28678w != null) {
            f3Var.e("is_split_apks").k(this.f28678w);
        }
        List list = this.f28679x;
        if (list != null && !list.isEmpty()) {
            f3Var.e("split_names").j(iLogger, this.f28679x);
        }
        Map map2 = this.f28680y;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                f3Var.e(str).j(iLogger, this.f28680y.get(str));
            }
        }
        f3Var.D();
    }

    public void t(Boolean bool) {
        this.f28678w = bool;
    }

    public void u(List list) {
        this.f28679x = list;
    }

    public void v(String str) {
        this.f28676u = str;
    }

    public void w(Map map) {
        this.f28680y = map;
    }

    public void x(List list) {
        this.f28675t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(a aVar) {
        this.f28673r = aVar.f28673r;
        this.f28667d = aVar.f28667d;
        this.f28671p = aVar.f28671p;
        this.f28668e = aVar.f28668e;
        this.f28672q = aVar.f28672q;
        this.f28670o = aVar.f28670o;
        this.f28669i = aVar.f28669i;
        this.f28674s = io.sentry.util.c.b(aVar.f28674s);
        this.f28677v = aVar.f28677v;
        this.f28675t = io.sentry.util.c.a(aVar.f28675t);
        this.f28676u = aVar.f28676u;
        this.f28678w = aVar.f28678w;
        this.f28679x = aVar.f28679x;
        this.f28680y = io.sentry.util.c.b(aVar.f28680y);
    }
}
