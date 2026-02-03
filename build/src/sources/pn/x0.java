package pn;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f46392a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f46393b;

    public x0(wq.h hVar, wq.h hVar2) {
        this.f46392a = hVar;
        this.f46393b = hVar2;
    }

    public static x0 a(wq.h hVar, wq.h hVar2) {
        return new x0(hVar, hVar2);
    }

    public static w0 c(a1 a1Var, MutableSharedFlow mutableSharedFlow) {
        return new w0(a1Var, mutableSharedFlow);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public w0 get() {
        return c((a1) this.f46392a.get(), (MutableSharedFlow) this.f46393b.get());
    }
}
