package ms;

import gs.j0;
import kotlin.Result;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import ls.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {
    private static final void a(Continuation continuation, Throwable th2) {
        if (th2 instanceof j0) {
            th2 = ((j0) th2).getCause();
        }
        Result.a aVar = Result.f33295e;
        continuation.resumeWith(Result.b(c.a(th2)));
        throw th2;
    }

    public static final void b(Continuation continuation, Continuation continuation2) {
        try {
            Continuation c10 = or.b.c(continuation);
            Result.a aVar = Result.f33295e;
            j.b(c10, Result.b(Unit.f33298a));
        } catch (Throwable th2) {
            a(continuation2, th2);
        }
    }

    public static final void c(Function2 function2, Object obj, Continuation continuation) {
        try {
            Continuation c10 = or.b.c(or.b.a(function2, obj, continuation));
            Result.a aVar = Result.f33295e;
            j.b(c10, Result.b(Unit.f33298a));
        } catch (Throwable th2) {
            a(continuation, th2);
        }
    }
}
