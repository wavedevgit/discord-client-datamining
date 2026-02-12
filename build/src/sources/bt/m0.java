package bt;

import java.util.concurrent.atomic.AtomicReference;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 extends ct.d {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReference f7611a = new AtomicReference(null);

    @Override // ct.d
    /* renamed from: d */
    public boolean a(k0 k0Var) {
        dt.e0 e0Var;
        if (dt.d.a(this.f7611a) != null) {
            return false;
        }
        AtomicReference atomicReference = this.f7611a;
        e0Var = l0.f7608a;
        dt.d.b(atomicReference, e0Var);
        return true;
    }

    public final Object e(Continuation continuation) {
        dt.e0 e0Var;
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(gs.b.c(continuation), 1);
        eVar.H();
        AtomicReference atomicReference = this.f7611a;
        e0Var = l0.f7608a;
        if (!p0.d.a(atomicReference, e0Var, eVar)) {
            Result.a aVar = Result.f31985e;
            eVar.resumeWith(Result.b(Unit.f31988a));
        }
        Object B = eVar.B();
        if (B == gs.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == gs.b.f()) {
            return B;
        }
        return Unit.f31988a;
    }

    @Override // ct.d
    /* renamed from: f */
    public Continuation[] b(k0 k0Var) {
        dt.d.b(this.f7611a, null);
        return ct.c.f21024a;
    }

    public final void g() {
        dt.e0 e0Var;
        dt.e0 e0Var2;
        dt.e0 e0Var3;
        dt.e0 e0Var4;
        AtomicReference atomicReference = this.f7611a;
        while (true) {
            Object a10 = dt.d.a(atomicReference);
            if (a10 != null) {
                e0Var = l0.f7609b;
                if (a10 != e0Var) {
                    e0Var2 = l0.f7608a;
                    if (a10 == e0Var2) {
                        AtomicReference atomicReference2 = this.f7611a;
                        e0Var3 = l0.f7609b;
                        if (p0.d.a(atomicReference2, a10, e0Var3)) {
                            return;
                        }
                    } else {
                        AtomicReference atomicReference3 = this.f7611a;
                        e0Var4 = l0.f7608a;
                        if (p0.d.a(atomicReference3, a10, e0Var4)) {
                            Result.a aVar = Result.f31985e;
                            ((kotlinx.coroutines.e) a10).resumeWith(Result.b(Unit.f31988a));
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
        dt.e0 e0Var;
        dt.e0 e0Var2;
        AtomicReference atomicReference = this.f7611a;
        e0Var = l0.f7608a;
        Object andSet = atomicReference.getAndSet(e0Var);
        Intrinsics.checkNotNull(andSet);
        e0Var2 = l0.f7609b;
        if (andSet == e0Var2) {
            return true;
        }
        return false;
    }
}
