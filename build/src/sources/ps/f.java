package ps;

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
import os.e1;
import os.m0;
import os.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends g implements k {

    /* renamed from: i  reason: collision with root package name */
    private final Handler f45703i;

    /* renamed from: o  reason: collision with root package name */
    private final String f45704o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f45705p;

    /* renamed from: q  reason: collision with root package name */
    private final f f45706q;

    private f(Handler handler, String str, boolean z10) {
        super(null);
        this.f45703i = handler;
        this.f45704o = str;
        this.f45705p = z10;
        this.f45706q = z10 ? this : new f(handler, str, true);
    }

    private final void p2(CoroutineContext coroutineContext, Runnable runnable) {
        z.c(coroutineContext, new CancellationException("The task was rejected, the handler underlying the dispatcher '" + this + "' was closed"));
        m0.b().D1(coroutineContext, runnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r2(f fVar, Runnable runnable) {
        fVar.f45703i.removeCallbacks(runnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s2(CancellableContinuation cancellableContinuation, f fVar) {
        cancellableContinuation.t(fVar, Unit.f32056a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t2(f fVar, Runnable runnable, Throwable th2) {
        fVar.f45703i.removeCallbacks(runnable);
        return Unit.f32056a;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void D1(CoroutineContext coroutineContext, Runnable runnable) {
        if (!this.f45703i.post(runnable)) {
            p2(coroutineContext, runnable);
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public boolean V1(CoroutineContext coroutineContext) {
        if (this.f45705p && Intrinsics.areEqual(Looper.myLooper(), this.f45703i.getLooper())) {
            return false;
        }
        return true;
    }

    @Override // kotlinx.coroutines.k
    public n0 Y(long j10, final Runnable runnable, CoroutineContext coroutineContext) {
        if (this.f45703i.postDelayed(runnable, kotlin.ranges.d.j(j10, 4611686018427387903L))) {
            return new n0() { // from class: ps.c
                @Override // os.n0
                public final void dispose() {
                    f.r2(f.this, runnable);
                }
            };
        }
        p2(coroutineContext, runnable);
        return e1.f43548d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (fVar.f45703i == this.f45703i && fVar.f45705p == this.f45705p) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int identityHashCode = System.identityHashCode(this.f45703i);
        if (this.f45705p) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return identityHashCode ^ i10;
    }

    @Override // os.c1
    /* renamed from: q2 */
    public f f2() {
        return this.f45706q;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String h22 = h2();
        if (h22 == null) {
            String str = this.f45704o;
            if (str == null) {
                str = this.f45703i.toString();
            }
            if (this.f45705p) {
                return str + ".immediate";
            }
            return str;
        }
        return h22;
    }

    @Override // kotlinx.coroutines.k
    public void y(long j10, final CancellableContinuation cancellableContinuation) {
        final Runnable runnable = new Runnable() { // from class: ps.d
            @Override // java.lang.Runnable
            public final void run() {
                f.s2(CancellableContinuation.this, this);
            }
        };
        if (this.f45703i.postDelayed(runnable, kotlin.ranges.d.j(j10, 4611686018427387903L))) {
            cancellableContinuation.c(new Function1() { // from class: ps.e
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

    public /* synthetic */ f(Handler handler, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(handler, (i10 & 2) != 0 ? null : str);
    }

    public f(Handler handler, String str) {
        this(handler, str, false);
    }
}
