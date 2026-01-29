package ks;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends g {
    public /* synthetic */ h(Flow flow, CoroutineContext coroutineContext, int i10, is.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(flow, (i11 & 2) != 0 ? kotlin.coroutines.e.f33356d : coroutineContext, (i11 & 4) != 0 ? -3 : i10, (i11 & 8) != 0 ? is.a.f31125d : aVar);
    }

    @Override // ks.e
    protected e g(CoroutineContext coroutineContext, int i10, is.a aVar) {
        return new h(this.f36460o, coroutineContext, i10, aVar);
    }

    @Override // ks.e
    public Flow j() {
        return this.f36460o;
    }

    @Override // ks.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object collect = this.f36460o.collect(flowCollector, continuation);
        if (collect == or.b.f()) {
            return collect;
        }
        return Unit.f33282a;
    }

    public h(Flow flow, CoroutineContext coroutineContext, int i10, is.a aVar) {
        super(flow, coroutineContext, i10, aVar);
    }
}
