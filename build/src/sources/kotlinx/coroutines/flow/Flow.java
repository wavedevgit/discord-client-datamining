package kotlinx.coroutines.flow;

import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface Flow {
    Object collect(FlowCollector flowCollector, Continuation continuation);
}
