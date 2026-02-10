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
    private String f29786d;

    /* renamed from: e  reason: collision with root package name */
    private String f29787e;

    /* renamed from: i  reason: collision with root package name */
    private String f29788i;

    /* renamed from: o  reason: collision with root package name */
    private Long f29789o;

    /* renamed from: p  reason: collision with root package name */
    private b0 f29790p;

    /* renamed from: q  reason: collision with root package name */
    private l f29791q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29792r;

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
                        sVar.f29789o = e3Var.n1();
                        break;
                    case 1:
                        sVar.f29788i = e3Var.r1();
                        break;
                    case 2:
                        sVar.f29786d = e3Var.r1();
                        break;
                    case 3:
                        sVar.f29787e = e3Var.r1();
                        break;
                    case 4:
                        sVar.f29791q = (l) e3Var.I0(iLogger, new l.a());
                        break;
                    case 5:
                        sVar.f29790p = (b0) e3Var.I0(iLogger, new b0.a());
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
        return this.f29791q;
    }

    public String h() {
        return this.f29788i;
    }

    public b0 i() {
        return this.f29790p;
    }

    public Long j() {
        return this.f29789o;
    }

    public String k() {
        return this.f29786d;
    }

    public String l() {
        return this.f29787e;
    }

    public void m(l lVar) {
        this.f29791q = lVar;
    }

    public void n(String str) {
        this.f29788i = str;
    }

    public void o(b0 b0Var) {
        this.f29790p = b0Var;
    }

    public void p(Long l10) {
        this.f29789o = l10;
    }

    public void q(String str) {
        this.f29786d = str;
    }

    public void r(Map map) {
        this.f29792r = map;
    }

    public void s(String str) {
        this.f29787e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29786d != null) {
            f3Var.e("type").f(this.f29786d);
        }
        if (this.f29787e != null) {
            f3Var.e("value").f(this.f29787e);
        }
        if (this.f29788i != null) {
            f3Var.e("module").f(this.f29788i);
        }
        if (this.f29789o != null) {
            f3Var.e("thread_id").i(this.f29789o);
        }
        if (this.f29790p != null) {
            f3Var.e("stacktrace").j(iLogger, this.f29790p);
        }
        if (this.f29791q != null) {
            f3Var.e("mechanism").j(iLogger, this.f29791q);
        }
        Map map = this.f29792r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29792r.get(str));
            }
        }
        f3Var.D();
    }
}
