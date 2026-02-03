package kotlinx.coroutines;

import java.util.concurrent.Future;
import js.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n implements n0 {

    /* renamed from: d  reason: collision with root package name */
    private final Future f35526d;

    public n(Future future) {
        this.f35526d = future;
    }

    @Override // js.n0
    public void dispose() {
        this.f35526d.cancel(false);
    }

    public String toString() {
        return "DisposableFutureHandle[" + this.f35526d + ']';
    }
}
