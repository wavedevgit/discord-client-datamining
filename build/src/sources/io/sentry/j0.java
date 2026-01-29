package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 implements p0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f30074a;

    public j0(w0 w0Var) {
        this.f30074a = w0Var;
    }

    @Override // io.sentry.w0
    public Boolean A() {
        return this.f30074a.A();
    }

    @Override // io.sentry.w0
    public IScope B() {
        return this.f30074a.B();
    }

    @Override // io.sentry.w0
    public void C(b4 b4Var) {
        this.f30074a.C(b4Var);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x E(Throwable th2, Hint hint) {
        return this.f30074a.E(th2, hint);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x G(io.sentry.protocol.d0 d0Var, q8 q8Var, Hint hint, q3 q3Var) {
        return this.f30074a.G(d0Var, q8Var, hint, q3Var);
    }

    @Override // io.sentry.w0
    public w0 H(String str) {
        return this.f30074a.H(str);
    }

    @Override // io.sentry.w0
    public void a(String str, String str2) {
        this.f30074a.a(str, str2);
    }

    @Override // io.sentry.w0
    public k7 b() {
        return this.f30074a.b();
    }

    @Override // io.sentry.w0
    public void c(boolean z10) {
        this.f30074a.c(z10);
    }

    @Override // io.sentry.w0
    public void d(long j10) {
        this.f30074a.d(j10);
    }

    @Override // io.sentry.w0
    public void e(Breadcrumb breadcrumb) {
        this.f30074a.e(breadcrumb);
    }

    @Override // io.sentry.w0
    public boolean f() {
        return this.f30074a.f();
    }

    @Override // io.sentry.w0
    public void g(Breadcrumb breadcrumb, Hint hint) {
        this.f30074a.g(breadcrumb, hint);
    }

    @Override // io.sentry.w0
    public void i(Throwable th2, ISpan iSpan, String str) {
        this.f30074a.i(th2, iSpan, str);
    }

    @Override // io.sentry.w0
    public boolean isEnabled() {
        return this.f30074a.isEnabled();
    }

    @Override // io.sentry.w0
    public io.sentry.transport.a0 j() {
        return this.f30074a.j();
    }

    @Override // io.sentry.w0
    public e1 k() {
        return this.f30074a.k();
    }

    @Override // io.sentry.w0
    public void l() {
        this.f30074a.l();
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x m(l5 l5Var, Hint hint) {
        return this.f30074a.m(l5Var, hint);
    }

    @Override // io.sentry.w0
    public a1 makeCurrent() {
        return this.f30074a.makeCurrent();
    }

    @Override // io.sentry.w0
    public void p() {
        this.f30074a.p();
    }

    @Override // io.sentry.w0
    public void r(d4 d4Var, b4 b4Var) {
        this.f30074a.r(d4Var, b4Var);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x s(l7 l7Var, Hint hint) {
        return this.f30074a.s(l7Var, hint);
    }

    @Override // io.sentry.w0
    public IScope t() {
        return b5.w();
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x u(String str, SentryLevel sentryLevel) {
        return this.f30074a.u(str, sentryLevel);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x v(m3 m3Var) {
        return this.f30074a.v(m3Var);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x x(SentryEvent sentryEvent, Hint hint) {
        return this.f30074a.x(sentryEvent, hint);
    }

    @Override // io.sentry.w0
    public e1 z(t8 t8Var, v8 v8Var) {
        return this.f30074a.z(t8Var, v8Var);
    }

    @Override // io.sentry.w0
    /* renamed from: clone */
    public p0 m1183clone() {
        return this.f30074a.clone();
    }
}
