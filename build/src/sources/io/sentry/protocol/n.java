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
    private String f30308d;

    /* renamed from: e  reason: collision with root package name */
    private String f30309e;

    /* renamed from: i  reason: collision with root package name */
    private String f30310i;

    /* renamed from: o  reason: collision with root package name */
    private String f30311o;

    /* renamed from: p  reason: collision with root package name */
    private String f30312p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f30313q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30314r;

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
                        nVar.f30313q = e3Var.w0();
                        break;
                    case 1:
                        nVar.f30310i = e3Var.r1();
                        break;
                    case 2:
                        nVar.f30308d = e3Var.r1();
                        break;
                    case 3:
                        nVar.f30311o = e3Var.r1();
                        break;
                    case 4:
                        nVar.f30309e = e3Var.r1();
                        break;
                    case 5:
                        nVar.f30312p = e3Var.r1();
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
            if (io.sentry.util.y.a(this.f30308d, nVar.f30308d) && io.sentry.util.y.a(this.f30309e, nVar.f30309e) && io.sentry.util.y.a(this.f30310i, nVar.f30310i) && io.sentry.util.y.a(this.f30311o, nVar.f30311o) && io.sentry.util.y.a(this.f30312p, nVar.f30312p) && io.sentry.util.y.a(this.f30313q, nVar.f30313q)) {
                return true;
            }
        }
        return false;
    }

    public String g() {
        return this.f30308d;
    }

    public void h(String str) {
        this.f30311o = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30308d, this.f30309e, this.f30310i, this.f30311o, this.f30312p, this.f30313q);
    }

    public void i(String str) {
        this.f30312p = str;
    }

    public void j(String str) {
        this.f30308d = str;
    }

    public void k(Boolean bool) {
        this.f30313q = bool;
    }

    public void l(Map map) {
        this.f30314r = map;
    }

    public void m(String str) {
        this.f30309e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f30308d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30308d);
        }
        if (this.f30309e != null) {
            f3Var.e("version").f(this.f30309e);
        }
        if (this.f30310i != null) {
            f3Var.e("raw_description").f(this.f30310i);
        }
        if (this.f30311o != null) {
            f3Var.e("build").f(this.f30311o);
        }
        if (this.f30312p != null) {
            f3Var.e("kernel_version").f(this.f30312p);
        }
        if (this.f30313q != null) {
            f3Var.e("rooted").k(this.f30313q);
        }
        Map map = this.f30314r;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30314r.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(n nVar) {
        this.f30308d = nVar.f30308d;
        this.f30309e = nVar.f30309e;
        this.f30310i = nVar.f30310i;
        this.f30311o = nVar.f30311o;
        this.f30312p = nVar.f30312p;
        this.f30313q = nVar.f30313q;
        this.f30314r = io.sentry.util.c.b(nVar.f30314r);
    }
}
