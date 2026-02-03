package hs;

import kotlin.coroutines.Continuation;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s1 extends ms.a0 implements Runnable {

    /* renamed from: p  reason: collision with root package name */
    public final long f27945p;

    public s1(long j10, Continuation continuation) {
        super(continuation.getContext(), continuation);
        this.f27945p = j10;
    }

    @Override // kotlinx.coroutines.a, kotlinx.coroutines.b0
    public String p0() {
        return super.p0() + "(timeMillis=" + this.f27945p + ')';
    }

    @Override // java.lang.Runnable
    public void run() {
        G(t1.a(this.f27945p, i0.c(getContext()), this));
    }
}
