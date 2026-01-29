package gs;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h0 extends kotlinx.coroutines.a implements g0 {
    public h0(CoroutineContext coroutineContext, boolean z10) {
        super(coroutineContext, true, z10);
    }

    static /* synthetic */ Object W0(h0 h0Var, Continuation continuation) {
        Object D = h0Var.D(continuation);
        or.b.f();
        return D;
    }

    @Override // gs.g0
    public Object B() {
        return T();
    }

    @Override // gs.g0
    public Object V(Continuation continuation) {
        return W0(this, continuation);
    }
}
