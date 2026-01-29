package hs;

import android.os.Handler;
import android.os.Looper;
import gs.e1;
import gs.m0;
import gs.n0;
import java.util.concurrent.CancellationException;
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
    private final Handler f28185i;

    /* renamed from: o  reason: collision with root package name */
    private final String f28186o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f28187p;

    /* renamed from: q  reason: collision with root package name */
    private final f f28188q;

    private f(Handler handler, String str, boolean z10) {
        super(null);
        this.f28185i = handler;
        this.f28186o = str;
        this.f28187p = z10;
        this.f28188q = z10 ? this : new f(handler, str, true);
    }

    private final void p2(CoroutineContext coroutineContext, Runnable runnable) {
        z.c(coroutineContext, new CancellationException("The task was rejected, the handler underlying the dispatcher '" + this + "' was closed"));
        m0.b().E1(coroutineContext, runnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r2(f fVar, Runnable runnable) {
        fVar.f28185i.removeCallbacks(runnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s2(CancellableContinuation cancellableContinuation, f fVar) {
        cancellableContinuation.q(fVar, Unit.f33282a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t2(f fVar, Runnable runnable, Throwable th2) {
        fVar.f28185i.removeCallbacks(runnable);
        return Unit.f33282a;
    }

    @Override // kotlinx.coroutines.k
    public n0 D0(long j10, final Runnable runnable, CoroutineContext coroutineContext) {
        if (this.f28185i.postDelayed(runnable, kotlin.ranges.d.j(j10, 4611686018427387903L))) {
            return new n0() { // from class: hs.c
                @Override // gs.n0
                public final void dispose() {
                    f.r2(f.this, runnable);
                }
            };
        }
        p2(coroutineContext, runnable);
        return e1.f27153d;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        if (!this.f28185i.post(runnable)) {
            p2(coroutineContext, runnable);
        }
    }

    @Override // kotlinx.coroutines.k
    public void F(long j10, final CancellableContinuation cancellableContinuation) {
        final Runnable runnable = new Runnable() { // from class: hs.d
            @Override // java.lang.Runnable
            public final void run() {
                f.s2(CancellableContinuation.this, this);
            }
        };
        if (this.f28185i.postDelayed(runnable, kotlin.ranges.d.j(j10, 4611686018427387903L))) {
            cancellableContinuation.c(new Function1() { // from class: hs.e
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
        if (this.f28187p && Intrinsics.areEqual(Looper.myLooper(), this.f28185i.getLooper())) {
            return false;
        }
        return true;
    }

    public boolean equals(Object obj) {
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (fVar.f28185i == this.f28185i && fVar.f28187p == this.f28187p) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int identityHashCode = System.identityHashCode(this.f28185i);
        if (this.f28187p) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return identityHashCode ^ i10;
    }

    @Override // gs.c1
    /* renamed from: q2 */
    public f f2() {
        return this.f28188q;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String h22 = h2();
        if (h22 == null) {
            String str = this.f28186o;
            if (str == null) {
                str = this.f28185i.toString();
            }
            if (this.f28187p) {
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
