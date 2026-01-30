package gs;

import java.util.concurrent.locks.LockSupport;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e extends kotlinx.coroutines.a {

    /* renamed from: o  reason: collision with root package name */
    private final Thread f27167o;

    /* renamed from: p  reason: collision with root package name */
    private final p0 f27168p;

    public e(CoroutineContext coroutineContext, Thread thread, p0 p0Var) {
        super(coroutineContext, true, true);
        this.f27167o = thread;
        this.f27168p = p0Var;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlinx.coroutines.b0
    public void C(Object obj) {
        if (!Intrinsics.areEqual(Thread.currentThread(), this.f27167o)) {
            Thread thread = this.f27167o;
            b.a();
            LockSupport.unpark(thread);
        }
    }

    public final Object W0() {
        long j10;
        b.a();
        try {
            p0 p0Var = this.f27168p;
            r rVar = null;
            if (p0Var != null) {
                p0.q2(p0Var, false, 1, null);
            }
            while (true) {
                p0 p0Var2 = this.f27168p;
                if (p0Var2 != null) {
                    j10 = p0Var2.t2();
                } else {
                    j10 = LongCompanionObject.MAX_VALUE;
                }
                if (isCompleted()) {
                    break;
                }
                b.a();
                LockSupport.parkNanos(this, j10);
                if (Thread.interrupted()) {
                    G(new InterruptedException());
                }
            }
            p0 p0Var3 = this.f27168p;
            if (p0Var3 != null) {
                p0.h2(p0Var3, false, 1, null);
            }
            b.a();
            Object h10 = kotlinx.coroutines.c0.h(c0());
            if (h10 instanceof r) {
                rVar = (r) h10;
            }
            if (rVar == null) {
                return h10;
            }
            throw rVar.f27194a;
        } catch (Throwable th2) {
            b.a();
            throw th2;
        }
    }

    @Override // kotlinx.coroutines.b0
    protected boolean j0() {
        return true;
    }
}
