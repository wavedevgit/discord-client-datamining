package nn;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g0 implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f41975a;

    public g0(uq.h hVar) {
        this.f41975a = hVar;
    }

    public static g0 a(uq.h hVar) {
        return new g0(hVar);
    }

    public static f0 c(MutableSharedFlow mutableSharedFlow) {
        return new f0(mutableSharedFlow);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public f0 get() {
        return c((MutableSharedFlow) this.f41975a.get());
    }
}
