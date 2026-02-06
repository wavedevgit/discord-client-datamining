package ts;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f50868i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f50869o;

    /* renamed from: p  reason: collision with root package name */
    private final String f50870p;

    public w(CoroutineDispatcher coroutineDispatcher, String str) {
        kotlinx.coroutines.k kVar;
        if (coroutineDispatcher instanceof kotlinx.coroutines.k) {
            kVar = (kotlinx.coroutines.k) coroutineDispatcher;
        } else {
            kVar = null;
        }
        this.f50868i = kVar == null ? os.f0.a() : kVar;
        this.f50869o = coroutineDispatcher;
        this.f50870p = str;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void D1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f50869o.D1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void T1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f50869o.T1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public boolean V1(CoroutineContext coroutineContext) {
        return this.f50869o.V1(coroutineContext);
    }

    @Override // kotlinx.coroutines.k
    public os.n0 Y(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f50868i.Y(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return this.f50870p;
    }

    @Override // kotlinx.coroutines.k
    public void y(long j10, CancellableContinuation cancellableContinuation) {
        this.f50868i.y(j10, cancellableContinuation);
    }
}
