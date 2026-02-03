package io.sentry;

import io.sentry.UncaughtExceptionHandlerIntegration;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements b0 {

    /* renamed from: d  reason: collision with root package name */
    private final Map f30068d = Collections.synchronizedMap(new HashMap());

    /* renamed from: e  reason: collision with root package name */
    private final k7 f30069e;

    public l(k7 k7Var) {
        this.f30069e = k7Var;
    }

    @Override // io.sentry.b0
    public SentryEvent h(SentryEvent sentryEvent, Hint hint) {
        String k10;
        Long j10;
        if (!io.sentry.util.n.h(hint, UncaughtExceptionHandlerIntegration.a.class)) {
            return sentryEvent;
        }
        io.sentry.protocol.s z02 = sentryEvent.z0();
        if (z02 == null || (k10 = z02.k()) == null || (j10 = z02.j()) == null) {
            return sentryEvent;
        }
        Long l10 = (Long) this.f30068d.get(k10);
        if (l10 != null && !l10.equals(j10)) {
            this.f30069e.getLogger().c(SentryLevel.INFO, "Event %s has been dropped due to multi-threaded deduplication", sentryEvent.G());
            io.sentry.util.n.n(hint, io.sentry.hints.h.MULTITHREADED_DEDUPLICATION);
            return null;
        }
        this.f30068d.put(k10, j10);
        return sentryEvent;
    }
}
