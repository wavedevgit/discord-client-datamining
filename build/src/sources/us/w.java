package us;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w extends CoroutineDispatcher implements kotlinx.coroutines.k {

    /* renamed from: i  reason: collision with root package name */
    private final /* synthetic */ kotlinx.coroutines.k f51821i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineDispatcher f51822o;

    /* renamed from: p  reason: collision with root package name */
    private final String f51823p;

    public w(CoroutineDispatcher coroutineDispatcher, String str) {
        kotlinx.coroutines.k kVar;
        if (coroutineDispatcher instanceof kotlinx.coroutines.k) {
            kVar = (kotlinx.coroutines.k) coroutineDispatcher;
        } else {
            kVar = null;
        }
        this.f51821i = kVar == null ? ps.f0.a() : kVar;
        this.f51822o = coroutineDispatcher;
        this.f51823p = str;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void S1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f51822o.S1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public boolean U1(CoroutineContext coroutineContext) {
        return this.f51822o.U1(coroutineContext);
    }

    @Override // kotlinx.coroutines.k
    public ps.n0 Z(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return this.f51821i.Z(j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return this.f51823p;
    }

    @Override // kotlinx.coroutines.k
    public void y(long j10, CancellableContinuation cancellableContinuation) {
        this.f51821i.y(j10, cancellableContinuation);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void z1(CoroutineContext coroutineContext, Runnable runnable) {
        this.f51822o.z1(coroutineContext, runnable);
    }
}
