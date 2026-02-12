package ys;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class x1 {
    public static final Object a(Continuation continuation) {
        dt.i iVar;
        Object obj;
        CoroutineContext context = continuation.getContext();
        kotlinx.coroutines.z.k(context);
        Continuation c10 = gs.b.c(continuation);
        if (c10 instanceof dt.i) {
            iVar = (dt.i) c10;
        } else {
            iVar = null;
        }
        if (iVar == null) {
            obj = Unit.f31988a;
        } else {
            if (dt.j.d(iVar.f21883o, context)) {
                iVar.o(context, Unit.f31988a);
            } else {
                kotlinx.coroutines.i0 i0Var = new kotlinx.coroutines.i0();
                CoroutineContext O0 = context.O0(i0Var);
                Unit unit = Unit.f31988a;
                iVar.o(O0, unit);
                if (i0Var.f35045e) {
                    if (dt.j.e(iVar)) {
                        obj = gs.b.f();
                    } else {
                        obj = unit;
                    }
                }
            }
            obj = gs.b.f();
        }
        if (obj == gs.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (obj == gs.b.f()) {
            return obj;
        }
        return Unit.f31988a;
    }
}
