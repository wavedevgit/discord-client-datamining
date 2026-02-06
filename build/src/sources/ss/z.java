package ss;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements FlowCollector {

    /* renamed from: d  reason: collision with root package name */
    private final qs.w f50110d;

    public z(qs.w wVar) {
        this.f50110d = wVar;
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        Object x10 = this.f50110d.x(obj, continuation);
        if (x10 == wr.b.f()) {
            return x10;
        }
        return Unit.f32008a;
    }
}
