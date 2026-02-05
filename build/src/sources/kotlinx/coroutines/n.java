package kotlinx.coroutines;

import java.util.concurrent.Future;
import ms.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n implements n0 {

    /* renamed from: d  reason: collision with root package name */
    private final Future f35050d;

    public n(Future future) {
        this.f35050d = future;
    }

    @Override // ms.n0
    public void dispose() {
        this.f35050d.cancel(false);
    }

    public String toString() {
        return "DisposableFutureHandle[" + this.f35050d + ']';
    }
}
