package ms;

import java.util.concurrent.atomic.AtomicReference;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 extends ns.d {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReference f39211a = new AtomicReference(null);

    @Override // ns.d
    /* renamed from: d */
    public boolean a(k0 k0Var) {
        os.e0 e0Var;
        if (os.d.a(this.f39211a) != null) {
            return false;
        }
        AtomicReference atomicReference = this.f39211a;
        e0Var = l0.f39208a;
        os.d.b(atomicReference, e0Var);
        return true;
    }

    public final Object e(Continuation continuation) {
        os.e0 e0Var;
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(rr.b.c(continuation), 1);
        eVar.H();
        AtomicReference atomicReference = this.f39211a;
        e0Var = l0.f39208a;
        if (!p0.d.a(atomicReference, e0Var, eVar)) {
            Result.a aVar = Result.f32461e;
            eVar.resumeWith(Result.b(Unit.f32464a));
        }
        Object B = eVar.B();
        if (B == rr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == rr.b.f()) {
            return B;
        }
        return Unit.f32464a;
    }

    @Override // ns.d
    /* renamed from: f */
    public Continuation[] b(k0 k0Var) {
        os.d.b(this.f39211a, null);
        return ns.c.f41941a;
    }

    public final void g() {
        os.e0 e0Var;
        os.e0 e0Var2;
        os.e0 e0Var3;
        os.e0 e0Var4;
        AtomicReference atomicReference = this.f39211a;
        while (true) {
            Object a10 = os.d.a(atomicReference);
            if (a10 != null) {
                e0Var = l0.f39209b;
                if (a10 != e0Var) {
                    e0Var2 = l0.f39208a;
                    if (a10 == e0Var2) {
                        AtomicReference atomicReference2 = this.f39211a;
                        e0Var3 = l0.f39209b;
                        if (p0.d.a(atomicReference2, a10, e0Var3)) {
                            return;
                        }
                    } else {
                        AtomicReference atomicReference3 = this.f39211a;
                        e0Var4 = l0.f39208a;
                        if (p0.d.a(atomicReference3, a10, e0Var4)) {
                            Result.a aVar = Result.f32461e;
                            ((kotlinx.coroutines.e) a10).resumeWith(Result.b(Unit.f32464a));
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
        os.e0 e0Var;
        os.e0 e0Var2;
        AtomicReference atomicReference = this.f39211a;
        e0Var = l0.f39208a;
        Object andSet = atomicReference.getAndSet(e0Var);
        Intrinsics.checkNotNull(andSet);
        e0Var2 = l0.f39209b;
        if (andSet == e0Var2) {
            return true;
        }
        return false;
    }
}
