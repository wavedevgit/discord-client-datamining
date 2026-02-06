package kotlinx.coroutines;

import kotlin.Unit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f35056d;

    /* renamed from: e  reason: collision with root package name */
    private final CancellableContinuation f35057e;

    public g0(CoroutineDispatcher coroutineDispatcher, CancellableContinuation cancellableContinuation) {
        this.f35056d = coroutineDispatcher;
        this.f35057e = cancellableContinuation;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f35057e.t(this.f35056d, Unit.f32008a);
    }
}
