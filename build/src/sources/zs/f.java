package zs;

import android.os.Handler;
import android.os.Looper;
import java.util.concurrent.CancellationException;
import kotlin.Unit;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.k;
import kotlinx.coroutines.z;
import ys.e1;
import ys.m0;
import ys.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends g implements k {

    /* renamed from: i  reason: collision with root package name */
    private final Handler f57689i;

    /* renamed from: o  reason: collision with root package name */
    private final String f57690o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f57691p;

    /* renamed from: q  reason: collision with root package name */
    private final f f57692q;

    private f(Handler handler, String str, boolean z10) {
        super(null);
        this.f57689i = handler;
        this.f57690o = str;
        this.f57691p = z10;
        this.f57692q = z10 ? this : new f(handler, str, true);
    }

    private final void g2(CoroutineContext coroutineContext, Runnable runnable) {
        z.c(coroutineContext, new CancellationException("The task was rejected, the handler underlying the dispatcher '" + this + "' was closed"));
        m0.b().b1(coroutineContext, runnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m2(f fVar, Runnable runnable) {
        fVar.f57689i.removeCallbacks(runnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o2(CancellableContinuation cancellableContinuation, f fVar) {
        cancellableContinuation.t(fVar, Unit.f32556a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t2(f fVar, Runnable runnable, Throwable th2) {
        fVar.f57689i.removeCallbacks(runnable);
        return Unit.f32556a;
    }

    @Override // kotlinx.coroutines.k
    public n0 C0(long j10, final Runnable runnable, CoroutineContext coroutineContext) {
        if (this.f57689i.postDelayed(runnable, kotlin.ranges.d.j(j10, 4611686018427387903L))) {
            return new n0() { // from class: zs.c
                @Override // ys.n0
                public final void dispose() {
                    f.m2(f.this, runnable);
                }
            };
        }
        g2(coroutineContext, runnable);
        return e1.f56360d;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void b1(CoroutineContext coroutineContext, Runnable runnable) {
        if (!this.f57689i.post(runnable)) {
            g2(coroutineContext, runnable);
        }
    }

    public boolean equals(Object obj) {
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (fVar.f57689i == this.f57689i && fVar.f57691p == this.f57691p) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int identityHashCode = System.identityHashCode(this.f57689i);
        if (this.f57691p) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return identityHashCode ^ i10;
    }

    @Override // ys.c1
    /* renamed from: l2 */
    public f P1() {
        return this.f57692q;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String Y1 = Y1();
        if (Y1 == null) {
            String str = this.f57690o;
            if (str == null) {
                str = this.f57689i.toString();
            }
            if (this.f57691p) {
                return str + ".immediate";
            }
            return str;
        }
        return Y1;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public boolean x1(CoroutineContext coroutineContext) {
        if (this.f57691p && Intrinsics.areEqual(Looper.myLooper(), this.f57689i.getLooper())) {
            return false;
        }
        return true;
    }

    @Override // kotlinx.coroutines.k
    public void z(long j10, final CancellableContinuation cancellableContinuation) {
        final Runnable runnable = new Runnable() { // from class: zs.d
            @Override // java.lang.Runnable
            public final void run() {
                f.o2(CancellableContinuation.this, this);
            }
        };
        if (this.f57689i.postDelayed(runnable, kotlin.ranges.d.j(j10, 4611686018427387903L))) {
            cancellableContinuation.c(new Function1() { // from class: zs.e
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit t22;
                    t22 = f.t2(f.this, runnable, (Throwable) obj);
                    return t22;
                }
            });
        } else {
            g2(cancellableContinuation.getContext(), runnable);
        }
    }

    public /* synthetic */ f(Handler handler, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(handler, (i10 & 2) != 0 ? null : str);
    }

    public f(Handler handler, String str) {
        this(handler, str, false);
    }
}
