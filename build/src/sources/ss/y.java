package ss;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements j0, c, ts.q {

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ j0 f50356d;

    /* renamed from: e  reason: collision with root package name */
    private final Job f50357e;

    public y(j0 j0Var, Job job) {
        this.f50356d = j0Var;
        this.f50357e = job;
    }

    @Override // ss.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f50356d.collect(flowCollector, continuation);
    }

    @Override // ss.j0
    public Object getValue() {
        return this.f50356d.getValue();
    }

    @Override // ts.q
    public Flow h(CoroutineContext coroutineContext, int i10, rs.a aVar) {
        return l0.d(this, coroutineContext, i10, aVar);
    }
}
