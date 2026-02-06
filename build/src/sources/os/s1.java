package os;

import kotlin.coroutines.Continuation;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s1 extends ts.a0 implements Runnable {

    /* renamed from: p  reason: collision with root package name */
    public final long f43529p;

    public s1(long j10, Continuation continuation) {
        super(continuation.getContext(), continuation);
        this.f43529p = j10;
    }

    @Override // kotlinx.coroutines.a, kotlinx.coroutines.b0
    public String r0() {
        return super.r0() + "(timeMillis=" + this.f43529p + ')';
    }

    @Override // java.lang.Runnable
    public void run() {
        K(t1.a(this.f43529p, i0.c(getContext()), this));
    }
}
