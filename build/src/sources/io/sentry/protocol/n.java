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
    private String f30354d;

    /* renamed from: e  reason: collision with root package name */
    private String f30355e;

    /* renamed from: i  reason: collision with root package name */
    private String f30356i;

    /* renamed from: o  reason: collision with root package name */
    private String f30357o;

    /* renamed from: p  reason: collision with root package name */
    private String f30358p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f30359q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30360r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public n a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            n nVar = new n();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -925311743:
                        if (l02.equals("rooted")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -339173787:
                        if (l02.equals("raw_description")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3373707:
                        if (l02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 94094958:
                        if (l02.equals("build")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 351608024:
                        if (l02.equals("version")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 2015527638:
                        if (l02.equals("kernel_version")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        nVar.f30359q = e3Var.v0();
                        break;
                    case 1:
                        nVar.f30356i = e3Var.r1();
                        break;
                    case 2:
                        nVar.f30354d = e3Var.r1();
                        break;
                    case 3:
                        nVar.f30357o = e3Var.r1();
                        break;
                    case 4:
                        nVar.f30355e = e3Var.r1();
                        break;
                    case 5:
                        nVar.f30358p = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            nVar.l(concurrentHashMap);
            e3Var.y();
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
            if (io.sentry.util.y.a(this.f30354d, nVar.f30354d) && io.sentry.util.y.a(this.f30355e, nVar.f30355e) && io.sentry.util.y.a(this.f30356i, nVar.f30356i) && io.sentry.util.y.a(this.f30357o, nVar.f30357o) && io.sentry.util.y.a(this.f30358p, nVar.f30358p) && io.sentry.util.y.a(this.f30359q, nVar.f30359q)) {
                return true;
            }
        }
        return false;
    }

    public String g() {
        return this.f30354d;
    }

    public void h(String str) {
        this.f30357o = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30354d, this.f30355e, this.f30356i, this.f30357o, this.f30358p, this.f30359q);
    }

    public void i(String str) {
        this.f30358p = str;
    }

    public void j(String str) {
        this.f30354d = str;
    }

    public void k(Boolean bool) {
        this.f30359q = bool;
    }

    public void l(Map map) {
        this.f30360r = map;
    }

    public void m(String str) {
        this.f30355e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30354d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30354d);
        }
        if (this.f30355e != null) {
            f3Var.e("version").f(this.f30355e);
        }
        if (this.f30356i != null) {
            f3Var.e("raw_description").f(this.f30356i);
        }
        if (this.f30357o != null) {
            f3Var.e("build").f(this.f30357o);
        }
        if (this.f30358p != null) {
            f3Var.e("kernel_version").f(this.f30358p);
        }
        if (this.f30359q != null) {
            f3Var.e("rooted").k(this.f30359q);
        }
        Map map = this.f30360r;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30360r.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(n nVar) {
        this.f30354d = nVar.f30354d;
        this.f30355e = nVar.f30355e;
        this.f30356i = nVar.f30356i;
        this.f30357o = nVar.f30357o;
        this.f30358p = nVar.f30358p;
        this.f30359q = nVar.f30359q;
        this.f30360r = io.sentry.util.c.b(nVar.f30360r);
    }
}
