package js;

import kotlin.coroutines.Continuation;
import kotlinx.coroutines.CompletableDeferred;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p extends kotlinx.coroutines.b0 implements CompletableDeferred {
    public p(Job job) {
        super(true);
        h0(job);
    }

    @Override // js.g0
    public Object B() {
        return T();
    }

    @Override // kotlinx.coroutines.CompletableDeferred
    public boolean I0(Throwable th2) {
        return n0(new r(th2, false, 2, null));
    }

    @Override // kotlinx.coroutines.CompletableDeferred
    public boolean J0(Object obj) {
        return n0(obj);
    }

    @Override // js.g0
    public Object V(Continuation continuation) {
        Object D = D(continuation);
        rr.b.f();
        return D;
    }

    @Override // kotlinx.coroutines.b0
    public boolean Y() {
        return true;
    }
}
