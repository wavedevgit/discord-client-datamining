package kotlinx.coroutines.flow;

import js.a0;
import js.j0;
import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface MutableSharedFlow extends a0, FlowCollector {
    boolean b(Object obj);

    j0 e();

    Object emit(Object obj, Continuation continuation);

    void i();
}
