package js;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.channels.ProducerScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class e extends ks.e {

    /* renamed from: o  reason: collision with root package name */
    private final Function2 f32492o;

    public e(Function2 function2, CoroutineContext coroutineContext, int i10, is.a aVar) {
        super(coroutineContext, i10, aVar);
        this.f32492o = function2;
    }

    static /* synthetic */ Object n(e eVar, ProducerScope producerScope, Continuation continuation) {
        Object invoke = eVar.f32492o.invoke(producerScope, continuation);
        if (invoke == or.b.f()) {
            return invoke;
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ks.e
    public Object f(ProducerScope producerScope, Continuation continuation) {
        return n(this, producerScope, continuation);
    }

    @Override // ks.e
    public String toString() {
        return "block[" + this.f32492o + "] -> " + super.toString();
    }
}
