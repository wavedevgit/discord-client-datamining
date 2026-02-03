package ns;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends g {
    public /* synthetic */ h(Flow flow, CoroutineContext coroutineContext, int i10, ls.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(flow, (i11 & 2) != 0 ? kotlin.coroutines.e.f32538d : coroutineContext, (i11 & 4) != 0 ? -3 : i10, (i11 & 8) != 0 ? ls.a.f37142d : aVar);
    }

    @Override // ns.e
    protected e g(CoroutineContext coroutineContext, int i10, ls.a aVar) {
        return new h(this.f41958o, coroutineContext, i10, aVar);
    }

    @Override // ns.e
    public Flow j() {
        return this.f41958o;
    }

    @Override // ns.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object collect = this.f41958o.collect(flowCollector, continuation);
        if (collect == rr.b.f()) {
            return collect;
        }
        return Unit.f32464a;
    }

    public h(Flow flow, CoroutineContext coroutineContext, int i10, ls.a aVar) {
        super(flow, coroutineContext, i10, aVar);
    }
}
