package kotlinx.coroutines;

import gs.n0;
import java.util.concurrent.Future;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n implements n0 {

    /* renamed from: d  reason: collision with root package name */
    private final Future f36344d;

    public n(Future future) {
        this.f36344d = future;
    }

    @Override // gs.n0
    public void dispose() {
        this.f36344d.cancel(false);
    }

    public String toString() {
        return "DisposableFutureHandle[" + this.f36344d + ']';
    }
}
