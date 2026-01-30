package io.sentry;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s2 implements y0 {

    /* renamed from: a  reason: collision with root package name */
    private static final s2 f30716a = new s2();

    private s2() {
    }

    public static s2 n() {
        return f30716a;
    }

    @Override // io.sentry.y0
    public io.sentry.protocol.x a(l7 l7Var, IScope iScope, Hint hint) {
        return io.sentry.protocol.x.f30486e;
    }

    @Override // io.sentry.y0
    public io.sentry.protocol.x b(io.sentry.protocol.d0 d0Var, q8 q8Var, IScope iScope, Hint hint, q3 q3Var) {
        return io.sentry.protocol.x.f30486e;
    }

    @Override // io.sentry.y0
    public void c(boolean z10) {
    }

    @Override // io.sentry.y0
    public void d(long j10) {
    }

    @Override // io.sentry.y0
    public void g(z7 z7Var, Hint hint) {
    }

    @Override // io.sentry.y0
    public void h(z6 z6Var) {
    }

    @Override // io.sentry.y0
    public boolean isEnabled() {
        return false;
    }

    @Override // io.sentry.y0
    public io.sentry.transport.a0 j() {
        return null;
    }

    @Override // io.sentry.y0
    public io.sentry.protocol.x k(m3 m3Var, IScope iScope) {
        return io.sentry.protocol.x.f30486e;
    }

    @Override // io.sentry.y0
    public io.sentry.protocol.x l(SentryEvent sentryEvent, IScope iScope, Hint hint) {
        return io.sentry.protocol.x.f30486e;
    }

    @Override // io.sentry.y0
    public io.sentry.protocol.x m(l5 l5Var, Hint hint) {
        return io.sentry.protocol.x.f30486e;
    }
}
