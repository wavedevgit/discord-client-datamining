package ys;

import kotlin.coroutines.Continuation;
import kotlinx.coroutines.CompletableDeferred;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p extends kotlinx.coroutines.b0 implements CompletableDeferred {
    public p(Job job) {
        super(true);
        k0(job);
    }

    @Override // kotlinx.coroutines.CompletableDeferred
    public boolean G0(Throwable th2) {
        return q0(new r(th2, false, 2, null));
    }

    @Override // kotlinx.coroutines.CompletableDeferred
    public boolean H0(Object obj) {
        return q0(obj);
    }

    @Override // ys.g0
    public Object Q(Continuation continuation) {
        Object G = G(continuation);
        gs.b.f();
        return G;
    }

    @Override // kotlinx.coroutines.b0
    public boolean b0() {
        return true;
    }

    @Override // ys.g0
    public Object p() {
        return W();
    }
}
