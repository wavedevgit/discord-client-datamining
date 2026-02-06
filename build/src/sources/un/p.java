package un;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final n f51760a;

    public p(n nVar) {
        this.f51760a = nVar;
    }

    public static p a(n nVar) {
        return new p(nVar);
    }

    public static MutableSharedFlow c(n nVar) {
        return (MutableSharedFlow) br.g.d(nVar.b());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public MutableSharedFlow get() {
        return c(this.f51760a);
    }
}
