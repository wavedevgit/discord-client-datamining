package ps;

import kotlin.coroutines.Continuation;
import kotlinx.coroutines.CompletableDeferred;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p extends kotlinx.coroutines.b0 implements CompletableDeferred {
    public p(Job job) {
        super(true);
        j0(job);
    }

    @Override // kotlinx.coroutines.CompletableDeferred
    public boolean G0(Throwable th2) {
        return p0(new r(th2, false, 2, null));
    }

    @Override // kotlinx.coroutines.CompletableDeferred
    public boolean H0(Object obj) {
        return p0(obj);
    }

    @Override // ps.g0
    public Object I(Continuation continuation) {
        Object G = G(continuation);
        xr.b.f();
        return G;
    }

    @Override // kotlinx.coroutines.b0
    public boolean a0() {
        return true;
    }

    @Override // ps.g0
    public Object p() {
        return W();
    }
}
