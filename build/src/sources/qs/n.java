package qs;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n extends rs.a0 {
    public n(CoroutineContext coroutineContext, Continuation continuation) {
        super(coroutineContext, continuation);
    }

    @Override // kotlinx.coroutines.b0
    public boolean O(Throwable th2) {
        if (th2 instanceof k) {
            return true;
        }
        return H(th2);
    }
}
