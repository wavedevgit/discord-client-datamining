package mn;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g0 implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f39232a;

    public g0(tq.h hVar) {
        this.f39232a = hVar;
    }

    public static g0 a(tq.h hVar) {
        return new g0(hVar);
    }

    public static f0 c(MutableSharedFlow mutableSharedFlow) {
        return new f0(mutableSharedFlow);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public f0 get() {
        return c((MutableSharedFlow) this.f39232a.get());
    }
}
