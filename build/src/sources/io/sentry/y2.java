package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y2 implements ISpan {

    /* renamed from: a  reason: collision with root package name */
    private static final y2 f30541a = new y2();

    private y2() {
    }

    public static y2 u() {
        return f30541a;
    }

    @Override // io.sentry.ISpan
    public l8 a() {
        return null;
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

    @Override // io.sentry.ISpan
    public ISpan g(String str) {
        return u();
    }

    @Override // io.sentry.ISpan
    public String getDescription() {
        return null;
    }

    @Override // io.sentry.ISpan
    public void h(String str, Number number) {
    }

    @Override // io.sentry.ISpan
    public boolean isFinished() {
        return false;
    }

    @Override // io.sentry.ISpan
    public void j(String str, Object obj) {
    }

    @Override // io.sentry.ISpan
    public void k(l8 l8Var) {
    }

    @Override // io.sentry.ISpan
    public ISpan l(String str, String str2, j5 j5Var, j1 j1Var) {
        return u();
    }

    @Override // io.sentry.ISpan
    public void m(String str, Number number, a2 a2Var) {
    }

    @Override // io.sentry.ISpan
    public e8 q() {
        return new e8(io.sentry.protocol.x.f30052e, j8.f29666e, "op", null, null);
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
