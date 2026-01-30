package js;

import java.util.concurrent.atomic.AtomicReference;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 extends ks.d {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReference f32565a = new AtomicReference(null);

    @Override // ks.d
    /* renamed from: d */
    public boolean a(k0 k0Var) {
        ls.e0 e0Var;
        if (ls.d.a(this.f32565a) != null) {
            return false;
        }
        AtomicReference atomicReference = this.f32565a;
        e0Var = l0.f32562a;
        ls.d.b(atomicReference, e0Var);
        return true;
    }

    public final Object e(Continuation continuation) {
        ls.e0 e0Var;
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(or.b.c(continuation), 1);
        eVar.H();
        AtomicReference atomicReference = this.f32565a;
        e0Var = l0.f32562a;
        if (!p0.d.a(atomicReference, e0Var, eVar)) {
            Result.a aVar = Result.f33295e;
            eVar.resumeWith(Result.b(Unit.f33298a));
        }
        Object B = eVar.B();
        if (B == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == or.b.f()) {
            return B;
        }
        return Unit.f33298a;
    }

    @Override // ks.d
    /* renamed from: f */
    public Continuation[] b(k0 k0Var) {
        ls.d.b(this.f32565a, null);
        return ks.c.f36459a;
    }

    public final void g() {
        ls.e0 e0Var;
        ls.e0 e0Var2;
        ls.e0 e0Var3;
        ls.e0 e0Var4;
        AtomicReference atomicReference = this.f32565a;
        while (true) {
            Object a10 = ls.d.a(atomicReference);
            if (a10 != null) {
                e0Var = l0.f32563b;
                if (a10 != e0Var) {
                    e0Var2 = l0.f32562a;
                    if (a10 == e0Var2) {
                        AtomicReference atomicReference2 = this.f32565a;
                        e0Var3 = l0.f32563b;
                        if (p0.d.a(atomicReference2, a10, e0Var3)) {
                            return;
                        }
                    } else {
                        AtomicReference atomicReference3 = this.f32565a;
                        e0Var4 = l0.f32562a;
                        if (p0.d.a(atomicReference3, a10, e0Var4)) {
                            Result.a aVar = Result.f33295e;
                            ((kotlinx.coroutines.e) a10).resumeWith(Result.b(Unit.f33298a));
                            return;
                        }
                    }
                } else {
                    return;
                }
            } else {
                return;
            }
        }
    }

    public final boolean h() {
        ls.e0 e0Var;
        ls.e0 e0Var2;
        AtomicReference atomicReference = this.f32565a;
        e0Var = l0.f32562a;
        Object andSet = atomicReference.getAndSet(e0Var);
        Intrinsics.checkNotNull(andSet);
        e0Var2 = l0.f32563b;
        if (andSet == e0Var2) {
            return true;
        }
        return false;
    }
}
