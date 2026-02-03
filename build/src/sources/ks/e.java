package ks;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.channels.ProducerScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class e extends ls.e {

    /* renamed from: o  reason: collision with root package name */
    private final Function2 f36427o;

    public e(Function2 function2, CoroutineContext coroutineContext, int i10, js.a aVar) {
        super(coroutineContext, i10, aVar);
        this.f36427o = function2;
    }

    static /* synthetic */ Object n(e eVar, ProducerScope producerScope, Continuation continuation) {
        Object invoke = eVar.f36427o.invoke(producerScope, continuation);
        if (invoke == pr.b.f()) {
            return invoke;
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ls.e
    public Object e(ProducerScope producerScope, Continuation continuation) {
        return n(this, producerScope, continuation);
    }

    @Override // ls.e
    public String toString() {
        return "block[" + this.f36427o + "] -> " + super.toString();
    }
}
