package os;

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
        Continuation d10 = mVar.d();
        if (i10 == 4) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10 && (d10 instanceof ts.i) && b(i10) == b(mVar.f35117i)) {
            ts.i iVar = (ts.i) d10;
            CoroutineDispatcher coroutineDispatcher = iVar.f50875o;
            CoroutineContext context = iVar.getContext();
            if (ts.j.d(coroutineDispatcher, context)) {
                ts.j.c(coroutineDispatcher, context, mVar);
                return;
            } else {
                e(mVar);
                return;
            }
        }
        d(mVar, d10, z10);
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
            Result.a aVar = Result.f32053e;
            j10 = kotlin.c.a(i10);
        } else {
            Result.a aVar2 = Result.f32053e;
            j10 = mVar.j(l10);
        }
        Object b10 = Result.b(j10);
        if (z10) {
            Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<T of kotlinx.coroutines.DispatchedTaskKt.resume>");
            ts.i iVar = (ts.i) continuation;
            Continuation continuation2 = iVar.f50876p;
            Object obj = iVar.f50878r;
            CoroutineContext context = continuation2.getContext();
            Object i11 = ts.l0.i(context, obj);
            if (i11 != ts.l0.f50890a) {
                u1Var = x.m(continuation2, context, i11);
            } else {
                u1Var = null;
            }
            try {
                iVar.f50876p.resumeWith(b10);
                Unit unit = Unit.f32056a;
                if (u1Var != null && !u1Var.Z0()) {
                    return;
                }
                ts.l0.f(context, i11);
                return;
            } catch (Throwable th2) {
                if (u1Var == null || u1Var.Z0()) {
                    ts.l0.f(context, i11);
                }
                throw th2;
            }
        }
        continuation.resumeWith(b10);
    }

    private static final void e(kotlinx.coroutines.m mVar) {
        p0 b10 = l1.f43556a.b();
        if (b10.r2()) {
            b10.j2(mVar);
            return;
        }
        b10.p2(true);
        try {
            d(mVar, mVar.d(), true);
            do {
            } while (b10.u2());
        } finally {
            try {
            } finally {
            }
        }
    }
}
