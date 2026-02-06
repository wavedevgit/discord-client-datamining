package kotlinx.coroutines;

import java.util.concurrent.Future;
import os.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n implements n0 {

    /* renamed from: d  reason: collision with root package name */
    private final Future f35070d;

    public n(Future future) {
        this.f35070d = future;
    }

    @Override // os.n0
    public void dispose() {
        this.f35070d.cancel(false);
    }

    public String toString() {
        return "DisposableFutureHandle[" + this.f35070d + ']';
    }
}
