package nn;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final n f42031a;

    public q(n nVar) {
        this.f42031a = nVar;
    }

    public static q a(n nVar) {
        return new q(nVar);
    }

    public static MutableSharedFlow c(n nVar) {
        return (MutableSharedFlow) uq.g.d(nVar.c());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public MutableSharedFlow get() {
        return c(this.f42031a);
    }
}
