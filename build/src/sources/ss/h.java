package ss;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends g {
    public /* synthetic */ h(Flow flow, CoroutineContext coroutineContext, int i10, qs.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(flow, (i11 & 2) != 0 ? kotlin.coroutines.e.f32082d : coroutineContext, (i11 & 4) != 0 ? -3 : i10, (i11 & 8) != 0 ? qs.a.f48066d : aVar);
    }

    @Override // ss.e
    protected e h(CoroutineContext coroutineContext, int i10, qs.a aVar) {
        return new h(this.f50042o, coroutineContext, i10, aVar);
    }

    @Override // ss.e
    public Flow j() {
        return this.f50042o;
    }

    @Override // ss.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object collect = this.f50042o.collect(flowCollector, continuation);
        if (collect == wr.b.f()) {
            return collect;
        }
        return Unit.f32008a;
    }

    public h(Flow flow, CoroutineContext coroutineContext, int i10, qs.a aVar) {
        super(flow, coroutineContext, i10, aVar);
    }
}
