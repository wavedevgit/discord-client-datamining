package mn;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f39341a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f39342b;

    public x0(tq.h hVar, tq.h hVar2) {
        this.f39341a = hVar;
        this.f39342b = hVar2;
    }

    public static x0 a(tq.h hVar, tq.h hVar2) {
        return new x0(hVar, hVar2);
    }

    public static w0 c(a1 a1Var, MutableSharedFlow mutableSharedFlow) {
        return new w0(a1Var, mutableSharedFlow);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public w0 get() {
        return c((a1) this.f39341a.get(), (MutableSharedFlow) this.f39342b.get());
    }
}
