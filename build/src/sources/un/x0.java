package un;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f51902a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f51903b;

    public x0(br.h hVar, br.h hVar2) {
        this.f51902a = hVar;
        this.f51903b = hVar2;
    }

    public static x0 a(br.h hVar, br.h hVar2) {
        return new x0(hVar, hVar2);
    }

    public static w0 c(a1 a1Var, MutableSharedFlow mutableSharedFlow) {
        return new w0(a1Var, mutableSharedFlow);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public w0 get() {
        return c((a1) this.f51902a.get(), (MutableSharedFlow) this.f51903b.get());
    }
}
