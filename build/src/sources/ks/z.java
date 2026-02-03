package ks;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z extends a {

    /* renamed from: d  reason: collision with root package name */
    private final Function2 f36660d;

    public z(Function2 function2) {
        this.f36660d = function2;
    }

    @Override // ks.a
    public Object a(FlowCollector flowCollector, Continuation continuation) {
        Object invoke = this.f36660d.invoke(flowCollector, continuation);
        if (invoke == pr.b.f()) {
            return invoke;
        }
        return Unit.f33074a;
    }
}
