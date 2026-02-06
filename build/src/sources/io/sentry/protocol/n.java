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
    private String f28556d;

    /* renamed from: e  reason: collision with root package name */
    private String f28557e;

    /* renamed from: i  reason: collision with root package name */
    private String f28558i;

    /* renamed from: o  reason: collision with root package name */
    private String f28559o;

    /* renamed from: p  reason: collision with root package name */
    private String f28560p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f28561q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28562r;

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
                        nVar.f28561q = e3Var.y0();
                        break;
                    case 1:
                        nVar.f28558i = e3Var.q1();
                        break;
                    case 2:
                        nVar.f28556d = e3Var.q1();
                        break;
                    case 3:
                        nVar.f28559o = e3Var.q1();
                        break;
                    case 4:
                        nVar.f28557e = e3Var.q1();
                        break;
                    case 5:
                        nVar.f28560p = e3Var.q1();
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
            if (io.sentry.util.y.a(this.f28556d, nVar.f28556d) && io.sentry.util.y.a(this.f28557e, nVar.f28557e) && io.sentry.util.y.a(this.f28558i, nVar.f28558i) && io.sentry.util.y.a(this.f28559o, nVar.f28559o) && io.sentry.util.y.a(this.f28560p, nVar.f28560p) && io.sentry.util.y.a(this.f28561q, nVar.f28561q)) {
                return true;
            }
        }
        return false;
    }

    public String g() {
        return this.f28556d;
    }

    public void h(String str) {
        this.f28559o = str;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28556d, this.f28557e, this.f28558i, this.f28559o, this.f28560p, this.f28561q);
    }

    public void i(String str) {
        this.f28560p = str;
    }

    public void j(String str) {
        this.f28556d = str;
    }

    public void k(Boolean bool) {
        this.f28561q = bool;
    }

    public void l(Map map) {
        this.f28562r = map;
    }

    public void m(String str) {
        this.f28557e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28556d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28556d);
        }
        if (this.f28557e != null) {
            f3Var.e("version").f(this.f28557e);
        }
        if (this.f28558i != null) {
            f3Var.e("raw_description").f(this.f28558i);
        }
        if (this.f28559o != null) {
            f3Var.e("build").f(this.f28559o);
        }
        if (this.f28560p != null) {
            f3Var.e("kernel_version").f(this.f28560p);
        }
        if (this.f28561q != null) {
            f3Var.e("rooted").k(this.f28561q);
        }
        Map map = this.f28562r;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28562r.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(n nVar) {
        this.f28556d = nVar.f28556d;
        this.f28557e = nVar.f28557e;
        this.f28558i = nVar.f28558i;
        this.f28559o = nVar.f28559o;
        this.f28560p = nVar.f28560p;
        this.f28561q = nVar.f28561q;
        this.f28562r = io.sentry.util.c.b(nVar.f28562r);
    }
}
