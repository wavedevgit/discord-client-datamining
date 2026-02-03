package ls;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements FlowCollector {

    /* renamed from: d  reason: collision with root package name */
    private final js.w f37626d;

    public z(js.w wVar) {
        this.f37626d = wVar;
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        Object u10 = this.f37626d.u(obj, continuation);
        if (u10 == pr.b.f()) {
            return u10;
        }
        return Unit.f33074a;
    }
}
