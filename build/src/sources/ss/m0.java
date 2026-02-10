package ss;

import java.util.concurrent.atomic.AtomicReference;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 extends ts.d {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReference f50182a = new AtomicReference(null);

    @Override // ts.d
    /* renamed from: d */
    public boolean a(k0 k0Var) {
        us.e0 e0Var;
        if (us.d.a(this.f50182a) != null) {
            return false;
        }
        AtomicReference atomicReference = this.f50182a;
        e0Var = l0.f50179a;
        us.d.b(atomicReference, e0Var);
        return true;
    }

    public final Object e(Continuation continuation) {
        us.e0 e0Var;
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(xr.b.c(continuation), 1);
        eVar.H();
        AtomicReference atomicReference = this.f50182a;
        e0Var = l0.f50179a;
        if (!p0.d.a(atomicReference, e0Var, eVar)) {
            Result.a aVar = Result.f31762e;
            eVar.resumeWith(Result.b(Unit.f31765a));
        }
        Object B = eVar.B();
        if (B == xr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == xr.b.f()) {
            return B;
        }
        return Unit.f31765a;
    }

    @Override // ts.d
    /* renamed from: f */
    public Continuation[] b(k0 k0Var) {
        us.d.b(this.f50182a, null);
        return ts.c.f50917a;
    }

    public final void g() {
        us.e0 e0Var;
        us.e0 e0Var2;
        us.e0 e0Var3;
        us.e0 e0Var4;
        AtomicReference atomicReference = this.f50182a;
        while (true) {
            Object a10 = us.d.a(atomicReference);
            if (a10 != null) {
                e0Var = l0.f50180b;
                if (a10 != e0Var) {
                    e0Var2 = l0.f50179a;
                    if (a10 == e0Var2) {
                        AtomicReference atomicReference2 = this.f50182a;
                        e0Var3 = l0.f50180b;
                        if (p0.d.a(atomicReference2, a10, e0Var3)) {
                            return;
                        }
                    } else {
                        AtomicReference atomicReference3 = this.f50182a;
                        e0Var4 = l0.f50179a;
                        if (p0.d.a(atomicReference3, a10, e0Var4)) {
                            Result.a aVar = Result.f31762e;
                            ((kotlinx.coroutines.e) a10).resumeWith(Result.b(Unit.f31765a));
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
        us.e0 e0Var;
        us.e0 e0Var2;
        AtomicReference atomicReference = this.f50182a;
        e0Var = l0.f50179a;
        Object andSet = atomicReference.getAndSet(e0Var);
        Intrinsics.checkNotNull(andSet);
        e0Var2 = l0.f50180b;
        if (andSet == e0Var2) {
            return true;
        }
        return false;
    }
}
