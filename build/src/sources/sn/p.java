package sn;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final n f49914a;

    public p(n nVar) {
        this.f49914a = nVar;
    }

    public static p a(n nVar) {
        return new p(nVar);
    }

    public static MutableSharedFlow c(n nVar) {
        return (MutableSharedFlow) zq.g.d(nVar.b());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public MutableSharedFlow get() {
        return c(this.f49914a);
    }
}
