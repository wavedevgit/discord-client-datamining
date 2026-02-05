package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 implements p0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f29075a;

    public j0(w0 w0Var) {
        this.f29075a = w0Var;
    }

    @Override // io.sentry.w0
    public e1 A(t8 t8Var, v8 v8Var) {
        return this.f29075a.A(t8Var, v8Var);
    }

    @Override // io.sentry.w0
    public Boolean B() {
        return this.f29075a.B();
    }

    @Override // io.sentry.w0
    public IScope C() {
        return this.f29075a.C();
    }

    @Override // io.sentry.w0
    public void D(b4 b4Var) {
        this.f29075a.D(b4Var);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x F(Throwable th2, Hint hint) {
        return this.f29075a.F(th2, hint);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x H(io.sentry.protocol.d0 d0Var, q8 q8Var, Hint hint, q3 q3Var) {
        return this.f29075a.H(d0Var, q8Var, hint, q3Var);
    }

    @Override // io.sentry.w0
    public w0 I(String str) {
        return this.f29075a.I(str);
    }

    @Override // io.sentry.w0
    public void a(String str, String str2) {
        this.f29075a.a(str, str2);
    }

    @Override // io.sentry.w0
    public k7 b() {
        return this.f29075a.b();
    }

    @Override // io.sentry.w0
    public void c(boolean z10) {
        this.f29075a.c(z10);
    }

    @Override // io.sentry.w0
    public void d(long j10) {
        this.f29075a.d(j10);
    }

    @Override // io.sentry.w0
    public void e(Breadcrumb breadcrumb) {
        this.f29075a.e(breadcrumb);
    }

    @Override // io.sentry.w0
    public boolean g() {
        return this.f29075a.g();
    }

    @Override // io.sentry.w0
    public void i(Breadcrumb breadcrumb, Hint hint) {
        this.f29075a.i(breadcrumb, hint);
    }

    @Override // io.sentry.w0
    public boolean isEnabled() {
        return this.f29075a.isEnabled();
    }

    @Override // io.sentry.w0
    public io.sentry.transport.a0 j() {
        return this.f29075a.j();
    }

    @Override // io.sentry.w0
    public void k(Throwable th2, ISpan iSpan, String str) {
        this.f29075a.k(th2, iSpan, str);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x l(l5 l5Var, Hint hint) {
        return this.f29075a.l(l5Var, hint);
    }

    @Override // io.sentry.w0
    public e1 m() {
        return this.f29075a.m();
    }

    @Override // io.sentry.w0
    public a1 makeCurrent() {
        return this.f29075a.makeCurrent();
    }

    @Override // io.sentry.w0
    public void n() {
        this.f29075a.n();
    }

    @Override // io.sentry.w0
    public void r() {
        this.f29075a.r();
    }

    @Override // io.sentry.w0
    public void s(d4 d4Var, b4 b4Var) {
        this.f29075a.s(d4Var, b4Var);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x t(l7 l7Var, Hint hint) {
        return this.f29075a.t(l7Var, hint);
    }

    @Override // io.sentry.w0
    public IScope u() {
        return b5.w();
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x v(String str, SentryLevel sentryLevel) {
        return this.f29075a.v(str, sentryLevel);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x w(m3 m3Var) {
        return this.f29075a.w(m3Var);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x y(SentryEvent sentryEvent, Hint hint) {
        return this.f29075a.y(sentryEvent, hint);
    }

    @Override // io.sentry.w0
    /* renamed from: clone */
    public p0 m1187clone() {
        return this.f29075a.clone();
    }
}
