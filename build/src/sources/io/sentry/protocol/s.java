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
    private String f29459d;

    /* renamed from: e  reason: collision with root package name */
    private String f29460e;

    /* renamed from: i  reason: collision with root package name */
    private String f29461i;

    /* renamed from: o  reason: collision with root package name */
    private Long f29462o;

    /* renamed from: p  reason: collision with root package name */
    private b0 f29463p;

    /* renamed from: q  reason: collision with root package name */
    private l f29464q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29465r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public s a(e3 e3Var, ILogger iLogger) {
            s sVar = new s();
            e3Var.s();
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
                        sVar.f29462o = e3Var.m1();
                        break;
                    case 1:
                        sVar.f29461i = e3Var.r1();
                        break;
                    case 2:
                        sVar.f29459d = e3Var.r1();
                        break;
                    case 3:
                        sVar.f29460e = e3Var.r1();
                        break;
                    case 4:
                        sVar.f29464q = (l) e3Var.G0(iLogger, new l.a());
                        break;
                    case 5:
                        sVar.f29463p = (b0) e3Var.G0(iLogger, new b0.a());
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                        break;
                }
            }
            e3Var.z();
            sVar.r(hashMap);
            return sVar;
        }
    }

    public l g() {
        return this.f29464q;
    }

    public String h() {
        return this.f29461i;
    }

    public b0 i() {
        return this.f29463p;
    }

    public Long j() {
        return this.f29462o;
    }

    public String k() {
        return this.f29459d;
    }

    public String l() {
        return this.f29460e;
    }

    public void m(l lVar) {
        this.f29464q = lVar;
    }

    public void n(String str) {
        this.f29461i = str;
    }

    public void o(b0 b0Var) {
        this.f29463p = b0Var;
    }

    public void p(Long l10) {
        this.f29462o = l10;
    }

    public void q(String str) {
        this.f29459d = str;
    }

    public void r(Map map) {
        this.f29465r = map;
    }

    public void s(String str) {
        this.f29460e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29459d != null) {
            f3Var.e("type").f(this.f29459d);
        }
        if (this.f29460e != null) {
            f3Var.e("value").f(this.f29460e);
        }
        if (this.f29461i != null) {
            f3Var.e("module").f(this.f29461i);
        }
        if (this.f29462o != null) {
            f3Var.e("thread_id").i(this.f29462o);
        }
        if (this.f29463p != null) {
            f3Var.e("stacktrace").j(iLogger, this.f29463p);
        }
        if (this.f29464q != null) {
            f3Var.e("mechanism").j(iLogger, this.f29464q);
        }
        Map map = this.f29465r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29465r.get(str));
            }
        }
        f3Var.z();
    }
}
