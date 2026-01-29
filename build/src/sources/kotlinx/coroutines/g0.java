package kotlinx.coroutines;

import kotlin.Unit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f36330d;

    /* renamed from: e  reason: collision with root package name */
    private final CancellableContinuation f36331e;

    public g0(CoroutineDispatcher coroutineDispatcher, CancellableContinuation cancellableContinuation) {
        this.f36330d = coroutineDispatcher;
        this.f36331e = cancellableContinuation;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f36331e.q(this.f36330d, Unit.f33282a);
    }
}
