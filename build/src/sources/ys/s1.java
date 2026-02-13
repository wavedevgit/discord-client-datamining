package ys;

import kotlin.coroutines.Continuation;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s1 extends dt.a0 implements Runnable {

    /* renamed from: p  reason: collision with root package name */
    public final long f56389p;

    public s1(long j10, Continuation continuation) {
        super(continuation.getContext(), continuation);
        this.f56389p = j10;
    }

    @Override // java.lang.Runnable
    public void run() {
        K(t1.a(this.f56389p, i0.c(getContext()), this));
    }

    @Override // kotlinx.coroutines.a, kotlinx.coroutines.b0
    public String s0() {
        return super.s0() + "(timeMillis=" + this.f56389p + ')';
    }
}
