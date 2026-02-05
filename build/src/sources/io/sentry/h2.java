package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h2 implements p0 {

    /* renamed from: b  reason: collision with root package name */
    private static final h2 f29011b = new h2();

    /* renamed from: a  reason: collision with root package name */
    private final k7 f29012a = k7.empty();

    private h2() {
    }

    public static h2 f() {
        return f29011b;
    }

    @Override // io.sentry.w0
    public e1 A(t8 t8Var, v8 v8Var) {
        return a3.u();
    }

    @Override // io.sentry.w0
    public Boolean B() {
        return null;
    }

    @Override // io.sentry.w0
    public IScope C() {
        return n2.g();
    }

    @Override // io.sentry.w0
    public void D(b4 b4Var) {
        b4Var.a(n2.g());
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x F(Throwable th2, Hint hint) {
        return io.sentry.protocol.x.f29471e;
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x H(io.sentry.protocol.d0 d0Var, q8 q8Var, Hint hint, q3 q3Var) {
        return io.sentry.protocol.x.f29471e;
    }

    @Override // io.sentry.w0
    public w0 I(String str) {
        return p2.h();
    }

    @Override // io.sentry.w0
    public void a(String str, String str2) {
    }

    @Override // io.sentry.w0
    public k7 b() {
        return this.f29012a;
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
    public boolean g() {
        return true;
    }

    @Override // io.sentry.w0
    public void i(Breadcrumb breadcrumb, Hint hint) {
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
    public void k(Throwable th2, ISpan iSpan, String str) {
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x l(l5 l5Var, Hint hint) {
        return io.sentry.protocol.x.f29471e;
    }

    @Override // io.sentry.w0
    public e1 m() {
        return null;
    }

    @Override // io.sentry.w0
    public a1 makeCurrent() {
        return q2.a();
    }

    @Override // io.sentry.w0
    public void n() {
    }

    @Override // io.sentry.w0
    public boolean q() {
        return true;
    }

    @Override // io.sentry.w0
    public void r() {
    }

    @Override // io.sentry.w0
    public void s(d4 d4Var, b4 b4Var) {
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x t(l7 l7Var, Hint hint) {
        return io.sentry.protocol.x.f29471e;
    }

    @Override // io.sentry.w0
    public IScope u() {
        return n2.g();
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x v(String str, SentryLevel sentryLevel) {
        return io.sentry.protocol.x.f29471e;
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x w(m3 m3Var) {
        return io.sentry.protocol.x.f29471e;
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x y(SentryEvent sentryEvent, Hint hint) {
        return io.sentry.protocol.x.f29471e;
    }

    @Override // io.sentry.w0
    /* renamed from: clone */
    public p0 m1186clone() {
        return f29011b;
    }
}
