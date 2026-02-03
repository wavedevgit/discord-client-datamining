package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 implements p0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f29656a;

    public j0(w0 w0Var) {
        this.f29656a = w0Var;
    }

    @Override // io.sentry.w0
    public Boolean A() {
        return this.f29656a.A();
    }

    @Override // io.sentry.w0
    public IScope B() {
        return this.f29656a.B();
    }

    @Override // io.sentry.w0
    public void C(b4 b4Var) {
        this.f29656a.C(b4Var);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x E(Throwable th2, Hint hint) {
        return this.f29656a.E(th2, hint);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x G(io.sentry.protocol.d0 d0Var, q8 q8Var, Hint hint, q3 q3Var) {
        return this.f29656a.G(d0Var, q8Var, hint, q3Var);
    }

    @Override // io.sentry.w0
    public w0 H(String str) {
        return this.f29656a.H(str);
    }

    @Override // io.sentry.w0
    public void a(String str, String str2) {
        this.f29656a.a(str, str2);
    }

    @Override // io.sentry.w0
    public k7 b() {
        return this.f29656a.b();
    }

    @Override // io.sentry.w0
    public void c(boolean z10) {
        this.f29656a.c(z10);
    }

    @Override // io.sentry.w0
    public void d(long j10) {
        this.f29656a.d(j10);
    }

    @Override // io.sentry.w0
    public void e(Breadcrumb breadcrumb) {
        this.f29656a.e(breadcrumb);
    }

    @Override // io.sentry.w0
    public boolean f() {
        return this.f29656a.f();
    }

    @Override // io.sentry.w0
    public void g(Breadcrumb breadcrumb, Hint hint) {
        this.f29656a.g(breadcrumb, hint);
    }

    @Override // io.sentry.w0
    public void i(Throwable th2, ISpan iSpan, String str) {
        this.f29656a.i(th2, iSpan, str);
    }

    @Override // io.sentry.w0
    public boolean isEnabled() {
        return this.f29656a.isEnabled();
    }

    @Override // io.sentry.w0
    public io.sentry.transport.a0 j() {
        return this.f29656a.j();
    }

    @Override // io.sentry.w0
    public e1 k() {
        return this.f29656a.k();
    }

    @Override // io.sentry.w0
    public void l() {
        this.f29656a.l();
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x m(l5 l5Var, Hint hint) {
        return this.f29656a.m(l5Var, hint);
    }

    @Override // io.sentry.w0
    public a1 makeCurrent() {
        return this.f29656a.makeCurrent();
    }

    @Override // io.sentry.w0
    public void p() {
        this.f29656a.p();
    }

    @Override // io.sentry.w0
    public void r(d4 d4Var, b4 b4Var) {
        this.f29656a.r(d4Var, b4Var);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x s(l7 l7Var, Hint hint) {
        return this.f29656a.s(l7Var, hint);
    }

    @Override // io.sentry.w0
    public IScope t() {
        return b5.w();
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x u(String str, SentryLevel sentryLevel) {
        return this.f29656a.u(str, sentryLevel);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x v(m3 m3Var) {
        return this.f29656a.v(m3Var);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x x(SentryEvent sentryEvent, Hint hint) {
        return this.f29656a.x(sentryEvent, hint);
    }

    @Override // io.sentry.w0
    public e1 z(t8 t8Var, v8 v8Var) {
        return this.f29656a.z(t8Var, v8Var);
    }

    @Override // io.sentry.w0
    /* renamed from: clone */
    public p0 m1186clone() {
        return this.f29656a.clone();
    }
}
