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
    private String f29993d;

    /* renamed from: e  reason: collision with root package name */
    private String f29994e;

    /* renamed from: i  reason: collision with root package name */
    private String f29995i;

    /* renamed from: o  reason: collision with root package name */
    private String f29996o;

    /* renamed from: p  reason: collision with root package name */
    private String f29997p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f29998q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29999r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public n a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
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
                        nVar.f29998q = e3Var.x0();
                        break;
                    case 1:
                        nVar.f29995i = e3Var.r1();
                        break;
                    case 2:
                        nVar.f29993d = e3Var.r1();
                        break;
                    case 3:
                        nVar.f29996o = e3Var.r1();
                        break;
                    case 4:
                        nVar.f29994e = e3Var.r1();
                        break;
                    case 5:
                        nVar.f29997p = e3Var.r1();
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
            if (io.sentry.util.y.a(this.f29993d, nVar.f29993d) && io.sentry.util.y.a(this.f29994e, nVar.f29994e) && io.sentry.util.y.a(this.f29995i, nVar.f29995i) && io.sentry.util.y.a(this.f29996o, nVar.f29996o) && io.sentry.util.y.a(this.f29997p, nVar.f29997p) && io.sentry.util.y.a(this.f29998q, nVar.f29998q)) {
                return true;
            }
        }
        return false;
    }

    public String g() {
        return this.f29993d;
    }

    public void h(String str) {
        this.f29996o = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29993d, this.f29994e, this.f29995i, this.f29996o, this.f29997p, this.f29998q);
    }

    public void i(String str) {
        this.f29997p = str;
    }

    public void j(String str) {
        this.f29993d = str;
    }

    public void k(Boolean bool) {
        this.f29998q = bool;
    }

    public void l(Map map) {
        this.f29999r = map;
    }

    public void m(String str) {
        this.f29994e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f29993d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29993d);
        }
        if (this.f29994e != null) {
            f3Var.e("version").f(this.f29994e);
        }
        if (this.f29995i != null) {
            f3Var.e("raw_description").f(this.f29995i);
        }
        if (this.f29996o != null) {
            f3Var.e("build").f(this.f29996o);
        }
        if (this.f29997p != null) {
            f3Var.e("kernel_version").f(this.f29997p);
        }
        if (this.f29998q != null) {
            f3Var.e("rooted").k(this.f29998q);
        }
        Map map = this.f29999r;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29999r.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(n nVar) {
        this.f29993d = nVar.f29993d;
        this.f29994e = nVar.f29994e;
        this.f29995i = nVar.f29995i;
        this.f29996o = nVar.f29996o;
        this.f29997p = nVar.f29997p;
        this.f29998q = nVar.f29998q;
        this.f29999r = io.sentry.util.c.b(nVar.f29999r);
    }
}
