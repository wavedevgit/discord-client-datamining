package kotlin.sequences;

import java.util.Iterator;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {
    public abstract Object b(Object obj, Continuation continuation);

    public abstract Object d(Iterator it, Continuation continuation);

    public final Object g(Sequence sequence, Continuation continuation) {
        Object d10 = d(sequence.iterator(), continuation);
        if (d10 == wr.b.f()) {
            return d10;
        }
        return Unit.f32008a;
    }
}
