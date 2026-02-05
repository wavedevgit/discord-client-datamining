package ms;

import kotlin.collections.ArrayDeque;
import kotlin.jvm.internal.LongCompanionObject;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p0 extends CoroutineDispatcher {

    /* renamed from: i  reason: collision with root package name */
    private long f38936i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f38937o;

    /* renamed from: p  reason: collision with root package name */
    private ArrayDeque f38938p;

    public static /* synthetic */ void h2(p0 p0Var, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                z10 = false;
            }
            p0Var.f2(z10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: decrementUseCount");
    }

    private final long i2(boolean z10) {
        if (z10) {
            return 4294967296L;
        }
        return 1L;
    }

    public static /* synthetic */ void q2(p0 p0Var, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                z10 = false;
            }
            p0Var.p2(z10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: incrementUseCount");
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public final CoroutineDispatcher b2(int i10, String str) {
        rs.m.a(i10);
        return rs.m.b(this, str);
    }

    public final void f2(boolean z10) {
        long i22 = this.f38936i - i2(z10);
        this.f38936i = i22;
        if (i22 <= 0 && this.f38937o) {
            shutdown();
        }
    }

    public final void j2(kotlinx.coroutines.m mVar) {
        ArrayDeque arrayDeque = this.f38938p;
        if (arrayDeque == null) {
            arrayDeque = new ArrayDeque();
            this.f38938p = arrayDeque;
        }
        arrayDeque.addLast(mVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long o2() {
        ArrayDeque arrayDeque = this.f38938p;
        if (arrayDeque == null || arrayDeque.isEmpty()) {
            return LongCompanionObject.MAX_VALUE;
        }
        return 0L;
    }

    public final void p2(boolean z10) {
        this.f38936i += i2(z10);
        if (!z10) {
            this.f38937o = true;
        }
    }

    public final boolean r2() {
        if (this.f38936i >= i2(true)) {
            return true;
        }
        return false;
    }

    public final boolean s2() {
        ArrayDeque arrayDeque = this.f38938p;
        if (arrayDeque != null) {
            return arrayDeque.isEmpty();
        }
        return true;
    }

    public abstract void shutdown();

    public abstract long t2();

    public final boolean u2() {
        kotlinx.coroutines.m mVar;
        ArrayDeque arrayDeque = this.f38938p;
        if (arrayDeque == null || (mVar = (kotlinx.coroutines.m) arrayDeque.o()) == null) {
            return false;
        }
        mVar.run();
        return true;
    }

    public boolean v2() {
        return false;
    }
}
