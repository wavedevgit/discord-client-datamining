package kotlinx.coroutines;

import dt.o0;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlinx.coroutines.k;
import ys.e1;
import ys.l1;
import ys.n0;
import ys.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class q extends r implements k {

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35052q = AtomicReferenceFieldUpdater.newUpdater(q.class, Object.class, "_queue$volatile");

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35053r = AtomicReferenceFieldUpdater.newUpdater(q.class, Object.class, "_delayed$volatile");

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f35054s = AtomicIntegerFieldUpdater.newUpdater(q.class, "_isCompleted$volatile");
    private volatile /* synthetic */ Object _delayed$volatile;
    private volatile /* synthetic */ int _isCompleted$volatile;
    private volatile /* synthetic */ Object _queue$volatile;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a extends c {

        /* renamed from: i  reason: collision with root package name */
        private final CancellableContinuation f35055i;

        public a(long j10, CancellableContinuation cancellableContinuation) {
            super(j10);
            this.f35055i = cancellableContinuation;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f35055i.t(q.this, Unit.f31987a);
        }

        @Override // kotlinx.coroutines.q.c
        public String toString() {
            return super.toString() + this.f35055i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class b extends c {

        /* renamed from: i  reason: collision with root package name */
        private final Runnable f35057i;

        public b(long j10, Runnable runnable) {
            super(j10);
            this.f35057i = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f35057i.run();
        }

        @Override // kotlinx.coroutines.q.c
        public String toString() {
            return super.toString() + this.f35057i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class c implements Runnable, Comparable, n0, o0 {
        private volatile Object _heap;

        /* renamed from: d  reason: collision with root package name */
        public long f35058d;

        /* renamed from: e  reason: collision with root package name */
        private int f35059e = -1;

        public c(long j10) {
            this.f35058d = j10;
        }

        @Override // dt.o0
        public dt.n0 a() {
            Object obj = this._heap;
            if (obj instanceof dt.n0) {
                return (dt.n0) obj;
            }
            return null;
        }

        @Override // ys.n0
        public final void dispose() {
            dt.e0 e0Var;
            d dVar;
            dt.e0 e0Var2;
            synchronized (this) {
                try {
                    Object obj = this._heap;
                    e0Var = r0.f55817a;
                    if (obj == e0Var) {
                        return;
                    }
                    if (obj instanceof d) {
                        dVar = (d) obj;
                    } else {
                        dVar = null;
                    }
                    if (dVar != null) {
                        dVar.h(this);
                    }
                    e0Var2 = r0.f55817a;
                    this._heap = e0Var2;
                    Unit unit = Unit.f31987a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // dt.o0
        public void e(dt.n0 n0Var) {
            dt.e0 e0Var;
            Object obj = this._heap;
            e0Var = r0.f55817a;
            if (obj != e0Var) {
                this._heap = n0Var;
                return;
            }
            throw new IllegalArgumentException("Failed requirement.");
        }

        @Override // java.lang.Comparable
        /* renamed from: f */
        public int compareTo(c cVar) {
            int i10 = ((this.f35058d - cVar.f35058d) > 0L ? 1 : ((this.f35058d - cVar.f35058d) == 0L ? 0 : -1));
            if (i10 > 0) {
                return 1;
            }
            if (i10 < 0) {
                return -1;
            }
            return 0;
        }

        public final int g(long j10, d dVar, q qVar) {
            dt.e0 e0Var;
            synchronized (this) {
                Object obj = this._heap;
                e0Var = r0.f55817a;
                if (obj == e0Var) {
                    return 2;
                }
                synchronized (dVar) {
                    c cVar = (c) dVar.b();
                    if (qVar.isCompleted()) {
                        return 1;
                    }
                    if (cVar == null) {
                        dVar.f35060c = j10;
                    } else {
                        long j11 = cVar.f35058d;
                        if (j11 - j10 < 0) {
                            j10 = j11;
                        }
                        if (j10 - dVar.f35060c > 0) {
                            dVar.f35060c = j10;
                        }
                    }
                    long j12 = this.f35058d;
                    long j13 = dVar.f35060c;
                    if (j12 - j13 < 0) {
                        this.f35058d = j13;
                    }
                    dVar.a(this);
                    return 0;
                }
            }
        }

        @Override // dt.o0
        public int getIndex() {
            return this.f35059e;
        }

        public final boolean h(long j10) {
            if (j10 - this.f35058d >= 0) {
                return true;
            }
            return false;
        }

        @Override // dt.o0
        public void setIndex(int i10) {
            this.f35059e = i10;
        }

        public String toString() {
            return "Delayed[nanos=" + this.f35058d + ']';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d extends dt.n0 {

        /* renamed from: c  reason: collision with root package name */
        public long f35060c;

        public d(long j10) {
            this.f35060c = j10;
        }
    }

    private final void A2() {
        dt.e0 e0Var;
        dt.e0 e0Var2;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35052q;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (obj == null) {
                AtomicReferenceFieldUpdater atomicReferenceFieldUpdater2 = f35052q;
                e0Var = r0.f55818b;
                if (androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater2, this, null, e0Var)) {
                    return;
                }
            } else if (!(obj instanceof dt.r)) {
                e0Var2 = r0.f55818b;
                if (obj != e0Var2) {
                    dt.r rVar = new dt.r(8, true);
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.lang.Runnable");
                    rVar.a((Runnable) obj);
                    if (androidx.concurrent.futures.b.a(f35052q, this, obj, rVar)) {
                        return;
                    }
                } else {
                    return;
                }
            } else {
                ((dt.r) obj).d();
                return;
            }
        }
    }

    private final Runnable B2() {
        dt.e0 e0Var;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35052q;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (obj == null) {
                return null;
            }
            if (!(obj instanceof dt.r)) {
                e0Var = r0.f55818b;
                if (obj == e0Var) {
                    return null;
                }
                if (androidx.concurrent.futures.b.a(f35052q, this, obj, null)) {
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.lang.Runnable");
                    return (Runnable) obj;
                }
            } else {
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeTaskQueueCore<java.lang.Runnable>");
                dt.r rVar = (dt.r) obj;
                Object m10 = rVar.m();
                if (m10 != dt.r.f21915h) {
                    return (Runnable) m10;
                }
                androidx.concurrent.futures.b.a(f35052q, this, obj, rVar.l());
            }
        }
    }

    private final void D2() {
        o0 o0Var;
        boolean z10;
        d dVar = (d) f35053r.get(this);
        if (dVar != null && !dVar.e()) {
            ys.b.a();
            long nanoTime = System.nanoTime();
            do {
                synchronized (dVar) {
                    try {
                        o0 b10 = dVar.b();
                        o0Var = null;
                        if (b10 != null) {
                            c cVar = (c) b10;
                            if (cVar.h(nanoTime)) {
                                z10 = E2(cVar);
                            } else {
                                z10 = false;
                            }
                            if (z10) {
                                o0Var = dVar.i(0);
                            }
                        }
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
            } while (((c) o0Var) != null);
        }
    }

    private final boolean E2(Runnable runnable) {
        dt.e0 e0Var;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35052q;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (isCompleted()) {
                return false;
            }
            if (obj == null) {
                if (androidx.concurrent.futures.b.a(f35052q, this, null, runnable)) {
                    return true;
                }
            } else if (!(obj instanceof dt.r)) {
                e0Var = r0.f55818b;
                if (obj == e0Var) {
                    return false;
                }
                dt.r rVar = new dt.r(8, true);
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.lang.Runnable");
                rVar.a((Runnable) obj);
                rVar.a(runnable);
                if (androidx.concurrent.futures.b.a(f35052q, this, obj, rVar)) {
                    return true;
                }
            } else {
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeTaskQueueCore<java.lang.Runnable>");
                dt.r rVar2 = (dt.r) obj;
                int a10 = rVar2.a(runnable);
                if (a10 == 0) {
                    return true;
                }
                if (a10 != 1) {
                    if (a10 == 2) {
                        return false;
                    }
                } else {
                    androidx.concurrent.futures.b.a(f35052q, this, obj, rVar2.l());
                }
            }
        }
    }

    private final void J2() {
        c cVar;
        ys.b.a();
        long nanoTime = System.nanoTime();
        while (true) {
            d dVar = (d) f35053r.get(this);
            if (dVar != null && (cVar = (c) dVar.j()) != null) {
                x2(nanoTime, cVar);
            } else {
                return;
            }
        }
    }

    private final int M2(long j10, c cVar) {
        if (isCompleted()) {
            return 1;
        }
        d dVar = (d) f35053r.get(this);
        if (dVar == null) {
            androidx.concurrent.futures.b.a(f35053r, this, null, new d(j10));
            Object obj = f35053r.get(this);
            Intrinsics.checkNotNull(obj);
            dVar = (d) obj;
        }
        return cVar.g(j10, dVar, this);
    }

    private final void O2(boolean z10) {
        f35054s.set(this, z10 ? 1 : 0);
    }

    private final boolean P2(c cVar) {
        c cVar2;
        d dVar = (d) f35053r.get(this);
        if (dVar != null) {
            cVar2 = (c) dVar.f();
        } else {
            cVar2 = null;
        }
        if (cVar2 == cVar) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean isCompleted() {
        if (f35054s.get(this) == 1) {
            return true;
        }
        return false;
    }

    public n0 C0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return k.a.a(this, j10, runnable, coroutineContext);
    }

    public void C2(Runnable runnable) {
        D2();
        if (E2(runnable)) {
            y2();
        } else {
            j.f35045t.C2(runnable);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean I2() {
        dt.e0 e0Var;
        if (!o2()) {
            return false;
        }
        d dVar = (d) f35053r.get(this);
        if (dVar != null && !dVar.e()) {
            return false;
        }
        Object obj = f35052q.get(this);
        if (obj == null) {
            return true;
        }
        if (!(obj instanceof dt.r)) {
            e0Var = r0.f55818b;
            if (obj != e0Var) {
                return false;
            }
            return true;
        }
        return ((dt.r) obj).j();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void K2() {
        f35052q.set(this, null);
        f35053r.set(this, null);
    }

    public final void L2(long j10, c cVar) {
        int M2 = M2(j10, cVar);
        if (M2 != 0) {
            if (M2 != 1) {
                if (M2 != 2) {
                    throw new IllegalStateException("unexpected result");
                }
                return;
            }
            x2(j10, cVar);
        } else if (P2(cVar)) {
            y2();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final n0 N2(long j10, Runnable runnable) {
        long c10 = r0.c(j10);
        if (c10 < 4611686018427387903L) {
            ys.b.a();
            long nanoTime = System.nanoTime();
            b bVar = new b(c10 + nanoTime, runnable);
            L2(nanoTime, bVar);
            return bVar;
        }
        return e1.f55791d;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public final void b1(CoroutineContext coroutineContext, Runnable runnable) {
        C2(runnable);
    }

    @Override // ys.p0
    protected long f2() {
        c cVar;
        dt.e0 e0Var;
        if (super.f2() == 0) {
            return 0L;
        }
        Object obj = f35052q.get(this);
        if (obj != null) {
            if (!(obj instanceof dt.r)) {
                e0Var = r0.f55818b;
                if (obj != e0Var) {
                    return 0L;
                }
                return LongCompanionObject.MAX_VALUE;
            } else if (!((dt.r) obj).j()) {
                return 0L;
            }
        }
        d dVar = (d) f35053r.get(this);
        if (dVar == null || (cVar = (c) dVar.f()) == null) {
            return LongCompanionObject.MAX_VALUE;
        }
        long j10 = cVar.f35058d;
        ys.b.a();
        return kotlin.ranges.d.e(j10 - System.nanoTime(), 0L);
    }

    @Override // ys.p0
    public void shutdown() {
        l1.f55799a.c();
        O2(true);
        A2();
        do {
        } while (t2() <= 0);
        J2();
    }

    @Override // ys.p0
    public long t2() {
        if (u2()) {
            return 0L;
        }
        D2();
        Runnable B2 = B2();
        if (B2 != null) {
            B2.run();
            return 0L;
        }
        return f2();
    }

    @Override // kotlinx.coroutines.k
    public void z(long j10, CancellableContinuation cancellableContinuation) {
        long c10 = r0.c(j10);
        if (c10 < 4611686018427387903L) {
            ys.b.a();
            long nanoTime = System.nanoTime();
            a aVar = new a(c10 + nanoTime, cancellableContinuation);
            L2(nanoTime, aVar);
            ys.l.a(cancellableContinuation, aVar);
        }
    }
}
