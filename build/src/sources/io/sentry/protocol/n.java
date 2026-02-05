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
    private String f29412d;

    /* renamed from: e  reason: collision with root package name */
    private String f29413e;

    /* renamed from: i  reason: collision with root package name */
    private String f29414i;

    /* renamed from: o  reason: collision with root package name */
    private String f29415o;

    /* renamed from: p  reason: collision with root package name */
    private String f29416p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f29417q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29418r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public n a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            n nVar = new n();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -925311743:
                        if (m02.equals("rooted")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -339173787:
                        if (m02.equals("raw_description")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3373707:
                        if (m02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 94094958:
                        if (m02.equals("build")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 351608024:
                        if (m02.equals("version")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 2015527638:
                        if (m02.equals("kernel_version")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        nVar.f29417q = e3Var.w0();
                        break;
                    case 1:
                        nVar.f29414i = e3Var.r1();
                        break;
                    case 2:
                        nVar.f29412d = e3Var.r1();
                        break;
                    case 3:
                        nVar.f29415o = e3Var.r1();
                        break;
                    case 4:
                        nVar.f29413e = e3Var.r1();
                        break;
                    case 5:
                        nVar.f29416p = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            nVar.l(concurrentHashMap);
            e3Var.z();
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
            if (io.sentry.util.y.a(this.f29412d, nVar.f29412d) && io.sentry.util.y.a(this.f29413e, nVar.f29413e) && io.sentry.util.y.a(this.f29414i, nVar.f29414i) && io.sentry.util.y.a(this.f29415o, nVar.f29415o) && io.sentry.util.y.a(this.f29416p, nVar.f29416p) && io.sentry.util.y.a(this.f29417q, nVar.f29417q)) {
                return true;
            }
        }
        return false;
    }

    public String g() {
        return this.f29412d;
    }

    public void h(String str) {
        this.f29415o = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29412d, this.f29413e, this.f29414i, this.f29415o, this.f29416p, this.f29417q);
    }

    public void i(String str) {
        this.f29416p = str;
    }

    public void j(String str) {
        this.f29412d = str;
    }

    public void k(Boolean bool) {
        this.f29417q = bool;
    }

    public void l(Map map) {
        this.f29418r = map;
    }

    public void m(String str) {
        this.f29413e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29412d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29412d);
        }
        if (this.f29413e != null) {
            f3Var.e("version").f(this.f29413e);
        }
        if (this.f29414i != null) {
            f3Var.e("raw_description").f(this.f29414i);
        }
        if (this.f29415o != null) {
            f3Var.e("build").f(this.f29415o);
        }
        if (this.f29416p != null) {
            f3Var.e("kernel_version").f(this.f29416p);
        }
        if (this.f29417q != null) {
            f3Var.e("rooted").k(this.f29417q);
        }
        Map map = this.f29418r;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29418r.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(n nVar) {
        this.f29412d = nVar.f29412d;
        this.f29413e = nVar.f29413e;
        this.f29414i = nVar.f29414i;
        this.f29415o = nVar.f29415o;
        this.f29416p = nVar.f29416p;
        this.f29417q = nVar.f29417q;
        this.f29418r = io.sentry.util.c.b(nVar.f29418r);
    }
}
