package io.sentry;

import io.sentry.z3;
import java.util.List;
import java.util.Map;
import java.util.Queue;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface IScope {
    void A(String str, Object obj);

    void B(e1 e1Var);

    List C();

    io.sentry.protocol.h0 D();

    String E();

    void F();

    io.sentry.featureflags.b G();

    void H(y0 y0Var);

    void I(String str);

    z7 J();

    io.sentry.protocol.x K();

    s3 L();

    void M(String str);

    y0 N();

    List O();

    void P(SentryEvent sentryEvent);

    void Q();

    s3 R(z3.a aVar);

    void S(z3.c cVar);

    void T(io.sentry.protocol.x xVar);

    List U();

    void V(s3 s3Var);

    void a(String str, String str2);

    k7 b();

    io.sentry.protocol.o c();

    void clear();

    IScope clone();

    void e(Breadcrumb breadcrumb);

    void f(String str, String str2);

    String g();

    Map getExtras();

    void h(Breadcrumb breadcrumb, Hint hint);

    void j(Throwable th2, ISpan iSpan, String str);

    void k(io.sentry.protocol.h0 h0Var);

    e1 l();

    z7 m();

    SentryLevel n();

    io.sentry.protocol.g o();

    void p(io.sentry.protocol.x xVar);

    z3.d q();

    void r(k7 k7Var);

    ISpan s();

    Queue t();

    void u(List list);

    z7 v(z3.b bVar);

    Map w();

    void x();

    List y();

    io.sentry.protocol.c z();
}
