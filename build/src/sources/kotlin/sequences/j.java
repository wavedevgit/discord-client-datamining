package kotlin.sequences;

import java.util.Iterator;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {
    public abstract Object b(Object obj, Continuation continuation);

    public abstract Object e(Iterator it, Continuation continuation);

    public final Object h(Sequence sequence, Continuation continuation) {
        Object e10 = e(sequence.iterator(), continuation);
        if (e10 == or.b.f()) {
            return e10;
        }
        return Unit.f33282a;
    }
}
