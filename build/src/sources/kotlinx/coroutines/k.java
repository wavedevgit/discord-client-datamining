package kotlinx.coroutines;

import kotlin.coroutines.CoroutineContext;
import ps.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface k {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static n0 a(k kVar, long j10, Runnable runnable, CoroutineContext coroutineContext) {
            return ps.f0.a().Z(j10, runnable, coroutineContext);
        }
    }

    n0 Z(long j10, Runnable runnable, CoroutineContext coroutineContext);

    void y(long j10, CancellableContinuation cancellableContinuation);
}
