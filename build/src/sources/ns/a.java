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
    public static final C0525a f42144s = new C0525a(null);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f42145t = AtomicLongFieldUpdater.newUpdater(a.class, "parkedWorkersStack$volatile");

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f42146u = AtomicLongFieldUpdater.newUpdater(a.class, "controlState$volatile");

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f42147v = AtomicIntegerFieldUpdater.newUpdater(a.class, "_isTerminated$volatile");

    /* renamed from: w  reason: collision with root package name */
    public static final e0 f42148w = new e0("NOT_IN_STACK");
    private volatile /* synthetic */ int _isTerminated$volatile;
    private volatile /* synthetic */ long controlState$volatile;

    /* renamed from: d  reason: collision with root package name */
    public final int f42149d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42150e;

    /* renamed from: i  reason: collision with root package name */
    public final long f42151i;

    /* renamed from: o  reason: collision with root package name */
    public final String f42152o;

    /* renamed from: p  reason: collision with root package name */
    public final ns.d f42153p;
    private volatile /* synthetic */ long parkedWorkersStack$volatile;

    /* renamed from: q  reason: collision with root package name */
    public final ns.d f42154q;

    /* renamed from: r  reason: collision with root package name */
    public final z f42155r;

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
        public static final /* synthetic */ int[] f42156a;

        static {
            int[] iArr = new int[d.values().length];
            try {
                iArr[d.f42168i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d.f42167e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d.f42166d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[d.f42169o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[d.f42170p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f42156a = iArr;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f42166d = new d("CPU_ACQUIRED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f42167e = new d("BLOCKING", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f42168i = new d("PARKING", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final d f42169o = new d("DORMANT", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final d f42170p = new d("TERMINATED", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ d[] f42171q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f42172r;

        static {
            d[] a10 = a();
            f42171q = a10;
            f42172r = pr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f42166d, f42167e, f42168i, f42169o, f42170p};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f42171q.clone();
        }
    }

    public a(int i10, int i11, long j10, String str) {
        this.f42149d = i10;
        this.f42150e = i11;
        this.f42151i = j10;
        this.f42152o = str;
        if (i10 >= 1) {
            if (i11 >= i10) {
                if (i11 <= 2097150) {
                    if (j10 > 0) {
                        this.f42153p = new ns.d();
                        this.f42154q = new ns.d();
                        this.f42155r = new z((i10 + 1) * 2);
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
        while (g10 != f42148w) {
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
        AtomicLongFieldUpdater atomicLongFieldUpdater = f42145t;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            c cVar = (c) this.f42155r.b((int) (2097151 & j10));
            if (cVar == null) {
                return null;
            }
            long j11 = (2097152 + j10) & (-2097152);
            int A0 = A0(cVar);
            if (A0 >= 0 && f42145t.compareAndSet(this, j10, A0 | j11)) {
                cVar.o(f42148w);
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
        if (cVar == null || (dVar = cVar.f42160i) == d.f42170p) {
            return hVar;
        }
        if (!hVar.f42183e && dVar == d.f42167e) {
            return hVar;
        }
        cVar.f42164r = true;
        return cVar.f42158d.a(hVar, z10);
    }

    private final boolean X0(long j10) {
        if (kotlin.ranges.d.d(((int) (2097151 & j10)) - ((int) ((j10 & 4398044413952L) >> 21)), 0) < this.f42149d) {
            int l10 = l();
            if (l10 == 1 && this.f42149d > 1) {
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
            j10 = f42146u.get(aVar);
        }
        return aVar.X0(j10);
    }

    public static final /* synthetic */ AtomicLongFieldUpdater a() {
        return f42146u;
    }

    private final boolean h(h hVar) {
        if (hVar.f42183e) {
            return this.f42154q.a(hVar);
        }
        return this.f42153p.a(hVar);
    }

    private final int l() {
        synchronized (this.f42155r) {
            try {
                if (isTerminated()) {
                    return -1;
                }
                long j10 = f42146u.get(this);
                int i10 = (int) (j10 & 2097151);
                int d10 = kotlin.ranges.d.d(i10 - ((int) ((j10 & 4398044413952L) >> 21)), 0);
                if (d10 >= this.f42149d) {
                    return 0;
                }
                if (i10 >= this.f42150e) {
                    return 0;
                }
                int i11 = ((int) (a().get(this) & 2097151)) + 1;
                if (i11 > 0 && this.f42155r.b(i11) == null) {
                    c cVar = new c(this, i11);
                    this.f42155r.c(i11, cVar);
                    if (i11 == ((int) (2097151 & f42146u.incrementAndGet(this)))) {
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
        } while (!c.f42157t.compareAndSet(C0, -1, 0));
        LockSupport.unpark(C0);
        return true;
    }

    public final boolean D0(c cVar) {
        long j10;
        int f10;
        if (cVar.g() == f42148w) {
            AtomicLongFieldUpdater atomicLongFieldUpdater = f42145t;
            do {
                j10 = atomicLongFieldUpdater.get(this);
                f10 = cVar.f();
                cVar.o(this.f42155r.b((int) (2097151 & j10)));
            } while (!f42145t.compareAndSet(this, j10, ((2097152 + j10) & (-2097152)) | f10));
            return true;
        }
        return false;
    }

    public final void E(Runnable runnable, boolean z10, boolean z11) {
        long j10;
        gs.b.a();
        h n10 = n(runnable, z10);
        boolean z12 = n10.f42183e;
        if (z12) {
            j10 = f42146u.addAndGet(this, 2097152L);
        } else {
            j10 = 0;
        }
        h U0 = U0(B(), n10, z11);
        if (U0 != null && !h(U0)) {
            throw new RejectedExecutionException(this.f42152o + " was terminated");
        } else if (z12) {
            M0(j10);
        } else {
            R0();
        }
    }

    public final void F0(c cVar, int i10, int i11) {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f42145t;
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
                if (f42145t.compareAndSet(this, j10, j11 | i12)) {
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
        if (!f42147v.compareAndSet(this, 0, 1)) {
            return;
        }
        c B = B();
        synchronized (this.f42155r) {
            i10 = (int) (a().get(this) & 2097151);
        }
        if (1 <= i10) {
            int i11 = 1;
            while (true) {
                Object b10 = this.f42155r.b(i11);
                Intrinsics.checkNotNull(b10);
                c cVar = (c) b10;
                if (cVar != B) {
                    while (cVar.getState() != Thread.State.TERMINATED) {
                        LockSupport.unpark(cVar);
                        cVar.join(j10);
                    }
                    cVar.f42158d.j(this.f42154q);
                }
                if (i11 == i10) {
                    break;
                }
                i11++;
            }
        }
        this.f42154q.b();
        this.f42153p.b();
        while (true) {
            if (B != null) {
                hVar = B.e(true);
                if (hVar != null) {
                    continue;
                    I0(hVar);
                }
            }
            hVar = (h) this.f42153p.e();
            if (hVar == null && (hVar = (h) this.f42154q.e()) == null) {
                break;
            }
            I0(hVar);
        }
        if (B != null) {
            B.r(d.f42170p);
        }
        f42145t.set(this, 0L);
        f42146u.set(this, 0L);
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
        if (f42147v.get(this) == 1) {
            return true;
        }
        return false;
    }

    public final h n(Runnable runnable, boolean z10) {
        long a10 = j.f42190f.a();
        if (runnable instanceof h) {
            h hVar = (h) runnable;
            hVar.f42182d = a10;
            hVar.f42183e = z10;
            return hVar;
        }
        return j.b(runnable, a10, z10);
    }

    public String toString() {
        ArrayList arrayList = new ArrayList();
        int a10 = this.f42155r.a();
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        for (int i15 = 1; i15 < a10; i15++) {
            c cVar = (c) this.f42155r.b(i15);
            if (cVar != null) {
                int i16 = cVar.f42158d.i();
                int i17 = b.f42156a[cVar.f42160i.ordinal()];
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
        long j10 = f42146u.get(this);
        return this.f42152o + '@' + gs.e0.b(this) + "[Pool Size {core = " + this.f42149d + ", max = " + this.f42150e + "}, Worker States {CPU = " + i10 + ", blocking = " + i11 + ", parked = " + i12 + ", dormant = " + i13 + ", terminated = " + i14 + "}, running workers queues = " + arrayList + ", global CPU queue size = " + this.f42153p.c() + ", global blocking queue size = " + this.f42154q.c() + ", Control State {created workers= " + ((int) (2097151 & j10)) + ", blocking tasks = " + ((int) ((4398044413952L & j10) >> 21)) + ", CPUs acquired = " + (this.f42149d - ((int) ((9223367638808264704L & j10) >> 42))) + "}]";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends Thread {

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ AtomicIntegerFieldUpdater f42157t = AtomicIntegerFieldUpdater.newUpdater(c.class, "workerCtl$volatile");

        /* renamed from: d  reason: collision with root package name */
        public final l f42158d;

        /* renamed from: e  reason: collision with root package name */
        private final Ref.ObjectRef f42159e;

        /* renamed from: i  reason: collision with root package name */
        public d f42160i;
        private volatile int indexInArray;
        private volatile Object nextParkedWorker;

        /* renamed from: o  reason: collision with root package name */
        private long f42161o;

        /* renamed from: p  reason: collision with root package name */
        private long f42162p;

        /* renamed from: q  reason: collision with root package name */
        private int f42163q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f42164r;
        private volatile /* synthetic */ int workerCtl$volatile;

        private c() {
            setDaemon(true);
            setContextClassLoader(a.this.getClass().getClassLoader());
            this.f42158d = new l();
            this.f42159e = new Ref.ObjectRef();
            this.f42160i = d.f42169o;
            this.nextParkedWorker = a.f42148w;
            int nanoTime = (int) System.nanoTime();
            this.f42163q = nanoTime == 0 ? 42 : nanoTime;
        }

        private final void b(h hVar) {
            this.f42161o = 0L;
            if (this.f42160i == d.f42168i) {
                this.f42160i = d.f42167e;
            }
            if (hVar.f42183e) {
                if (r(d.f42167e)) {
                    a.this.R0();
                }
                a.this.I0(hVar);
                a.a().addAndGet(a.this, -2097152L);
                if (this.f42160i != d.f42170p) {
                    this.f42160i = d.f42169o;
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
                if (j(a.this.f42149d * 2) == 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (z11 && (l11 = l()) != null) {
                    return l11;
                }
                h k10 = this.f42158d.k();
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
            h l10 = this.f42158d.l();
            if (l10 == null) {
                h hVar = (h) a.this.f42154q.e();
                if (hVar == null) {
                    return s(1);
                }
                return hVar;
            }
            return l10;
        }

        private final boolean i() {
            if (this.nextParkedWorker != a.f42148w) {
                return true;
            }
            return false;
        }

        private final void k() {
            if (this.f42161o == 0) {
                this.f42161o = System.nanoTime() + a.this.f42151i;
            }
            LockSupport.parkNanos(a.this.f42151i);
            if (System.nanoTime() - this.f42161o >= 0) {
                this.f42161o = 0L;
                t();
            }
        }

        private final h l() {
            if (j(2) == 0) {
                h hVar = (h) a.this.f42153p.e();
                if (hVar != null) {
                    return hVar;
                }
                return (h) a.this.f42154q.e();
            }
            h hVar2 = (h) a.this.f42154q.e();
            if (hVar2 != null) {
                return hVar2;
            }
            return (h) a.this.f42153p.e();
        }

        private final void m() {
            loop0: while (true) {
                boolean z10 = false;
                while (!a.this.isTerminated() && this.f42160i != d.f42170p) {
                    h e10 = e(this.f42164r);
                    if (e10 != null) {
                        this.f42162p = 0L;
                        b(e10);
                    } else {
                        this.f42164r = false;
                        if (this.f42162p != 0) {
                            if (!z10) {
                                z10 = true;
                            } else {
                                r(d.f42168i);
                                Thread.interrupted();
                                LockSupport.parkNanos(this.f42162p);
                                this.f42162p = 0L;
                            }
                        } else {
                            q();
                        }
                    }
                }
            }
            r(d.f42170p);
        }

        private final boolean p() {
            long j10;
            if (this.f42160i == d.f42166d) {
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
            this.f42160i = d.f42166d;
            return true;
        }

        private final void q() {
            if (!i()) {
                a.this.D0(this);
                return;
            }
            f42157t.set(this, -1);
            while (i() && f42157t.get(this) == -1 && !a.this.isTerminated() && this.f42160i != d.f42170p) {
                r(d.f42168i);
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
                c cVar = (c) aVar.f42155r.b(j10);
                if (cVar != null && cVar != this) {
                    long r10 = cVar.f42158d.r(i10, this.f42159e);
                    if (r10 == -1) {
                        Ref.ObjectRef objectRef = this.f42159e;
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
            this.f42162p = j11;
            return null;
        }

        private final void t() {
            a aVar = a.this;
            synchronized (aVar.f42155r) {
                try {
                    if (aVar.isTerminated()) {
                        return;
                    }
                    if (((int) (a.a().get(aVar) & 2097151)) <= aVar.f42149d) {
                        return;
                    }
                    if (!f42157t.compareAndSet(this, -1, 1)) {
                        return;
                    }
                    int i10 = this.indexInArray;
                    n(0);
                    aVar.F0(this, i10, 0);
                    int andDecrement = (int) (a.a().getAndDecrement(aVar) & 2097151);
                    if (andDecrement != i10) {
                        Object b10 = aVar.f42155r.b(andDecrement);
                        Intrinsics.checkNotNull(b10);
                        c cVar = (c) b10;
                        aVar.f42155r.c(i10, cVar);
                        cVar.n(i10);
                        aVar.F0(cVar, andDecrement, i10);
                    }
                    aVar.f42155r.c(andDecrement, null);
                    Unit unit = Unit.f33282a;
                    this.f42160i = d.f42170p;
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
            int i11 = this.f42163q;
            int i12 = i11 ^ (i11 << 13);
            int i13 = i12 ^ (i12 >> 17);
            int i14 = i13 ^ (i13 << 5);
            this.f42163q = i14;
            int i15 = i10 - 1;
            if ((i15 & i10) == 0) {
                return i14 & i15;
            }
            return (i14 & Integer.MAX_VALUE) % i10;
        }

        public final void n(int i10) {
            String valueOf;
            StringBuilder sb2 = new StringBuilder();
            sb2.append(a.this.f42152o);
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
            d dVar2 = this.f42160i;
            if (dVar2 == d.f42166d) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                a.a().addAndGet(a.this, 4398046511104L);
            }
            if (dVar2 != dVar) {
                this.f42160i = dVar;
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
