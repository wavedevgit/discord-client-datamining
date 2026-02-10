package kotlinx.coroutines;

import kotlin.Unit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f34813d;

    /* renamed from: e  reason: collision with root package name */
    private final CancellableContinuation f34814e;

    public g0(CoroutineDispatcher coroutineDispatcher, CancellableContinuation cancellableContinuation) {
        this.f34813d = coroutineDispatcher;
        this.f34814e = cancellableContinuation;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f34814e.t(this.f34813d, Unit.f31765a);
    }
}
