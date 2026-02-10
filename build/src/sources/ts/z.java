package ts;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements FlowCollector {

    /* renamed from: d  reason: collision with root package name */
    private final rs.w f51002d;

    public z(rs.w wVar) {
        this.f51002d = wVar;
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        Object x10 = this.f51002d.x(obj, continuation);
        if (x10 == xr.b.f()) {
            return x10;
        }
        return Unit.f31765a;
    }
}
