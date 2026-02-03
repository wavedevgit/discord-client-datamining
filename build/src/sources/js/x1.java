package js;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class x1 {
    public static final Object a(Continuation continuation) {
        os.i iVar;
        Object obj;
        CoroutineContext context = continuation.getContext();
        kotlinx.coroutines.z.k(context);
        Continuation c10 = rr.b.c(continuation);
        if (c10 instanceof os.i) {
            iVar = (os.i) c10;
        } else {
            iVar = null;
        }
        if (iVar == null) {
            obj = Unit.f32464a;
        } else {
            if (os.j.d(iVar.f44515o, context)) {
                iVar.o(context, Unit.f32464a);
            } else {
                kotlinx.coroutines.i0 i0Var = new kotlinx.coroutines.i0();
                CoroutineContext V0 = context.V0(i0Var);
                Unit unit = Unit.f32464a;
                iVar.o(V0, unit);
                if (i0Var.f35521e) {
                    if (os.j.e(iVar)) {
                        obj = rr.b.f();
                    } else {
                        obj = unit;
                    }
                }
            }
            obj = rr.b.f();
        }
        if (obj == rr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (obj == rr.b.f()) {
            return obj;
        }
        return Unit.f32464a;
    }
}
