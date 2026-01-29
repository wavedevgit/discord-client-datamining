package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l1 implements t0 {

    /* renamed from: a  reason: collision with root package name */
    private final Runtime f30127a = Runtime.getRuntime();

    @Override // io.sentry.t0
    public void c() {
    }

    @Override // io.sentry.t0
    public void d(k3 k3Var) {
        k3Var.f(Long.valueOf(this.f30127a.totalMemory() - this.f30127a.freeMemory()));
    }
}
