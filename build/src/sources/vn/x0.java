package vn;

import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f52762a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f52763b;

    public x0(cr.h hVar, cr.h hVar2) {
        this.f52762a = hVar;
        this.f52763b = hVar2;
    }

    public static x0 a(cr.h hVar, cr.h hVar2) {
        return new x0(hVar, hVar2);
    }

    public static w0 c(a1 a1Var, MutableSharedFlow mutableSharedFlow) {
        return new w0(a1Var, mutableSharedFlow);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public w0 get() {
        return c((a1) this.f52762a.get(), (MutableSharedFlow) this.f52763b.get());
    }
}
