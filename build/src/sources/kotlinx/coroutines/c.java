package kotlinx.coroutines;

import java.util.concurrent.Future;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class c implements d {

    /* renamed from: d  reason: collision with root package name */
    private final Future f35017d;

    public c(Future future) {
        this.f35017d = future;
    }

    @Override // kotlinx.coroutines.d
    public void c(Throwable th2) {
        this.f35017d.cancel(false);
    }

    public String toString() {
        return "CancelFutureOnCancel[" + this.f35017d + ']';
    }
}
