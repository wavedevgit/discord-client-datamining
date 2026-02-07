package rs;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements j0, c, ss.q {

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ j0 f49531d;

    /* renamed from: e  reason: collision with root package name */
    private final Job f49532e;

    public y(j0 j0Var, Job job) {
        this.f49531d = j0Var;
        this.f49532e = job;
    }

    @Override // rs.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f49531d.collect(flowCollector, continuation);
    }

    @Override // ss.q
    public Flow f(CoroutineContext coroutineContext, int i10, qs.a aVar) {
        return l0.d(this, coroutineContext, i10, aVar);
    }

    @Override // rs.j0
    public Object getValue() {
        return this.f49531d.getValue();
    }
}
