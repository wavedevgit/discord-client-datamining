package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a3 implements e1 {

    /* renamed from: a  reason: collision with root package name */
    private static final a3 f28671a = new a3();

    private a3() {
    }

    public static a3 u() {
        return f28671a;
    }

    @Override // io.sentry.ISpan
    public l8 a() {
        return null;
    }

    @Override // io.sentry.e1
    public void b(l8 l8Var, boolean z10, Hint hint) {
    }

    @Override // io.sentry.ISpan
    public Boolean c() {
        return null;
    }

    @Override // io.sentry.ISpan
    public void d() {
    }

    @Override // io.sentry.ISpan
    public void e(String str) {
    }

    @Override // io.sentry.e1
    public io.sentry.protocol.x f() {
        return io.sentry.protocol.x.f30413e;
    }

    @Override // io.sentry.ISpan
    public ISpan g(String str) {
        return y2.u();
    }

    @Override // io.sentry.ISpan
    public String getDescription() {
        return null;
    }

    @Override // io.sentry.e1
    public String getName() {
        return "";
    }

    @Override // io.sentry.ISpan
    public void h(String str, Number number) {
    }

    @Override // io.sentry.ISpan
    public q8 i() {
        return new q8(io.sentry.protocol.x.f30413e, "");
    }

    @Override // io.sentry.ISpan
    public boolean isFinished() {
        return true;
    }

    @Override // io.sentry.ISpan
    public void j(String str, Object obj) {
    }

    @Override // io.sentry.ISpan
    public void k(l8 l8Var) {
    }

    @Override // io.sentry.ISpan
    public ISpan l(String str, String str2, j5 j5Var, j1 j1Var) {
        return y2.u();
    }

    @Override // io.sentry.ISpan
    public void m(String str, Number number, a2 a2Var) {
    }

    @Override // io.sentry.ISpan
    public a1 makeCurrent() {
        return q2.a();
    }

    @Override // io.sentry.e1
    public ISpan n() {
        return null;
    }

    @Override // io.sentry.ISpan
    public ISpan o(String str, String str2, j5 j5Var, j1 j1Var, k8 k8Var) {
        return y2.u();
    }

    @Override // io.sentry.e1
    public void p() {
    }

    @Override // io.sentry.ISpan
    public e8 q() {
        return new e8(io.sentry.protocol.x.f30413e, j8.f30027e, "op", null, null);
    }

    @Override // io.sentry.ISpan
    public j5 r() {
        return new c7();
    }

    @Override // io.sentry.ISpan
    public void s(l8 l8Var, j5 j5Var) {
    }

    @Override // io.sentry.ISpan
    public j5 t() {
        return new c7();
    }
}
