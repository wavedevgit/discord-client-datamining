package kotlinx.coroutines;

import js.n0;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface k {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static n0 a(k kVar, long j10, Runnable runnable, CoroutineContext coroutineContext) {
            return js.f0.a().D0(j10, runnable, coroutineContext);
        }
    }

    n0 D0(long j10, Runnable runnable, CoroutineContext coroutineContext);

    void F(long j10, CancellableContinuation cancellableContinuation);
}
