package gs;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class x1 {
    public static final Object a(Continuation continuation) {
        ls.i iVar;
        Object obj;
        CoroutineContext context = continuation.getContext();
        kotlinx.coroutines.z.k(context);
        Continuation c10 = or.b.c(continuation);
        if (c10 instanceof ls.i) {
            iVar = (ls.i) c10;
        } else {
            iVar = null;
        }
        if (iVar == null) {
            obj = Unit.f33298a;
        } else {
            if (ls.j.d(iVar.f37460o, context)) {
                iVar.o(context, Unit.f33298a);
            } else {
                kotlinx.coroutines.i0 i0Var = new kotlinx.coroutines.i0();
                CoroutineContext U0 = context.U0(i0Var);
                Unit unit = Unit.f33298a;
                iVar.o(U0, unit);
                if (i0Var.f36355e) {
                    if (ls.j.e(iVar)) {
                        obj = or.b.f();
                    } else {
                        obj = unit;
                    }
                }
            }
            obj = or.b.f();
        }
        if (obj == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (obj == or.b.f()) {
            return obj;
        }
        return Unit.f33298a;
    }
}
