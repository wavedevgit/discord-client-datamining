package us;

import kotlin.Result;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import os.j0;
import ts.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {
    private static final void a(Continuation continuation, Throwable th2) {
        if (th2 instanceof j0) {
            th2 = ((j0) th2).getCause();
        }
        Result.a aVar = Result.f32005e;
        continuation.resumeWith(Result.b(c.a(th2)));
        throw th2;
    }

    public static final void b(Continuation continuation, Continuation continuation2) {
        try {
            Continuation c10 = wr.b.c(continuation);
            Result.a aVar = Result.f32005e;
            j.b(c10, Result.b(Unit.f32008a));
        } catch (Throwable th2) {
            a(continuation2, th2);
        }
    }

    public static final void c(Function2 function2, Object obj, Continuation continuation) {
        try {
            Continuation c10 = wr.b.c(wr.b.a(function2, obj, continuation));
            Result.a aVar = Result.f32005e;
            j.b(c10, Result.b(Unit.f32008a));
        } catch (Throwable th2) {
            a(continuation, th2);
        }
    }
}
