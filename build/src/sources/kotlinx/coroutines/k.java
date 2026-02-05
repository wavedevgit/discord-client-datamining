package kotlinx.coroutines;

import kotlin.coroutines.CoroutineContext;
import ms.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface k {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static n0 a(k kVar, long j10, Runnable runnable, CoroutineContext coroutineContext) {
            return ms.f0.a().D0(j10, runnable, coroutineContext);
        }
    }

    n0 D0(long j10, Runnable runnable, CoroutineContext coroutineContext);

    void F(long j10, CancellableContinuation cancellableContinuation);
}
