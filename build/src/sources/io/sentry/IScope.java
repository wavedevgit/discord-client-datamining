package io.sentry;

import io.sentry.z3;
import java.util.List;
import java.util.Map;
import java.util.Queue;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface IScope {
    io.sentry.protocol.c A();

    void B(String str, Object obj);

    void C(e1 e1Var);

    List D();

    io.sentry.protocol.h0 E();

    String F();

    void G();

    io.sentry.featureflags.b H();

    void I(y0 y0Var);

    void J(String str);

    z7 K();

    io.sentry.protocol.x L();

    s3 M();

    void N(String str);

    y0 O();

    List P();

    void Q(SentryEvent sentryEvent);

    void R();

    s3 S(z3.a aVar);

    void T(z3.c cVar);

    void U(io.sentry.protocol.x xVar);

    List V();

    void W(s3 s3Var);

    void a(String str, String str2);

    k7 b();

    io.sentry.protocol.o c();

    void clear();

    IScope clone();

    void e(Breadcrumb breadcrumb);

    void f(String str, String str2);

    Map getExtras();

    String h();

    void i(Breadcrumb breadcrumb, Hint hint);

    void k(Throwable th2, ISpan iSpan, String str);

    void l(io.sentry.protocol.h0 h0Var);

    e1 m();

    z7 n();

    SentryLevel o();

    io.sentry.protocol.g p();

    void q(io.sentry.protocol.x xVar);

    z3.d r();

    void s(k7 k7Var);

    ISpan t();

    Queue u();

    void v(List list);

    z7 w(z3.b bVar);

    Map x();

    void y();

    List z();
}
