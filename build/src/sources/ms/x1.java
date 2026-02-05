package ms;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class x1 {
    public static final Object a(Continuation continuation) {
        rs.i iVar;
        Object obj;
        CoroutineContext context = continuation.getContext();
        kotlinx.coroutines.z.k(context);
        Continuation c10 = ur.b.c(continuation);
        if (c10 instanceof rs.i) {
            iVar = (rs.i) c10;
        } else {
            iVar = null;
        }
        if (iVar == null) {
            obj = Unit.f31988a;
        } else {
            if (rs.j.d(iVar.f48964o, context)) {
                iVar.o(context, Unit.f31988a);
            } else {
                kotlinx.coroutines.i0 i0Var = new kotlinx.coroutines.i0();
                CoroutineContext V0 = context.V0(i0Var);
                Unit unit = Unit.f31988a;
                iVar.o(V0, unit);
                if (i0Var.f35045e) {
                    if (rs.j.e(iVar)) {
                        obj = ur.b.f();
                    } else {
                        obj = unit;
                    }
                }
            }
            obj = ur.b.f();
        }
        if (obj == ur.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (obj == ur.b.f()) {
            return obj;
        }
        return Unit.f31988a;
    }
}
