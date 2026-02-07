package ts;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f50916i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f50917o;

    /* renamed from: p  reason: collision with root package name */
    private final String f50918p;

    public w(CoroutineDispatcher coroutineDispatcher, String str) {
        kotlinx.coroutines.k kVar;
        if (coroutineDispatcher instanceof kotlinx.coroutines.k) {
            kVar = (kotlinx.coroutines.k) coroutineDispatcher;
        } else {
            kVar = null;
        }
        this.f50916i = kVar == null ? os.f0.a() : kVar;
        this.f50917o = coroutineDispatcher;
        this.f50918p = str;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void D1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f50917o.D1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void T1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f50917o.T1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public boolean V1(CoroutineContext coroutineContext) {
        return this.f50917o.V1(coroutineContext);
    }

    @Override // kotlinx.coroutines.k
    public os.n0 Y(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f50916i.Y(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return this.f50918p;
    }

    @Override // kotlinx.coroutines.k
    public void y(long j10, CancellableContinuation cancellableContinuation) {
        this.f50916i.y(j10, cancellableContinuation);
    }
}
