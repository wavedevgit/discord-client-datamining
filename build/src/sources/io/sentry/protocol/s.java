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
    private String f28851d;

    /* renamed from: e  reason: collision with root package name */
    private String f28852e;

    /* renamed from: i  reason: collision with root package name */
    private String f28853i;

    /* renamed from: o  reason: collision with root package name */
    private Long f28854o;

    /* renamed from: p  reason: collision with root package name */
    private b0 f28855p;

    /* renamed from: q  reason: collision with root package name */
    private l f28856q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28857r;

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
                        sVar.f28854o = e3Var.i1();
                        break;
                    case 1:
                        sVar.f28853i = e3Var.m1();
                        break;
                    case 2:
                        sVar.f28851d = e3Var.m1();
                        break;
                    case 3:
                        sVar.f28852e = e3Var.m1();
                        break;
                    case 4:
                        sVar.f28856q = (l) e3Var.E0(iLogger, new l.a());
                        break;
                    case 5:
                        sVar.f28855p = (b0) e3Var.E0(iLogger, new b0.a());
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.p1(iLogger, hashMap, o02);
                        break;
                }
            }
            e3Var.D();
            sVar.r(hashMap);
            return sVar;
        }
    }

    public l g() {
        return this.f28856q;
    }

    public String h() {
        return this.f28853i;
    }

    public b0 i() {
        return this.f28855p;
    }

    public Long j() {
        return this.f28854o;
    }

    public String k() {
        return this.f28851d;
    }

    public String l() {
        return this.f28852e;
    }

    public void m(l lVar) {
        this.f28856q = lVar;
    }

    public void n(String str) {
        this.f28853i = str;
    }

    public void o(b0 b0Var) {
        this.f28855p = b0Var;
    }

    public void p(Long l10) {
        this.f28854o = l10;
    }

    public void q(String str) {
        this.f28851d = str;
    }

    public void r(Map map) {
        this.f28857r = map;
    }

    public void s(String str) {
        this.f28852e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28851d != null) {
            f3Var.e("type").f(this.f28851d);
        }
        if (this.f28852e != null) {
            f3Var.e("value").f(this.f28852e);
        }
        if (this.f28853i != null) {
            f3Var.e("module").f(this.f28853i);
        }
        if (this.f28854o != null) {
            f3Var.e("thread_id").i(this.f28854o);
        }
        if (this.f28855p != null) {
            f3Var.e("stacktrace").j(iLogger, this.f28855p);
        }
        if (this.f28856q != null) {
            f3Var.e("mechanism").j(iLogger, this.f28856q);
        }
        Map map = this.f28857r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28857r.get(str));
            }
        }
        f3Var.D();
    }
}
