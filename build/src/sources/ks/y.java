package ks;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements j0, c, ls.q {

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ j0 f36658d;

    /* renamed from: e  reason: collision with root package name */
    private final Job f36659e;

    public y(j0 j0Var, Job job) {
        this.f36658d = j0Var;
        this.f36659e = job;
    }

    @Override // ks.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f36658d.collect(flowCollector, continuation);
    }

    @Override // ls.q
    public Flow g(CoroutineContext coroutineContext, int i10, js.a aVar) {
        return l0.d(this, coroutineContext, i10, aVar);
    }

    @Override // ks.j0
    public Object getValue() {
        return this.f36658d.getValue();
    }
}
