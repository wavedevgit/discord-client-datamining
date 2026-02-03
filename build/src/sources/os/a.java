package os;

import java.io.Closeable;
import java.lang.Thread;
import java.util.ArrayList;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import java.util.concurrent.atomic.AtomicLongFieldUpdater;
import java.util.concurrent.locks.LockSupport;
import jr.p;
import kotlin.Unit;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.jvm.internal.Ref;
import ms.e0;
import ms.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Executor, Closeable {

    /* renamed from: s  reason: collision with root package name */
    public static final C0555a f44805s = new C0555a(null);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f44806t = AtomicLongFieldUpdater.newUpdater(a.class, "parkedWorkersStack$volatile");

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f44807u = AtomicLongFieldUpdater.newUpdater(a.class, "controlState$volatile");

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f44808v = AtomicIntegerFieldUpdater.newUpdater(a.class, "_isTerminated$volatile");

    /* renamed from: w  reason: collision with root package name */
    public static final e0 f44809w = new e0("NOT_IN_STACK");
    private volatile /* synthetic */ int _isTerminated$volatile;
    private volatile /* synthetic */ long controlState$volatile;

    /* renamed from: d  reason: collision with root package name */
    public final int f44810d;

    /* renamed from: e  reason: collision with root package name */
    public final int f44811e;

    /* renamed from: i  reason: collision with root package name */
    public final long f44812i;

    /* renamed from: o  reason: collision with root package name */
    public final String f44813o;

    /* renamed from: p  reason: collision with root package name */
    public final os.d f44814p;
    private volatile /* synthetic */ long parkedWorkersStack$volatile;

    /* renamed from: q  reason: collision with root package name */
    public final os.d f44815q;

    /* renamed from: r  reason: collision with root package name */
    public final z f44816r;

    /* renamed from: os.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0555a {
        public /* synthetic */ C0555a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0555a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f44817a;

        static {
            int[] iArr = new int[d.values().length];
            try {
                iArr[d.f44829i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d.f44828e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d.f44827d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[d.f44830o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[d.f44831p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f44817a = iArr;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f44827d = new d("CPU_ACQUIRED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f44828e = new d("BLOCKING", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f44829i = new d("PARKING", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final d f44830o = new d("DORMANT", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final d f44831p = new d("TERMINATED", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ d[] f44832q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f44833r;

        static {
            d[] a10 = a();
            f44832q = a10;
            f44833r = qr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f44827d, f44828e, f44829i, f44830o, f44831p};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f44832q.clone();
        }
    }

    public a(int i10, int i11, long j10, String str) {
        this.f44810d = i10;
        this.f44811e = i11;
        this.f44812i = j10;
        this.f44813o = str;
        if (i10 >= 1) {
            if (i11 >= i10) {
                if (i11 <= 2097150) {
                    if (j10 > 0) {
                        this.f44814p = new os.d();
                        this.f44815q = new os.d();
                        this.f44816r = new z((i10 + 1) * 2);
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

    private final c D0() {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f44806t;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            c cVar = (c) this.f44816r.b((int) (2097151 & j10));
            if (cVar == null) {
                return null;
            }
            long j11 = (2097152 + j10) & (-2097152);
            int t02 = t0(cVar);
            if (t02 >= 0 && f44806t.compareAndSet(this, j10, t02 | j11)) {
                cVar.o(f44809w);
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

    private final void L0(long j10) {
        if (e1() || Y0(j10)) {
            return;
        }
        e1();
    }

    private final h V0(c cVar, h hVar, boolean z10) {
        d dVar;
        if (cVar == null || (dVar = cVar.f44821i) == d.f44831p) {
            return hVar;
        }
        if (!hVar.f44844e && dVar == d.f44828e) {
            return hVar;
        }
        cVar.f44825r = true;
        return cVar.f44819d.a(hVar, z10);
    }

    private final boolean Y0(long j10) {
        if (kotlin.ranges.d.d(((int) (2097151 & j10)) - ((int) ((j10 & 4398044413952L) >> 21)), 0) < this.f44810d) {
            int l10 = l();
            if (l10 == 1 && this.f44810d > 1) {
                l();
            }
            if (l10 > 0) {
                return true;
            }
        }
        return false;
    }

    static /* synthetic */ boolean Z0(a aVar, long j10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = f44807u.get(aVar);
        }
        return aVar.Y0(j10);
    }

    public static final /* synthetic */ AtomicLongFieldUpdater a() {
        return f44807u;
    }

    private final boolean e1() {
        c D0;
        do {
            D0 = D0();
            if (D0 == null) {
                return false;
            }
        } while (!c.f44818t.compareAndSet(D0, -1, 0));
        LockSupport.unpark(D0);
        return true;
    }

    private final boolean h(h hVar) {
        if (hVar.f44844e) {
            return this.f44815q.a(hVar);
        }
        return this.f44814p.a(hVar);
    }

    private final int l() {
        synchronized (this.f44816r) {
            try {
                if (isTerminated()) {
                    return -1;
                }
                long j10 = f44807u.get(this);
                int i10 = (int) (j10 & 2097151);
                int d10 = kotlin.ranges.d.d(i10 - ((int) ((j10 & 4398044413952L) >> 21)), 0);
                if (d10 >= this.f44810d) {
                    return 0;
                }
                if (i10 >= this.f44811e) {
                    return 0;
                }
                int i11 = ((int) (a().get(this) & 2097151)) + 1;
                if (i11 > 0 && this.f44816r.b(i11) == null) {
                    c cVar = new c(this, i11);
                    this.f44816r.c(i11, cVar);
                    if (i11 == ((int) (2097151 & f44807u.incrementAndGet(this)))) {
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

    private final int t0(c cVar) {
        Object g10 = cVar.g();
        while (g10 != f44809w) {
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

    public final void E(Runnable runnable, boolean z10, boolean z11) {
        long j10;
        hs.b.a();
        h n10 = n(runnable, z10);
        boolean z12 = n10.f44844e;
        if (z12) {
            j10 = f44807u.addAndGet(this, 2097152L);
        } else {
            j10 = 0;
        }
        h V0 = V0(B(), n10, z11);
        if (V0 != null && !h(V0)) {
            throw new RejectedExecutionException(this.f44813o + " was terminated");
        } else if (z12) {
            L0(j10);
        } else {
            O0();
        }
    }

    public final boolean E0(c cVar) {
        long j10;
        int f10;
        if (cVar.g() == f44809w) {
            AtomicLongFieldUpdater atomicLongFieldUpdater = f44806t;
            do {
                j10 = atomicLongFieldUpdater.get(this);
                f10 = cVar.f();
                cVar.o(this.f44816r.b((int) (2097151 & j10)));
            } while (!f44806t.compareAndSet(this, j10, ((2097152 + j10) & (-2097152)) | f10));
            return true;
        }
        return false;
    }

    public final void G0(c cVar, int i10, int i11) {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f44806t;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            int i12 = (int) (2097151 & j10);
            long j11 = (2097152 + j10) & (-2097152);
            if (i12 == i10) {
                if (i11 == 0) {
                    i12 = t0(cVar);
                } else {
                    i12 = i11;
                }
            }
            if (i12 >= 0) {
                if (f44806t.compareAndSet(this, j10, j11 | i12)) {
                    return;
                }
            }
        }
    }

    public final void J0(h hVar) {
        try {
            hVar.run();
        } catch (Throwable th2) {
            try {
                Thread currentThread = Thread.currentThread();
                currentThread.getUncaughtExceptionHandler().uncaughtException(currentThread, th2);
            } finally {
                hs.b.a();
            }
        }
    }

    public final void K0(long j10) {
        int i10;
        h hVar;
        if (!f44808v.compareAndSet(this, 0, 1)) {
            return;
        }
        c B = B();
        synchronized (this.f44816r) {
            i10 = (int) (a().get(this) & 2097151);
        }
        if (1 <= i10) {
            int i11 = 1;
            while (true) {
                Object b10 = this.f44816r.b(i11);
                Intrinsics.checkNotNull(b10);
                c cVar = (c) b10;
                if (cVar != B) {
                    while (cVar.getState() != Thread.State.TERMINATED) {
                        LockSupport.unpark(cVar);
                        cVar.join(j10);
                    }
                    cVar.f44819d.j(this.f44815q);
                }
                if (i11 == i10) {
                    break;
                }
                i11++;
            }
        }
        this.f44815q.b();
        this.f44814p.b();
        while (true) {
            if (B != null) {
                hVar = B.e(true);
                if (hVar != null) {
                    continue;
                    J0(hVar);
                }
            }
            hVar = (h) this.f44814p.e();
            if (hVar == null && (hVar = (h) this.f44815q.e()) == null) {
                break;
            }
            J0(hVar);
        }
        if (B != null) {
            B.r(d.f44831p);
        }
        f44806t.set(this, 0L);
        f44807u.set(this, 0L);
    }

    public final void O0() {
        if (e1() || Z0(this, 0L, 1, null)) {
            return;
        }
        e1();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        K0(10000L);
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        F(this, runnable, false, false, 6, null);
    }

    public final boolean isTerminated() {
        if (f44808v.get(this) == 1) {
            return true;
        }
        return false;
    }

    public final h n(Runnable runnable, boolean z10) {
        long a10 = j.f44851f.a();
        if (runnable instanceof h) {
            h hVar = (h) runnable;
            hVar.f44843d = a10;
            hVar.f44844e = z10;
            return hVar;
        }
        return j.b(runnable, a10, z10);
    }

    public String toString() {
        ArrayList arrayList = new ArrayList();
        int a10 = this.f44816r.a();
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        for (int i15 = 1; i15 < a10; i15++) {
            c cVar = (c) this.f44816r.b(i15);
            if (cVar != null) {
                int i16 = cVar.f44819d.i();
                int i17 = b.f44817a[cVar.f44821i.ordinal()];
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
        long j10 = f44807u.get(this);
        return this.f44813o + '@' + hs.e0.b(this) + "[Pool Size {core = " + this.f44810d + ", max = " + this.f44811e + "}, Worker States {CPU = " + i10 + ", blocking = " + i11 + ", parked = " + i12 + ", dormant = " + i13 + ", terminated = " + i14 + "}, running workers queues = " + arrayList + ", global CPU queue size = " + this.f44814p.c() + ", global blocking queue size = " + this.f44815q.c() + ", Control State {created workers= " + ((int) (2097151 & j10)) + ", blocking tasks = " + ((int) ((4398044413952L & j10) >> 21)) + ", CPUs acquired = " + (this.f44810d - ((int) ((9223367638808264704L & j10) >> 42))) + "}]";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends Thread {

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ AtomicIntegerFieldUpdater f44818t = AtomicIntegerFieldUpdater.newUpdater(c.class, "workerCtl$volatile");

        /* renamed from: d  reason: collision with root package name */
        public final l f44819d;

        /* renamed from: e  reason: collision with root package name */
        private final Ref.ObjectRef f44820e;

        /* renamed from: i  reason: collision with root package name */
        public d f44821i;
        private volatile int indexInArray;
        private volatile Object nextParkedWorker;

        /* renamed from: o  reason: collision with root package name */
        private long f44822o;

        /* renamed from: p  reason: collision with root package name */
        private long f44823p;

        /* renamed from: q  reason: collision with root package name */
        private int f44824q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f44825r;
        private volatile /* synthetic */ int workerCtl$volatile;

        private c() {
            setDaemon(true);
            setContextClassLoader(a.this.getClass().getClassLoader());
            this.f44819d = new l();
            this.f44820e = new Ref.ObjectRef();
            this.f44821i = d.f44830o;
            this.nextParkedWorker = a.f44809w;
            int nanoTime = (int) System.nanoTime();
            this.f44824q = nanoTime == 0 ? 42 : nanoTime;
        }

        private final void b(h hVar) {
            this.f44822o = 0L;
            if (this.f44821i == d.f44829i) {
                this.f44821i = d.f44828e;
            }
            if (hVar.f44844e) {
                if (r(d.f44828e)) {
                    a.this.O0();
                }
                a.this.J0(hVar);
                a.a().addAndGet(a.this, -2097152L);
                if (this.f44821i != d.f44831p) {
                    this.f44821i = d.f44830o;
                    return;
                }
                return;
            }
            a.this.J0(hVar);
        }

        private final h c(boolean z10) {
            boolean z11;
            h l10;
            h l11;
            if (z10) {
                if (j(a.this.f44810d * 2) == 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (z11 && (l11 = l()) != null) {
                    return l11;
                }
                h k10 = this.f44819d.k();
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
            h l10 = this.f44819d.l();
            if (l10 == null) {
                h hVar = (h) a.this.f44815q.e();
                if (hVar == null) {
                    return s(1);
                }
                return hVar;
            }
            return l10;
        }

        private final boolean i() {
            if (this.nextParkedWorker != a.f44809w) {
                return true;
            }
            return false;
        }

        private final void k() {
            if (this.f44822o == 0) {
                this.f44822o = System.nanoTime() + a.this.f44812i;
            }
            LockSupport.parkNanos(a.this.f44812i);
            if (System.nanoTime() - this.f44822o >= 0) {
                this.f44822o = 0L;
                t();
            }
        }

        private final h l() {
            if (j(2) == 0) {
                h hVar = (h) a.this.f44814p.e();
                if (hVar != null) {
                    return hVar;
                }
                return (h) a.this.f44815q.e();
            }
            h hVar2 = (h) a.this.f44815q.e();
            if (hVar2 != null) {
                return hVar2;
            }
            return (h) a.this.f44814p.e();
        }

        private final void m() {
            loop0: while (true) {
                boolean z10 = false;
                while (!a.this.isTerminated() && this.f44821i != d.f44831p) {
                    h e10 = e(this.f44825r);
                    if (e10 != null) {
                        this.f44823p = 0L;
                        b(e10);
                    } else {
                        this.f44825r = false;
                        if (this.f44823p != 0) {
                            if (!z10) {
                                z10 = true;
                            } else {
                                r(d.f44829i);
                                Thread.interrupted();
                                LockSupport.parkNanos(this.f44823p);
                                this.f44823p = 0L;
                            }
                        } else {
                            q();
                        }
                    }
                }
            }
            r(d.f44831p);
        }

        private final boolean p() {
            long j10;
            if (this.f44821i == d.f44827d) {
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
            this.f44821i = d.f44827d;
            return true;
        }

        private final void q() {
            if (!i()) {
                a.this.E0(this);
                return;
            }
            f44818t.set(this, -1);
            while (i() && f44818t.get(this) == -1 && !a.this.isTerminated() && this.f44821i != d.f44831p) {
                r(d.f44829i);
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
                c cVar = (c) aVar.f44816r.b(j10);
                if (cVar != null && cVar != this) {
                    long r10 = cVar.f44819d.r(i10, this.f44820e);
                    if (r10 == -1) {
                        Ref.ObjectRef objectRef = this.f44820e;
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
            this.f44823p = j11;
            return null;
        }

        private final void t() {
            a aVar = a.this;
            synchronized (aVar.f44816r) {
                try {
                    if (aVar.isTerminated()) {
                        return;
                    }
                    if (((int) (a.a().get(aVar) & 2097151)) <= aVar.f44810d) {
                        return;
                    }
                    if (!f44818t.compareAndSet(this, -1, 1)) {
                        return;
                    }
                    int i10 = this.indexInArray;
                    n(0);
                    aVar.G0(this, i10, 0);
                    int andDecrement = (int) (a.a().getAndDecrement(aVar) & 2097151);
                    if (andDecrement != i10) {
                        Object b10 = aVar.f44816r.b(andDecrement);
                        Intrinsics.checkNotNull(b10);
                        c cVar = (c) b10;
                        aVar.f44816r.c(i10, cVar);
                        cVar.n(i10);
                        aVar.G0(cVar, andDecrement, i10);
                    }
                    aVar.f44816r.c(andDecrement, null);
                    Unit unit = Unit.f33074a;
                    this.f44821i = d.f44831p;
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
            int i11 = this.f44824q;
            int i12 = i11 ^ (i11 << 13);
            int i13 = i12 ^ (i12 >> 17);
            int i14 = i13 ^ (i13 << 5);
            this.f44824q = i14;
            int i15 = i10 - 1;
            if ((i15 & i10) == 0) {
                return i14 & i15;
            }
            return (i14 & Integer.MAX_VALUE) % i10;
        }

        public final void n(int i10) {
            String valueOf;
            StringBuilder sb2 = new StringBuilder();
            sb2.append(a.this.f44813o);
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
            d dVar2 = this.f44821i;
            if (dVar2 == d.f44827d) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                a.a().addAndGet(a.this, 4398046511104L);
            }
            if (dVar2 != dVar) {
                this.f44821i = dVar;
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
