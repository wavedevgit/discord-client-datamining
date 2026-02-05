package qs;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends g {
    public /* synthetic */ h(Flow flow, CoroutineContext coroutineContext, int i10, os.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(flow, (i11 & 2) != 0 ? kotlin.coroutines.e.f32062d : coroutineContext, (i11 & 4) != 0 ? -3 : i10, (i11 & 8) != 0 ? os.a.f44350d : aVar);
    }

    @Override // qs.e
    protected e g(CoroutineContext coroutineContext, int i10, os.a aVar) {
        return new h(this.f48018o, coroutineContext, i10, aVar);
    }

    @Override // qs.e
    public Flow j() {
        return this.f48018o;
    }

    @Override // qs.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object collect = this.f48018o.collect(flowCollector, continuation);
        if (collect == ur.b.f()) {
            return collect;
        }
        return Unit.f31988a;
    }

    public h(Flow flow, CoroutineContext coroutineContext, int i10, os.a aVar) {
        super(flow, coroutineContext, i10, aVar);
    }
}
