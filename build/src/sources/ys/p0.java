package ys;

import kotlin.collections.ArrayDeque;
import kotlin.jvm.internal.LongCompanionObject;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p0 extends CoroutineDispatcher {

    /* renamed from: i  reason: collision with root package name */
    private long f56378i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f56379o;

    /* renamed from: p  reason: collision with root package name */
    private ArrayDeque f56380p;

    public static /* synthetic */ void Y1(p0 p0Var, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                z10 = false;
            }
            p0Var.P1(z10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: decrementUseCount");
    }

    private final long a2(boolean z10) {
        if (z10) {
            return 4294967296L;
        }
        return 1L;
    }

    public static /* synthetic */ void l2(p0 p0Var, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                z10 = false;
            }
            p0Var.g2(z10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: incrementUseCount");
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public final CoroutineDispatcher B1(int i10, String str) {
        dt.m.a(i10);
        return dt.m.b(this, str);
    }

    public final void P1(boolean z10) {
        long a22 = this.f56378i - a2(z10);
        this.f56378i = a22;
        if (a22 <= 0 && this.f56379o) {
            shutdown();
        }
    }

    public final void c2(kotlinx.coroutines.m mVar) {
        ArrayDeque arrayDeque = this.f56380p;
        if (arrayDeque == null) {
            arrayDeque = new ArrayDeque();
            this.f56380p = arrayDeque;
        }
        arrayDeque.addLast(mVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long f2() {
        ArrayDeque arrayDeque = this.f56380p;
        if (arrayDeque == null || arrayDeque.isEmpty()) {
            return LongCompanionObject.MAX_VALUE;
        }
        return 0L;
    }

    public final void g2(boolean z10) {
        this.f56378i += a2(z10);
        if (!z10) {
            this.f56379o = true;
        }
    }

    public final boolean m2() {
        if (this.f56378i >= a2(true)) {
            return true;
        }
        return false;
    }

    public final boolean o2() {
        ArrayDeque arrayDeque = this.f56380p;
        if (arrayDeque != null) {
            return arrayDeque.isEmpty();
        }
        return true;
    }

    public abstract void shutdown();

    public abstract long t2();

    public final boolean u2() {
        kotlinx.coroutines.m mVar;
        ArrayDeque arrayDeque = this.f56380p;
        if (arrayDeque == null || (mVar = (kotlinx.coroutines.m) arrayDeque.p()) == null) {
            return false;
        }
        mVar.run();
        return true;
    }

    public boolean v2() {
        return false;
    }
}
