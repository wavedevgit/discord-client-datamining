package js;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements j0, c, ks.q {

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ j0 f32739d;

    /* renamed from: e  reason: collision with root package name */
    private final Job f32740e;

    public y(j0 j0Var, Job job) {
        this.f32739d = j0Var;
        this.f32740e = job;
    }

    @Override // ks.q
    public Flow a(CoroutineContext coroutineContext, int i10, is.a aVar) {
        return l0.d(this, coroutineContext, i10, aVar);
    }

    @Override // js.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f32739d.collect(flowCollector, continuation);
    }

    @Override // js.j0
    public Object getValue() {
        return this.f32739d.getValue();
    }
}
