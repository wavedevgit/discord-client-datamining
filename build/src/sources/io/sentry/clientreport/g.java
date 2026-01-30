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
    private final String f29880d;

    /* renamed from: e  reason: collision with root package name */
    private final String f29881e;

    /* renamed from: i  reason: collision with root package name */
    private final Long f29882i;

    /* renamed from: o  reason: collision with root package name */
    private Map f29883o;

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
            e3Var.r();
            String str = null;
            String str2 = null;
            Long l10 = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1285004149:
                        if (l02.equals("quantity")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -934964668:
                        if (l02.equals("reason")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 50511102:
                        if (l02.equals("category")) {
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
                        e3Var.v1(iLogger, hashMap, l02);
                        break;
                }
            }
            e3Var.y();
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
        this.f29880d = str;
        this.f29881e = str2;
        this.f29882i = l10;
    }

    public String a() {
        return this.f29881e;
    }

    public Long b() {
        return this.f29882i;
    }

    public String c() {
        return this.f29880d;
    }

    public void d(Map map) {
        this.f29883o = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("reason").f(this.f29880d);
        f3Var.e("category").f(this.f29881e);
        f3Var.e("quantity").i(this.f29882i);
        Map map = this.f29883o;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29883o.get(str));
            }
        }
        f3Var.y();
    }

    public String toString() {
        return "DiscardedEvent{reason='" + this.f29880d + "', category='" + this.f29881e + "', quantity=" + this.f29882i + '}';
    }
}
