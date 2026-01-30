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
    private String f30427d;

    /* renamed from: e  reason: collision with root package name */
    private String f30428e;

    /* renamed from: i  reason: collision with root package name */
    private String f30429i;

    /* renamed from: o  reason: collision with root package name */
    private String f30430o;

    /* renamed from: p  reason: collision with root package name */
    private String f30431p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f30432q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30433r;

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
                        nVar.f30432q = e3Var.v0();
                        break;
                    case 1:
                        nVar.f30429i = e3Var.r1();
                        break;
                    case 2:
                        nVar.f30427d = e3Var.r1();
                        break;
                    case 3:
                        nVar.f30430o = e3Var.r1();
                        break;
                    case 4:
                        nVar.f30428e = e3Var.r1();
                        break;
                    case 5:
                        nVar.f30431p = e3Var.r1();
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
            if (io.sentry.util.y.a(this.f30427d, nVar.f30427d) && io.sentry.util.y.a(this.f30428e, nVar.f30428e) && io.sentry.util.y.a(this.f30429i, nVar.f30429i) && io.sentry.util.y.a(this.f30430o, nVar.f30430o) && io.sentry.util.y.a(this.f30431p, nVar.f30431p) && io.sentry.util.y.a(this.f30432q, nVar.f30432q)) {
                return true;
            }
        }
        return false;
    }

    public String g() {
        return this.f30427d;
    }

    public void h(String str) {
        this.f30430o = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30427d, this.f30428e, this.f30429i, this.f30430o, this.f30431p, this.f30432q);
    }

    public void i(String str) {
        this.f30431p = str;
    }

    public void j(String str) {
        this.f30427d = str;
    }

    public void k(Boolean bool) {
        this.f30432q = bool;
    }

    public void l(Map map) {
        this.f30433r = map;
    }

    public void m(String str) {
        this.f30428e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30427d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30427d);
        }
        if (this.f30428e != null) {
            f3Var.e("version").f(this.f30428e);
        }
        if (this.f30429i != null) {
            f3Var.e("raw_description").f(this.f30429i);
        }
        if (this.f30430o != null) {
            f3Var.e("build").f(this.f30430o);
        }
        if (this.f30431p != null) {
            f3Var.e("kernel_version").f(this.f30431p);
        }
        if (this.f30432q != null) {
            f3Var.e("rooted").k(this.f30432q);
        }
        Map map = this.f30433r;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30433r.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(n nVar) {
        this.f30427d = nVar.f30427d;
        this.f30428e = nVar.f30428e;
        this.f30429i = nVar.f30429i;
        this.f30430o = nVar.f30430o;
        this.f30431p = nVar.f30431p;
        this.f30432q = nVar.f30432q;
        this.f30433r = io.sentry.util.c.b(nVar.f30433r);
    }
}
