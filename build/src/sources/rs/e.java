package rs;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.channels.ProducerScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class e extends ss.e {

    /* renamed from: o  reason: collision with root package name */
    private final Function2 f49252o;

    public e(Function2 function2, CoroutineContext coroutineContext, int i10, qs.a aVar) {
        super(coroutineContext, i10, aVar);
        this.f49252o = function2;
    }

    static /* synthetic */ Object n(e eVar, ProducerScope producerScope, Continuation continuation) {
        Object invoke = eVar.f49252o.invoke(producerScope, continuation);
        if (invoke == wr.b.f()) {
            return invoke;
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ss.e
    public Object e(ProducerScope producerScope, Continuation continuation) {
        return n(this, producerScope, continuation);
    }

    @Override // ss.e
    public String toString() {
        return "block[" + this.f49252o + "] -> " + super.toString();
    }
}
