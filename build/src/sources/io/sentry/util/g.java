package io.sentry.util;

import io.sentry.Hint;
import io.sentry.SentryEvent;
import io.sentry.SentryLevel;
import io.sentry.k7;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {
    private static boolean a(SentryEvent sentryEvent, k7 k7Var) {
        if (q.b(k7Var.getSerializer(), k7Var.getLogger(), sentryEvent) <= 1048576) {
            return true;
        }
        return false;
    }

    public static SentryEvent b(SentryEvent sentryEvent, Hint hint, k7 k7Var) {
        SentryEvent sentryEvent2;
        try {
            if (k7Var.isEnableEventSizeLimiting() && !a(sentryEvent, k7Var)) {
                k7Var.getLogger().c(SentryLevel.INFO, "Event %s exceeds %d bytes limit. Reducing size by dropping fields.", sentryEvent.G(), 1048576L);
                k7.j onOversizedEvent = k7Var.getOnOversizedEvent();
                if (onOversizedEvent != null) {
                    sentryEvent2 = onOversizedEvent.a(sentryEvent, hint);
                    if (a(sentryEvent2, k7Var)) {
                        return sentryEvent2;
                    }
                } else {
                    sentryEvent2 = sentryEvent;
                }
                SentryEvent c10 = c(sentryEvent2, k7Var);
                if (a(c10, k7Var)) {
                    return c10;
                }
                SentryEvent d10 = d(c10, k7Var);
                if (!a(d10, k7Var)) {
                    k7Var.getLogger().c(SentryLevel.WARNING, "Event %s still exceeds size limit after reducing all fields. Event may be rejected by server.", sentryEvent.G());
                }
                return d10;
            }
            return sentryEvent;
        } catch (Throwable th2) {
            k7Var.getLogger().b(SentryLevel.ERROR, "An error occurred while limiting event size. Event will be sent as-is.", th2);
            return sentryEvent;
        }
    }

    private static SentryEvent c(SentryEvent sentryEvent, k7 k7Var) {
        List B = sentryEvent.B();
        if (B != null && !B.isEmpty()) {
            sentryEvent.T(null);
            k7Var.getLogger().c(SentryLevel.DEBUG, "Removed breadcrumbs to reduce size of event %s", sentryEvent.G());
        }
        return sentryEvent;
    }

    private static SentryEvent d(SentryEvent sentryEvent, k7 k7Var) {
        List<io.sentry.protocol.s> r02 = sentryEvent.r0();
        if (r02 != null) {
            for (io.sentry.protocol.s sVar : r02) {
                io.sentry.protocol.b0 i10 = sVar.i();
                if (i10 != null) {
                    e(i10, sentryEvent, k7Var, "Truncated exception stack frames of event %s");
                }
            }
        }
        List<io.sentry.protocol.c0> w02 = sentryEvent.w0();
        if (w02 != null) {
            for (io.sentry.protocol.c0 c0Var : w02) {
                io.sentry.protocol.b0 n10 = c0Var.n();
                if (n10 != null) {
                    e(n10, sentryEvent, k7Var, "Truncated thread stack frames for event %s");
                }
            }
        }
        return sentryEvent;
    }

    private static void e(io.sentry.protocol.b0 b0Var, SentryEvent sentryEvent, k7 k7Var, String str) {
        List d10 = b0Var.d();
        if (d10 != null && d10.size() > 500) {
            ArrayList arrayList = new ArrayList(500);
            arrayList.addAll(d10.subList(0, androidx.recyclerview.widget.h.DEFAULT_SWIPE_ANIMATION_DURATION));
            arrayList.addAll(d10.subList(d10.size() - androidx.recyclerview.widget.h.DEFAULT_SWIPE_ANIMATION_DURATION, d10.size()));
            b0Var.e(arrayList);
            k7Var.getLogger().c(SentryLevel.DEBUG, str, sentryEvent.G());
        }
    }
}
