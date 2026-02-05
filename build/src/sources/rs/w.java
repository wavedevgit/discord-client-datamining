package rs;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f49005i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f49006o;

    /* renamed from: p  reason: collision with root package name */
    private final String f49007p;

    public w(CoroutineDispatcher coroutineDispatcher, String str) {
        kotlinx.coroutines.k kVar;
        if (coroutineDispatcher instanceof kotlinx.coroutines.k) {
            kVar = (kotlinx.coroutines.k) coroutineDispatcher;
        } else {
            kVar = null;
        }
        this.f49005i = kVar == null ? ms.f0.a() : kVar;
        this.f49006o = coroutineDispatcher;
        this.f49007p = str;
    }

    @Override // kotlinx.coroutines.k
    public ms.n0 D0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f49005i.D0(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f49006o.E1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.k
    public void F(long j10, CancellableContinuation cancellableContinuation) {
        this.f49005i.F(j10, cancellableContinuation);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f49006o.U1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public boolean W1(CoroutineContext coroutineContext) {
        return this.f49006o.W1(coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return this.f49007p;
    }
}
