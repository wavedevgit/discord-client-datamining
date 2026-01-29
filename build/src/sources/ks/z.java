package ks;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements FlowCollector {

    /* renamed from: d  reason: collision with root package name */
    private final is.w f36528d;

    public z(is.w wVar) {
        this.f36528d = wVar;
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        Object u10 = this.f36528d.u(obj, continuation);
        if (u10 == or.b.f()) {
            return u10;
        }
        return Unit.f33282a;
    }
}
