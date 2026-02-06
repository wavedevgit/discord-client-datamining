package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.protocol.b0;
import io.sentry.protocol.l;
import io.sentry.w1;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f28603d;

    /* renamed from: e  reason: collision with root package name */
    private String f28604e;

    /* renamed from: i  reason: collision with root package name */
    private String f28605i;

    /* renamed from: o  reason: collision with root package name */
    private Long f28606o;

    /* renamed from: p  reason: collision with root package name */
    private b0 f28607p;

    /* renamed from: q  reason: collision with root package name */
    private l f28608q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28609r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public s a(e3 e3Var, ILogger iLogger) {
            s sVar = new s();
            e3Var.u();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1562235024:
                        if (o02.equals("thread_id")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1068784020:
                        if (o02.equals("module")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3575610:
                        if (o02.equals("type")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 111972721:
                        if (o02.equals("value")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 1225089881:
                        if (o02.equals("mechanism")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 2055832509:
                        if (o02.equals("stacktrace")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        sVar.f28606o = e3Var.l1();
                        break;
                    case 1:
                        sVar.f28605i = e3Var.q1();
                        break;
                    case 2:
                        sVar.f28603d = e3Var.q1();
                        break;
                    case 3:
                        sVar.f28604e = e3Var.q1();
                        break;
                    case 4:
                        sVar.f28608q = (l) e3Var.G0(iLogger, new l.a());
                        break;
                    case 5:
                        sVar.f28607p = (b0) e3Var.G0(iLogger, new b0.a());
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
                        break;
                }
            }
            e3Var.D();
            sVar.r(hashMap);
            return sVar;
        }
    }

    public l g() {
        return this.f28608q;
    }

    public String h() {
        return this.f28605i;
    }

    public b0 i() {
        return this.f28607p;
    }

    public Long j() {
        return this.f28606o;
    }

    public String k() {
        return this.f28603d;
    }

    public String l() {
        return this.f28604e;
    }

    public void m(l lVar) {
        this.f28608q = lVar;
    }

    public void n(String str) {
        this.f28605i = str;
    }

    public void o(b0 b0Var) {
        this.f28607p = b0Var;
    }

    public void p(Long l10) {
        this.f28606o = l10;
    }

    public void q(String str) {
        this.f28603d = str;
    }

    public void r(Map map) {
        this.f28609r = map;
    }

    public void s(String str) {
        this.f28604e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28603d != null) {
            f3Var.e("type").f(this.f28603d);
        }
        if (this.f28604e != null) {
            f3Var.e("value").f(this.f28604e);
        }
        if (this.f28605i != null) {
            f3Var.e("module").f(this.f28605i);
        }
        if (this.f28606o != null) {
            f3Var.e("thread_id").i(this.f28606o);
        }
        if (this.f28607p != null) {
            f3Var.e("stacktrace").j(iLogger, this.f28607p);
        }
        if (this.f28608q != null) {
            f3Var.e("mechanism").j(iLogger, this.f28608q);
        }
        Map map = this.f28609r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28609r.get(str));
            }
        }
        f3Var.D();
    }
}
