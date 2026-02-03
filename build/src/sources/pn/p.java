package pn;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final n f46298a;

    public p(n nVar) {
        this.f46298a = nVar;
    }

    public static p a(n nVar) {
        return new p(nVar);
    }

    public static MutableSharedFlow c(n nVar) {
        return (MutableSharedFlow) wq.g.d(nVar.b());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public MutableSharedFlow get() {
        return c(this.f46298a);
    }
}
