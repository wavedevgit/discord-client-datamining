package ms;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements j0, c, ns.q {

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ j0 f39385d;

    /* renamed from: e  reason: collision with root package name */
    private final Job f39386e;

    public y(j0 j0Var, Job job) {
        this.f39385d = j0Var;
        this.f39386e = job;
    }

    @Override // ms.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f39385d.collect(flowCollector, continuation);
    }

    @Override // ns.q
    public Flow e(CoroutineContext coroutineContext, int i10, ls.a aVar) {
        return l0.d(this, coroutineContext, i10, aVar);
    }

    @Override // ms.j0
    public Object getValue() {
        return this.f39385d.getValue();
    }
}
