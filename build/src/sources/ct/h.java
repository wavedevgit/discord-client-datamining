package ct;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends g {
    public /* synthetic */ h(Flow flow, CoroutineContext coroutineContext, int i10, at.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(flow, (i11 & 2) != 0 ? kotlin.coroutines.e.f32061d : coroutineContext, (i11 & 4) != 0 ? -3 : i10, (i11 & 8) != 0 ? at.a.f6104d : aVar);
    }

    @Override // ct.e
    protected e f(CoroutineContext coroutineContext, int i10, at.a aVar) {
        return new h(this.f21040o, coroutineContext, i10, aVar);
    }

    @Override // ct.e
    public Flow j() {
        return this.f21040o;
    }

    @Override // ct.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object collect = this.f21040o.collect(flowCollector, continuation);
        if (collect == gs.b.f()) {
            return collect;
        }
        return Unit.f31987a;
    }

    public h(Flow flow, CoroutineContext coroutineContext, int i10, at.a aVar) {
        super(flow, coroutineContext, i10, aVar);
    }
}
