package kotlinx.coroutines;

import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h0 extends CoroutineDispatcher {

    /* renamed from: i  reason: collision with root package name */
    public static final h0 f34820i = new h0();

    private h0() {
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public boolean U1(CoroutineContext coroutineContext) {
        return false;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher Z1(int i10, String str) {
        throw new UnsupportedOperationException("limitedParallelism is not supported for Dispatchers.Unconfined");
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return "Dispatchers.Unconfined";
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void z1(CoroutineContext coroutineContext, Runnable runnable) {
        i0 i0Var = (i0) coroutineContext.m(i0.f34821i);
        if (i0Var != null) {
            i0Var.f34822e = true;
            return;
        }
        throw new UnsupportedOperationException("Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.");
    }
}
