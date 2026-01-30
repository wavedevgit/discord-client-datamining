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
    private String f30474d;

    /* renamed from: e  reason: collision with root package name */
    private String f30475e;

    /* renamed from: i  reason: collision with root package name */
    private String f30476i;

    /* renamed from: o  reason: collision with root package name */
    private Long f30477o;

    /* renamed from: p  reason: collision with root package name */
    private b0 f30478p;

    /* renamed from: q  reason: collision with root package name */
    private l f30479q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30480r;

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
                        sVar.f30477o = e3Var.m1();
                        break;
                    case 1:
                        sVar.f30476i = e3Var.r1();
                        break;
                    case 2:
                        sVar.f30474d = e3Var.r1();
                        break;
                    case 3:
                        sVar.f30475e = e3Var.r1();
                        break;
                    case 4:
                        sVar.f30479q = (l) e3Var.G0(iLogger, new l.a());
                        break;
                    case 5:
                        sVar.f30478p = (b0) e3Var.G0(iLogger, new b0.a());
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
        return this.f30479q;
    }

    public String h() {
        return this.f30476i;
    }

    public b0 i() {
        return this.f30478p;
    }

    public Long j() {
        return this.f30477o;
    }

    public String k() {
        return this.f30474d;
    }

    public String l() {
        return this.f30475e;
    }

    public void m(l lVar) {
        this.f30479q = lVar;
    }

    public void n(String str) {
        this.f30476i = str;
    }

    public void o(b0 b0Var) {
        this.f30478p = b0Var;
    }

    public void p(Long l10) {
        this.f30477o = l10;
    }

    public void q(String str) {
        this.f30474d = str;
    }

    public void r(Map map) {
        this.f30480r = map;
    }

    public void s(String str) {
        this.f30475e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30474d != null) {
            f3Var.e("type").f(this.f30474d);
        }
        if (this.f30475e != null) {
            f3Var.e("value").f(this.f30475e);
        }
        if (this.f30476i != null) {
            f3Var.e("module").f(this.f30476i);
        }
        if (this.f30477o != null) {
            f3Var.e("thread_id").i(this.f30477o);
        }
        if (this.f30478p != null) {
            f3Var.e("stacktrace").j(iLogger, this.f30478p);
        }
        if (this.f30479q != null) {
            f3Var.e("mechanism").j(iLogger, this.f30479q);
        }
        Map map = this.f30480r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30480r.get(str));
            }
        }
        f3Var.y();
    }
}
