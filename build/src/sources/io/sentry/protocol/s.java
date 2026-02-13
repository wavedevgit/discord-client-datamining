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
    private String f30355d;

    /* renamed from: e  reason: collision with root package name */
    private String f30356e;

    /* renamed from: i  reason: collision with root package name */
    private String f30357i;

    /* renamed from: o  reason: collision with root package name */
    private Long f30358o;

    /* renamed from: p  reason: collision with root package name */
    private b0 f30359p;

    /* renamed from: q  reason: collision with root package name */
    private l f30360q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30361r;

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
                        sVar.f30358o = e3Var.n1();
                        break;
                    case 1:
                        sVar.f30357i = e3Var.r1();
                        break;
                    case 2:
                        sVar.f30355d = e3Var.r1();
                        break;
                    case 3:
                        sVar.f30356e = e3Var.r1();
                        break;
                    case 4:
                        sVar.f30360q = (l) e3Var.I0(iLogger, new l.a());
                        break;
                    case 5:
                        sVar.f30359p = (b0) e3Var.I0(iLogger, new b0.a());
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
        return this.f30360q;
    }

    public String h() {
        return this.f30357i;
    }

    public b0 i() {
        return this.f30359p;
    }

    public Long j() {
        return this.f30358o;
    }

    public String k() {
        return this.f30355d;
    }

    public String l() {
        return this.f30356e;
    }

    public void m(l lVar) {
        this.f30360q = lVar;
    }

    public void n(String str) {
        this.f30357i = str;
    }

    public void o(b0 b0Var) {
        this.f30359p = b0Var;
    }

    public void p(Long l10) {
        this.f30358o = l10;
    }

    public void q(String str) {
        this.f30355d = str;
    }

    public void r(Map map) {
        this.f30361r = map;
    }

    public void s(String str) {
        this.f30356e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f30355d != null) {
            f3Var.e("type").f(this.f30355d);
        }
        if (this.f30356e != null) {
            f3Var.e("value").f(this.f30356e);
        }
        if (this.f30357i != null) {
            f3Var.e("module").f(this.f30357i);
        }
        if (this.f30358o != null) {
            f3Var.e("thread_id").i(this.f30358o);
        }
        if (this.f30359p != null) {
            f3Var.e("stacktrace").j(iLogger, this.f30359p);
        }
        if (this.f30360q != null) {
            f3Var.e("mechanism").j(iLogger, this.f30360q);
        }
        Map map = this.f30361r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30361r.get(str));
            }
        }
        f3Var.D();
    }
}
