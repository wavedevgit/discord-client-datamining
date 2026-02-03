package ks;

import android.os.Handler;
import android.os.Looper;
import java.util.concurrent.CancellationException;
import js.e1;
import js.m0;
import js.n0;
import kotlin.Unit;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.k;
import kotlinx.coroutines.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends g implements k {

    /* renamed from: i  reason: collision with root package name */
    private final Handler f36162i;

    /* renamed from: o  reason: collision with root package name */
    private final String f36163o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f36164p;

    /* renamed from: q  reason: collision with root package name */
    private final f f36165q;

    private f(Handler handler, String str, boolean z10) {
        super(null);
        this.f36162i = handler;
        this.f36163o = str;
        this.f36164p = z10;
        this.f36165q = z10 ? this : new f(handler, str, true);
    }

    private final void p2(CoroutineContext coroutineContext, Runnable runnable) {
        z.c(coroutineContext, new CancellationException("The task was rejected, the handler underlying the dispatcher '" + this + "' was closed"));
        m0.b().E1(coroutineContext, runnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r2(f fVar, Runnable runnable) {
        fVar.f36162i.removeCallbacks(runnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s2(CancellableContinuation cancellableContinuation, f fVar) {
        cancellableContinuation.q(fVar, Unit.f32464a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t2(f fVar, Runnable runnable, Throwable th2) {
        fVar.f36162i.removeCallbacks(runnable);
        return Unit.f32464a;
    }

    @Override // kotlinx.coroutines.k
    public n0 D0(long j10, final Runnable runnable, CoroutineContext coroutineContext) {
        if (this.f36162i.postDelayed(runnable, kotlin.ranges.d.j(j10, 4611686018427387903L))) {
            return new n0() { // from class: ks.c
                @Override // js.n0
                public final void dispose() {
                    f.r2(f.this, runnable);
                }
            };
        }
        p2(coroutineContext, runnable);
        return e1.f31956d;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        if (!this.f36162i.post(runnable)) {
            p2(coroutineContext, runnable);
        }
    }

    @Override // kotlinx.coroutines.k
    public void F(long j10, final CancellableContinuation cancellableContinuation) {
        final Runnable runnable = new Runnable() { // from class: ks.d
            @Override // java.lang.Runnable
            public final void run() {
                f.s2(CancellableContinuation.this, this);
            }
        };
        if (this.f36162i.postDelayed(runnable, kotlin.ranges.d.j(j10, 4611686018427387903L))) {
            cancellableContinuation.c(new Function1() { // from class: ks.e
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
        if (this.f36164p && Intrinsics.areEqual(Looper.myLooper(), this.f36162i.getLooper())) {
            return false;
        }
        return true;
    }

    public boolean equals(Object obj) {
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (fVar.f36162i == this.f36162i && fVar.f36164p == this.f36164p) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int identityHashCode = System.identityHashCode(this.f36162i);
        if (this.f36164p) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return identityHashCode ^ i10;
    }

    @Override // js.c1
    /* renamed from: q2 */
    public f f2() {
        return this.f36165q;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String h22 = h2();
        if (h22 == null) {
            String str = this.f36163o;
            if (str == null) {
                str = this.f36162i.toString();
            }
            if (this.f36164p) {
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
