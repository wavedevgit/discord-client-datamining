package os;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f44556i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f44557o;

    /* renamed from: p  reason: collision with root package name */
    private final String f44558p;

    public w(CoroutineDispatcher coroutineDispatcher, String str) {
        kotlinx.coroutines.k kVar;
        if (coroutineDispatcher instanceof kotlinx.coroutines.k) {
            kVar = (kotlinx.coroutines.k) coroutineDispatcher;
        } else {
            kVar = null;
        }
        this.f44556i = kVar == null ? js.f0.a() : kVar;
        this.f44557o = coroutineDispatcher;
        this.f44558p = str;
    }

    @Override // kotlinx.coroutines.k
    public js.n0 D0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f44556i.D0(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f44557o.E1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.k
    public void F(long j10, CancellableContinuation cancellableContinuation) {
        this.f44556i.F(j10, cancellableContinuation);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f44557o.U1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public boolean W1(CoroutineContext coroutineContext) {
        return this.f44557o.W1(coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return this.f44558p;
    }
}
