package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h2 implements p0 {

    /* renamed from: b  reason: collision with root package name */
    private static final h2 f29592b = new h2();

    /* renamed from: a  reason: collision with root package name */
    private final k7 f29593a = k7.empty();

    private h2() {
    }

    public static h2 h() {
        return f29592b;
    }

    @Override // io.sentry.w0
    public Boolean A() {
        return null;
    }

    @Override // io.sentry.w0
    public IScope B() {
        return n2.V();
    }

    @Override // io.sentry.w0
    public void C(b4 b4Var) {
        b4Var.a(n2.V());
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x E(Throwable th2, Hint hint) {
        return io.sentry.protocol.x.f30052e;
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x G(io.sentry.protocol.d0 d0Var, q8 q8Var, Hint hint, q3 q3Var) {
        return io.sentry.protocol.x.f30052e;
    }

    @Override // io.sentry.w0
    public w0 H(String str) {
        return p2.I();
    }

    @Override // io.sentry.w0
    public void a(String str, String str2) {
    }

    @Override // io.sentry.w0
    public k7 b() {
        return this.f29593a;
    }

    @Override // io.sentry.w0
    public void c(boolean z10) {
    }

    @Override // io.sentry.w0
    public void d(long j10) {
    }

    @Override // io.sentry.w0
    public void e(Breadcrumb breadcrumb) {
    }

    @Override // io.sentry.w0
    public boolean f() {
        return true;
    }

    @Override // io.sentry.w0
    public void g(Breadcrumb breadcrumb, Hint hint) {
    }

    @Override // io.sentry.w0
    public void i(Throwable th2, ISpan iSpan, String str) {
    }

    @Override // io.sentry.w0
    public boolean isEnabled() {
        return false;
    }

    @Override // io.sentry.w0
    public io.sentry.transport.a0 j() {
        return null;
    }

    @Override // io.sentry.w0
    public e1 k() {
        return null;
    }

    @Override // io.sentry.w0
    public void l() {
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x m(l5 l5Var, Hint hint) {
        return io.sentry.protocol.x.f30052e;
    }

    @Override // io.sentry.w0
    public a1 makeCurrent() {
        return q2.a();
    }

    @Override // io.sentry.w0
    public void p() {
    }

    @Override // io.sentry.w0
    public boolean q() {
        return true;
    }

    @Override // io.sentry.w0
    public void r(d4 d4Var, b4 b4Var) {
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x s(l7 l7Var, Hint hint) {
        return io.sentry.protocol.x.f30052e;
    }

    @Override // io.sentry.w0
    public IScope t() {
        return n2.V();
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x u(String str, SentryLevel sentryLevel) {
        return io.sentry.protocol.x.f30052e;
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x v(m3 m3Var) {
        return io.sentry.protocol.x.f30052e;
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x x(SentryEvent sentryEvent, Hint hint) {
        return io.sentry.protocol.x.f30052e;
    }

    @Override // io.sentry.w0
    public e1 z(t8 t8Var, v8 v8Var) {
        return a3.u();
    }

    @Override // io.sentry.w0
    /* renamed from: clone */
    public p0 m1185clone() {
        return f29592b;
    }
}
