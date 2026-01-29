package io.sentry.protocol;

import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.protocol.y;
import io.sentry.u6;
import io.sentry.w1;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f30453d;

    /* renamed from: e  reason: collision with root package name */
    private String f30454e;

    /* renamed from: i  reason: collision with root package name */
    private Set f30455i;

    /* renamed from: o  reason: collision with root package name */
    private Set f30456o;

    /* renamed from: p  reason: collision with root package name */
    private Map f30457p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public r a(e3 e3Var, ILogger iLogger) {
            ArrayList arrayList = new ArrayList();
            ArrayList arrayList2 = new ArrayList();
            e3Var.r();
            String str = null;
            String str2 = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case 3373707:
                        if (l02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 351608024:
                        if (l02.equals("version")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 750867693:
                        if (l02.equals("packages")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 1487029535:
                        if (l02.equals("integrations")) {
                            c10 = 3;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        str = e3Var.e1();
                        break;
                    case 1:
                        str2 = e3Var.e1();
                        break;
                    case 2:
                        List g22 = e3Var.g2(iLogger, new y.a());
                        if (g22 == null) {
                            break;
                        } else {
                            arrayList.addAll(g22);
                            break;
                        }
                    case 3:
                        List list = (List) e3Var.V1();
                        if (list == null) {
                            break;
                        } else {
                            arrayList2.addAll(list);
                            break;
                        }
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                        break;
                }
            }
            e3Var.y();
            if (str != null) {
                if (str2 != null) {
                    r rVar = new r(str, str2);
                    rVar.f30455i = new CopyOnWriteArraySet(arrayList);
                    rVar.f30456o = new CopyOnWriteArraySet(arrayList2);
                    rVar.j(hashMap);
                    return rVar;
                }
                IllegalStateException illegalStateException = new IllegalStateException("Missing required field \"version\"");
                iLogger.b(SentryLevel.ERROR, "Missing required field \"version\"", illegalStateException);
                throw illegalStateException;
            }
            IllegalStateException illegalStateException2 = new IllegalStateException("Missing required field \"name\"");
            iLogger.b(SentryLevel.ERROR, "Missing required field \"name\"", illegalStateException2);
            throw illegalStateException2;
        }
    }

    public r(String str, String str2) {
        this.f30453d = (String) io.sentry.util.y.c(str, "name is required.");
        this.f30454e = (String) io.sentry.util.y.c(str2, "version is required.");
    }

    public static r l(r rVar, String str, String str2) {
        io.sentry.util.y.c(str, "name is required.");
        io.sentry.util.y.c(str2, "version is required.");
        if (rVar == null) {
            return new r(str, str2);
        }
        rVar.i(str);
        rVar.k(str2);
        return rVar;
    }

    public void c(String str) {
        u6.d().a(str);
    }

    public void d(String str, String str2) {
        u6.d().b(str, str2);
    }

    public Set e() {
        Set set = this.f30456o;
        if (set != null) {
            return set;
        }
        return u6.d().e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && r.class == obj.getClass()) {
            r rVar = (r) obj;
            if (this.f30453d.equals(rVar.f30453d) && this.f30454e.equals(rVar.f30454e)) {
                return true;
            }
        }
        return false;
    }

    public String f() {
        return this.f30453d;
    }

    public Set g() {
        Set set = this.f30455i;
        if (set != null) {
            return set;
        }
        return u6.d().f();
    }

    public String h() {
        return this.f30454e;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30453d, this.f30454e);
    }

    public void i(String str) {
        this.f30453d = (String) io.sentry.util.y.c(str, "name is required.");
    }

    public void j(Map map) {
        this.f30457p = map;
    }

    public void k(String str) {
        this.f30454e = (String) io.sentry.util.y.c(str, "version is required.");
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30453d);
        f3Var.e("version").f(this.f30454e);
        Set g10 = g();
        Set e10 = e();
        if (!g10.isEmpty()) {
            f3Var.e("packages").j(iLogger, g10);
        }
        if (!e10.isEmpty()) {
            f3Var.e("integrations").j(iLogger, e10);
        }
        Map map = this.f30457p;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30457p.get(str));
            }
        }
        f3Var.y();
    }
}
