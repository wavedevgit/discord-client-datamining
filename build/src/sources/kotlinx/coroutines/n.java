package kotlinx.coroutines;

import hs.n0;
import java.util.concurrent.Future;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n implements n0 {

    /* renamed from: d  reason: collision with root package name */
    private final Future f36136d;

    public n(Future future) {
        this.f36136d = future;
    }

    @Override // hs.n0
    public void dispose() {
        this.f36136d.cancel(false);
    }

    public String toString() {
        return "DisposableFutureHandle[" + this.f36136d + ']';
    }
}
