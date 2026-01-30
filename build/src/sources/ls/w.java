package ls;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f37501i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f37502o;

    /* renamed from: p  reason: collision with root package name */
    private final String f37503p;

    public w(CoroutineDispatcher coroutineDispatcher, String str) {
        kotlinx.coroutines.k kVar;
        if (coroutineDispatcher instanceof kotlinx.coroutines.k) {
            kVar = (kotlinx.coroutines.k) coroutineDispatcher;
        } else {
            kVar = null;
        }
        this.f37501i = kVar == null ? gs.f0.a() : kVar;
        this.f37502o = coroutineDispatcher;
        this.f37503p = str;
    }

    @Override // kotlinx.coroutines.k
    public gs.n0 D0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f37501i.D0(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f37502o.E1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.k
    public void F(long j10, CancellableContinuation cancellableContinuation) {
        this.f37501i.F(j10, cancellableContinuation);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f37502o.U1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public boolean W1(CoroutineContext coroutineContext) {
        return this.f37502o.W1(coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return this.f37503p;
    }
}
