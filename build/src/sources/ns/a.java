package ns;

import ir.p;
import java.io.Closeable;
import java.lang.Thread;
import java.util.ArrayList;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import java.util.concurrent.atomic.AtomicLongFieldUpdater;
import java.util.concurrent.locks.LockSupport;
import kotlin.Unit;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.jvm.internal.Ref;
import ls.e0;
import ls.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Executor, Closeable {

    /* renamed from: s  reason: collision with root package name */
    public static final C0525a f42160s = new C0525a(null);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f42161t = AtomicLongFieldUpdater.newUpdater(a.class, "parkedWorkersStack$volatile");

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f42162u = AtomicLongFieldUpdater.newUpdater(a.class, "controlState$volatile");

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f42163v = AtomicIntegerFieldUpdater.newUpdater(a.class, "_isTerminated$volatile");

    /* renamed from: w  reason: collision with root package name */
    public static final e0 f42164w = new e0("NOT_IN_STACK");
    private volatile /* synthetic */ int _isTerminated$volatile;
    private volatile /* synthetic */ long controlState$volatile;

    /* renamed from: d  reason: collision with root package name */
    public final int f42165d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42166e;

    /* renamed from: i  reason: collision with root package name */
    public final long f42167i;

    /* renamed from: o  reason: collision with root package name */
    public final String f42168o;

    /* renamed from: p  reason: collision with root package name */
    public final ns.d f42169p;
    private volatile /* synthetic */ long parkedWorkersStack$volatile;

    /* renamed from: q  reason: collision with root package name */
    public final ns.d f42170q;

    /* renamed from: r  reason: collision with root package name */
    public final z f42171r;

    /* renamed from: ns.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0525a {
        public /* synthetic */ C0525a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0525a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f42172a;

        static {
            int[] iArr = new int[d.values().length];
            try {
                iArr[d.f42184i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d.f42183e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d.f42182d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[d.f42185o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[d.f42186p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f42172a = iArr;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f42182d = new d("CPU_ACQUIRED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f42183e = new d("BLOCKING", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f42184i = new d("PARKING", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final d f42185o = new d("DORMANT", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final d f42186p = new d("TERMINATED", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ d[] f42187q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f42188r;

        static {
            d[] a10 = a();
            f42187q = a10;
            f42188r = pr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f42182d, f42183e, f42184i, f42185o, f42186p};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f42187q.clone();
        }
    }

    public a(int i10, int i11, long j10, String str) {
        this.f42165d = i10;
        this.f42166e = i11;
        this.f42167i = j10;
        this.f42168o = str;
        if (i10 >= 1) {
            if (i11 >= i10) {
                if (i11 <= 2097150) {
                    if (j10 > 0) {
                        this.f42169p = new ns.d();
                        this.f42170q = new ns.d();
                        this.f42171r = new z((i10 + 1) * 2);
                        this.controlState$volatile = i10 << 42;
                        return;
                    }
                    throw new IllegalArgumentException(("Idle worker keep alive time " + j10 + " must be positive").toString());
                }
                throw new IllegalArgumentException(("Max pool size " + i11 + " should not exceed maximal supported number of threads 2097150").toString());
            }
            throw new IllegalArgumentException(("Max pool size " + i11 + " should be greater than or equals to core pool size " + i10).toString());
        }
        throw new IllegalArgumentException(("Core pool size " + i10 + " should be at least 1").toString());
    }

    private final int A0(c cVar) {
        Object g10 = cVar.g();
        while (g10 != f42164w) {
            if (g10 == null) {
                return 0;
            }
            c cVar2 = (c) g10;
            int f10 = cVar2.f();
            if (f10 != 0) {
                return f10;
            }
            g10 = cVar2.g();
        }
        return -1;
    }

    private final c B() {
        c cVar;
        Thread currentThread = Thread.currentThread();
        if (currentThread instanceof c) {
            cVar = (c) currentThread;
        } else {
            cVar = null;
        }
        if (cVar == null || !Intrinsics.areEqual(a.this, this)) {
            return null;
        }
        return cVar;
    }

    private final c C0() {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f42161t;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            c cVar = (c) this.f42171r.b((int) (2097151 & j10));
            if (cVar == null) {
                return null;
            }
            long j11 = (2097152 + j10) & (-2097152);
            int A0 = A0(cVar);
            if (A0 >= 0 && f42161t.compareAndSet(this, j10, A0 | j11)) {
                cVar.o(f42164w);
                return cVar;
            }
        }
    }

    public static /* synthetic */ void F(a aVar, Runnable runnable, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        if ((i10 & 4) != 0) {
            z11 = false;
        }
        aVar.E(runnable, z10, z11);
    }

    private final void M0(long j10) {
        if (x1() || X0(j10)) {
            return;
        }
        x1();
    }

    private final h U0(c cVar, h hVar, boolean z10) {
        d dVar;
        if (cVar == null || (dVar = cVar.f42176i) == d.f42186p) {
            return hVar;
        }
        if (!hVar.f42199e && dVar == d.f42183e) {
            return hVar;
        }
        cVar.f42180r = true;
        return cVar.f42174d.a(hVar, z10);
    }

    private final boolean X0(long j10) {
        if (kotlin.ranges.d.d(((int) (2097151 & j10)) - ((int) ((j10 & 4398044413952L) >> 21)), 0) < this.f42165d) {
            int l10 = l();
            if (l10 == 1 && this.f42165d > 1) {
                l();
            }
            if (l10 > 0) {
                return true;
            }
        }
        return false;
    }

    static /* synthetic */ boolean Y0(a aVar, long j10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = f42162u.get(aVar);
        }
        return aVar.X0(j10);
    }

    public static final /* synthetic */ AtomicLongFieldUpdater a() {
        return f42162u;
    }

    private final boolean h(h hVar) {
        if (hVar.f42199e) {
            return this.f42170q.a(hVar);
        }
        return this.f42169p.a(hVar);
    }

    private final int l() {
        synchronized (this.f42171r) {
            try {
                if (isTerminated()) {
                    return -1;
                }
                long j10 = f42162u.get(this);
                int i10 = (int) (j10 & 2097151);
                int d10 = kotlin.ranges.d.d(i10 - ((int) ((j10 & 4398044413952L) >> 21)), 0);
                if (d10 >= this.f42165d) {
                    return 0;
                }
                if (i10 >= this.f42166e) {
                    return 0;
                }
                int i11 = ((int) (a().get(this) & 2097151)) + 1;
                if (i11 > 0 && this.f42171r.b(i11) == null) {
                    c cVar = new c(this, i11);
                    this.f42171r.c(i11, cVar);
                    if (i11 == ((int) (2097151 & f42162u.incrementAndGet(this)))) {
                        int i12 = d10 + 1;
                        cVar.start();
                        return i12;
                    }
                    throw new IllegalArgumentException("Failed requirement.");
                }
                throw new IllegalArgumentException("Failed requirement.");
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final boolean x1() {
        c C0;
        do {
            C0 = C0();
            if (C0 == null) {
                return false;
            }
        } while (!c.f42173t.compareAndSet(C0, -1, 0));
        LockSupport.unpark(C0);
        return true;
    }

    public final boolean D0(c cVar) {
        long j10;
        int f10;
        if (cVar.g() == f42164w) {
            AtomicLongFieldUpdater atomicLongFieldUpdater = f42161t;
            do {
                j10 = atomicLongFieldUpdater.get(this);
                f10 = cVar.f();
                cVar.o(this.f42171r.b((int) (2097151 & j10)));
            } while (!f42161t.compareAndSet(this, j10, ((2097152 + j10) & (-2097152)) | f10));
            return true;
        }
        return false;
    }

    public final void E(Runnable runnable, boolean z10, boolean z11) {
        long j10;
        gs.b.a();
        h n10 = n(runnable, z10);
        boolean z12 = n10.f42199e;
        if (z12) {
            j10 = f42162u.addAndGet(this, 2097152L);
        } else {
            j10 = 0;
        }
        h U0 = U0(B(), n10, z11);
        if (U0 != null && !h(U0)) {
            throw new RejectedExecutionException(this.f42168o + " was terminated");
        } else if (z12) {
            M0(j10);
        } else {
            R0();
        }
    }

    public final void F0(c cVar, int i10, int i11) {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f42161t;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            int i12 = (int) (2097151 & j10);
            long j11 = (2097152 + j10) & (-2097152);
            if (i12 == i10) {
                if (i11 == 0) {
                    i12 = A0(cVar);
                } else {
                    i12 = i11;
                }
            }
            if (i12 >= 0) {
                if (f42161t.compareAndSet(this, j10, j11 | i12)) {
                    return;
                }
            }
        }
    }

    public final void I0(h hVar) {
        try {
            hVar.run();
        } catch (Throwable th2) {
            try {
                Thread currentThread = Thread.currentThread();
                currentThread.getUncaughtExceptionHandler().uncaughtException(currentThread, th2);
            } finally {
                gs.b.a();
            }
        }
    }

    public final void J0(long j10) {
        int i10;
        h hVar;
        if (!f42163v.compareAndSet(this, 0, 1)) {
            return;
        }
        c B = B();
        synchronized (this.f42171r) {
            i10 = (int) (a().get(this) & 2097151);
        }
        if (1 <= i10) {
            int i11 = 1;
            while (true) {
                Object b10 = this.f42171r.b(i11);
                Intrinsics.checkNotNull(b10);
                c cVar = (c) b10;
                if (cVar != B) {
                    while (cVar.getState() != Thread.State.TERMINATED) {
                        LockSupport.unpark(cVar);
                        cVar.join(j10);
                    }
                    cVar.f42174d.j(this.f42170q);
                }
                if (i11 == i10) {
                    break;
                }
                i11++;
            }
        }
        this.f42170q.b();
        this.f42169p.b();
        while (true) {
            if (B != null) {
                hVar = B.e(true);
                if (hVar != null) {
                    continue;
                    I0(hVar);
                }
            }
            hVar = (h) this.f42169p.e();
            if (hVar == null && (hVar = (h) this.f42170q.e()) == null) {
                break;
            }
            I0(hVar);
        }
        if (B != null) {
            B.r(d.f42186p);
        }
        f42161t.set(this, 0L);
        f42162u.set(this, 0L);
    }

    public final void R0() {
        if (x1() || Y0(this, 0L, 1, null)) {
            return;
        }
        x1();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        J0(10000L);
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        F(this, runnable, false, false, 6, null);
    }

    public final boolean isTerminated() {
        if (f42163v.get(this) == 1) {
            return true;
        }
        return false;
    }

    public final h n(Runnable runnable, boolean z10) {
        long a10 = j.f42206f.a();
        if (runnable instanceof h) {
            h hVar = (h) runnable;
            hVar.f42198d = a10;
            hVar.f42199e = z10;
            return hVar;
        }
        return j.b(runnable, a10, z10);
    }

    public String toString() {
        ArrayList arrayList = new ArrayList();
        int a10 = this.f42171r.a();
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        for (int i15 = 1; i15 < a10; i15++) {
            c cVar = (c) this.f42171r.b(i15);
            if (cVar != null) {
                int i16 = cVar.f42174d.i();
                int i17 = b.f42172a[cVar.f42176i.ordinal()];
                if (i17 != 1) {
                    if (i17 != 2) {
                        if (i17 != 3) {
                            if (i17 != 4) {
                                if (i17 == 5) {
                                    i14++;
                                } else {
                                    throw new p();
                                }
                            } else {
                                i13++;
                                if (i16 > 0) {
                                    StringBuilder sb2 = new StringBuilder();
                                    sb2.append(i16);
                                    sb2.append('d');
                                    arrayList.add(sb2.toString());
                                }
                            }
                        } else {
                            i10++;
                            StringBuilder sb3 = new StringBuilder();
                            sb3.append(i16);
                            sb3.append('c');
                            arrayList.add(sb3.toString());
                        }
                    } else {
                        i11++;
                        StringBuilder sb4 = new StringBuilder();
                        sb4.append(i16);
                        sb4.append('b');
                        arrayList.add(sb4.toString());
                    }
                } else {
                    i12++;
                }
            }
        }
        long j10 = f42162u.get(this);
        return this.f42168o + '@' + gs.e0.b(this) + "[Pool Size {core = " + this.f42165d + ", max = " + this.f42166e + "}, Worker States {CPU = " + i10 + ", blocking = " + i11 + ", parked = " + i12 + ", dormant = " + i13 + ", terminated = " + i14 + "}, running workers queues = " + arrayList + ", global CPU queue size = " + this.f42169p.c() + ", global blocking queue size = " + this.f42170q.c() + ", Control State {created workers= " + ((int) (2097151 & j10)) + ", blocking tasks = " + ((int) ((4398044413952L & j10) >> 21)) + ", CPUs acquired = " + (this.f42165d - ((int) ((9223367638808264704L & j10) >> 42))) + "}]";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends Thread {

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ AtomicIntegerFieldUpdater f42173t = AtomicIntegerFieldUpdater.newUpdater(c.class, "workerCtl$volatile");

        /* renamed from: d  reason: collision with root package name */
        public final l f42174d;

        /* renamed from: e  reason: collision with root package name */
        private final Ref.ObjectRef f42175e;

        /* renamed from: i  reason: collision with root package name */
        public d f42176i;
        private volatile int indexInArray;
        private volatile Object nextParkedWorker;

        /* renamed from: o  reason: collision with root package name */
        private long f42177o;

        /* renamed from: p  reason: collision with root package name */
        private long f42178p;

        /* renamed from: q  reason: collision with root package name */
        private int f42179q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f42180r;
        private volatile /* synthetic */ int workerCtl$volatile;

        private c() {
            setDaemon(true);
            setContextClassLoader(a.this.getClass().getClassLoader());
            this.f42174d = new l();
            this.f42175e = new Ref.ObjectRef();
            this.f42176i = d.f42185o;
            this.nextParkedWorker = a.f42164w;
            int nanoTime = (int) System.nanoTime();
            this.f42179q = nanoTime == 0 ? 42 : nanoTime;
        }

        private final void b(h hVar) {
            this.f42177o = 0L;
            if (this.f42176i == d.f42184i) {
                this.f42176i = d.f42183e;
            }
            if (hVar.f42199e) {
                if (r(d.f42183e)) {
                    a.this.R0();
                }
                a.this.I0(hVar);
                a.a().addAndGet(a.this, -2097152L);
                if (this.f42176i != d.f42186p) {
                    this.f42176i = d.f42185o;
                    return;
                }
                return;
            }
            a.this.I0(hVar);
        }

        private final h c(boolean z10) {
            boolean z11;
            h l10;
            h l11;
            if (z10) {
                if (j(a.this.f42165d * 2) == 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (z11 && (l11 = l()) != null) {
                    return l11;
                }
                h k10 = this.f42174d.k();
                if (k10 != null) {
                    return k10;
                }
                if (!z11 && (l10 = l()) != null) {
                    return l10;
                }
            } else {
                h l12 = l();
                if (l12 != null) {
                    return l12;
                }
            }
            return s(3);
        }

        private final h d() {
            h l10 = this.f42174d.l();
            if (l10 == null) {
                h hVar = (h) a.this.f42170q.e();
                if (hVar == null) {
                    return s(1);
                }
                return hVar;
            }
            return l10;
        }

        private final boolean i() {
            if (this.nextParkedWorker != a.f42164w) {
                return true;
            }
            return false;
        }

        private final void k() {
            if (this.f42177o == 0) {
                this.f42177o = System.nanoTime() + a.this.f42167i;
            }
            LockSupport.parkNanos(a.this.f42167i);
            if (System.nanoTime() - this.f42177o >= 0) {
                this.f42177o = 0L;
                t();
            }
        }

        private final h l() {
            if (j(2) == 0) {
                h hVar = (h) a.this.f42169p.e();
                if (hVar != null) {
                    return hVar;
                }
                return (h) a.this.f42170q.e();
            }
            h hVar2 = (h) a.this.f42170q.e();
            if (hVar2 != null) {
                return hVar2;
            }
            return (h) a.this.f42169p.e();
        }

        private final void m() {
            loop0: while (true) {
                boolean z10 = false;
                while (!a.this.isTerminated() && this.f42176i != d.f42186p) {
                    h e10 = e(this.f42180r);
                    if (e10 != null) {
                        this.f42178p = 0L;
                        b(e10);
                    } else {
                        this.f42180r = false;
                        if (this.f42178p != 0) {
                            if (!z10) {
                                z10 = true;
                            } else {
                                r(d.f42184i);
                                Thread.interrupted();
                                LockSupport.parkNanos(this.f42178p);
                                this.f42178p = 0L;
                            }
                        } else {
                            q();
                        }
                    }
                }
            }
            r(d.f42186p);
        }

        private final boolean p() {
            long j10;
            if (this.f42176i == d.f42182d) {
                return true;
            }
            a aVar = a.this;
            AtomicLongFieldUpdater a10 = a.a();
            do {
                j10 = a10.get(aVar);
                if (((int) ((9223367638808264704L & j10) >> 42)) == 0) {
                    return false;
                }
            } while (!a.a().compareAndSet(aVar, j10, j10 - 4398046511104L));
            this.f42176i = d.f42182d;
            return true;
        }

        private final void q() {
            if (!i()) {
                a.this.D0(this);
                return;
            }
            f42173t.set(this, -1);
            while (i() && f42173t.get(this) == -1 && !a.this.isTerminated() && this.f42176i != d.f42186p) {
                r(d.f42184i);
                Thread.interrupted();
                k();
            }
        }

        private final h s(int i10) {
            int i11 = (int) (a.a().get(a.this) & 2097151);
            if (i11 < 2) {
                return null;
            }
            int j10 = j(i11);
            a aVar = a.this;
            long j11 = Long.MAX_VALUE;
            for (int i12 = 0; i12 < i11; i12++) {
                j10++;
                if (j10 > i11) {
                    j10 = 1;
                }
                c cVar = (c) aVar.f42171r.b(j10);
                if (cVar != null && cVar != this) {
                    long r10 = cVar.f42174d.r(i10, this.f42175e);
                    if (r10 == -1) {
                        Ref.ObjectRef objectRef = this.f42175e;
                        h hVar = (h) objectRef.element;
                        objectRef.element = null;
                        return hVar;
                    } else if (r10 > 0) {
                        j11 = Math.min(j11, r10);
                    }
                }
            }
            if (j11 == LongCompanionObject.MAX_VALUE) {
                j11 = 0;
            }
            this.f42178p = j11;
            return null;
        }

        private final void t() {
            a aVar = a.this;
            synchronized (aVar.f42171r) {
                try {
                    if (aVar.isTerminated()) {
                        return;
                    }
                    if (((int) (a.a().get(aVar) & 2097151)) <= aVar.f42165d) {
                        return;
                    }
                    if (!f42173t.compareAndSet(this, -1, 1)) {
                        return;
                    }
                    int i10 = this.indexInArray;
                    n(0);
                    aVar.F0(this, i10, 0);
                    int andDecrement = (int) (a.a().getAndDecrement(aVar) & 2097151);
                    if (andDecrement != i10) {
                        Object b10 = aVar.f42171r.b(andDecrement);
                        Intrinsics.checkNotNull(b10);
                        c cVar = (c) b10;
                        aVar.f42171r.c(i10, cVar);
                        cVar.n(i10);
                        aVar.F0(cVar, andDecrement, i10);
                    }
                    aVar.f42171r.c(andDecrement, null);
                    Unit unit = Unit.f33298a;
                    this.f42176i = d.f42186p;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final h e(boolean z10) {
            if (p()) {
                return c(z10);
            }
            return d();
        }

        public final int f() {
            return this.indexInArray;
        }

        public final Object g() {
            return this.nextParkedWorker;
        }

        public final int j(int i10) {
            int i11 = this.f42179q;
            int i12 = i11 ^ (i11 << 13);
            int i13 = i12 ^ (i12 >> 17);
            int i14 = i13 ^ (i13 << 5);
            this.f42179q = i14;
            int i15 = i10 - 1;
            if ((i15 & i10) == 0) {
                return i14 & i15;
            }
            return (i14 & Integer.MAX_VALUE) % i10;
        }

        public final void n(int i10) {
            String valueOf;
            StringBuilder sb2 = new StringBuilder();
            sb2.append(a.this.f42168o);
            sb2.append("-worker-");
            if (i10 == 0) {
                valueOf = "TERMINATED";
            } else {
                valueOf = String.valueOf(i10);
            }
            sb2.append(valueOf);
            setName(sb2.toString());
            this.indexInArray = i10;
        }

        public final void o(Object obj) {
            this.nextParkedWorker = obj;
        }

        public final boolean r(d dVar) {
            boolean z10;
            d dVar2 = this.f42176i;
            if (dVar2 == d.f42182d) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                a.a().addAndGet(a.this, 4398046511104L);
            }
            if (dVar2 != dVar) {
                this.f42176i = dVar;
            }
            return z10;
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            m();
        }

        public c(a aVar, int i10) {
            this();
            n(i10);
        }
    }
}
