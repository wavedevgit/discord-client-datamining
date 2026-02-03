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
    private String f30040d;

    /* renamed from: e  reason: collision with root package name */
    private String f30041e;

    /* renamed from: i  reason: collision with root package name */
    private String f30042i;

    /* renamed from: o  reason: collision with root package name */
    private Long f30043o;

    /* renamed from: p  reason: collision with root package name */
    private b0 f30044p;

    /* renamed from: q  reason: collision with root package name */
    private l f30045q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30046r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public s a(e3 e3Var, ILogger iLogger) {
            s sVar = new s();
            e3Var.r();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1562235024:
                        if (m02.equals("thread_id")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1068784020:
                        if (m02.equals("module")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3575610:
                        if (m02.equals("type")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 111972721:
                        if (m02.equals("value")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 1225089881:
                        if (m02.equals("mechanism")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 2055832509:
                        if (m02.equals("stacktrace")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        sVar.f30043o = e3Var.m1();
                        break;
                    case 1:
                        sVar.f30042i = e3Var.r1();
                        break;
                    case 2:
                        sVar.f30040d = e3Var.r1();
                        break;
                    case 3:
                        sVar.f30041e = e3Var.r1();
                        break;
                    case 4:
                        sVar.f30045q = (l) e3Var.H0(iLogger, new l.a());
                        break;
                    case 5:
                        sVar.f30044p = (b0) e3Var.H0(iLogger, new b0.a());
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                        break;
                }
            }
            e3Var.y();
            sVar.r(hashMap);
            return sVar;
        }
    }

    public l g() {
        return this.f30045q;
    }

    public String h() {
        return this.f30042i;
    }

    public b0 i() {
        return this.f30044p;
    }

    public Long j() {
        return this.f30043o;
    }

    public String k() {
        return this.f30040d;
    }

    public String l() {
        return this.f30041e;
    }

    public void m(l lVar) {
        this.f30045q = lVar;
    }

    public void n(String str) {
        this.f30042i = str;
    }

    public void o(b0 b0Var) {
        this.f30044p = b0Var;
    }

    public void p(Long l10) {
        this.f30043o = l10;
    }

    public void q(String str) {
        this.f30040d = str;
    }

    public void r(Map map) {
        this.f30046r = map;
    }

    public void s(String str) {
        this.f30041e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30040d != null) {
            f3Var.e("type").f(this.f30040d);
        }
        if (this.f30041e != null) {
            f3Var.e("value").f(this.f30041e);
        }
        if (this.f30042i != null) {
            f3Var.e("module").f(this.f30042i);
        }
        if (this.f30043o != null) {
            f3Var.e("thread_id").i(this.f30043o);
        }
        if (this.f30044p != null) {
            f3Var.e("stacktrace").j(iLogger, this.f30044p);
        }
        if (this.f30045q != null) {
            f3Var.e("mechanism").j(iLogger, this.f30045q);
        }
        Map map = this.f30046r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30046r.get(str));
            }
        }
        f3Var.y();
    }
}
