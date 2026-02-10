package ps;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class x1 {
    public static final Object a(Continuation continuation) {
        us.i iVar;
        Object obj;
        CoroutineContext context = continuation.getContext();
        kotlinx.coroutines.z.k(context);
        Continuation c10 = xr.b.c(continuation);
        if (c10 instanceof us.i) {
            iVar = (us.i) c10;
        } else {
            iVar = null;
        }
        if (iVar == null) {
            obj = Unit.f31765a;
        } else {
            if (us.j.d(iVar.f51780o, context)) {
                iVar.o(context, Unit.f31765a);
            } else {
                kotlinx.coroutines.i0 i0Var = new kotlinx.coroutines.i0();
                CoroutineContext V0 = context.V0(i0Var);
                Unit unit = Unit.f31765a;
                iVar.o(V0, unit);
                if (i0Var.f34822e) {
                    if (us.j.e(iVar)) {
                        obj = xr.b.f();
                    } else {
                        obj = unit;
                    }
                }
            }
            obj = xr.b.f();
        }
        if (obj == xr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (obj == xr.b.f()) {
            return obj;
        }
        return Unit.f31765a;
    }
}
