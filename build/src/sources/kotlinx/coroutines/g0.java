package kotlinx.coroutines;

import kotlin.Unit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f35604d;

    /* renamed from: e  reason: collision with root package name */
    private final CancellableContinuation f35605e;

    public g0(CoroutineDispatcher coroutineDispatcher, CancellableContinuation cancellableContinuation) {
        this.f35604d = coroutineDispatcher;
        this.f35605e = cancellableContinuation;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f35605e.t(this.f35604d, Unit.f32556a);
    }
}
