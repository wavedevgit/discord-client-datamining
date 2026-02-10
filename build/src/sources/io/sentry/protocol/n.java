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
    private String f28804d;

    /* renamed from: e  reason: collision with root package name */
    private String f28805e;

    /* renamed from: i  reason: collision with root package name */
    private String f28806i;

    /* renamed from: o  reason: collision with root package name */
    private String f28807o;

    /* renamed from: p  reason: collision with root package name */
    private String f28808p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f28809q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28810r;

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
                        nVar.f28809q = e3Var.w0();
                        break;
                    case 1:
                        nVar.f28806i = e3Var.m1();
                        break;
                    case 2:
                        nVar.f28804d = e3Var.m1();
                        break;
                    case 3:
                        nVar.f28807o = e3Var.m1();
                        break;
                    case 4:
                        nVar.f28805e = e3Var.m1();
                        break;
                    case 5:
                        nVar.f28808p = e3Var.m1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap, o02);
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
            if (io.sentry.util.y.a(this.f28804d, nVar.f28804d) && io.sentry.util.y.a(this.f28805e, nVar.f28805e) && io.sentry.util.y.a(this.f28806i, nVar.f28806i) && io.sentry.util.y.a(this.f28807o, nVar.f28807o) && io.sentry.util.y.a(this.f28808p, nVar.f28808p) && io.sentry.util.y.a(this.f28809q, nVar.f28809q)) {
                return true;
            }
        }
        return false;
    }

    public String g() {
        return this.f28804d;
    }

    public void h(String str) {
        this.f28807o = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28804d, this.f28805e, this.f28806i, this.f28807o, this.f28808p, this.f28809q);
    }

    public void i(String str) {
        this.f28808p = str;
    }

    public void j(String str) {
        this.f28804d = str;
    }

    public void k(Boolean bool) {
        this.f28809q = bool;
    }

    public void l(Map map) {
        this.f28810r = map;
    }

    public void m(String str) {
        this.f28805e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28804d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28804d);
        }
        if (this.f28805e != null) {
            f3Var.e("version").f(this.f28805e);
        }
        if (this.f28806i != null) {
            f3Var.e("raw_description").f(this.f28806i);
        }
        if (this.f28807o != null) {
            f3Var.e("build").f(this.f28807o);
        }
        if (this.f28808p != null) {
            f3Var.e("kernel_version").f(this.f28808p);
        }
        if (this.f28809q != null) {
            f3Var.e("rooted").k(this.f28809q);
        }
        Map map = this.f28810r;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28810r.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(n nVar) {
        this.f28804d = nVar.f28804d;
        this.f28805e = nVar.f28805e;
        this.f28806i = nVar.f28806i;
        this.f28807o = nVar.f28807o;
        this.f28808p = nVar.f28808p;
        this.f28809q = nVar.f28809q;
        this.f28810r = io.sentry.util.c.b(nVar.f28810r);
    }
}
