package kotlinx.coroutines;

import kotlin.Unit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f36346d;

    /* renamed from: e  reason: collision with root package name */
    private final CancellableContinuation f36347e;

    public g0(CoroutineDispatcher coroutineDispatcher, CancellableContinuation cancellableContinuation) {
        this.f36346d = coroutineDispatcher;
        this.f36347e = cancellableContinuation;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f36347e.q(this.f36346d, Unit.f33298a);
    }
}
