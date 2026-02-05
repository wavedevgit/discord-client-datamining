package kotlinx.coroutines;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlinx.coroutines.k;
import ms.e1;
import ms.l1;
import ms.n0;
import ms.r0;
import rs.o0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class q extends r implements k {

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35053q = AtomicReferenceFieldUpdater.newUpdater(q.class, Object.class, "_queue$volatile");

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35054r = AtomicReferenceFieldUpdater.newUpdater(q.class, Object.class, "_delayed$volatile");

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f35055s = AtomicIntegerFieldUpdater.newUpdater(q.class, "_isCompleted$volatile");
    private volatile /* synthetic */ Object _delayed$volatile;
    private volatile /* synthetic */ int _isCompleted$volatile;
    private volatile /* synthetic */ Object _queue$volatile;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a extends c {

        /* renamed from: i  reason: collision with root package name */
        private final CancellableContinuation f35056i;

        public a(long j10, CancellableContinuation cancellableContinuation) {
            super(j10);
            this.f35056i = cancellableContinuation;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f35056i.r(q.this, Unit.f31988a);
        }

        @Override // kotlinx.coroutines.q.c
        public String toString() {
            return super.toString() + this.f35056i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class b extends c {

        /* renamed from: i  reason: collision with root package name */
        private final Runnable f35058i;

        public b(long j10, Runnable runnable) {
            super(j10);
            this.f35058i = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f35058i.run();
        }

        @Override // kotlinx.coroutines.q.c
        public String toString() {
            return super.toString() + this.f35058i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class c implements Runnable, Comparable, n0, o0 {
        private volatile Object _heap;

        /* renamed from: d  reason: collision with root package name */
        public long f35059d;

        /* renamed from: e  reason: collision with root package name */
        private int f35060e = -1;

        public c(long j10) {
            this.f35059d = j10;
        }

        @Override // rs.o0
        public rs.n0 a() {
            Object obj = this._heap;
            if (obj instanceof rs.n0) {
                return (rs.n0) obj;
            }
            return null;
        }

        @Override // ms.n0
        public final void dispose() {
            rs.e0 e0Var;
            d dVar;
            rs.e0 e0Var2;
            synchronized (this) {
                try {
                    Object obj = this._heap;
                    e0Var = r0.f38944a;
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
                    e0Var2 = r0.f38944a;
                    this._heap = e0Var2;
                    Unit unit = Unit.f31988a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // rs.o0
        public void e(rs.n0 n0Var) {
            rs.e0 e0Var;
            Object obj = this._heap;
            e0Var = r0.f38944a;
            if (obj != e0Var) {
                this._heap = n0Var;
                return;
            }
            throw new IllegalArgumentException("Failed requirement.");
        }

        @Override // java.lang.Comparable
        /* renamed from: f */
        public int compareTo(c cVar) {
            int i10 = ((this.f35059d - cVar.f35059d) > 0L ? 1 : ((this.f35059d - cVar.f35059d) == 0L ? 0 : -1));
            if (i10 > 0) {
                return 1;
            }
            if (i10 < 0) {
                return -1;
            }
            return 0;
        }

        public final int g(long j10, d dVar, q qVar) {
            rs.e0 e0Var;
            synchronized (this) {
                Object obj = this._heap;
                e0Var = r0.f38944a;
                if (obj == e0Var) {
                    return 2;
                }
                synchronized (dVar) {
                    c cVar = (c) dVar.b();
                    if (qVar.isCompleted()) {
                        return 1;
                    }
                    if (cVar == null) {
                        dVar.f35061c = j10;
                    } else {
                        long j11 = cVar.f35059d;
                        if (j11 - j10 < 0) {
                            j10 = j11;
                        }
                        if (j10 - dVar.f35061c > 0) {
                            dVar.f35061c = j10;
                        }
                    }
                    long j12 = this.f35059d;
                    long j13 = dVar.f35061c;
                    if (j12 - j13 < 0) {
                        this.f35059d = j13;
                    }
                    dVar.a(this);
                    return 0;
                }
            }
        }

        @Override // rs.o0
        public int getIndex() {
            return this.f35060e;
        }

        public final boolean h(long j10) {
            if (j10 - this.f35059d >= 0) {
                return true;
            }
            return false;
        }

        @Override // rs.o0
        public void setIndex(int i10) {
            this.f35060e = i10;
        }

        public String toString() {
            return "Delayed[nanos=" + this.f35059d + ']';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d extends rs.n0 {

        /* renamed from: c  reason: collision with root package name */
        public long f35061c;

        public d(long j10) {
            this.f35061c = j10;
        }
    }

    private final void A2() {
        rs.e0 e0Var;
        rs.e0 e0Var2;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35053q;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (obj == null) {
                AtomicReferenceFieldUpdater atomicReferenceFieldUpdater2 = f35053q;
                e0Var = r0.f38945b;
                if (androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater2, this, null, e0Var)) {
                    return;
                }
            } else if (!(obj instanceof rs.r)) {
                e0Var2 = r0.f38945b;
                if (obj != e0Var2) {
                    rs.r rVar = new rs.r(8, true);
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.lang.Runnable");
                    rVar.a((Runnable) obj);
                    if (androidx.concurrent.futures.b.a(f35053q, this, obj, rVar)) {
                        return;
                    }
                } else {
                    return;
                }
            } else {
                ((rs.r) obj).d();
                return;
            }
        }
    }

    private final Runnable B2() {
        rs.e0 e0Var;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35053q;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (obj == null) {
                return null;
            }
            if (!(obj instanceof rs.r)) {
                e0Var = r0.f38945b;
                if (obj == e0Var) {
                    return null;
                }
                if (androidx.concurrent.futures.b.a(f35053q, this, obj, null)) {
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.lang.Runnable");
                    return (Runnable) obj;
                }
            } else {
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeTaskQueueCore<java.lang.Runnable>");
                rs.r rVar = (rs.r) obj;
                Object m10 = rVar.m();
                if (m10 != rs.r.f48997h) {
                    return (Runnable) m10;
                }
                androidx.concurrent.futures.b.a(f35053q, this, obj, rVar.l());
            }
        }
    }

    private final void D2() {
        o0 o0Var;
        boolean z10;
        d dVar = (d) f35054r.get(this);
        if (dVar != null && !dVar.e()) {
            ms.b.a();
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
        rs.e0 e0Var;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35053q;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (isCompleted()) {
                return false;
            }
            if (obj == null) {
                if (androidx.concurrent.futures.b.a(f35053q, this, null, runnable)) {
                    return true;
                }
            } else if (!(obj instanceof rs.r)) {
                e0Var = r0.f38945b;
                if (obj == e0Var) {
                    return false;
                }
                rs.r rVar = new rs.r(8, true);
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.lang.Runnable");
                rVar.a((Runnable) obj);
                rVar.a(runnable);
                if (androidx.concurrent.futures.b.a(f35053q, this, obj, rVar)) {
                    return true;
                }
            } else {
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeTaskQueueCore<java.lang.Runnable>");
                rs.r rVar2 = (rs.r) obj;
                int a10 = rVar2.a(runnable);
                if (a10 == 0) {
                    return true;
                }
                if (a10 != 1) {
                    if (a10 == 2) {
                        return false;
                    }
                } else {
                    androidx.concurrent.futures.b.a(f35053q, this, obj, rVar2.l());
                }
            }
        }
    }

    private final void J2() {
        c cVar;
        ms.b.a();
        long nanoTime = System.nanoTime();
        while (true) {
            d dVar = (d) f35054r.get(this);
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
        d dVar = (d) f35054r.get(this);
        if (dVar == null) {
            androidx.concurrent.futures.b.a(f35054r, this, null, new d(j10));
            Object obj = f35054r.get(this);
            Intrinsics.checkNotNull(obj);
            dVar = (d) obj;
        }
        return cVar.g(j10, dVar, this);
    }

    private final void O2(boolean z10) {
        f35055s.set(this, z10 ? 1 : 0);
    }

    private final boolean P2(c cVar) {
        c cVar2;
        d dVar = (d) f35054r.get(this);
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
        if (f35055s.get(this) == 1) {
            return true;
        }
        return false;
    }

    public void C2(Runnable runnable) {
        D2();
        if (E2(runnable)) {
            y2();
        } else {
            j.f35046t.C2(runnable);
        }
    }

    public n0 D0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return k.a.a(this, j10, runnable, coroutineContext);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public final void E1(CoroutineContext coroutineContext, Runnable runnable) {
        C2(runnable);
    }

    @Override // kotlinx.coroutines.k
    public void F(long j10, CancellableContinuation cancellableContinuation) {
        long c10 = r0.c(j10);
        if (c10 < 4611686018427387903L) {
            ms.b.a();
            long nanoTime = System.nanoTime();
            a aVar = new a(c10 + nanoTime, cancellableContinuation);
            L2(nanoTime, aVar);
            ms.l.a(cancellableContinuation, aVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean I2() {
        rs.e0 e0Var;
        if (!s2()) {
            return false;
        }
        d dVar = (d) f35054r.get(this);
        if (dVar != null && !dVar.e()) {
            return false;
        }
        Object obj = f35053q.get(this);
        if (obj == null) {
            return true;
        }
        if (!(obj instanceof rs.r)) {
            e0Var = r0.f38945b;
            if (obj != e0Var) {
                return false;
            }
            return true;
        }
        return ((rs.r) obj).j();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void K2() {
        f35053q.set(this, null);
        f35054r.set(this, null);
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
            ms.b.a();
            long nanoTime = System.nanoTime();
            b bVar = new b(c10 + nanoTime, runnable);
            L2(nanoTime, bVar);
            return bVar;
        }
        return e1.f38918d;
    }

    @Override // ms.p0
    protected long o2() {
        c cVar;
        rs.e0 e0Var;
        if (super.o2() == 0) {
            return 0L;
        }
        Object obj = f35053q.get(this);
        if (obj != null) {
            if (!(obj instanceof rs.r)) {
                e0Var = r0.f38945b;
                if (obj != e0Var) {
                    return 0L;
                }
                return LongCompanionObject.MAX_VALUE;
            } else if (!((rs.r) obj).j()) {
                return 0L;
            }
        }
        d dVar = (d) f35054r.get(this);
        if (dVar == null || (cVar = (c) dVar.f()) == null) {
            return LongCompanionObject.MAX_VALUE;
        }
        long j10 = cVar.f35059d;
        ms.b.a();
        return kotlin.ranges.d.e(j10 - System.nanoTime(), 0L);
    }

    @Override // ms.p0
    public void shutdown() {
        l1.f38926a.c();
        O2(true);
        A2();
        do {
        } while (t2() <= 0);
        J2();
    }

    @Override // ms.p0
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
}
