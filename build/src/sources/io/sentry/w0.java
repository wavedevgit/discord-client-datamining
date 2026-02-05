package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface w0 {
    e1 A(t8 t8Var, v8 v8Var);

    Boolean B();

    IScope C();

    void D(b4 b4Var);

    default io.sentry.protocol.x E(Throwable th2) {
        return F(th2, new Hint());
    }

    io.sentry.protocol.x F(Throwable th2, Hint hint);

    default e1 G(String str, String str2, v8 v8Var) {
        return A(new t8(str, str2), v8Var);
    }

    io.sentry.protocol.x H(io.sentry.protocol.d0 d0Var, q8 q8Var, Hint hint, q3 q3Var);

    w0 I(String str);

    void a(String str, String str2);

    k7 b();

    void c(boolean z10);

    p0 clone();

    void d(long j10);

    void e(Breadcrumb breadcrumb);

    boolean g();

    void i(Breadcrumb breadcrumb, Hint hint);

    boolean isEnabled();

    io.sentry.transport.a0 j();

    void k(Throwable th2, ISpan iSpan, String str);

    io.sentry.protocol.x l(l5 l5Var, Hint hint);

    e1 m();

    a1 makeCurrent();

    void n();

    default io.sentry.protocol.x o(io.sentry.protocol.d0 d0Var, q8 q8Var, Hint hint) {
        return H(d0Var, q8Var, hint, null);
    }

    default void p(b4 b4Var) {
        s(null, b4Var);
    }

    default boolean q() {
        return false;
    }

    void r();

    void s(d4 d4Var, b4 b4Var);

    io.sentry.protocol.x t(l7 l7Var, Hint hint);

    IScope u();

    io.sentry.protocol.x v(String str, SentryLevel sentryLevel);

    io.sentry.protocol.x w(m3 m3Var);

    default io.sentry.protocol.x x(l5 l5Var) {
        return l(l5Var, new Hint());
    }

    io.sentry.protocol.x y(SentryEvent sentryEvent, Hint hint);

    default e1 z(String str, String str2) {
        return G(str, str2, new v8());
    }
}
