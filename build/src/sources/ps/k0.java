package ps;

import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k0 {
    public static final void a(kotlinx.coroutines.m mVar, int i10) {
        boolean z10;
        Continuation g10 = mVar.g();
        if (i10 == 4) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10 && (g10 instanceof us.i) && b(i10) == b(mVar.f34826i)) {
            us.i iVar = (us.i) g10;
            CoroutineDispatcher coroutineDispatcher = iVar.f51780o;
            CoroutineContext context = iVar.getContext();
            if (us.j.d(coroutineDispatcher, context)) {
                us.j.c(coroutineDispatcher, context, mVar);
                return;
            } else {
                e(mVar);
                return;
            }
        }
        d(mVar, g10, z10);
    }

    public static final boolean b(int i10) {
        if (i10 == 1 || i10 == 2) {
            return true;
        }
        return false;
    }

    public static final boolean c(int i10) {
        if (i10 == 2) {
            return true;
        }
        return false;
    }

    public static final void d(kotlinx.coroutines.m mVar, Continuation continuation, boolean z10) {
        Object j10;
        u1 u1Var;
        Object l10 = mVar.l();
        Throwable i10 = mVar.i(l10);
        if (i10 != null) {
            Result.a aVar = Result.f31762e;
            j10 = kotlin.c.a(i10);
        } else {
            Result.a aVar2 = Result.f31762e;
            j10 = mVar.j(l10);
        }
        Object b10 = Result.b(j10);
        if (z10) {
            Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<T of kotlinx.coroutines.DispatchedTaskKt.resume>");
            us.i iVar = (us.i) continuation;
            Continuation continuation2 = iVar.f51781p;
            Object obj = iVar.f51783r;
            CoroutineContext context = continuation2.getContext();
            Object i11 = us.l0.i(context, obj);
            if (i11 != us.l0.f51795a) {
                u1Var = x.m(continuation2, context, i11);
            } else {
                u1Var = null;
            }
            try {
                iVar.f51781p.resumeWith(b10);
                Unit unit = Unit.f31765a;
                if (u1Var != null && !u1Var.Z0()) {
                    return;
                }
                us.l0.f(context, i11);
                return;
            } catch (Throwable th2) {
                if (u1Var == null || u1Var.Z0()) {
                    us.l0.f(context, i11);
                }
                throw th2;
            }
        }
        continuation.resumeWith(b10);
    }

    private static final void e(kotlinx.coroutines.m mVar) {
        p0 b10 = l1.f44513a.b();
        if (b10.r2()) {
            b10.j2(mVar);
            return;
        }
        b10.p2(true);
        try {
            d(mVar, mVar.g(), true);
            do {
            } while (b10.u2());
        } finally {
            try {
            } finally {
            }
        }
    }
}
