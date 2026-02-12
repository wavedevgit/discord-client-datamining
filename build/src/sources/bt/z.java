package bt;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z extends a {

    /* renamed from: d  reason: collision with root package name */
    private final Function2 f7787d;

    public z(Function2 function2) {
        this.f7787d = function2;
    }

    @Override // bt.a
    public Object a(FlowCollector flowCollector, Continuation continuation) {
        Object invoke = this.f7787d.invoke(flowCollector, continuation);
        if (invoke == gs.b.f()) {
            return invoke;
        }
        return Unit.f31988a;
    }
}
