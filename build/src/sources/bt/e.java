package bt;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.channels.ProducerScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class e extends ct.e {

    /* renamed from: o  reason: collision with root package name */
    private final Function2 f7554o;

    public e(Function2 function2, CoroutineContext coroutineContext, int i10, at.a aVar) {
        super(coroutineContext, i10, aVar);
        this.f7554o = function2;
    }

    static /* synthetic */ Object n(e eVar, ProducerScope producerScope, Continuation continuation) {
        Object invoke = eVar.f7554o.invoke(producerScope, continuation);
        if (invoke == gs.b.f()) {
            return invoke;
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ct.e
    public Object e(ProducerScope producerScope, Continuation continuation) {
        return n(this, producerScope, continuation);
    }

    @Override // ct.e
    public String toString() {
        return "block[" + this.f7554o + "] -> " + super.toString();
    }
}
