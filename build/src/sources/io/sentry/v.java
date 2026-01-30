package io.sentry;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v implements b0 {

    /* renamed from: d  reason: collision with root package name */
    private final Map f30848d = Collections.synchronizedMap(new WeakHashMap());

    /* renamed from: e  reason: collision with root package name */
    private final k7 f30849e;

    public v(k7 k7Var) {
        this.f30849e = (k7) io.sentry.util.y.c(k7Var, "options are required");
    }

    private static List b(Throwable th2) {
        ArrayList arrayList = new ArrayList();
        while (th2.getCause() != null) {
            arrayList.add(th2.getCause());
            th2 = th2.getCause();
        }
        return arrayList;
    }

    private static boolean c(Map map, List list) {
        for (Object obj : list) {
            if (map.containsKey(obj)) {
                return true;
            }
        }
        return false;
    }

    @Override // io.sentry.b0
    public SentryEvent h(SentryEvent sentryEvent, Hint hint) {
        if (this.f30849e.isEnableDeduplication()) {
            Throwable O = sentryEvent.O();
            if (O != null) {
                if (!this.f30848d.containsKey(O) && !c(this.f30848d, b(O))) {
                    this.f30848d.put(O, null);
                    return sentryEvent;
                }
                this.f30849e.getLogger().c(SentryLevel.DEBUG, "Duplicate Exception detected. Event %s will be discarded.", sentryEvent.G());
                return null;
            }
            return sentryEvent;
        }
        this.f30849e.getLogger().c(SentryLevel.DEBUG, "Event deduplication is disabled.", new Object[0]);
        return sentryEvent;
    }
}
