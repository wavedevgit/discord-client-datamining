package sn;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f50008a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f50009b;

    public x0(zq.h hVar, zq.h hVar2) {
        this.f50008a = hVar;
        this.f50009b = hVar2;
    }

    public static x0 a(zq.h hVar, zq.h hVar2) {
        return new x0(hVar, hVar2);
    }

    public static w0 c(a1 a1Var, MutableSharedFlow mutableSharedFlow) {
        return new w0(a1Var, mutableSharedFlow);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public w0 get() {
        return c((a1) this.f50008a.get(), (MutableSharedFlow) this.f50009b.get());
    }
}
