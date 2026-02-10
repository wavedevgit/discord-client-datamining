package ts;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends g {
    public /* synthetic */ h(Flow flow, CoroutineContext coroutineContext, int i10, rs.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(flow, (i11 & 2) != 0 ? kotlin.coroutines.e.f31839d : coroutineContext, (i11 & 4) != 0 ? -3 : i10, (i11 & 8) != 0 ? rs.a.f49232d : aVar);
    }

    @Override // ts.e
    protected e f(CoroutineContext coroutineContext, int i10, rs.a aVar) {
        return new h(this.f50934o, coroutineContext, i10, aVar);
    }

    @Override // ts.e
    public Flow j() {
        return this.f50934o;
    }

    @Override // ts.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object collect = this.f50934o.collect(flowCollector, continuation);
        if (collect == xr.b.f()) {
            return collect;
        }
        return Unit.f31765a;
    }

    public h(Flow flow, CoroutineContext coroutineContext, int i10, rs.a aVar) {
        super(flow, coroutineContext, i10, aVar);
    }
}
