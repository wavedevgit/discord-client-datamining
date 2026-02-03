package ls;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends g {
    public /* synthetic */ h(Flow flow, CoroutineContext coroutineContext, int i10, js.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(flow, (i11 & 2) != 0 ? kotlin.coroutines.e.f33148d : coroutineContext, (i11 & 4) != 0 ? -3 : i10, (i11 & 8) != 0 ? js.a.f32204d : aVar);
    }

    @Override // ls.e
    protected e f(CoroutineContext coroutineContext, int i10, js.a aVar) {
        return new h(this.f37558o, coroutineContext, i10, aVar);
    }

    @Override // ls.e
    public Flow j() {
        return this.f37558o;
    }

    @Override // ls.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object collect = this.f37558o.collect(flowCollector, continuation);
        if (collect == pr.b.f()) {
            return collect;
        }
        return Unit.f33074a;
    }

    public h(Flow flow, CoroutineContext coroutineContext, int i10, js.a aVar) {
        super(flow, coroutineContext, i10, aVar);
    }
}
