package ys;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h0 extends kotlinx.coroutines.a implements g0 {
    public h0(CoroutineContext coroutineContext, boolean z10) {
        super(coroutineContext, true, z10);
    }

    static /* synthetic */ Object c1(h0 h0Var, Continuation continuation) {
        Object G = h0Var.G(continuation);
        gs.b.f();
        return G;
    }

    @Override // ys.g0
    public Object Q(Continuation continuation) {
        return c1(this, continuation);
    }

    @Override // ys.g0
    public Object p() {
        return W();
    }
}
