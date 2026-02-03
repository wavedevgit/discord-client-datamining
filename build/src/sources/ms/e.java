package ms;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.channels.ProducerScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class e extends ns.e {

    /* renamed from: o  reason: collision with root package name */
    private final Function2 f39154o;

    public e(Function2 function2, CoroutineContext coroutineContext, int i10, ls.a aVar) {
        super(coroutineContext, i10, aVar);
        this.f39154o = function2;
    }

    static /* synthetic */ Object n(e eVar, ProducerScope producerScope, Continuation continuation) {
        Object invoke = eVar.f39154o.invoke(producerScope, continuation);
        if (invoke == rr.b.f()) {
            return invoke;
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ns.e
    public Object f(ProducerScope producerScope, Continuation continuation) {
        return n(this, producerScope, continuation);
    }

    @Override // ns.e
    public String toString() {
        return "block[" + this.f39154o + "] -> " + super.toString();
    }
}
