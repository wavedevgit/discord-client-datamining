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
    private final String f28865d;

    /* renamed from: e  reason: collision with root package name */
    private final String f28866e;

    /* renamed from: i  reason: collision with root package name */
    private final Long f28867i;

    /* renamed from: o  reason: collision with root package name */
    private Map f28868o;

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
            e3Var.s();
            String str = null;
            String str2 = null;
            Long l10 = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1285004149:
                        if (m02.equals("quantity")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -934964668:
                        if (m02.equals("reason")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 50511102:
                        if (m02.equals("category")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        l10 = e3Var.m1();
                        break;
                    case 1:
                        str = e3Var.r1();
                        break;
                    case 2:
                        str2 = e3Var.r1();
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
        this.f28865d = str;
        this.f28866e = str2;
        this.f28867i = l10;
    }

    public String a() {
        return this.f28866e;
    }

    public Long b() {
        return this.f28867i;
    }

    public String c() {
        return this.f28865d;
    }

    public void d(Map map) {
        this.f28868o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("reason").f(this.f28865d);
        f3Var.e("category").f(this.f28866e);
        f3Var.e("quantity").i(this.f28867i);
        Map map = this.f28868o;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28868o.get(str));
            }
        }
        f3Var.z();
    }

    public String toString() {
        return "DiscardedEvent{reason='" + this.f28865d + "', category='" + this.f28866e + "', quantity=" + this.f28867i + '}';
    }
}
