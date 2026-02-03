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
    private String f30401d;

    /* renamed from: e  reason: collision with root package name */
    private String f30402e;

    /* renamed from: i  reason: collision with root package name */
    private String f30403i;

    /* renamed from: o  reason: collision with root package name */
    private Long f30404o;

    /* renamed from: p  reason: collision with root package name */
    private b0 f30405p;

    /* renamed from: q  reason: collision with root package name */
    private l f30406q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30407r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public s a(e3 e3Var, ILogger iLogger) {
            s sVar = new s();
            e3Var.r();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1562235024:
                        if (l02.equals("thread_id")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1068784020:
                        if (l02.equals("module")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3575610:
                        if (l02.equals("type")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 111972721:
                        if (l02.equals("value")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 1225089881:
                        if (l02.equals("mechanism")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 2055832509:
                        if (l02.equals("stacktrace")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        sVar.f30404o = e3Var.m1();
                        break;
                    case 1:
                        sVar.f30403i = e3Var.r1();
                        break;
                    case 2:
                        sVar.f30401d = e3Var.r1();
                        break;
                    case 3:
                        sVar.f30402e = e3Var.r1();
                        break;
                    case 4:
                        sVar.f30406q = (l) e3Var.G0(iLogger, new l.a());
                        break;
                    case 5:
                        sVar.f30405p = (b0) e3Var.G0(iLogger, new b0.a());
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                        break;
                }
            }
            e3Var.y();
            sVar.r(hashMap);
            return sVar;
        }
    }

    public l g() {
        return this.f30406q;
    }

    public String h() {
        return this.f30403i;
    }

    public b0 i() {
        return this.f30405p;
    }

    public Long j() {
        return this.f30404o;
    }

    public String k() {
        return this.f30401d;
    }

    public String l() {
        return this.f30402e;
    }

    public void m(l lVar) {
        this.f30406q = lVar;
    }

    public void n(String str) {
        this.f30403i = str;
    }

    public void o(b0 b0Var) {
        this.f30405p = b0Var;
    }

    public void p(Long l10) {
        this.f30404o = l10;
    }

    public void q(String str) {
        this.f30401d = str;
    }

    public void r(Map map) {
        this.f30407r = map;
    }

    public void s(String str) {
        this.f30402e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30401d != null) {
            f3Var.e("type").f(this.f30401d);
        }
        if (this.f30402e != null) {
            f3Var.e("value").f(this.f30402e);
        }
        if (this.f30403i != null) {
            f3Var.e("module").f(this.f30403i);
        }
        if (this.f30404o != null) {
            f3Var.e("thread_id").i(this.f30404o);
        }
        if (this.f30405p != null) {
            f3Var.e("stacktrace").j(iLogger, this.f30405p);
        }
        if (this.f30406q != null) {
            f3Var.e("mechanism").j(iLogger, this.f30406q);
        }
        Map map = this.f30407r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30407r.get(str));
            }
        }
        f3Var.y();
    }
}
