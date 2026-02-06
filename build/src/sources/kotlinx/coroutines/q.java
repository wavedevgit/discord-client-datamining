package kotlinx.coroutines;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlinx.coroutines.k;
import os.e1;
import os.l1;
import os.n0;
import os.r0;
import ts.o0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class q extends r implements k {

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35073q = AtomicReferenceFieldUpdater.newUpdater(q.class, Object.class, "_queue$volatile");

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35074r = AtomicReferenceFieldUpdater.newUpdater(q.class, Object.class, "_delayed$volatile");

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f35075s = AtomicIntegerFieldUpdater.newUpdater(q.class, "_isCompleted$volatile");
    private volatile /* synthetic */ Object _delayed$volatile;
    private volatile /* synthetic */ int _isCompleted$volatile;
    private volatile /* synthetic */ Object _queue$volatile;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a extends c {

        /* renamed from: i  reason: collision with root package name */
        private final CancellableContinuation f35076i;

        public a(long j10, CancellableContinuation cancellableContinuation) {
            super(j10);
            this.f35076i = cancellableContinuation;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f35076i.t(q.this, Unit.f32008a);
        }

        @Override // kotlinx.coroutines.q.c
        public String toString() {
            return super.toString() + this.f35076i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class b extends c {

        /* renamed from: i  reason: collision with root package name */
        private final Runnable f35078i;

        public b(long j10, Runnable runnable) {
            super(j10);
            this.f35078i = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f35078i.run();
        }

        @Override // kotlinx.coroutines.q.c
        public String toString() {
            return super.toString() + this.f35078i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class c implements Runnable, Comparable, n0, o0 {
        private volatile Object _heap;

        /* renamed from: d  reason: collision with root package name */
        public long f35079d;

        /* renamed from: e  reason: collision with root package name */
        private int f35080e = -1;

        public c(long j10) {
            this.f35079d = j10;
        }

        @Override // ts.o0
        public void a(ts.n0 n0Var) {
            ts.e0 e0Var;
            Object obj = this._heap;
            e0Var = r0.f43526a;
            if (obj != e0Var) {
                this._heap = n0Var;
                return;
            }
            throw new IllegalArgumentException("Failed requirement.");
        }

        @Override // os.n0
        public final void dispose() {
            ts.e0 e0Var;
            d dVar;
            ts.e0 e0Var2;
            synchronized (this) {
                try {
                    Object obj = this._heap;
                    e0Var = r0.f43526a;
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
                    e0Var2 = r0.f43526a;
                    this._heap = e0Var2;
                    Unit unit = Unit.f32008a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // ts.o0
        public ts.n0 e() {
            Object obj = this._heap;
            if (obj instanceof ts.n0) {
                return (ts.n0) obj;
            }
            return null;
        }

        @Override // java.lang.Comparable
        /* renamed from: f */
        public int compareTo(c cVar) {
            int i10 = ((this.f35079d - cVar.f35079d) > 0L ? 1 : ((this.f35079d - cVar.f35079d) == 0L ? 0 : -1));
            if (i10 > 0) {
                return 1;
            }
            if (i10 < 0) {
                return -1;
            }
            return 0;
        }

        public final int g(long j10, d dVar, q qVar) {
            ts.e0 e0Var;
            synchronized (this) {
                Object obj = this._heap;
                e0Var = r0.f43526a;
                if (obj == e0Var) {
                    return 2;
                }
                synchronized (dVar) {
                    c cVar = (c) dVar.b();
                    if (qVar.isCompleted()) {
                        return 1;
                    }
                    if (cVar == null) {
                        dVar.f35081c = j10;
                    } else {
                        long j11 = cVar.f35079d;
                        if (j11 - j10 < 0) {
                            j10 = j11;
                        }
                        if (j10 - dVar.f35081c > 0) {
                            dVar.f35081c = j10;
                        }
                    }
                    long j12 = this.f35079d;
                    long j13 = dVar.f35081c;
                    if (j12 - j13 < 0) {
                        this.f35079d = j13;
                    }
                    dVar.a(this);
                    return 0;
                }
            }
        }

        @Override // ts.o0
        public int getIndex() {
            return this.f35080e;
        }

        public final boolean h(long j10) {
            if (j10 - this.f35079d >= 0) {
                return true;
            }
            return false;
        }

        @Override // ts.o0
        public void setIndex(int i10) {
            this.f35080e = i10;
        }

        public String toString() {
            return "Delayed[nanos=" + this.f35079d + ']';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d extends ts.n0 {

        /* renamed from: c  reason: collision with root package name */
        public long f35081c;

        public d(long j10) {
            this.f35081c = j10;
        }
    }

    private final void A2() {
        ts.e0 e0Var;
        ts.e0 e0Var2;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35073q;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (obj == null) {
                AtomicReferenceFieldUpdater atomicReferenceFieldUpdater2 = f35073q;
                e0Var = r0.f43527b;
                if (androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater2, this, null, e0Var)) {
                    return;
                }
            } else if (!(obj instanceof ts.r)) {
                e0Var2 = r0.f43527b;
                if (obj != e0Var2) {
                    ts.r rVar = new ts.r(8, true);
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.lang.Runnable");
                    rVar.a((Runnable) obj);
                    if (androidx.concurrent.futures.b.a(f35073q, this, obj, rVar)) {
                        return;
                    }
                } else {
                    return;
                }
            } else {
                ((ts.r) obj).d();
                return;
            }
        }
    }

    private final Runnable B2() {
        ts.e0 e0Var;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35073q;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (obj == null) {
                return null;
            }
            if (!(obj instanceof ts.r)) {
                e0Var = r0.f43527b;
                if (obj == e0Var) {
                    return null;
                }
                if (androidx.concurrent.futures.b.a(f35073q, this, obj, null)) {
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.lang.Runnable");
                    return (Runnable) obj;
                }
            } else {
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeTaskQueueCore<java.lang.Runnable>");
                ts.r rVar = (ts.r) obj;
                Object m10 = rVar.m();
                if (m10 != ts.r.f50860h) {
                    return (Runnable) m10;
                }
                androidx.concurrent.futures.b.a(f35073q, this, obj, rVar.l());
            }
        }
    }

    private final void D2() {
        o0 o0Var;
        boolean z10;
        d dVar = (d) f35074r.get(this);
        if (dVar != null && !dVar.e()) {
            os.b.a();
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
        ts.e0 e0Var;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35073q;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (isCompleted()) {
                return false;
            }
            if (obj == null) {
                if (androidx.concurrent.futures.b.a(f35073q, this, null, runnable)) {
                    return true;
                }
            } else if (!(obj instanceof ts.r)) {
                e0Var = r0.f43527b;
                if (obj == e0Var) {
                    return false;
                }
                ts.r rVar = new ts.r(8, true);
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.lang.Runnable");
                rVar.a((Runnable) obj);
                rVar.a(runnable);
                if (androidx.concurrent.futures.b.a(f35073q, this, obj, rVar)) {
                    return true;
                }
            } else {
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeTaskQueueCore<java.lang.Runnable>");
                ts.r rVar2 = (ts.r) obj;
                int a10 = rVar2.a(runnable);
                if (a10 == 0) {
                    return true;
                }
                if (a10 != 1) {
                    if (a10 == 2) {
                        return false;
                    }
                } else {
                    androidx.concurrent.futures.b.a(f35073q, this, obj, rVar2.l());
                }
            }
        }
    }

    private final void J2() {
        c cVar;
        os.b.a();
        long nanoTime = System.nanoTime();
        while (true) {
            d dVar = (d) f35074r.get(this);
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
        d dVar = (d) f35074r.get(this);
        if (dVar == null) {
            androidx.concurrent.futures.b.a(f35074r, this, null, new d(j10));
            Object obj = f35074r.get(this);
            Intrinsics.checkNotNull(obj);
            dVar = (d) obj;
        }
        return cVar.g(j10, dVar, this);
    }

    private final void O2(boolean z10) {
        f35075s.set(this, z10 ? 1 : 0);
    }

    private final boolean P2(c cVar) {
        c cVar2;
        d dVar = (d) f35074r.get(this);
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
        if (f35075s.get(this) == 1) {
            return true;
        }
        return false;
    }

    public void C2(Runnable runnable) {
        D2();
        if (E2(runnable)) {
            y2();
        } else {
            j.f35066t.C2(runnable);
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public final void D1(CoroutineContext coroutineContext, Runnable runnable) {
        C2(runnable);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean I2() {
        ts.e0 e0Var;
        if (!s2()) {
            return false;
        }
        d dVar = (d) f35074r.get(this);
        if (dVar != null && !dVar.e()) {
            return false;
        }
        Object obj = f35073q.get(this);
        if (obj == null) {
            return true;
        }
        if (!(obj instanceof ts.r)) {
            e0Var = r0.f43527b;
            if (obj != e0Var) {
                return false;
            }
            return true;
        }
        return ((ts.r) obj).j();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void K2() {
        f35073q.set(this, null);
        f35074r.set(this, null);
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
            os.b.a();
            long nanoTime = System.nanoTime();
            b bVar = new b(c10 + nanoTime, runnable);
            L2(nanoTime, bVar);
            return bVar;
        }
        return e1.f43500d;
    }

    public n0 Y(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return k.a.a(this, j10, runnable, coroutineContext);
    }

    @Override // os.p0
    protected long o2() {
        c cVar;
        ts.e0 e0Var;
        if (super.o2() == 0) {
            return 0L;
        }
        Object obj = f35073q.get(this);
        if (obj != null) {
            if (!(obj instanceof ts.r)) {
                e0Var = r0.f43527b;
                if (obj != e0Var) {
                    return 0L;
                }
                return LongCompanionObject.MAX_VALUE;
            } else if (!((ts.r) obj).j()) {
                return 0L;
            }
        }
        d dVar = (d) f35074r.get(this);
        if (dVar == null || (cVar = (c) dVar.f()) == null) {
            return LongCompanionObject.MAX_VALUE;
        }
        long j10 = cVar.f35079d;
        os.b.a();
        return kotlin.ranges.d.e(j10 - System.nanoTime(), 0L);
    }

    @Override // os.p0
    public void shutdown() {
        l1.f43508a.c();
        O2(true);
        A2();
        do {
        } while (t2() <= 0);
        J2();
    }

    @Override // os.p0
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
        return o2();
    }

    @Override // kotlinx.coroutines.k
    public void y(long j10, CancellableContinuation cancellableContinuation) {
        long c10 = r0.c(j10);
        if (c10 < 4611686018427387903L) {
            os.b.a();
            long nanoTime = System.nanoTime();
            a aVar = new a(c10 + nanoTime, cancellableContinuation);
            L2(nanoTime, aVar);
            os.l.a(cancellableContinuation, aVar);
        }
    }
}
