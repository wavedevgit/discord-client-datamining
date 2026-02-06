package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b0 {
    default l7 a(l7 l7Var, Hint hint) {
        return l7Var;
    }

    SentryEvent g(SentryEvent sentryEvent, Hint hint);

    default io.sentry.protocol.d0 k(io.sentry.protocol.d0 d0Var, Hint hint) {
        return d0Var;
    }
}
