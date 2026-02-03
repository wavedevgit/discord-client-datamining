package hs;

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
        Continuation h10 = mVar.h();
        if (i10 == 4) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10 && (h10 instanceof ms.i) && b(i10) == b(mVar.f36135i)) {
            ms.i iVar = (ms.i) h10;
            CoroutineDispatcher coroutineDispatcher = iVar.f39160o;
            CoroutineContext context = iVar.getContext();
            if (ms.j.d(coroutineDispatcher, context)) {
                ms.j.c(coroutineDispatcher, context, mVar);
                return;
            } else {
                e(mVar);
                return;
            }
        }
        d(mVar, h10, z10);
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
            Result.a aVar = Result.f33071e;
            j10 = kotlin.c.a(i10);
        } else {
            Result.a aVar2 = Result.f33071e;
            j10 = mVar.j(l10);
        }
        Object b10 = Result.b(j10);
        if (z10) {
            Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<T of kotlinx.coroutines.DispatchedTaskKt.resume>");
            ms.i iVar = (ms.i) continuation;
            Continuation continuation2 = iVar.f39161p;
            Object obj = iVar.f39163r;
            CoroutineContext context = continuation2.getContext();
            Object i11 = ms.l0.i(context, obj);
            if (i11 != ms.l0.f39175a) {
                u1Var = x.m(continuation2, context, i11);
            } else {
                u1Var = null;
            }
            try {
                iVar.f39161p.resumeWith(b10);
                Unit unit = Unit.f33074a;
                if (u1Var != null && !u1Var.X0()) {
                    return;
                }
                ms.l0.f(context, i11);
                return;
            } catch (Throwable th2) {
                if (u1Var == null || u1Var.X0()) {
                    ms.l0.f(context, i11);
                }
                throw th2;
            }
        }
        continuation.resumeWith(b10);
    }

    private static final void e(kotlinx.coroutines.m mVar) {
        p0 b10 = l1.f27924a.b();
        if (b10.r2()) {
            b10.j2(mVar);
            return;
        }
        b10.p2(true);
        try {
            d(mVar, mVar.h(), true);
            do {
            } while (b10.u2());
        } finally {
            try {
            } finally {
            }
        }
    }
}
