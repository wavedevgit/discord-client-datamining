package fo;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f24158a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f24159b;

    public x0(lr.h hVar, lr.h hVar2) {
        this.f24158a = hVar;
        this.f24159b = hVar2;
    }

    public static x0 a(lr.h hVar, lr.h hVar2) {
        return new x0(hVar, hVar2);
    }

    public static w0 c(a1 a1Var, MutableSharedFlow mutableSharedFlow) {
        return new w0(a1Var, mutableSharedFlow);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public w0 get() {
        return c((a1) this.f24158a.get(), (MutableSharedFlow) this.f24159b.get());
    }
}
