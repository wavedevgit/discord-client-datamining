package dt;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f21923i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f21924o;

    /* renamed from: p  reason: collision with root package name */
    private final String f21925p;

    public w(CoroutineDispatcher coroutineDispatcher, String str) {
        kotlinx.coroutines.k kVar;
        if (coroutineDispatcher instanceof kotlinx.coroutines.k) {
            kVar = (kotlinx.coroutines.k) coroutineDispatcher;
        } else {
            kVar = null;
        }
        this.f21923i = kVar == null ? ys.f0.a() : kVar;
        this.f21924o = coroutineDispatcher;
        this.f21925p = str;
    }

    @Override // kotlinx.coroutines.k
    public ys.n0 C0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f21923i.C0(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void b1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f21924o.b1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return this.f21925p;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void w1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f21924o.w1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public boolean x1(CoroutineContext coroutineContext) {
        return this.f21924o.x1(coroutineContext);
    }

    @Override // kotlinx.coroutines.k
    public void z(long j10, CancellableContinuation cancellableContinuation) {
        this.f21923i.z(j10, cancellableContinuation);
    }
}
