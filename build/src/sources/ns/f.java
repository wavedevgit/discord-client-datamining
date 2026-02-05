package ns;

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
import ms.e1;
import ms.m0;
import ms.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends g implements k {

    /* renamed from: i  reason: collision with root package name */
    private final Handler f41967i;

    /* renamed from: o  reason: collision with root package name */
    private final String f41968o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f41969p;

    /* renamed from: q  reason: collision with root package name */
    private final f f41970q;

    private f(Handler handler, String str, boolean z10) {
        super(null);
        this.f41967i = handler;
        this.f41968o = str;
        this.f41969p = z10;
        this.f41970q = z10 ? this : new f(handler, str, true);
    }

    private final void p2(CoroutineContext coroutineContext, Runnable runnable) {
        z.c(coroutineContext, new CancellationException("The task was rejected, the handler underlying the dispatcher '" + this + "' was closed"));
        m0.b().E1(coroutineContext, runnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r2(f fVar, Runnable runnable) {
        fVar.f41967i.removeCallbacks(runnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s2(CancellableContinuation cancellableContinuation, f fVar) {
        cancellableContinuation.r(fVar, Unit.f31988a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t2(f fVar, Runnable runnable, Throwable th2) {
        fVar.f41967i.removeCallbacks(runnable);
        return Unit.f31988a;
    }

    @Override // kotlinx.coroutines.k
    public n0 D0(long j10, final Runnable runnable, CoroutineContext coroutineContext) {
        if (this.f41967i.postDelayed(runnable, kotlin.ranges.d.j(j10, 4611686018427387903L))) {
            return new n0() { // from class: ns.c
                @Override // ms.n0
                public final void dispose() {
                    f.r2(f.this, runnable);
                }
            };
        }
        p2(coroutineContext, runnable);
        return e1.f38918d;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        if (!this.f41967i.post(runnable)) {
            p2(coroutineContext, runnable);
        }
    }

    @Override // kotlinx.coroutines.k
    public void F(long j10, final CancellableContinuation cancellableContinuation) {
        final Runnable runnable = new Runnable() { // from class: ns.d
            @Override // java.lang.Runnable
            public final void run() {
                f.s2(CancellableContinuation.this, this);
            }
        };
        if (this.f41967i.postDelayed(runnable, kotlin.ranges.d.j(j10, 4611686018427387903L))) {
            cancellableContinuation.c(new Function1() { // from class: ns.e
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit t22;
                    t22 = f.t2(f.this, runnable, (Throwable) obj);
                    return t22;
                }
            });
        } else {
            p2(cancellableContinuation.getContext(), runnable);
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public boolean W1(CoroutineContext coroutineContext) {
        if (this.f41969p && Intrinsics.areEqual(Looper.myLooper(), this.f41967i.getLooper())) {
            return false;
        }
        return true;
    }

    public boolean equals(Object obj) {
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (fVar.f41967i == this.f41967i && fVar.f41969p == this.f41969p) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int identityHashCode = System.identityHashCode(this.f41967i);
        if (this.f41969p) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return identityHashCode ^ i10;
    }

    @Override // ms.c1
    /* renamed from: q2 */
    public f f2() {
        return this.f41970q;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String h22 = h2();
        if (h22 == null) {
            String str = this.f41968o;
            if (str == null) {
                str = this.f41967i.toString();
            }
            if (this.f41969p) {
                return str + ".immediate";
            }
            return str;
        }
        return h22;
    }

    public /* synthetic */ f(Handler handler, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(handler, (i10 & 2) != 0 ? null : str);
    }

    public f(Handler handler, String str) {
        this(handler, str, false);
    }
}
