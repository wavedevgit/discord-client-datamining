package ns;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements FlowCollector {

    /* renamed from: d  reason: collision with root package name */
    private final ls.w f42026d;

    public z(ls.w wVar) {
        this.f42026d = wVar;
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        Object u10 = this.f42026d.u(obj, continuation);
        if (u10 == rr.b.f()) {
            return u10;
        }
        return Unit.f32464a;
    }
}
