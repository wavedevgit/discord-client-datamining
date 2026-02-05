package ts;

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
import or.p;
import rs.e0;
import rs.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Executor, Closeable {

    /* renamed from: s  reason: collision with root package name */
    public static final C0656a f51005s = new C0656a(null);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f51006t = AtomicLongFieldUpdater.newUpdater(a.class, "parkedWorkersStack$volatile");

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f51007u = AtomicLongFieldUpdater.newUpdater(a.class, "controlState$volatile");

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f51008v = AtomicIntegerFieldUpdater.newUpdater(a.class, "_isTerminated$volatile");

    /* renamed from: w  reason: collision with root package name */
    public static final e0 f51009w = new e0("NOT_IN_STACK");
    private volatile /* synthetic */ int _isTerminated$volatile;
    private volatile /* synthetic */ long controlState$volatile;

    /* renamed from: d  reason: collision with root package name */
    public final int f51010d;

    /* renamed from: e  reason: collision with root package name */
    public final int f51011e;

    /* renamed from: i  reason: collision with root package name */
    public final long f51012i;

    /* renamed from: o  reason: collision with root package name */
    public final String f51013o;

    /* renamed from: p  reason: collision with root package name */
    public final ts.d f51014p;
    private volatile /* synthetic */ long parkedWorkersStack$volatile;

    /* renamed from: q  reason: collision with root package name */
    public final ts.d f51015q;

    /* renamed from: r  reason: collision with root package name */
    public final z f51016r;

    /* renamed from: ts.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0656a {
        public /* synthetic */ C0656a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0656a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f51017a;

        static {
            int[] iArr = new int[d.values().length];
            try {
                iArr[d.f51029i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d.f51028e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d.f51027d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[d.f51030o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[d.f51031p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f51017a = iArr;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f51027d = new d("CPU_ACQUIRED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f51028e = new d("BLOCKING", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f51029i = new d("PARKING", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final d f51030o = new d("DORMANT", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final d f51031p = new d("TERMINATED", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ d[] f51032q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f51033r;

        static {
            d[] a10 = a();
            f51032q = a10;
            f51033r = vr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f51027d, f51028e, f51029i, f51030o, f51031p};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f51032q.clone();
        }
    }

    public a(int i10, int i11, long j10, String str) {
        this.f51010d = i10;
        this.f51011e = i11;
        this.f51012i = j10;
        this.f51013o = str;
        if (i10 >= 1) {
            if (i11 >= i10) {
                if (i11 <= 2097150) {
                    if (j10 > 0) {
                        this.f51014p = new ts.d();
                        this.f51015q = new ts.d();
                        this.f51016r = new z((i10 + 1) * 2);
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

    private final c C0() {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f51006t;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            c cVar = (c) this.f51016r.b((int) (2097151 & j10));
            if (cVar == null) {
                return null;
            }
            long j11 = (2097152 + j10) & (-2097152);
            int W = W(cVar);
            if (W >= 0 && f51006t.compareAndSet(this, j10, W | j11)) {
                cVar.o(f51009w);
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

    private final void N0(long j10) {
        if (x1() || Y0(j10)) {
            return;
        }
        x1();
    }

    private final h V0(c cVar, h hVar, boolean z10) {
        d dVar;
        if (cVar == null || (dVar = cVar.f51021i) == d.f51031p) {
            return hVar;
        }
        if (!hVar.f51044e && dVar == d.f51028e) {
            return hVar;
        }
        cVar.f51025r = true;
        return cVar.f51019d.a(hVar, z10);
    }

    private final int W(c cVar) {
        Object g10 = cVar.g();
        while (g10 != f51009w) {
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

    private final boolean Y0(long j10) {
        if (kotlin.ranges.d.d(((int) (2097151 & j10)) - ((int) ((j10 & 4398044413952L) >> 21)), 0) < this.f51010d) {
            int k10 = k();
            if (k10 == 1 && this.f51010d > 1) {
                k();
            }
            if (k10 > 0) {
                return true;
            }
        }
        return false;
    }

    static /* synthetic */ boolean Z0(a aVar, long j10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = f51007u.get(aVar);
        }
        return aVar.Y0(j10);
    }

    public static final /* synthetic */ AtomicLongFieldUpdater a() {
        return f51007u;
    }

    private final boolean h(h hVar) {
        if (hVar.f51044e) {
            return this.f51015q.a(hVar);
        }
        return this.f51014p.a(hVar);
    }

    private final int k() {
        synchronized (this.f51016r) {
            try {
                if (isTerminated()) {
                    return -1;
                }
                long j10 = f51007u.get(this);
                int i10 = (int) (j10 & 2097151);
                int d10 = kotlin.ranges.d.d(i10 - ((int) ((j10 & 4398044413952L) >> 21)), 0);
                if (d10 >= this.f51010d) {
                    return 0;
                }
                if (i10 >= this.f51011e) {
                    return 0;
                }
                int i11 = ((int) (a().get(this) & 2097151)) + 1;
                if (i11 > 0 && this.f51016r.b(i11) == null) {
                    c cVar = new c(this, i11);
                    this.f51016r.c(i11, cVar);
                    if (i11 == ((int) (2097151 & f51007u.incrementAndGet(this)))) {
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
        } while (!c.f51018t.compareAndSet(C0, -1, 0));
        LockSupport.unpark(C0);
        return true;
    }

    private final c y() {
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

    public final boolean D0(c cVar) {
        long j10;
        int f10;
        if (cVar.g() == f51009w) {
            AtomicLongFieldUpdater atomicLongFieldUpdater = f51006t;
            do {
                j10 = atomicLongFieldUpdater.get(this);
                f10 = cVar.f();
                cVar.o(this.f51016r.b((int) (2097151 & j10)));
            } while (!f51006t.compareAndSet(this, j10, ((2097152 + j10) & (-2097152)) | f10));
            return true;
        }
        return false;
    }

    public final void E(Runnable runnable, boolean z10, boolean z11) {
        long j10;
        ms.b.a();
        h o10 = o(runnable, z10);
        boolean z12 = o10.f51044e;
        if (z12) {
            j10 = f51007u.addAndGet(this, 2097152L);
        } else {
            j10 = 0;
        }
        h V0 = V0(y(), o10, z11);
        if (V0 != null && !h(V0)) {
            throw new RejectedExecutionException(this.f51013o + " was terminated");
        } else if (z12) {
            N0(j10);
        } else {
            S0();
        }
    }

    public final void F0(c cVar, int i10, int i11) {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f51006t;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            int i12 = (int) (2097151 & j10);
            long j11 = (2097152 + j10) & (-2097152);
            if (i12 == i10) {
                if (i11 == 0) {
                    i12 = W(cVar);
                } else {
                    i12 = i11;
                }
            }
            if (i12 >= 0) {
                if (f51006t.compareAndSet(this, j10, j11 | i12)) {
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
                ms.b.a();
            }
        }
    }

    public final void K0(long j10) {
        int i10;
        h hVar;
        if (!f51008v.compareAndSet(this, 0, 1)) {
            return;
        }
        c y10 = y();
        synchronized (this.f51016r) {
            i10 = (int) (a().get(this) & 2097151);
        }
        if (1 <= i10) {
            int i11 = 1;
            while (true) {
                Object b10 = this.f51016r.b(i11);
                Intrinsics.checkNotNull(b10);
                c cVar = (c) b10;
                if (cVar != y10) {
                    while (cVar.getState() != Thread.State.TERMINATED) {
                        LockSupport.unpark(cVar);
                        cVar.join(j10);
                    }
                    cVar.f51019d.j(this.f51015q);
                }
                if (i11 == i10) {
                    break;
                }
                i11++;
            }
        }
        this.f51015q.b();
        this.f51014p.b();
        while (true) {
            if (y10 != null) {
                hVar = y10.e(true);
                if (hVar != null) {
                    continue;
                    I0(hVar);
                }
            }
            hVar = (h) this.f51014p.e();
            if (hVar == null && (hVar = (h) this.f51015q.e()) == null) {
                break;
            }
            I0(hVar);
        }
        if (y10 != null) {
            y10.r(d.f51031p);
        }
        f51006t.set(this, 0L);
        f51007u.set(this, 0L);
    }

    public final void S0() {
        if (x1() || Z0(this, 0L, 1, null)) {
            return;
        }
        x1();
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
        if (f51008v.get(this) == 1) {
            return true;
        }
        return false;
    }

    public final h o(Runnable runnable, boolean z10) {
        long a10 = j.f51051f.a();
        if (runnable instanceof h) {
            h hVar = (h) runnable;
            hVar.f51043d = a10;
            hVar.f51044e = z10;
            return hVar;
        }
        return j.b(runnable, a10, z10);
    }

    public String toString() {
        ArrayList arrayList = new ArrayList();
        int a10 = this.f51016r.a();
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        for (int i15 = 1; i15 < a10; i15++) {
            c cVar = (c) this.f51016r.b(i15);
            if (cVar != null) {
                int i16 = cVar.f51019d.i();
                int i17 = b.f51017a[cVar.f51021i.ordinal()];
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
        long j10 = f51007u.get(this);
        return this.f51013o + '@' + ms.e0.b(this) + "[Pool Size {core = " + this.f51010d + ", max = " + this.f51011e + "}, Worker States {CPU = " + i10 + ", blocking = " + i11 + ", parked = " + i12 + ", dormant = " + i13 + ", terminated = " + i14 + "}, running workers queues = " + arrayList + ", global CPU queue size = " + this.f51014p.c() + ", global blocking queue size = " + this.f51015q.c() + ", Control State {created workers= " + ((int) (2097151 & j10)) + ", blocking tasks = " + ((int) ((4398044413952L & j10) >> 21)) + ", CPUs acquired = " + (this.f51010d - ((int) ((9223367638808264704L & j10) >> 42))) + "}]";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends Thread {

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ AtomicIntegerFieldUpdater f51018t = AtomicIntegerFieldUpdater.newUpdater(c.class, "workerCtl$volatile");

        /* renamed from: d  reason: collision with root package name */
        public final l f51019d;

        /* renamed from: e  reason: collision with root package name */
        private final Ref.ObjectRef f51020e;

        /* renamed from: i  reason: collision with root package name */
        public d f51021i;
        private volatile int indexInArray;
        private volatile Object nextParkedWorker;

        /* renamed from: o  reason: collision with root package name */
        private long f51022o;

        /* renamed from: p  reason: collision with root package name */
        private long f51023p;

        /* renamed from: q  reason: collision with root package name */
        private int f51024q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f51025r;
        private volatile /* synthetic */ int workerCtl$volatile;

        private c() {
            setDaemon(true);
            setContextClassLoader(a.this.getClass().getClassLoader());
            this.f51019d = new l();
            this.f51020e = new Ref.ObjectRef();
            this.f51021i = d.f51030o;
            this.nextParkedWorker = a.f51009w;
            int nanoTime = (int) System.nanoTime();
            this.f51024q = nanoTime == 0 ? 42 : nanoTime;
        }

        private final void b(h hVar) {
            this.f51022o = 0L;
            if (this.f51021i == d.f51029i) {
                this.f51021i = d.f51028e;
            }
            if (hVar.f51044e) {
                if (r(d.f51028e)) {
                    a.this.S0();
                }
                a.this.I0(hVar);
                a.a().addAndGet(a.this, -2097152L);
                if (this.f51021i != d.f51031p) {
                    this.f51021i = d.f51030o;
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
                if (j(a.this.f51010d * 2) == 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (z11 && (l11 = l()) != null) {
                    return l11;
                }
                h k10 = this.f51019d.k();
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
            h l10 = this.f51019d.l();
            if (l10 == null) {
                h hVar = (h) a.this.f51015q.e();
                if (hVar == null) {
                    return s(1);
                }
                return hVar;
            }
            return l10;
        }

        private final boolean i() {
            if (this.nextParkedWorker != a.f51009w) {
                return true;
            }
            return false;
        }

        private final void k() {
            if (this.f51022o == 0) {
                this.f51022o = System.nanoTime() + a.this.f51012i;
            }
            LockSupport.parkNanos(a.this.f51012i);
            if (System.nanoTime() - this.f51022o >= 0) {
                this.f51022o = 0L;
                t();
            }
        }

        private final h l() {
            if (j(2) == 0) {
                h hVar = (h) a.this.f51014p.e();
                if (hVar != null) {
                    return hVar;
                }
                return (h) a.this.f51015q.e();
            }
            h hVar2 = (h) a.this.f51015q.e();
            if (hVar2 != null) {
                return hVar2;
            }
            return (h) a.this.f51014p.e();
        }

        private final void m() {
            loop0: while (true) {
                boolean z10 = false;
                while (!a.this.isTerminated() && this.f51021i != d.f51031p) {
                    h e10 = e(this.f51025r);
                    if (e10 != null) {
                        this.f51023p = 0L;
                        b(e10);
                    } else {
                        this.f51025r = false;
                        if (this.f51023p != 0) {
                            if (!z10) {
                                z10 = true;
                            } else {
                                r(d.f51029i);
                                Thread.interrupted();
                                LockSupport.parkNanos(this.f51023p);
                                this.f51023p = 0L;
                            }
                        } else {
                            q();
                        }
                    }
                }
            }
            r(d.f51031p);
        }

        private final boolean p() {
            long j10;
            if (this.f51021i == d.f51027d) {
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
            this.f51021i = d.f51027d;
            return true;
        }

        private final void q() {
            if (!i()) {
                a.this.D0(this);
                return;
            }
            f51018t.set(this, -1);
            while (i() && f51018t.get(this) == -1 && !a.this.isTerminated() && this.f51021i != d.f51031p) {
                r(d.f51029i);
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
                c cVar = (c) aVar.f51016r.b(j10);
                if (cVar != null && cVar != this) {
                    long r10 = cVar.f51019d.r(i10, this.f51020e);
                    if (r10 == -1) {
                        Ref.ObjectRef objectRef = this.f51020e;
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
            this.f51023p = j11;
            return null;
        }

        private final void t() {
            a aVar = a.this;
            synchronized (aVar.f51016r) {
                try {
                    if (aVar.isTerminated()) {
                        return;
                    }
                    if (((int) (a.a().get(aVar) & 2097151)) <= aVar.f51010d) {
                        return;
                    }
                    if (!f51018t.compareAndSet(this, -1, 1)) {
                        return;
                    }
                    int i10 = this.indexInArray;
                    n(0);
                    aVar.F0(this, i10, 0);
                    int andDecrement = (int) (a.a().getAndDecrement(aVar) & 2097151);
                    if (andDecrement != i10) {
                        Object b10 = aVar.f51016r.b(andDecrement);
                        Intrinsics.checkNotNull(b10);
                        c cVar = (c) b10;
                        aVar.f51016r.c(i10, cVar);
                        cVar.n(i10);
                        aVar.F0(cVar, andDecrement, i10);
                    }
                    aVar.f51016r.c(andDecrement, null);
                    Unit unit = Unit.f31988a;
                    this.f51021i = d.f51031p;
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
            int i11 = this.f51024q;
            int i12 = i11 ^ (i11 << 13);
            int i13 = i12 ^ (i12 >> 17);
            int i14 = i13 ^ (i13 << 5);
            this.f51024q = i14;
            int i15 = i10 - 1;
            if ((i15 & i10) == 0) {
                return i14 & i15;
            }
            return (i14 & Integer.MAX_VALUE) % i10;
        }

        public final void n(int i10) {
            String valueOf;
            StringBuilder sb2 = new StringBuilder();
            sb2.append(a.this.f51013o);
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
            d dVar2 = this.f51021i;
            if (dVar2 == d.f51027d) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                a.a().addAndGet(a.this, 4398046511104L);
            }
            if (dVar2 != dVar) {
                this.f51021i = dVar;
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
