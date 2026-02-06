package os;

import kotlin.coroutines.Continuation;
import kotlinx.coroutines.CompletableDeferred;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p extends kotlinx.coroutines.b0 implements CompletableDeferred {
    public p(Job job) {
        super(true);
        j0(job);
    }

    @Override // os.g0
    public Object I(Continuation continuation) {
        Object G = G(continuation);
        wr.b.f();
        return G;
    }

    @Override // kotlinx.coroutines.CompletableDeferred
    public boolean J0(Throwable th2) {
        return p0(new r(th2, false, 2, null));
    }

    @Override // kotlinx.coroutines.CompletableDeferred
    public boolean L0(Object obj) {
        return p0(obj);
    }

    @Override // kotlinx.coroutines.b0
    public boolean a0() {
        return true;
    }

    @Override // os.g0
    public Object p() {
        return W();
    }
}
