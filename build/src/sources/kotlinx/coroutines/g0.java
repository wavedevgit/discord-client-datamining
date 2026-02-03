package kotlinx.coroutines;

import kotlin.Unit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f35512d;

    /* renamed from: e  reason: collision with root package name */
    private final CancellableContinuation f35513e;

    public g0(CoroutineDispatcher coroutineDispatcher, CancellableContinuation cancellableContinuation) {
        this.f35512d = coroutineDispatcher;
        this.f35513e = cancellableContinuation;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f35513e.q(this.f35512d, Unit.f32464a);
    }
}
