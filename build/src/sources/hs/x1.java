package hs;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class x1 {
    public static final Object a(Continuation continuation) {
        ms.i iVar;
        Object obj;
        CoroutineContext context = continuation.getContext();
        kotlinx.coroutines.z.k(context);
        Continuation c10 = pr.b.c(continuation);
        if (c10 instanceof ms.i) {
            iVar = (ms.i) c10;
        } else {
            iVar = null;
        }
        if (iVar == null) {
            obj = Unit.f33074a;
        } else {
            if (ms.j.d(iVar.f39160o, context)) {
                iVar.o(context, Unit.f33074a);
            } else {
                kotlinx.coroutines.i0 i0Var = new kotlinx.coroutines.i0();
                CoroutineContext Z0 = context.Z0(i0Var);
                Unit unit = Unit.f33074a;
                iVar.o(Z0, unit);
                if (i0Var.f36131e) {
                    if (ms.j.e(iVar)) {
                        obj = pr.b.f();
                    } else {
                        obj = unit;
                    }
                }
            }
            obj = pr.b.f();
        }
        if (obj == pr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (obj == pr.b.f()) {
            return obj;
        }
        return Unit.f33074a;
    }
}
