package ft;

import as.p;
import dt.e0;
import dt.z;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Executor, Closeable {

    /* renamed from: s  reason: collision with root package name */
    public static final C0329a f24333s = new C0329a(null);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f24334t = AtomicLongFieldUpdater.newUpdater(a.class, "parkedWorkersStack$volatile");

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f24335u = AtomicLongFieldUpdater.newUpdater(a.class, "controlState$volatile");

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f24336v = AtomicIntegerFieldUpdater.newUpdater(a.class, "_isTerminated$volatile");

    /* renamed from: w  reason: collision with root package name */
    public static final e0 f24337w = new e0("NOT_IN_STACK");
    private volatile /* synthetic */ int _isTerminated$volatile;
    private volatile /* synthetic */ long controlState$volatile;

    /* renamed from: d  reason: collision with root package name */
    public final int f24338d;

    /* renamed from: e  reason: collision with root package name */
    public final int f24339e;

    /* renamed from: i  reason: collision with root package name */
    public final long f24340i;

    /* renamed from: o  reason: collision with root package name */
    public final String f24341o;

    /* renamed from: p  reason: collision with root package name */
    public final ft.d f24342p;
    private volatile /* synthetic */ long parkedWorkersStack$volatile;

    /* renamed from: q  reason: collision with root package name */
    public final ft.d f24343q;

    /* renamed from: r  reason: collision with root package name */
    public final z f24344r;

    /* renamed from: ft.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0329a {
        public /* synthetic */ C0329a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0329a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f24345a;

        static {
            int[] iArr = new int[d.values().length];
            try {
                iArr[d.f24357i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d.f24356e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d.f24355d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[d.f24358o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[d.f24359p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f24345a = iArr;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f24355d = new d("CPU_ACQUIRED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f24356e = new d("BLOCKING", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f24357i = new d("PARKING", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final d f24358o = new d("DORMANT", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final d f24359p = new d("TERMINATED", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ d[] f24360q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f24361r;

        static {
            d[] a10 = a();
            f24360q = a10;
            f24361r = hs.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f24355d, f24356e, f24357i, f24358o, f24359p};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f24360q.clone();
        }
    }

    public a(int i10, int i11, long j10, String str) {
        this.f24338d = i10;
        this.f24339e = i11;
        this.f24340i = j10;
        this.f24341o = str;
        if (i10 >= 1) {
            if (i11 >= i10) {
                if (i11 <= 2097150) {
                    if (j10 > 0) {
                        this.f24342p = new ft.d();
                        this.f24343q = new ft.d();
                        this.f24344r = new z((i10 + 1) * 2);
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

    private final void G0(long j10) {
        if (S0() || N0(j10)) {
            return;
        }
        S0();
    }

    private final int J(c cVar) {
        Object g10 = cVar.g();
        while (g10 != f24337w) {
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

    private final h L0(c cVar, h hVar, boolean z10) {
        d dVar;
        if (cVar == null || (dVar = cVar.f24349i) == d.f24359p) {
            return hVar;
        }
        if (!hVar.f24372e && dVar == d.f24356e) {
            return hVar;
        }
        cVar.f24353r = true;
        return cVar.f24347d.a(hVar, z10);
    }

    private final boolean N0(long j10) {
        if (kotlin.ranges.d.d(((int) (2097151 & j10)) - ((int) ((j10 & 4398044413952L) >> 21)), 0) < this.f24338d) {
            int m10 = m();
            if (m10 == 1 && this.f24338d > 1) {
                m();
            }
            if (m10 > 0) {
                return true;
            }
        }
        return false;
    }

    static /* synthetic */ boolean O0(a aVar, long j10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = f24335u.get(aVar);
        }
        return aVar.N0(j10);
    }

    private final c Q() {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f24334t;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            c cVar = (c) this.f24344r.b((int) (2097151 & j10));
            if (cVar == null) {
                return null;
            }
            long j11 = (2097152 + j10) & (-2097152);
            int J = J(cVar);
            if (J >= 0 && f24334t.compareAndSet(this, j10, J | j11)) {
                cVar.o(f24337w);
                return cVar;
            }
        }
    }

    private final boolean S0() {
        c Q;
        do {
            Q = Q();
            if (Q == null) {
                return false;
            }
        } while (!c.f24346t.compareAndSet(Q, -1, 0));
        LockSupport.unpark(Q);
        return true;
    }

    public static final /* synthetic */ AtomicLongFieldUpdater a() {
        return f24335u;
    }

    private final boolean i(h hVar) {
        if (hVar.f24372e) {
            return this.f24343q.a(hVar);
        }
        return this.f24342p.a(hVar);
    }

    private final int m() {
        synchronized (this.f24344r) {
            try {
                if (isTerminated()) {
                    return -1;
                }
                long j10 = f24335u.get(this);
                int i10 = (int) (j10 & 2097151);
                int d10 = kotlin.ranges.d.d(i10 - ((int) ((j10 & 4398044413952L) >> 21)), 0);
                if (d10 >= this.f24338d) {
                    return 0;
                }
                if (i10 >= this.f24339e) {
                    return 0;
                }
                int i11 = ((int) (a().get(this) & 2097151)) + 1;
                if (i11 > 0 && this.f24344r.b(i11) == null) {
                    c cVar = new c(this, i11);
                    this.f24344r.c(i11, cVar);
                    if (i11 == ((int) (2097151 & f24335u.incrementAndGet(this)))) {
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

    private final c p() {
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

    public static /* synthetic */ void y(a aVar, Runnable runnable, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        if ((i10 & 4) != 0) {
            z11 = false;
        }
        aVar.s(runnable, z10, z11);
    }

    public final void C0(h hVar) {
        try {
            hVar.run();
        } catch (Throwable th2) {
            try {
                Thread currentThread = Thread.currentThread();
                currentThread.getUncaughtExceptionHandler().uncaughtException(currentThread, th2);
            } finally {
                ys.b.a();
            }
        }
    }

    public final void F0(long j10) {
        int i10;
        h hVar;
        if (!f24336v.compareAndSet(this, 0, 1)) {
            return;
        }
        c p10 = p();
        synchronized (this.f24344r) {
            i10 = (int) (a().get(this) & 2097151);
        }
        if (1 <= i10) {
            int i11 = 1;
            while (true) {
                Object b10 = this.f24344r.b(i11);
                Intrinsics.checkNotNull(b10);
                c cVar = (c) b10;
                if (cVar != p10) {
                    while (cVar.getState() != Thread.State.TERMINATED) {
                        LockSupport.unpark(cVar);
                        cVar.join(j10);
                    }
                    cVar.f24347d.j(this.f24343q);
                }
                if (i11 == i10) {
                    break;
                }
                i11++;
            }
        }
        this.f24343q.b();
        this.f24342p.b();
        while (true) {
            if (p10 != null) {
                hVar = p10.e(true);
                if (hVar != null) {
                    continue;
                    C0(hVar);
                }
            }
            hVar = (h) this.f24342p.e();
            if (hVar == null && (hVar = (h) this.f24343q.e()) == null) {
                break;
            }
            C0(hVar);
        }
        if (p10 != null) {
            p10.r(d.f24359p);
        }
        f24334t.set(this, 0L);
        f24335u.set(this, 0L);
    }

    public final void H0() {
        if (S0() || O0(this, 0L, 1, null)) {
            return;
        }
        S0();
    }

    public final boolean Z(c cVar) {
        long j10;
        int f10;
        if (cVar.g() == f24337w) {
            AtomicLongFieldUpdater atomicLongFieldUpdater = f24334t;
            do {
                j10 = atomicLongFieldUpdater.get(this);
                f10 = cVar.f();
                cVar.o(this.f24344r.b((int) (2097151 & j10)));
            } while (!f24334t.compareAndSet(this, j10, ((2097152 + j10) & (-2097152)) | f10));
            return true;
        }
        return false;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        F0(10000L);
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        y(this, runnable, false, false, 6, null);
    }

    public final boolean isTerminated() {
        if (f24336v.get(this) == 1) {
            return true;
        }
        return false;
    }

    public final h n(Runnable runnable, boolean z10) {
        long a10 = j.f24379f.a();
        if (runnable instanceof h) {
            h hVar = (h) runnable;
            hVar.f24371d = a10;
            hVar.f24372e = z10;
            return hVar;
        }
        return j.b(runnable, a10, z10);
    }

    public final void s(Runnable runnable, boolean z10, boolean z11) {
        long j10;
        ys.b.a();
        h n10 = n(runnable, z10);
        boolean z12 = n10.f24372e;
        if (z12) {
            j10 = f24335u.addAndGet(this, 2097152L);
        } else {
            j10 = 0;
        }
        h L0 = L0(p(), n10, z11);
        if (L0 != null && !i(L0)) {
            throw new RejectedExecutionException(this.f24341o + " was terminated");
        } else if (z12) {
            G0(j10);
        } else {
            H0();
        }
    }

    public String toString() {
        ArrayList arrayList = new ArrayList();
        int a10 = this.f24344r.a();
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        for (int i15 = 1; i15 < a10; i15++) {
            c cVar = (c) this.f24344r.b(i15);
            if (cVar != null) {
                int i16 = cVar.f24347d.i();
                int i17 = b.f24345a[cVar.f24349i.ordinal()];
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
        long j10 = f24335u.get(this);
        return this.f24341o + '@' + ys.e0.b(this) + "[Pool Size {core = " + this.f24338d + ", max = " + this.f24339e + "}, Worker States {CPU = " + i10 + ", blocking = " + i11 + ", parked = " + i12 + ", dormant = " + i13 + ", terminated = " + i14 + "}, running workers queues = " + arrayList + ", global CPU queue size = " + this.f24342p.c() + ", global blocking queue size = " + this.f24343q.c() + ", Control State {created workers= " + ((int) (2097151 & j10)) + ", blocking tasks = " + ((int) ((4398044413952L & j10) >> 21)) + ", CPUs acquired = " + (this.f24338d - ((int) ((9223367638808264704L & j10) >> 42))) + "}]";
    }

    public final void z0(c cVar, int i10, int i11) {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f24334t;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            int i12 = (int) (2097151 & j10);
            long j11 = (2097152 + j10) & (-2097152);
            if (i12 == i10) {
                if (i11 == 0) {
                    i12 = J(cVar);
                } else {
                    i12 = i11;
                }
            }
            if (i12 >= 0) {
                if (f24334t.compareAndSet(this, j10, j11 | i12)) {
                    return;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends Thread {

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ AtomicIntegerFieldUpdater f24346t = AtomicIntegerFieldUpdater.newUpdater(c.class, "workerCtl$volatile");

        /* renamed from: d  reason: collision with root package name */
        public final l f24347d;

        /* renamed from: e  reason: collision with root package name */
        private final Ref.ObjectRef f24348e;

        /* renamed from: i  reason: collision with root package name */
        public d f24349i;
        private volatile int indexInArray;
        private volatile Object nextParkedWorker;

        /* renamed from: o  reason: collision with root package name */
        private long f24350o;

        /* renamed from: p  reason: collision with root package name */
        private long f24351p;

        /* renamed from: q  reason: collision with root package name */
        private int f24352q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f24353r;
        private volatile /* synthetic */ int workerCtl$volatile;

        private c() {
            setDaemon(true);
            setContextClassLoader(a.this.getClass().getClassLoader());
            this.f24347d = new l();
            this.f24348e = new Ref.ObjectRef();
            this.f24349i = d.f24358o;
            this.nextParkedWorker = a.f24337w;
            int nanoTime = (int) System.nanoTime();
            this.f24352q = nanoTime == 0 ? 42 : nanoTime;
        }

        private final void b(h hVar) {
            this.f24350o = 0L;
            if (this.f24349i == d.f24357i) {
                this.f24349i = d.f24356e;
            }
            if (hVar.f24372e) {
                if (r(d.f24356e)) {
                    a.this.H0();
                }
                a.this.C0(hVar);
                a.a().addAndGet(a.this, -2097152L);
                if (this.f24349i != d.f24359p) {
                    this.f24349i = d.f24358o;
                    return;
                }
                return;
            }
            a.this.C0(hVar);
        }

        private final h c(boolean z10) {
            boolean z11;
            h l10;
            h l11;
            if (z10) {
                if (j(a.this.f24338d * 2) == 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (z11 && (l11 = l()) != null) {
                    return l11;
                }
                h k10 = this.f24347d.k();
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
            h l10 = this.f24347d.l();
            if (l10 == null) {
                h hVar = (h) a.this.f24343q.e();
                if (hVar == null) {
                    return s(1);
                }
                return hVar;
            }
            return l10;
        }

        private final boolean i() {
            if (this.nextParkedWorker != a.f24337w) {
                return true;
            }
            return false;
        }

        private final void k() {
            if (this.f24350o == 0) {
                this.f24350o = System.nanoTime() + a.this.f24340i;
            }
            LockSupport.parkNanos(a.this.f24340i);
            if (System.nanoTime() - this.f24350o >= 0) {
                this.f24350o = 0L;
                t();
            }
        }

        private final h l() {
            if (j(2) == 0) {
                h hVar = (h) a.this.f24342p.e();
                if (hVar != null) {
                    return hVar;
                }
                return (h) a.this.f24343q.e();
            }
            h hVar2 = (h) a.this.f24343q.e();
            if (hVar2 != null) {
                return hVar2;
            }
            return (h) a.this.f24342p.e();
        }

        private final void m() {
            loop0: while (true) {
                boolean z10 = false;
                while (!a.this.isTerminated() && this.f24349i != d.f24359p) {
                    h e10 = e(this.f24353r);
                    if (e10 != null) {
                        this.f24351p = 0L;
                        b(e10);
                    } else {
                        this.f24353r = false;
                        if (this.f24351p != 0) {
                            if (!z10) {
                                z10 = true;
                            } else {
                                r(d.f24357i);
                                Thread.interrupted();
                                LockSupport.parkNanos(this.f24351p);
                                this.f24351p = 0L;
                            }
                        } else {
                            q();
                        }
                    }
                }
            }
            r(d.f24359p);
        }

        private final boolean p() {
            long j10;
            if (this.f24349i == d.f24355d) {
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
            this.f24349i = d.f24355d;
            return true;
        }

        private final void q() {
            if (!i()) {
                a.this.Z(this);
                return;
            }
            f24346t.set(this, -1);
            while (i() && f24346t.get(this) == -1 && !a.this.isTerminated() && this.f24349i != d.f24359p) {
                r(d.f24357i);
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
                c cVar = (c) aVar.f24344r.b(j10);
                if (cVar != null && cVar != this) {
                    long r10 = cVar.f24347d.r(i10, this.f24348e);
                    if (r10 == -1) {
                        Ref.ObjectRef objectRef = this.f24348e;
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
            this.f24351p = j11;
            return null;
        }

        private final void t() {
            a aVar = a.this;
            synchronized (aVar.f24344r) {
                try {
                    if (aVar.isTerminated()) {
                        return;
                    }
                    if (((int) (a.a().get(aVar) & 2097151)) <= aVar.f24338d) {
                        return;
                    }
                    if (!f24346t.compareAndSet(this, -1, 1)) {
                        return;
                    }
                    int i10 = this.indexInArray;
                    n(0);
                    aVar.z0(this, i10, 0);
                    int andDecrement = (int) (a.a().getAndDecrement(aVar) & 2097151);
                    if (andDecrement != i10) {
                        Object b10 = aVar.f24344r.b(andDecrement);
                        Intrinsics.checkNotNull(b10);
                        c cVar = (c) b10;
                        aVar.f24344r.c(i10, cVar);
                        cVar.n(i10);
                        aVar.z0(cVar, andDecrement, i10);
                    }
                    aVar.f24344r.c(andDecrement, null);
                    Unit unit = Unit.f31987a;
                    this.f24349i = d.f24359p;
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
            int i11 = this.f24352q;
            int i12 = i11 ^ (i11 << 13);
            int i13 = i12 ^ (i12 >> 17);
            int i14 = i13 ^ (i13 << 5);
            this.f24352q = i14;
            int i15 = i10 - 1;
            if ((i15 & i10) == 0) {
                return i14 & i15;
            }
            return (i14 & Integer.MAX_VALUE) % i10;
        }

        public final void n(int i10) {
            String valueOf;
            StringBuilder sb2 = new StringBuilder();
            sb2.append(a.this.f24341o);
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
            d dVar2 = this.f24349i;
            if (dVar2 == d.f24355d) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                a.a().addAndGet(a.this, 4398046511104L);
            }
            if (dVar2 != dVar) {
                this.f24349i = dVar;
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
