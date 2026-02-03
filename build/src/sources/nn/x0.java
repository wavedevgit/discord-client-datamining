package nn;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f42100a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f42101b;

    public x0(uq.h hVar, uq.h hVar2) {
        this.f42100a = hVar;
        this.f42101b = hVar2;
    }

    public static x0 a(uq.h hVar, uq.h hVar2) {
        return new x0(hVar, hVar2);
    }

    public static w0 c(a1 a1Var, MutableSharedFlow mutableSharedFlow) {
        return new w0(a1Var, mutableSharedFlow);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public w0 get() {
        return c((a1) this.f42100a.get(), (MutableSharedFlow) this.f42101b.get());
    }
}
