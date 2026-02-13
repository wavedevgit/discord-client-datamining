package ct;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements FlowCollector {

    /* renamed from: d  reason: collision with root package name */
    private final at.w f21109d;

    public z(at.w wVar) {
        this.f21109d = wVar;
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        Object x10 = this.f21109d.x(obj, continuation);
        if (x10 == gs.b.f()) {
            return x10;
        }
        return Unit.f32556a;
    }
}
