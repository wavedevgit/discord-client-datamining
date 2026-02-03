package js;

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
        if (!z10 && (d10 instanceof os.i) && b(i10) == b(mVar.f35525i)) {
            os.i iVar = (os.i) d10;
            CoroutineDispatcher coroutineDispatcher = iVar.f44515o;
            CoroutineContext context = iVar.getContext();
            if (os.j.d(coroutineDispatcher, context)) {
                os.j.c(coroutineDispatcher, context, mVar);
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
            Result.a aVar = Result.f32461e;
            j10 = kotlin.c.a(i10);
        } else {
            Result.a aVar2 = Result.f32461e;
            j10 = mVar.j(l10);
        }
        Object b10 = Result.b(j10);
        if (z10) {
            Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<T of kotlinx.coroutines.DispatchedTaskKt.resume>");
            os.i iVar = (os.i) continuation;
            Continuation continuation2 = iVar.f44516p;
            Object obj = iVar.f44518r;
            CoroutineContext context = continuation2.getContext();
            Object i11 = os.l0.i(context, obj);
            if (i11 != os.l0.f44530a) {
                u1Var = x.m(continuation2, context, i11);
            } else {
                u1Var = null;
            }
            try {
                iVar.f44516p.resumeWith(b10);
                Unit unit = Unit.f32464a;
                if (u1Var != null && !u1Var.X0()) {
                    return;
                }
                os.l0.f(context, i11);
                return;
            } catch (Throwable th2) {
                if (u1Var == null || u1Var.X0()) {
                    os.l0.f(context, i11);
                }
                throw th2;
            }
        }
        continuation.resumeWith(b10);
    }

    private static final void e(kotlinx.coroutines.m mVar) {
        p0 b10 = l1.f31964a.b();
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
