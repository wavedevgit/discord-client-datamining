package ps;

import java.util.concurrent.atomic.AtomicReference;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 extends qs.d {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReference f46408a = new AtomicReference(null);

    @Override // qs.d
    /* renamed from: d */
    public boolean a(k0 k0Var) {
        rs.e0 e0Var;
        if (rs.d.a(this.f46408a) != null) {
            return false;
        }
        AtomicReference atomicReference = this.f46408a;
        e0Var = l0.f46405a;
        rs.d.b(atomicReference, e0Var);
        return true;
    }

    public final Object e(Continuation continuation) {
        rs.e0 e0Var;
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(ur.b.c(continuation), 1);
        eVar.H();
        AtomicReference atomicReference = this.f46408a;
        e0Var = l0.f46405a;
        if (!p0.d.a(atomicReference, e0Var, eVar)) {
            Result.a aVar = Result.f31985e;
            eVar.resumeWith(Result.b(Unit.f31988a));
        }
        Object B = eVar.B();
        if (B == ur.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == ur.b.f()) {
            return B;
        }
        return Unit.f31988a;
    }

    @Override // qs.d
    /* renamed from: f */
    public Continuation[] b(k0 k0Var) {
        rs.d.b(this.f46408a, null);
        return qs.c.f48001a;
    }

    public final void g() {
        rs.e0 e0Var;
        rs.e0 e0Var2;
        rs.e0 e0Var3;
        rs.e0 e0Var4;
        AtomicReference atomicReference = this.f46408a;
        while (true) {
            Object a10 = rs.d.a(atomicReference);
            if (a10 != null) {
                e0Var = l0.f46406b;
                if (a10 != e0Var) {
                    e0Var2 = l0.f46405a;
                    if (a10 == e0Var2) {
                        AtomicReference atomicReference2 = this.f46408a;
                        e0Var3 = l0.f46406b;
                        if (p0.d.a(atomicReference2, a10, e0Var3)) {
                            return;
                        }
                    } else {
                        AtomicReference atomicReference3 = this.f46408a;
                        e0Var4 = l0.f46405a;
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
        rs.e0 e0Var;
        rs.e0 e0Var2;
        AtomicReference atomicReference = this.f46408a;
        e0Var = l0.f46405a;
        Object andSet = atomicReference.getAndSet(e0Var);
        Intrinsics.checkNotNull(andSet);
        e0Var2 = l0.f46406b;
        if (andSet == e0Var2) {
            return true;
        }
        return false;
    }
}
