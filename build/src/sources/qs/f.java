package qs;

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
import ps.e1;
import ps.m0;
import ps.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends g implements k {

    /* renamed from: i  reason: collision with root package name */
    private final Handler f47217i;

    /* renamed from: o  reason: collision with root package name */
    private final String f47218o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f47219p;

    /* renamed from: q  reason: collision with root package name */
    private final f f47220q;

    private f(Handler handler, String str, boolean z10) {
        super(null);
        this.f47217i = handler;
        this.f47218o = str;
        this.f47219p = z10;
        this.f47220q = z10 ? this : new f(handler, str, true);
    }

    private final void p2(CoroutineContext coroutineContext, Runnable runnable) {
        z.c(coroutineContext, new CancellationException("The task was rejected, the handler underlying the dispatcher '" + this + "' was closed"));
        m0.b().z1(coroutineContext, runnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r2(f fVar, Runnable runnable) {
        fVar.f47217i.removeCallbacks(runnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s2(CancellableContinuation cancellableContinuation, f fVar) {
        cancellableContinuation.t(fVar, Unit.f31765a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t2(f fVar, Runnable runnable, Throwable th2) {
        fVar.f47217i.removeCallbacks(runnable);
        return Unit.f31765a;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public boolean U1(CoroutineContext coroutineContext) {
        if (this.f47219p && Intrinsics.areEqual(Looper.myLooper(), this.f47217i.getLooper())) {
            return false;
        }
        return true;
    }

    @Override // kotlinx.coroutines.k
    public n0 Z(long j10, final Runnable runnable, CoroutineContext coroutineContext) {
        if (this.f47217i.postDelayed(runnable, kotlin.ranges.d.j(j10, 4611686018427387903L))) {
            return new n0() { // from class: qs.c
                @Override // ps.n0
                public final void dispose() {
                    f.r2(f.this, runnable);
                }
            };
        }
        p2(coroutineContext, runnable);
        return e1.f44505d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (fVar.f47217i == this.f47217i && fVar.f47219p == this.f47219p) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int identityHashCode = System.identityHashCode(this.f47217i);
        if (this.f47219p) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return identityHashCode ^ i10;
    }

    @Override // ps.c1
    /* renamed from: q2 */
    public f e2() {
        return this.f47220q;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        String g22 = g2();
        if (g22 == null) {
            String str = this.f47218o;
            if (str == null) {
                str = this.f47217i.toString();
            }
            if (this.f47219p) {
                return str + ".immediate";
            }
            return str;
        }
        return g22;
    }

    @Override // kotlinx.coroutines.k
    public void y(long j10, final CancellableContinuation cancellableContinuation) {
        final Runnable runnable = new Runnable() { // from class: qs.d
            @Override // java.lang.Runnable
            public final void run() {
                f.s2(CancellableContinuation.this, this);
            }
        };
        if (this.f47217i.postDelayed(runnable, kotlin.ranges.d.j(j10, 4611686018427387903L))) {
            cancellableContinuation.c(new Function1() { // from class: qs.e
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
    public void z1(CoroutineContext coroutineContext, Runnable runnable) {
        if (!this.f47217i.post(runnable)) {
            p2(coroutineContext, runnable);
        }
    }

    public /* synthetic */ f(Handler handler, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(handler, (i10 & 2) != 0 ? null : str);
    }

    public f(Handler handler, String str) {
        this(handler, str, false);
    }
}
