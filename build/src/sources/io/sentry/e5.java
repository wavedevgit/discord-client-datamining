package io.sentry;

import io.sentry.Breadcrumb;
import io.sentry.protocol.c;
import io.sentry.protocol.d;
import io.sentry.protocol.h0;
import io.sentry.protocol.o;
import io.sentry.protocol.r;
import io.sentry.protocol.x;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e5 {

    /* renamed from: d  reason: collision with root package name */
    private io.sentry.protocol.x f29958d;

    /* renamed from: e  reason: collision with root package name */
    private final io.sentry.protocol.c f29959e;

    /* renamed from: i  reason: collision with root package name */
    private io.sentry.protocol.r f29960i;

    /* renamed from: o  reason: collision with root package name */
    private io.sentry.protocol.o f29961o;

    /* renamed from: p  reason: collision with root package name */
    private Map f29962p;

    /* renamed from: q  reason: collision with root package name */
    private String f29963q;

    /* renamed from: r  reason: collision with root package name */
    private String f29964r;

    /* renamed from: s  reason: collision with root package name */
    private String f29965s;

    /* renamed from: t  reason: collision with root package name */
    private io.sentry.protocol.h0 f29966t;

    /* renamed from: u  reason: collision with root package name */
    protected transient Throwable f29967u;

    /* renamed from: v  reason: collision with root package name */
    private String f29968v;

    /* renamed from: w  reason: collision with root package name */
    private String f29969w;

    /* renamed from: x  reason: collision with root package name */
    private List f29970x;

    /* renamed from: y  reason: collision with root package name */
    private io.sentry.protocol.d f29971y;

    /* renamed from: z  reason: collision with root package name */
    private Map f29972z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public boolean a(e5 e5Var, String str, e3 e3Var, ILogger iLogger) {
            str.getClass();
            char c10 = 65535;
            switch (str.hashCode()) {
                case -1840434063:
                    if (str.equals("debug_meta")) {
                        c10 = 0;
                        break;
                    }
                    break;
                case -758770169:
                    if (str.equals("server_name")) {
                        c10 = 1;
                        break;
                    }
                    break;
                case -567312220:
                    if (str.equals("contexts")) {
                        c10 = 2;
                        break;
                    }
                    break;
                case -85904877:
                    if (str.equals("environment")) {
                        c10 = 3;
                        break;
                    }
                    break;
                case -51457840:
                    if (str.equals("breadcrumbs")) {
                        c10 = 4;
                        break;
                    }
                    break;
                case 113722:
                    if (str.equals("sdk")) {
                        c10 = 5;
                        break;
                    }
                    break;
                case 3083686:
                    if (str.equals("dist")) {
                        c10 = 6;
                        break;
                    }
                    break;
                case 3552281:
                    if (str.equals("tags")) {
                        c10 = 7;
                        break;
                    }
                    break;
                case 3599307:
                    if (str.equals("user")) {
                        c10 = '\b';
                        break;
                    }
                    break;
                case 96965648:
                    if (str.equals("extra")) {
                        c10 = '\t';
                        break;
                    }
                    break;
                case 278118624:
                    if (str.equals("event_id")) {
                        c10 = '\n';
                        break;
                    }
                    break;
                case 1090594823:
                    if (str.equals("release")) {
                        c10 = 11;
                        break;
                    }
                    break;
                case 1095692943:
                    if (str.equals("request")) {
                        c10 = '\f';
                        break;
                    }
                    break;
                case 1874684019:
                    if (str.equals("platform")) {
                        c10 = '\r';
                        break;
                    }
                    break;
            }
            switch (c10) {
                case 0:
                    e5Var.f29971y = (io.sentry.protocol.d) e3Var.G0(iLogger, new d.a());
                    return true;
                case 1:
                    e5Var.f29968v = e3Var.r1();
                    return true;
                case 2:
                    e5Var.f29959e.m(new c.a().a(e3Var, iLogger));
                    return true;
                case 3:
                    e5Var.f29964r = e3Var.r1();
                    return true;
                case 4:
                    e5Var.f29970x = e3Var.g2(iLogger, new Breadcrumb.a());
                    return true;
                case 5:
                    e5Var.f29960i = (io.sentry.protocol.r) e3Var.G0(iLogger, new r.a());
                    return true;
                case 6:
                    e5Var.f29969w = e3Var.r1();
                    return true;
                case 7:
                    e5Var.f29962p = io.sentry.util.c.b((Map) e3Var.V1());
                    return true;
                case '\b':
                    e5Var.f29966t = (io.sentry.protocol.h0) e3Var.G0(iLogger, new h0.a());
                    return true;
                case '\t':
                    e5Var.f29972z = io.sentry.util.c.b((Map) e3Var.V1());
                    return true;
                case '\n':
                    e5Var.f29958d = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                    return true;
                case 11:
                    e5Var.f29963q = e3Var.r1();
                    return true;
                case '\f':
                    e5Var.f29961o = (io.sentry.protocol.o) e3Var.G0(iLogger, new o.a());
                    return true;
                case '\r':
                    e5Var.f29965s = e3Var.r1();
                    return true;
                default:
                    return false;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public void a(e5 e5Var, f3 f3Var, ILogger iLogger) {
            if (e5Var.f29958d != null) {
                f3Var.e("event_id").j(iLogger, e5Var.f29958d);
            }
            f3Var.e("contexts").j(iLogger, e5Var.f29959e);
            if (e5Var.f29960i != null) {
                f3Var.e("sdk").j(iLogger, e5Var.f29960i);
            }
            if (e5Var.f29961o != null) {
                f3Var.e("request").j(iLogger, e5Var.f29961o);
            }
            if (e5Var.f29962p != null && !e5Var.f29962p.isEmpty()) {
                f3Var.e("tags").j(iLogger, e5Var.f29962p);
            }
            if (e5Var.f29963q != null) {
                f3Var.e("release").f(e5Var.f29963q);
            }
            if (e5Var.f29964r != null) {
                f3Var.e("environment").f(e5Var.f29964r);
            }
            if (e5Var.f29965s != null) {
                f3Var.e("platform").f(e5Var.f29965s);
            }
            if (e5Var.f29966t != null) {
                f3Var.e("user").j(iLogger, e5Var.f29966t);
            }
            if (e5Var.f29968v != null) {
                f3Var.e("server_name").f(e5Var.f29968v);
            }
            if (e5Var.f29969w != null) {
                f3Var.e("dist").f(e5Var.f29969w);
            }
            if (e5Var.f29970x != null && !e5Var.f29970x.isEmpty()) {
                f3Var.e("breadcrumbs").j(iLogger, e5Var.f29970x);
            }
            if (e5Var.f29971y != null) {
                f3Var.e("debug_meta").j(iLogger, e5Var.f29971y);
            }
            if (e5Var.f29972z != null && !e5Var.f29972z.isEmpty()) {
                f3Var.e("extra").j(iLogger, e5Var.f29972z);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e5(io.sentry.protocol.x xVar) {
        this.f29959e = new io.sentry.protocol.c();
        this.f29958d = xVar;
    }

    public List B() {
        return this.f29970x;
    }

    public io.sentry.protocol.c C() {
        return this.f29959e;
    }

    public io.sentry.protocol.d D() {
        return this.f29971y;
    }

    public String E() {
        return this.f29969w;
    }

    public String F() {
        return this.f29964r;
    }

    public io.sentry.protocol.x G() {
        return this.f29958d;
    }

    public Map H() {
        return this.f29972z;
    }

    public String I() {
        return this.f29965s;
    }

    public String J() {
        return this.f29963q;
    }

    public io.sentry.protocol.o K() {
        return this.f29961o;
    }

    public io.sentry.protocol.r L() {
        return this.f29960i;
    }

    public String M() {
        return this.f29968v;
    }

    public Map N() {
        return this.f29962p;
    }

    public Throwable O() {
        Throwable th2 = this.f29967u;
        if (th2 instanceof io.sentry.exception.a) {
            return ((io.sentry.exception.a) th2).c();
        }
        return th2;
    }

    public Throwable P() {
        return this.f29967u;
    }

    public io.sentry.protocol.h0 Q() {
        return this.f29966t;
    }

    public void R(String str) {
        Map map = this.f29972z;
        if (map != null && str != null) {
            map.remove(str);
        }
    }

    public void S(String str) {
        Map map = this.f29962p;
        if (map != null && str != null) {
            map.remove(str);
        }
    }

    public void T(List list) {
        this.f29970x = io.sentry.util.c.a(list);
    }

    public void U(io.sentry.protocol.d dVar) {
        this.f29971y = dVar;
    }

    public void V(String str) {
        this.f29969w = str;
    }

    public void W(String str) {
        this.f29964r = str;
    }

    public void X(io.sentry.protocol.x xVar) {
        this.f29958d = xVar;
    }

    public void Y(String str, Object obj) {
        if (this.f29972z == null) {
            this.f29972z = new HashMap();
        }
        if (str == null) {
            return;
        }
        if (obj == null) {
            R(str);
        } else {
            this.f29972z.put(str, obj);
        }
    }

    public void Z(Map map) {
        this.f29972z = io.sentry.util.c.c(map);
    }

    public void a0(String str) {
        this.f29965s = str;
    }

    public void b0(String str) {
        this.f29963q = str;
    }

    public void c0(io.sentry.protocol.o oVar) {
        this.f29961o = oVar;
    }

    public void d0(io.sentry.protocol.r rVar) {
        this.f29960i = rVar;
    }

    public void e0(String str) {
        this.f29968v = str;
    }

    public void f0(String str, String str2) {
        if (this.f29962p == null) {
            this.f29962p = new HashMap();
        }
        if (str == null) {
            return;
        }
        if (str2 == null) {
            S(str);
        } else {
            this.f29962p.put(str, str2);
        }
    }

    public void g0(Map map) {
        this.f29962p = io.sentry.util.c.c(map);
    }

    public void h0(io.sentry.protocol.h0 h0Var) {
        this.f29966t = h0Var;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e5() {
        this(new io.sentry.protocol.x());
    }
}
