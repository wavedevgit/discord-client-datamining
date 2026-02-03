package um;

import kotlin.Pair;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.KType;
import kotlinx.coroutines.flow.Flow;
import um.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class w {
    public static final k.a a(a aVar, k kVar) {
        return z.a(aVar, kVar);
    }

    public static final r b(String str, Function1 function1) {
        return b0.a(str, function1);
    }

    public static final r c(Function0 function0, Function1 function1) {
        return b0.b(function0, function1);
    }

    public static final r d(k kVar, String str, Function1 function1) {
        return z.b(kVar, str, function1);
    }

    public static final r e(k kVar, Function0 function0, Function1 function1) {
        return z.c(kVar, function0, function1);
    }

    public static final Pair h(r rVar, Object obj, Object obj2) {
        return b0.d(rVar, obj, obj2);
    }

    public static final Object i(Flow flow, h hVar, Function1 function1, Continuation continuation) {
        return y.a(flow, hVar, function1, continuation);
    }

    public static final s j(q qVar) {
        return c0.a(qVar);
    }

    public static final Object k(o oVar, String str, h hVar, Continuation continuation) {
        return a0.d(oVar, str, hVar, continuation);
    }

    public static final void l(a aVar, o oVar, KType kType, String str, Function1 function1) {
        x.a(aVar, oVar, kType, str, function1);
    }

    public static final Object m(h hVar, r rVar, Continuation continuation) {
        return y.b(hVar, rVar, continuation);
    }

    public static final s n(KType kType) {
        return c0.b(kType);
    }
}
