package sn;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final n f49939a;

    public q(n nVar) {
        this.f49939a = nVar;
    }

    public static q a(n nVar) {
        return new q(nVar);
    }

    public static MutableSharedFlow c(n nVar) {
        return (MutableSharedFlow) zq.g.d(nVar.c());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public MutableSharedFlow get() {
        return c(this.f49939a);
    }
}
