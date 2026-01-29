package io.sentry.clientreport;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.clientreport.g;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.k;
import io.sentry.m1;
import io.sentry.w1;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final Date f29857d;

    /* renamed from: e  reason: collision with root package name */
    private final List f29858e;

    /* renamed from: i  reason: collision with root package name */
    private Map f29859i;

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
        public c a(e3 e3Var, ILogger iLogger) {
            ArrayList arrayList = new ArrayList();
            e3Var.r();
            Date date = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("discarded_events")) {
                    if (!l02.equals("timestamp")) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                    } else {
                        date = e3Var.r0(iLogger);
                    }
                } else {
                    arrayList.addAll(e3Var.g2(iLogger, new g.a()));
                }
            }
            e3Var.y();
            if (date != null) {
                if (!arrayList.isEmpty()) {
                    c cVar = new c(date, arrayList);
                    cVar.b(hashMap);
                    return cVar;
                }
                throw c("discarded_events", iLogger);
            }
            throw c("timestamp", iLogger);
        }
    }

    public c(Date date, List list) {
        this.f29857d = date;
        this.f29858e = list;
    }

    public List a() {
        return this.f29858e;
    }

    public void b(Map map) {
        this.f29859i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("timestamp").f(k.h(this.f29857d));
        f3Var.e("discarded_events").j(iLogger, this.f29858e);
        Map map = this.f29859i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29859i.get(str));
            }
        }
        f3Var.y();
    }
}
