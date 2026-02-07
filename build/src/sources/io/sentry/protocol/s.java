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
    private String f28651d;

    /* renamed from: e  reason: collision with root package name */
    private String f28652e;

    /* renamed from: i  reason: collision with root package name */
    private String f28653i;

    /* renamed from: o  reason: collision with root package name */
    private Long f28654o;

    /* renamed from: p  reason: collision with root package name */
    private b0 f28655p;

    /* renamed from: q  reason: collision with root package name */
    private l f28656q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28657r;

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
                        sVar.f28654o = e3Var.l1();
                        break;
                    case 1:
                        sVar.f28653i = e3Var.q1();
                        break;
                    case 2:
                        sVar.f28651d = e3Var.q1();
                        break;
                    case 3:
                        sVar.f28652e = e3Var.q1();
                        break;
                    case 4:
                        sVar.f28656q = (l) e3Var.G0(iLogger, new l.a());
                        break;
                    case 5:
                        sVar.f28655p = (b0) e3Var.G0(iLogger, new b0.a());
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
        return this.f28656q;
    }

    public String h() {
        return this.f28653i;
    }

    public b0 i() {
        return this.f28655p;
    }

    public Long j() {
        return this.f28654o;
    }

    public String k() {
        return this.f28651d;
    }

    public String l() {
        return this.f28652e;
    }

    public void m(l lVar) {
        this.f28656q = lVar;
    }

    public void n(String str) {
        this.f28653i = str;
    }

    public void o(b0 b0Var) {
        this.f28655p = b0Var;
    }

    public void p(Long l10) {
        this.f28654o = l10;
    }

    public void q(String str) {
        this.f28651d = str;
    }

    public void r(Map map) {
        this.f28657r = map;
    }

    public void s(String str) {
        this.f28652e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28651d != null) {
            f3Var.e("type").f(this.f28651d);
        }
        if (this.f28652e != null) {
            f3Var.e("value").f(this.f28652e);
        }
        if (this.f28653i != null) {
            f3Var.e("module").f(this.f28653i);
        }
        if (this.f28654o != null) {
            f3Var.e("thread_id").i(this.f28654o);
        }
        if (this.f28655p != null) {
            f3Var.e("stacktrace").j(iLogger, this.f28655p);
        }
        if (this.f28656q != null) {
            f3Var.e("mechanism").j(iLogger, this.f28656q);
        }
        Map map = this.f28657r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28657r.get(str));
            }
        }
        f3Var.D();
    }
}
