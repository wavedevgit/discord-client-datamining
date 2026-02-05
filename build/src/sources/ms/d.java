package ms;

import java.util.Collection;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {
    public static final Object a(Collection collection, Continuation continuation) {
        if (collection.isEmpty()) {
            return CollectionsKt.l();
        }
        return new c((g0[]) collection.toArray(new g0[0])).c(continuation);
    }

    public static final Object b(g0[] g0VarArr, Continuation continuation) {
        if (g0VarArr.length == 0) {
            return CollectionsKt.l();
        }
        return new c(g0VarArr).c(continuation);
    }
}
