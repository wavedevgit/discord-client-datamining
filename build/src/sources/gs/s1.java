package gs;

import kotlin.coroutines.Continuation;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s1 extends ls.a0 implements Runnable {

    /* renamed from: p  reason: collision with root package name */
    public final long f27182p;

    public s1(long j10, Continuation continuation) {
        super(continuation.getContext(), continuation);
        this.f27182p = j10;
    }

    @Override // kotlinx.coroutines.a, kotlinx.coroutines.b0
    public String p0() {
        return super.p0() + "(timeMillis=" + this.f27182p + ')';
    }

    @Override // java.lang.Runnable
    public void run() {
        G(t1.a(this.f27182p, i0.c(getContext()), this));
    }
}
