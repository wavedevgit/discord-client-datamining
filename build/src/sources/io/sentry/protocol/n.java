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
    private String f29739d;

    /* renamed from: e  reason: collision with root package name */
    private String f29740e;

    /* renamed from: i  reason: collision with root package name */
    private String f29741i;

    /* renamed from: o  reason: collision with root package name */
    private String f29742o;

    /* renamed from: p  reason: collision with root package name */
    private String f29743p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f29744q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29745r;

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
                        nVar.f29744q = e3Var.w0();
                        break;
                    case 1:
                        nVar.f29741i = e3Var.r1();
                        break;
                    case 2:
                        nVar.f29739d = e3Var.r1();
                        break;
                    case 3:
                        nVar.f29742o = e3Var.r1();
                        break;
                    case 4:
                        nVar.f29740e = e3Var.r1();
                        break;
                    case 5:
                        nVar.f29743p = e3Var.r1();
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
            if (io.sentry.util.y.a(this.f29739d, nVar.f29739d) && io.sentry.util.y.a(this.f29740e, nVar.f29740e) && io.sentry.util.y.a(this.f29741i, nVar.f29741i) && io.sentry.util.y.a(this.f29742o, nVar.f29742o) && io.sentry.util.y.a(this.f29743p, nVar.f29743p) && io.sentry.util.y.a(this.f29744q, nVar.f29744q)) {
                return true;
            }
        }
        return false;
    }

    public String g() {
        return this.f29739d;
    }

    public void h(String str) {
        this.f29742o = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29739d, this.f29740e, this.f29741i, this.f29742o, this.f29743p, this.f29744q);
    }

    public void i(String str) {
        this.f29743p = str;
    }

    public void j(String str) {
        this.f29739d = str;
    }

    public void k(Boolean bool) {
        this.f29744q = bool;
    }

    public void l(Map map) {
        this.f29745r = map;
    }

    public void m(String str) {
        this.f29740e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29739d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29739d);
        }
        if (this.f29740e != null) {
            f3Var.e("version").f(this.f29740e);
        }
        if (this.f29741i != null) {
            f3Var.e("raw_description").f(this.f29741i);
        }
        if (this.f29742o != null) {
            f3Var.e("build").f(this.f29742o);
        }
        if (this.f29743p != null) {
            f3Var.e("kernel_version").f(this.f29743p);
        }
        if (this.f29744q != null) {
            f3Var.e("rooted").k(this.f29744q);
        }
        Map map = this.f29745r;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29745r.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(n nVar) {
        this.f29739d = nVar.f29739d;
        this.f29740e = nVar.f29740e;
        this.f29741i = nVar.f29741i;
        this.f29742o = nVar.f29742o;
        this.f29743p = nVar.f29743p;
        this.f29744q = nVar.f29744q;
        this.f29745r = io.sentry.util.c.b(nVar.f29745r);
    }
}
