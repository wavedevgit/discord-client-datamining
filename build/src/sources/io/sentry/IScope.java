package io.sentry;

import io.sentry.z3;
import java.util.List;
import java.util.Map;
import java.util.Queue;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface IScope {
    void A(e1 e1Var);

    List B();

    io.sentry.protocol.h0 C();

    String D();

    void E();

    io.sentry.featureflags.b F();

    void G(y0 y0Var);

    void H(String str);

    z7 I();

    io.sentry.protocol.x J();

    s3 K();

    void L(String str);

    y0 M();

    List N();

    void O(SentryEvent sentryEvent);

    void P();

    s3 Q(z3.a aVar);

    void R(z3.c cVar);

    void S(io.sentry.protocol.x xVar);

    List T();

    void U(s3 s3Var);

    void a(String str, String str2);

    k7 b();

    io.sentry.protocol.o c();

    void clear();

    IScope clone();

    void e(Breadcrumb breadcrumb);

    void f(String str, String str2);

    void g(Breadcrumb breadcrumb, Hint hint);

    Map getExtras();

    String h();

    void i(Throwable th2, ISpan iSpan, String str);

    void j(io.sentry.protocol.h0 h0Var);

    e1 k();

    z7 l();

    SentryLevel m();

    io.sentry.protocol.g n();

    void o(io.sentry.protocol.x xVar);

    z3.d p();

    void q(k7 k7Var);

    ISpan r();

    Queue s();

    void t(List list);

    z7 u(z3.b bVar);

    Map v();

    void w();

    List x();

    io.sentry.protocol.c y();

    void z(String str, Object obj);
}
