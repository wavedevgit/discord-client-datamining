package ms;

import kotlin.coroutines.Continuation;
import kotlinx.coroutines.CompletableDeferred;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p extends kotlinx.coroutines.b0 implements CompletableDeferred {
    public p(Job job) {
        super(true);
        i0(job);
    }

    @Override // kotlinx.coroutines.CompletableDeferred
    public boolean I0(Throwable th2) {
        return o0(new r(th2, false, 2, null));
    }

    @Override // kotlinx.coroutines.CompletableDeferred
    public boolean K0(Object obj) {
        return o0(obj);
    }

    @Override // ms.g0
    public Object V(Continuation continuation) {
        Object D = D(continuation);
        ur.b.f();
        return D;
    }

    @Override // kotlinx.coroutines.b0
    public boolean Z() {
        return true;
    }

    @Override // ms.g0
    public Object y() {
        return T();
    }
}
