package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface y0 {
    io.sentry.protocol.x a(l7 l7Var, IScope iScope, Hint hint);

    io.sentry.protocol.x b(io.sentry.protocol.d0 d0Var, q8 q8Var, IScope iScope, Hint hint, q3 q3Var);

    void c(boolean z10);

    void d(long j10);

    default io.sentry.protocol.x e(SentryEvent sentryEvent, IScope iScope) {
        return l(sentryEvent, iScope, null);
    }

    default boolean f() {
        return true;
    }

    void g(z7 z7Var, Hint hint);

    void h(z6 z6Var);

    default io.sentry.protocol.x i(String str, SentryLevel sentryLevel, IScope iScope) {
        SentryEvent sentryEvent = new SentryEvent();
        io.sentry.protocol.m mVar = new io.sentry.protocol.m();
        mVar.f(str);
        sentryEvent.F0(mVar);
        sentryEvent.E0(sentryLevel);
        return e(sentryEvent, iScope);
    }

    boolean isEnabled();

    io.sentry.transport.a0 j();

    io.sentry.protocol.x k(m3 m3Var, IScope iScope);

    io.sentry.protocol.x l(SentryEvent sentryEvent, IScope iScope, Hint hint);

    io.sentry.protocol.x m(l5 l5Var, Hint hint);
}
