package rs;

import kotlin.coroutines.Continuation;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface a0 extends Flow {
    @Override // kotlinx.coroutines.flow.Flow
    Object collect(FlowCollector flowCollector, Continuation continuation);
}
