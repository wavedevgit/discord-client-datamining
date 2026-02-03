package kotlinx.coroutines.flow;

import kotlin.coroutines.Continuation;
import ms.a0;
import ms.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface MutableSharedFlow extends a0, FlowCollector {
    boolean b(Object obj);

    j0 d();

    @Override // kotlinx.coroutines.flow.FlowCollector
    Object emit(Object obj, Continuation continuation);

    void i();
}
