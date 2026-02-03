package kotlinx.coroutines;

import hs.n0;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface k {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static n0 a(k kVar, long j10, Runnable runnable, CoroutineContext coroutineContext) {
            return hs.f0.a().E0(j10, runnable, coroutineContext);
        }
    }

    n0 E0(long j10, Runnable runnable, CoroutineContext coroutineContext);

    void F(long j10, CancellableContinuation cancellableContinuation);
}
