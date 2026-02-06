package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface w0 {
    Boolean A();

    IScope B();

    void C(b4 b4Var);

    default io.sentry.protocol.x D(Throwable th2) {
        return E(th2, new Hint());
    }

    io.sentry.protocol.x E(Throwable th2, Hint hint);

    default e1 F(String str, String str2, v8 v8Var) {
        return z(new t8(str, str2), v8Var);
    }

    io.sentry.protocol.x G(io.sentry.protocol.d0 d0Var, q8 q8Var, Hint hint, q3 q3Var);

    w0 H(String str);

    void a(String str, String str2);

    k7 b();

    void c(boolean z10);

    p0 clone();

    void d(long j10);

    void e(Breadcrumb breadcrumb);

    boolean f();

    void h(Breadcrumb breadcrumb, Hint hint);

    io.sentry.transport.a0 i();

    boolean isEnabled();

    void j(Throwable th2, ISpan iSpan, String str);

    io.sentry.protocol.x k(l5 l5Var, Hint hint);

    e1 l();

    void m();

    a1 makeCurrent();

    default io.sentry.protocol.x n(io.sentry.protocol.d0 d0Var, q8 q8Var, Hint hint) {
        return G(d0Var, q8Var, hint, null);
    }

    default void o(b4 b4Var) {
        r(null, b4Var);
    }

    default boolean p() {
        return false;
    }

    void q();

    void r(d4 d4Var, b4 b4Var);

    io.sentry.protocol.x s(l7 l7Var, Hint hint);

    IScope t();

    io.sentry.protocol.x u(String str, SentryLevel sentryLevel);

    io.sentry.protocol.x v(m3 m3Var);

    default io.sentry.protocol.x w(l5 l5Var) {
        return k(l5Var, new Hint());
    }

    io.sentry.protocol.x x(SentryEvent sentryEvent, Hint hint);

    default e1 y(String str, String str2) {
        return F(str, str2, new v8());
    }

    e1 z(t8 t8Var, v8 v8Var);
}
