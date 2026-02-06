package os;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class x1 {
    public static final Object a(Continuation continuation) {
        ts.i iVar;
        Object obj;
        CoroutineContext context = continuation.getContext();
        kotlinx.coroutines.z.k(context);
        Continuation c10 = wr.b.c(continuation);
        if (c10 instanceof ts.i) {
            iVar = (ts.i) c10;
        } else {
            iVar = null;
        }
        if (iVar == null) {
            obj = Unit.f32008a;
        } else {
            if (ts.j.d(iVar.f50827o, context)) {
                iVar.o(context, Unit.f32008a);
            } else {
                kotlinx.coroutines.i0 i0Var = new kotlinx.coroutines.i0();
                CoroutineContext Y0 = context.Y0(i0Var);
                Unit unit = Unit.f32008a;
                iVar.o(Y0, unit);
                if (i0Var.f35065e) {
                    if (ts.j.e(iVar)) {
                        obj = wr.b.f();
                    } else {
                        obj = unit;
                    }
                }
            }
            obj = wr.b.f();
        }
        if (obj == wr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (obj == wr.b.f()) {
            return obj;
        }
        return Unit.f32008a;
    }
}
