package ks;

import java.util.concurrent.atomic.AtomicReference;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 extends ls.d {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReference f36484a = new AtomicReference(null);

    @Override // ls.d
    /* renamed from: d */
    public boolean a(k0 k0Var) {
        ms.e0 e0Var;
        if (ms.d.a(this.f36484a) != null) {
            return false;
        }
        AtomicReference atomicReference = this.f36484a;
        e0Var = l0.f36481a;
        ms.d.b(atomicReference, e0Var);
        return true;
    }

    public final Object e(Continuation continuation) {
        ms.e0 e0Var;
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(pr.b.c(continuation), 1);
        eVar.H();
        AtomicReference atomicReference = this.f36484a;
        e0Var = l0.f36481a;
        if (!p0.d.a(atomicReference, e0Var, eVar)) {
            Result.a aVar = Result.f33071e;
            eVar.resumeWith(Result.b(Unit.f33074a));
        }
        Object B = eVar.B();
        if (B == pr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == pr.b.f()) {
            return B;
        }
        return Unit.f33074a;
    }

    @Override // ls.d
    /* renamed from: f */
    public Continuation[] b(k0 k0Var) {
        ms.d.b(this.f36484a, null);
        return ls.c.f37541a;
    }

    public final void g() {
        ms.e0 e0Var;
        ms.e0 e0Var2;
        ms.e0 e0Var3;
        ms.e0 e0Var4;
        AtomicReference atomicReference = this.f36484a;
        while (true) {
            Object a10 = ms.d.a(atomicReference);
            if (a10 != null) {
                e0Var = l0.f36482b;
                if (a10 != e0Var) {
                    e0Var2 = l0.f36481a;
                    if (a10 == e0Var2) {
                        AtomicReference atomicReference2 = this.f36484a;
                        e0Var3 = l0.f36482b;
                        if (p0.d.a(atomicReference2, a10, e0Var3)) {
                            return;
                        }
                    } else {
                        AtomicReference atomicReference3 = this.f36484a;
                        e0Var4 = l0.f36481a;
                        if (p0.d.a(atomicReference3, a10, e0Var4)) {
                            Result.a aVar = Result.f33071e;
                            ((kotlinx.coroutines.e) a10).resumeWith(Result.b(Unit.f33074a));
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
        ms.e0 e0Var;
        ms.e0 e0Var2;
        AtomicReference atomicReference = this.f36484a;
        e0Var = l0.f36481a;
        Object andSet = atomicReference.getAndSet(e0Var);
        Intrinsics.checkNotNull(andSet);
        e0Var2 = l0.f36482b;
        if (andSet == e0Var2) {
            return true;
        }
        return false;
    }
}
