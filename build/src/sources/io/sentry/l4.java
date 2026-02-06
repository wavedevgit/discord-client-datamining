package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l4 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private static final l4 f28277a = new l4();

    private l4() {
    }

    public static l4 g() {
        return f28277a;
    }

    @Override // io.sentry.w0
    public Boolean A() {
        return b5.H();
    }

    @Override // io.sentry.w0
    public IScope B() {
        return b5.v().B();
    }

    @Override // io.sentry.w0
    public void C(b4 b4Var) {
        b5.T(b4Var);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x E(Throwable th2, Hint hint) {
        return b5.m(th2, hint);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x G(io.sentry.protocol.d0 d0Var, q8 q8Var, Hint hint, q3 q3Var) {
        return b5.v().G(d0Var, q8Var, hint, q3Var);
    }

    @Override // io.sentry.w0
    public w0 H(String str) {
        return b5.u(str);
    }

    @Override // io.sentry.w0
    public void a(String str, String str2) {
        b5.P(str, str2);
    }

    @Override // io.sentry.w0
    public k7 b() {
        return b5.v().b();
    }

    @Override // io.sentry.w0
    public void c(boolean z10) {
        b5.o();
    }

    @Override // io.sentry.w0
    public void d(long j10) {
        b5.t(j10);
    }

    @Override // io.sentry.w0
    public void e(Breadcrumb breadcrumb) {
        h(breadcrumb, new Hint());
    }

    @Override // io.sentry.w0
    public boolean f() {
        return b5.J();
    }

    @Override // io.sentry.w0
    public void h(Breadcrumb breadcrumb, Hint hint) {
        b5.i(breadcrumb, hint);
    }

    @Override // io.sentry.w0
    public io.sentry.transport.a0 i() {
        return b5.v().i();
    }

    @Override // io.sentry.w0
    public boolean isEnabled() {
        return b5.I();
    }

    @Override // io.sentry.w0
    public void j(Throwable th2, ISpan iSpan, String str) {
        b5.v().j(th2, iSpan, str);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x k(l5 l5Var, Hint hint) {
        return b5.v().k(l5Var, hint);
    }

    @Override // io.sentry.w0
    public e1 l() {
        return b5.v().l();
    }

    @Override // io.sentry.w0
    public void m() {
        b5.r();
    }

    @Override // io.sentry.w0
    public a1 makeCurrent() {
        return q2.a();
    }

    @Override // io.sentry.w0
    public void q() {
        b5.Q();
    }

    @Override // io.sentry.w0
    public void r(d4 d4Var, b4 b4Var) {
        b5.q(d4Var, b4Var);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x s(l7 l7Var, Hint hint) {
        return b5.v().s(l7Var, hint);
    }

    @Override // io.sentry.w0
    public IScope t() {
        return b5.w();
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x u(String str, SentryLevel sentryLevel) {
        return b5.n(str, sentryLevel);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x v(m3 m3Var) {
        return b5.v().v(m3Var);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x x(SentryEvent sentryEvent, Hint hint) {
        return b5.k(sentryEvent, hint);
    }

    @Override // io.sentry.w0
    public e1 z(t8 t8Var, v8 v8Var) {
        return b5.R(t8Var, v8Var);
    }

    @Override // io.sentry.w0
    /* renamed from: clone */
    public p0 m1189clone() {
        return b5.v().clone();
    }
}
