package nr;

import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    public static final void a(Function2 function2, Object obj, Continuation completion) {
        Intrinsics.checkNotNullParameter(function2, "<this>");
        Intrinsics.checkNotNullParameter(completion, "completion");
        Continuation c10 = or.b.c(or.b.a(function2, obj, completion));
        Result.a aVar = Result.f33295e;
        c10.resumeWith(Result.b(Unit.f33298a));
    }
}
