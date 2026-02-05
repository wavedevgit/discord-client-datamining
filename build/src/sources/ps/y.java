package ps;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements j0, c, qs.q {

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ j0 f46582d;

    /* renamed from: e  reason: collision with root package name */
    private final Job f46583e;

    public y(j0 j0Var, Job job) {
        this.f46582d = j0Var;
        this.f46583e = job;
    }

    @Override // ps.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f46582d.collect(flowCollector, continuation);
    }

    @Override // qs.q
    public Flow f(CoroutineContext coroutineContext, int i10, os.a aVar) {
        return l0.d(this, coroutineContext, i10, aVar);
    }

    @Override // ps.j0
    public Object getValue() {
        return this.f46582d.getValue();
    }
}
