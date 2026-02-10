package vn;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final n f52668a;

    public p(n nVar) {
        this.f52668a = nVar;
    }

    public static p a(n nVar) {
        return new p(nVar);
    }

    public static MutableSharedFlow c(n nVar) {
        return (MutableSharedFlow) cr.g.d(nVar.b());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public MutableSharedFlow get() {
        return c(this.f52668a);
    }
}
