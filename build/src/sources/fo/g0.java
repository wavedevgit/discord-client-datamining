package fo;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g0 implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f24032a;

    public g0(lr.h hVar) {
        this.f24032a = hVar;
    }

    public static g0 a(lr.h hVar) {
        return new g0(hVar);
    }

    public static f0 c(MutableSharedFlow mutableSharedFlow) {
        return new f0(mutableSharedFlow);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public f0 get() {
        return c((MutableSharedFlow) this.f24032a.get());
    }
}
