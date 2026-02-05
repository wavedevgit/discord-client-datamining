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
    private String f29275d;

    /* renamed from: e  reason: collision with root package name */
    private Date f29276e;

    /* renamed from: i  reason: collision with root package name */
    private String f29277i;

    /* renamed from: o  reason: collision with root package name */
    private String f29278o;

    /* renamed from: p  reason: collision with root package name */
    private String f29279p;

    /* renamed from: q  reason: collision with root package name */
    private String f29280q;

    /* renamed from: r  reason: collision with root package name */
    private String f29281r;

    /* renamed from: s  reason: collision with root package name */
    private Map f29282s;

    /* renamed from: t  reason: collision with root package name */
    private List f29283t;

    /* renamed from: u  reason: collision with root package name */
    private String f29284u;

    /* renamed from: v  reason: collision with root package name */
    private Boolean f29285v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f29286w;

    /* renamed from: x  reason: collision with root package name */
    private List f29287x;

    /* renamed from: y  reason: collision with root package name */
    private Map f29288y;

    /* renamed from: io.sentry.protocol.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0408a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public a a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
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
                        aVar.f29277i = e3Var.r1();
                        break;
                    case 2:
                        aVar.f29284u = e3Var.r1();
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
                        aVar.f29280q = e3Var.r1();
                        break;
                    case 5:
                        aVar.f29285v = e3Var.w0();
                        break;
                    case 6:
                        aVar.f29278o = e3Var.r1();
                        break;
                    case 7:
                        aVar.f29275d = e3Var.r1();
                        break;
                    case '\b':
                        aVar.f29276e = e3Var.s0(iLogger);
                        break;
                    case '\t':
                        aVar.f29282s = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case '\n':
                        aVar.f29279p = e3Var.r1();
                        break;
                    case 11:
                        aVar.f29281r = e3Var.r1();
                        break;
                    case '\f':
                        aVar.f29286w = e3Var.w0();
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
            e3Var.z();
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
            if (io.sentry.util.y.a(this.f29275d, aVar.f29275d) && io.sentry.util.y.a(this.f29276e, aVar.f29276e) && io.sentry.util.y.a(this.f29277i, aVar.f29277i) && io.sentry.util.y.a(this.f29278o, aVar.f29278o) && io.sentry.util.y.a(this.f29279p, aVar.f29279p) && io.sentry.util.y.a(this.f29280q, aVar.f29280q) && io.sentry.util.y.a(this.f29281r, aVar.f29281r) && io.sentry.util.y.a(this.f29282s, aVar.f29282s) && io.sentry.util.y.a(this.f29285v, aVar.f29285v) && io.sentry.util.y.a(this.f29283t, aVar.f29283t) && io.sentry.util.y.a(this.f29284u, aVar.f29284u) && io.sentry.util.y.a(this.f29286w, aVar.f29286w) && io.sentry.util.y.a(this.f29287x, aVar.f29287x)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29275d, this.f29276e, this.f29277i, this.f29278o, this.f29279p, this.f29280q, this.f29281r, this.f29282s, this.f29285v, this.f29283t, this.f29284u, this.f29286w, this.f29287x);
    }

    public Boolean l() {
        return this.f29285v;
    }

    public void m(String str) {
        this.f29281r = str;
    }

    public void n(String str) {
        this.f29275d = str;
    }

    public void o(String str) {
        this.f29279p = str;
    }

    public void p(Date date) {
        this.f29276e = date;
    }

    public void q(String str) {
        this.f29280q = str;
    }

    public void r(Boolean bool) {
        this.f29285v = bool;
    }

    public void s(Map map) {
        this.f29282s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29275d != null) {
            f3Var.e("app_identifier").f(this.f29275d);
        }
        if (this.f29276e != null) {
            f3Var.e("app_start_time").j(iLogger, this.f29276e);
        }
        if (this.f29277i != null) {
            f3Var.e("device_app_hash").f(this.f29277i);
        }
        if (this.f29278o != null) {
            f3Var.e("build_type").f(this.f29278o);
        }
        if (this.f29279p != null) {
            f3Var.e("app_name").f(this.f29279p);
        }
        if (this.f29280q != null) {
            f3Var.e("app_version").f(this.f29280q);
        }
        if (this.f29281r != null) {
            f3Var.e("app_build").f(this.f29281r);
        }
        Map map = this.f29282s;
        if (map != null && !map.isEmpty()) {
            f3Var.e("permissions").j(iLogger, this.f29282s);
        }
        if (this.f29285v != null) {
            f3Var.e("in_foreground").k(this.f29285v);
        }
        if (this.f29283t != null) {
            f3Var.e("view_names").j(iLogger, this.f29283t);
        }
        if (this.f29284u != null) {
            f3Var.e("start_type").f(this.f29284u);
        }
        if (this.f29286w != null) {
            f3Var.e("is_split_apks").k(this.f29286w);
        }
        List list = this.f29287x;
        if (list != null && !list.isEmpty()) {
            f3Var.e("split_names").j(iLogger, this.f29287x);
        }
        Map map2 = this.f29288y;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                f3Var.e(str).j(iLogger, this.f29288y.get(str));
            }
        }
        f3Var.z();
    }

    public void t(Boolean bool) {
        this.f29286w = bool;
    }

    public void u(List list) {
        this.f29287x = list;
    }

    public void v(String str) {
        this.f29284u = str;
    }

    public void w(Map map) {
        this.f29288y = map;
    }

    public void x(List list) {
        this.f29283t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(a aVar) {
        this.f29281r = aVar.f29281r;
        this.f29275d = aVar.f29275d;
        this.f29279p = aVar.f29279p;
        this.f29276e = aVar.f29276e;
        this.f29280q = aVar.f29280q;
        this.f29278o = aVar.f29278o;
        this.f29277i = aVar.f29277i;
        this.f29282s = io.sentry.util.c.b(aVar.f29282s);
        this.f29285v = aVar.f29285v;
        this.f29283t = io.sentry.util.c.a(aVar.f29283t);
        this.f29284u = aVar.f29284u;
        this.f29286w = aVar.f29286w;
        this.f29287x = aVar.f29287x;
        this.f29288y = io.sentry.util.c.b(aVar.f29288y);
    }
}
