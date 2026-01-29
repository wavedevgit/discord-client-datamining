package io.sentry.opentelemetry;

import io.sentry.SentryLevel;
import io.sentry.e7;
import io.sentry.i2;
import io.sentry.k7;
import io.sentry.util.a0;
import io.sentry.util.e0;
import io.sentry.util.u;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static void a(k7 k7Var) {
        if (a0.c()) {
            for (String str : b(k7Var)) {
                k7Var.addIgnoredSpanOrigin(str);
            }
        }
    }

    private static List b(k7 k7Var) {
        e7 openTelemetryMode = k7Var.getOpenTelemetryMode();
        if (e7.OFF.equals(openTelemetryMode)) {
            return Collections.EMPTY_LIST;
        }
        return e0.a(openTelemetryMode);
    }

    public static void c(k7 k7Var, u uVar) {
        if (a0.c()) {
            if (e7.AUTO.equals(k7Var.getOpenTelemetryMode())) {
                if (uVar.c("io.sentry.opentelemetry.agent.AgentMarker", i2.e())) {
                    k7Var.getLogger().c(SentryLevel.DEBUG, "openTelemetryMode has been inferred from AUTO to AGENT", new Object[0]);
                    k7Var.setOpenTelemetryMode(e7.AGENT);
                } else if (uVar.c("io.sentry.opentelemetry.agent.AgentlessMarker", i2.e())) {
                    k7Var.getLogger().c(SentryLevel.DEBUG, "openTelemetryMode has been inferred from AUTO to AGENTLESS", new Object[0]);
                    k7Var.setOpenTelemetryMode(e7.AGENTLESS);
                } else if (uVar.c("io.sentry.opentelemetry.agent.AgentlessSpringMarker", i2.e())) {
                    k7Var.getLogger().c(SentryLevel.DEBUG, "openTelemetryMode has been inferred from AUTO to AGENTLESS_SPRING", new Object[0]);
                    k7Var.setOpenTelemetryMode(e7.AGENTLESS_SPRING);
                }
            }
        }
    }
}
