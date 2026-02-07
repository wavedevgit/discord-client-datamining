package rs;

import java.util.concurrent.atomic.AtomicReference;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 extends ss.d {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReference f49357a = new AtomicReference(null);

    @Override // ss.d
    /* renamed from: d */
    public boolean a(k0 k0Var) {
        ts.e0 e0Var;
        if (ts.d.a(this.f49357a) != null) {
            return false;
        }
        AtomicReference atomicReference = this.f49357a;
        e0Var = l0.f49354a;
        ts.d.b(atomicReference, e0Var);
        return true;
    }

    public final Object e(Continuation continuation) {
        ts.e0 e0Var;
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(wr.b.c(continuation), 1);
        eVar.H();
        AtomicReference atomicReference = this.f49357a;
        e0Var = l0.f49354a;
        if (!p0.d.a(atomicReference, e0Var, eVar)) {
            Result.a aVar = Result.f32053e;
            eVar.resumeWith(Result.b(Unit.f32056a));
        }
        Object B = eVar.B();
        if (B == wr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == wr.b.f()) {
            return B;
        }
        return Unit.f32056a;
    }

    @Override // ss.d
    /* renamed from: f */
    public Continuation[] b(k0 k0Var) {
        ts.d.b(this.f49357a, null);
        return ss.c.f50073a;
    }

    public final void g() {
        ts.e0 e0Var;
        ts.e0 e0Var2;
        ts.e0 e0Var3;
        ts.e0 e0Var4;
        AtomicReference atomicReference = this.f49357a;
        while (true) {
            Object a10 = ts.d.a(atomicReference);
            if (a10 != null) {
                e0Var = l0.f49355b;
                if (a10 != e0Var) {
                    e0Var2 = l0.f49354a;
                    if (a10 == e0Var2) {
                        AtomicReference atomicReference2 = this.f49357a;
                        e0Var3 = l0.f49355b;
                        if (p0.d.a(atomicReference2, a10, e0Var3)) {
                            return;
                        }
                    } else {
                        AtomicReference atomicReference3 = this.f49357a;
                        e0Var4 = l0.f49354a;
                        if (p0.d.a(atomicReference3, a10, e0Var4)) {
                            Result.a aVar = Result.f32053e;
                            ((kotlinx.coroutines.e) a10).resumeWith(Result.b(Unit.f32056a));
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
        ts.e0 e0Var;
        ts.e0 e0Var2;
        AtomicReference atomicReference = this.f49357a;
        e0Var = l0.f49354a;
        Object andSet = atomicReference.getAndSet(e0Var);
        Intrinsics.checkNotNull(andSet);
        e0Var2 = l0.f49355b;
        if (andSet == e0Var2) {
            return true;
        }
        return false;
    }
}
