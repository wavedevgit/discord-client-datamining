package io.sentry.protocol;

import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f29740d;

    /* renamed from: e  reason: collision with root package name */
    private String f29741e;

    /* renamed from: i  reason: collision with root package name */
    private String f29742i;

    /* renamed from: o  reason: collision with root package name */
    private String f29743o;

    /* renamed from: p  reason: collision with root package name */
    private String f29744p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f29745q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29746r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public n a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            n nVar = new n();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -925311743:
                        if (o02.equals("rooted")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -339173787:
                        if (o02.equals("raw_description")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3373707:
                        if (o02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 94094958:
                        if (o02.equals("build")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 351608024:
                        if (o02.equals("version")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 2015527638:
                        if (o02.equals("kernel_version")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        nVar.f29745q = e3Var.w0();
                        break;
                    case 1:
                        nVar.f29742i = e3Var.r1();
                        break;
                    case 2:
                        nVar.f29740d = e3Var.r1();
                        break;
                    case 3:
                        nVar.f29743o = e3Var.r1();
                        break;
                    case 4:
                        nVar.f29741e = e3Var.r1();
                        break;
                    case 5:
                        nVar.f29744p = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            nVar.l(concurrentHashMap);
            e3Var.D();
            return nVar;
        }
    }

    public n() {
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && n.class == obj.getClass()) {
            n nVar = (n) obj;
            if (io.sentry.util.y.a(this.f29740d, nVar.f29740d) && io.sentry.util.y.a(this.f29741e, nVar.f29741e) && io.sentry.util.y.a(this.f29742i, nVar.f29742i) && io.sentry.util.y.a(this.f29743o, nVar.f29743o) && io.sentry.util.y.a(this.f29744p, nVar.f29744p) && io.sentry.util.y.a(this.f29745q, nVar.f29745q)) {
                return true;
            }
        }
        return false;
    }

    public String g() {
        return this.f29740d;
    }

    public void h(String str) {
        this.f29743o = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29740d, this.f29741e, this.f29742i, this.f29743o, this.f29744p, this.f29745q);
    }

    public void i(String str) {
        this.f29744p = str;
    }

    public void j(String str) {
        this.f29740d = str;
    }

    public void k(Boolean bool) {
        this.f29745q = bool;
    }

    public void l(Map map) {
        this.f29746r = map;
    }

    public void m(String str) {
        this.f29741e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29740d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29740d);
        }
        if (this.f29741e != null) {
            f3Var.e("version").f(this.f29741e);
        }
        if (this.f29742i != null) {
            f3Var.e("raw_description").f(this.f29742i);
        }
        if (this.f29743o != null) {
            f3Var.e("build").f(this.f29743o);
        }
        if (this.f29744p != null) {
            f3Var.e("kernel_version").f(this.f29744p);
        }
        if (this.f29745q != null) {
            f3Var.e("rooted").k(this.f29745q);
        }
        Map map = this.f29746r;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29746r.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(n nVar) {
        this.f29740d = nVar.f29740d;
        this.f29741e = nVar.f29741e;
        this.f29742i = nVar.f29742i;
        this.f29743o = nVar.f29743o;
        this.f29744p = nVar.f29744p;
        this.f29745q = nVar.f29745q;
        this.f29746r = io.sentry.util.c.b(nVar.f29746r);
    }
}
