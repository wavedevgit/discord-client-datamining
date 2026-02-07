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
    private String f28604d;

    /* renamed from: e  reason: collision with root package name */
    private String f28605e;

    /* renamed from: i  reason: collision with root package name */
    private String f28606i;

    /* renamed from: o  reason: collision with root package name */
    private String f28607o;

    /* renamed from: p  reason: collision with root package name */
    private String f28608p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f28609q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28610r;

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
                        nVar.f28609q = e3Var.y0();
                        break;
                    case 1:
                        nVar.f28606i = e3Var.q1();
                        break;
                    case 2:
                        nVar.f28604d = e3Var.q1();
                        break;
                    case 3:
                        nVar.f28607o = e3Var.q1();
                        break;
                    case 4:
                        nVar.f28605e = e3Var.q1();
                        break;
                    case 5:
                        nVar.f28608p = e3Var.q1();
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
            if (io.sentry.util.y.a(this.f28604d, nVar.f28604d) && io.sentry.util.y.a(this.f28605e, nVar.f28605e) && io.sentry.util.y.a(this.f28606i, nVar.f28606i) && io.sentry.util.y.a(this.f28607o, nVar.f28607o) && io.sentry.util.y.a(this.f28608p, nVar.f28608p) && io.sentry.util.y.a(this.f28609q, nVar.f28609q)) {
                return true;
            }
        }
        return false;
    }

    public String g() {
        return this.f28604d;
    }

    public void h(String str) {
        this.f28607o = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28604d, this.f28605e, this.f28606i, this.f28607o, this.f28608p, this.f28609q);
    }

    public void i(String str) {
        this.f28608p = str;
    }

    public void j(String str) {
        this.f28604d = str;
    }

    public void k(Boolean bool) {
        this.f28609q = bool;
    }

    public void l(Map map) {
        this.f28610r = map;
    }

    public void m(String str) {
        this.f28605e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28604d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28604d);
        }
        if (this.f28605e != null) {
            f3Var.e("version").f(this.f28605e);
        }
        if (this.f28606i != null) {
            f3Var.e("raw_description").f(this.f28606i);
        }
        if (this.f28607o != null) {
            f3Var.e("build").f(this.f28607o);
        }
        if (this.f28608p != null) {
            f3Var.e("kernel_version").f(this.f28608p);
        }
        if (this.f28609q != null) {
            f3Var.e("rooted").k(this.f28609q);
        }
        Map map = this.f28610r;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28610r.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(n nVar) {
        this.f28604d = nVar.f28604d;
        this.f28605e = nVar.f28605e;
        this.f28606i = nVar.f28606i;
        this.f28607o = nVar.f28607o;
        this.f28608p = nVar.f28608p;
        this.f28609q = nVar.f28609q;
        this.f28610r = io.sentry.util.c.b(nVar.f28610r);
    }
}
