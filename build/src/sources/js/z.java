package js;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z extends a {

    /* renamed from: d  reason: collision with root package name */
    private final Function2 f32725d;

    public z(Function2 function2) {
        this.f32725d = function2;
    }

    @Override // js.a
    public Object c(FlowCollector flowCollector, Continuation continuation) {
        Object invoke = this.f32725d.invoke(flowCollector, continuation);
        if (invoke == or.b.f()) {
            return invoke;
        }
        return Unit.f33282a;
    }
}
