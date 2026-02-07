package kotlinx.coroutines;

import java.util.concurrent.locks.LockSupport;
import kotlinx.coroutines.q;
import os.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r extends p0 {
    protected abstract Thread w2();

    /* JADX INFO: Access modifiers changed from: protected */
    public void x2(long j10, q.c cVar) {
        j.f35114t.L2(j10, cVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void y2() {
        Thread w22 = w2();
        if (Thread.currentThread() != w22) {
            os.b.a();
            LockSupport.unpark(w22);
        }
    }
}
