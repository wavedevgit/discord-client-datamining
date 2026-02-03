package pj;

import java.io.Closeable;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class j0 implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ n f46090d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ j0(n nVar, i0 i0Var) {
        AtomicReference atomicReference;
        boolean z10;
        this.f46090d = nVar;
        atomicReference = nVar.f46125d;
        if (((Thread) atomicReference.getAndSet(Thread.currentThread())) == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.n(z10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
        AtomicReference atomicReference;
        atomicReference = this.f46090d.f46125d;
        atomicReference.set(null);
        this.f46090d.d();
    }
}
