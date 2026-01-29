package e1;

import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a {
    static /* synthetic */ Object b(a aVar, c cVar, Continuation continuation, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                cVar = c.Main;
            }
            return aVar.a(cVar, continuation);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: awaitPointerEvent");
    }

    Object a(c cVar, Continuation continuation);
}
