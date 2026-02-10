package ss;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.channels.ProducerScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class e extends ts.e {

    /* renamed from: o  reason: collision with root package name */
    private final Function2 f50125o;

    public e(Function2 function2, CoroutineContext coroutineContext, int i10, rs.a aVar) {
        super(coroutineContext, i10, aVar);
        this.f50125o = function2;
    }

    static /* synthetic */ Object n(e eVar, ProducerScope producerScope, Continuation continuation) {
        Object invoke = eVar.f50125o.invoke(producerScope, continuation);
        if (invoke == xr.b.f()) {
            return invoke;
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ts.e
    public Object e(ProducerScope producerScope, Continuation continuation) {
        return n(this, producerScope, continuation);
    }

    @Override // ts.e
    public String toString() {
        return "block[" + this.f50125o + "] -> " + super.toString();
    }
}
