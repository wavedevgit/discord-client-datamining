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
    private final Date f28858d;

    /* renamed from: e  reason: collision with root package name */
    private final List f28859e;

    /* renamed from: i  reason: collision with root package name */
    private Map f28860i;

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
            e3Var.s();
            Date date = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("discarded_events")) {
                    if (!m02.equals("timestamp")) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                    } else {
                        date = e3Var.s0(iLogger);
                    }
                } else {
                    arrayList.addAll(e3Var.g2(iLogger, new g.a()));
                }
            }
            e3Var.z();
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
        this.f28858d = date;
        this.f28859e = list;
    }

    public List a() {
        return this.f28859e;
    }

    public void b(Map map) {
        this.f28860i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("timestamp").f(k.h(this.f28858d));
        f3Var.e("discarded_events").j(iLogger, this.f28859e);
        Map map = this.f28860i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28860i.get(str));
            }
        }
        f3Var.z();
    }
}
