package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface ISpan {
    l8 a();

    Boolean c();

    void d();

    void e(String str);

    ISpan g(String str);

    String getDescription();

    void h(String str, Number number);

    q8 i();

    boolean isFinished();

    void j(String str, Object obj);

    void k(l8 l8Var);

    ISpan l(String str, String str2, j5 j5Var, j1 j1Var);

    void m(String str, Number number, a2 a2Var);

    a1 makeCurrent();

    ISpan o(String str, String str2, j5 j5Var, j1 j1Var, k8 k8Var);

    e8 q();

    j5 r();

    void s(l8 l8Var, j5 j5Var);

    j5 t();
}
