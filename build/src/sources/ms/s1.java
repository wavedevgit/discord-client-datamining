package ms;

import kotlin.coroutines.Continuation;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s1 extends rs.a0 implements Runnable {

    /* renamed from: p  reason: collision with root package name */
    public final long f38947p;

    public s1(long j10, Continuation continuation) {
        super(continuation.getContext(), continuation);
        this.f38947p = j10;
    }

    @Override // kotlinx.coroutines.a, kotlinx.coroutines.b0
    public String q0() {
        return super.q0() + "(timeMillis=" + this.f38947p + ')';
    }

    @Override // java.lang.Runnable
    public void run() {
        G(t1.a(this.f38947p, i0.c(getContext()), this));
    }
}
