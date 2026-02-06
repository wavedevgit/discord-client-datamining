package io.sentry.clientreport;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f28009d;

    /* renamed from: e  reason: collision with root package name */
    private final String f28010e;

    /* renamed from: i  reason: collision with root package name */
    private final Long f28011i;

    /* renamed from: o  reason: collision with root package name */
    private Map f28012o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private Exception c(String str, ILogger iLogger) {
            String str2 = "Missing required field \"" + str + "\"";
            IllegalStateException illegalStateException = new IllegalStateException(str2);
            iLogger.b(SentryLevel.ERROR, str2, illegalStateException);
            return illegalStateException;
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public g a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            String str = null;
            String str2 = null;
            Long l10 = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1285004149:
                        if (o02.equals("quantity")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -934964668:
                        if (o02.equals("reason")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 50511102:
                        if (o02.equals("category")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        l10 = e3Var.l1();
                        break;
                    case 1:
                        str = e3Var.q1();
                        break;
                    case 2:
                        str2 = e3Var.q1();
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
            if (str != null) {
                if (str2 != null) {
                    if (l10 != null) {
                        g gVar = new g(str, str2, l10);
                        gVar.d(hashMap);
                        return gVar;
                    }
                    throw c("quantity", iLogger);
                }
                throw c("category", iLogger);
            }
            throw c("reason", iLogger);
        }
    }

    public g(String str, String str2, Long l10) {
        this.f28009d = str;
        this.f28010e = str2;
        this.f28011i = l10;
    }

    public String a() {
        return this.f28010e;
    }

    public Long b() {
        return this.f28011i;
    }

    public String c() {
        return this.f28009d;
    }

    public void d(Map map) {
        this.f28012o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("reason").f(this.f28009d);
        f3Var.e("category").f(this.f28010e);
        f3Var.e("quantity").i(this.f28011i);
        Map map = this.f28012o;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28012o.get(str));
            }
        }
        f3Var.D();
    }

    public String toString() {
        return "DiscardedEvent{reason='" + this.f28009d + "', category='" + this.f28010e + "', quantity=" + this.f28011i + '}';
    }
}
