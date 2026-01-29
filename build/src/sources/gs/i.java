package gs;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.d;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class i {
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v3, types: [java.lang.Object, gs.g0, kotlinx.coroutines.a] */
    public static final g0 a(CoroutineScope coroutineScope, CoroutineContext coroutineContext, c0 c0Var, Function2 function2) {
        a1 a1Var;
        CoroutineContext k10 = x.k(coroutineScope, coroutineContext);
        if (c0Var.e()) {
            a1Var = new a1(k10, function2);
        } else {
            a1Var = new h0(k10, true);
        }
        a1Var.V0(c0Var, a1Var, function2);
        return a1Var;
    }

    public static /* synthetic */ g0 b(CoroutineScope coroutineScope, CoroutineContext coroutineContext, c0 c0Var, Function2 function2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            coroutineContext = kotlin.coroutines.e.f33356d;
        }
        if ((i10 & 2) != 0) {
            c0Var = c0.f27144d;
        }
        return g.a(coroutineScope, coroutineContext, c0Var, function2);
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v3, types: [kotlinx.coroutines.Job, java.lang.Object, kotlinx.coroutines.a] */
    public static final Job c(CoroutineScope coroutineScope, CoroutineContext coroutineContext, c0 c0Var, Function2 function2) {
        b1 b1Var;
        CoroutineContext k10 = x.k(coroutineScope, coroutineContext);
        if (c0Var.e()) {
            b1Var = new b1(k10, function2);
        } else {
            b1Var = new h1(k10, true);
        }
        b1Var.V0(c0Var, b1Var, function2);
        return b1Var;
    }

    public static /* synthetic */ Job d(CoroutineScope coroutineScope, CoroutineContext coroutineContext, c0 c0Var, Function2 function2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            coroutineContext = kotlin.coroutines.e.f33356d;
        }
        if ((i10 & 2) != 0) {
            c0Var = c0.f27144d;
        }
        return g.c(coroutineScope, coroutineContext, c0Var, function2);
    }

    public static final Object e(CoroutineContext coroutineContext, Function2 function2, Continuation continuation) {
        Object Z0;
        CoroutineContext context = continuation.getContext();
        CoroutineContext j10 = x.j(context, coroutineContext);
        kotlinx.coroutines.z.k(j10);
        if (j10 == context) {
            ls.a0 a0Var = new ls.a0(j10, continuation);
            Z0 = ms.b.d(a0Var, a0Var, function2);
        } else {
            d.b bVar = kotlin.coroutines.d.f33354h;
            if (Intrinsics.areEqual(j10.l(bVar), context.l(bVar))) {
                u1 u1Var = new u1(j10, continuation);
                CoroutineContext context2 = u1Var.getContext();
                Object i10 = ls.l0.i(context2, null);
                try {
                    Object d10 = ms.b.d(u1Var, u1Var, function2);
                    ls.l0.f(context2, i10);
                    Z0 = d10;
                } catch (Throwable th2) {
                    ls.l0.f(context2, i10);
                    throw th2;
                }
            } else {
                kotlinx.coroutines.l lVar = new kotlinx.coroutines.l(j10, continuation);
                ms.a.c(function2, lVar, lVar);
                Z0 = lVar.Z0();
            }
        }
        if (Z0 == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return Z0;
    }
}
