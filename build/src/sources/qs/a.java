package qs;

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
import lr.p;
import os.e0;
import os.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Executor, Closeable {

    /* renamed from: s  reason: collision with root package name */
    public static final C0583a f48138s = new C0583a(null);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f48139t = AtomicLongFieldUpdater.newUpdater(a.class, "parkedWorkersStack$volatile");

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f48140u = AtomicLongFieldUpdater.newUpdater(a.class, "controlState$volatile");

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f48141v = AtomicIntegerFieldUpdater.newUpdater(a.class, "_isTerminated$volatile");

    /* renamed from: w  reason: collision with root package name */
    public static final e0 f48142w = new e0("NOT_IN_STACK");
    private volatile /* synthetic */ int _isTerminated$volatile;
    private volatile /* synthetic */ long controlState$volatile;

    /* renamed from: d  reason: collision with root package name */
    public final int f48143d;

    /* renamed from: e  reason: collision with root package name */
    public final int f48144e;

    /* renamed from: i  reason: collision with root package name */
    public final long f48145i;

    /* renamed from: o  reason: collision with root package name */
    public final String f48146o;

    /* renamed from: p  reason: collision with root package name */
    public final qs.d f48147p;
    private volatile /* synthetic */ long parkedWorkersStack$volatile;

    /* renamed from: q  reason: collision with root package name */
    public final qs.d f48148q;

    /* renamed from: r  reason: collision with root package name */
    public final z f48149r;

    /* renamed from: qs.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0583a {
        public /* synthetic */ C0583a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0583a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f48150a;

        static {
            int[] iArr = new int[d.values().length];
            try {
                iArr[d.f48162i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d.f48161e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d.f48160d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[d.f48163o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[d.f48164p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f48150a = iArr;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f48160d = new d("CPU_ACQUIRED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f48161e = new d("BLOCKING", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f48162i = new d("PARKING", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final d f48163o = new d("DORMANT", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final d f48164p = new d("TERMINATED", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ d[] f48165q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f48166r;

        static {
            d[] a10 = a();
            f48165q = a10;
            f48166r = sr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f48160d, f48161e, f48162i, f48163o, f48164p};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f48165q.clone();
        }
    }

    public a(int i10, int i11, long j10, String str) {
        this.f48143d = i10;
        this.f48144e = i11;
        this.f48145i = j10;
        this.f48146o = str;
        if (i10 >= 1) {
            if (i11 >= i10) {
                if (i11 <= 2097150) {
                    if (j10 > 0) {
                        this.f48147p = new qs.d();
                        this.f48148q = new qs.d();
                        this.f48149r = new z((i10 + 1) * 2);
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
        while (g10 != f48142w) {
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
        AtomicLongFieldUpdater atomicLongFieldUpdater = f48139t;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            c cVar = (c) this.f48149r.b((int) (2097151 & j10));
            if (cVar == null) {
                return null;
            }
            long j11 = (2097152 + j10) & (-2097152);
            int A0 = A0(cVar);
            if (A0 >= 0 && f48139t.compareAndSet(this, j10, A0 | j11)) {
                cVar.o(f48142w);
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
        if (x1() || Y0(j10)) {
            return;
        }
        x1();
    }

    private final h V0(c cVar, h hVar, boolean z10) {
        d dVar;
        if (cVar == null || (dVar = cVar.f48154i) == d.f48164p) {
            return hVar;
        }
        if (!hVar.f48177e && dVar == d.f48161e) {
            return hVar;
        }
        cVar.f48158r = true;
        return cVar.f48152d.a(hVar, z10);
    }

    private final boolean Y0(long j10) {
        if (kotlin.ranges.d.d(((int) (2097151 & j10)) - ((int) ((j10 & 4398044413952L) >> 21)), 0) < this.f48143d) {
            int l10 = l();
            if (l10 == 1 && this.f48143d > 1) {
                l();
            }
            if (l10 > 0) {
                return true;
            }
        }
        return false;
    }

    public static final /* synthetic */ AtomicLongFieldUpdater a() {
        return f48140u;
    }

    static /* synthetic */ boolean e1(a aVar, long j10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = f48140u.get(aVar);
        }
        return aVar.Y0(j10);
    }

    private final boolean h(h hVar) {
        if (hVar.f48177e) {
            return this.f48148q.a(hVar);
        }
        return this.f48147p.a(hVar);
    }

    private final int l() {
        synchronized (this.f48149r) {
            try {
                if (isTerminated()) {
                    return -1;
                }
                long j10 = f48140u.get(this);
                int i10 = (int) (j10 & 2097151);
                int d10 = kotlin.ranges.d.d(i10 - ((int) ((j10 & 4398044413952L) >> 21)), 0);
                if (d10 >= this.f48143d) {
                    return 0;
                }
                if (i10 >= this.f48144e) {
                    return 0;
                }
                int i11 = ((int) (a().get(this) & 2097151)) + 1;
                if (i11 > 0 && this.f48149r.b(i11) == null) {
                    c cVar = new c(this, i11);
                    this.f48149r.c(i11, cVar);
                    if (i11 == ((int) (2097151 & f48140u.incrementAndGet(this)))) {
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
        } while (!c.f48151t.compareAndSet(C0, -1, 0));
        LockSupport.unpark(C0);
        return true;
    }

    public final boolean D0(c cVar) {
        long j10;
        int f10;
        if (cVar.g() == f48142w) {
            AtomicLongFieldUpdater atomicLongFieldUpdater = f48139t;
            do {
                j10 = atomicLongFieldUpdater.get(this);
                f10 = cVar.f();
                cVar.o(this.f48149r.b((int) (2097151 & j10)));
            } while (!f48139t.compareAndSet(this, j10, ((2097152 + j10) & (-2097152)) | f10));
            return true;
        }
        return false;
    }

    public final void E(Runnable runnable, boolean z10, boolean z11) {
        long j10;
        js.b.a();
        h n10 = n(runnable, z10);
        boolean z12 = n10.f48177e;
        if (z12) {
            j10 = f48140u.addAndGet(this, 2097152L);
        } else {
            j10 = 0;
        }
        h V0 = V0(B(), n10, z11);
        if (V0 != null && !h(V0)) {
            throw new RejectedExecutionException(this.f48146o + " was terminated");
        } else if (z12) {
            M0(j10);
        } else {
            R0();
        }
    }

    public final void F0(c cVar, int i10, int i11) {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f48139t;
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
                if (f48139t.compareAndSet(this, j10, j11 | i12)) {
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
                js.b.a();
            }
        }
    }

    public final void J0(long j10) {
        int i10;
        h hVar;
        if (!f48141v.compareAndSet(this, 0, 1)) {
            return;
        }
        c B = B();
        synchronized (this.f48149r) {
            i10 = (int) (a().get(this) & 2097151);
        }
        if (1 <= i10) {
            int i11 = 1;
            while (true) {
                Object b10 = this.f48149r.b(i11);
                Intrinsics.checkNotNull(b10);
                c cVar = (c) b10;
                if (cVar != B) {
                    while (cVar.getState() != Thread.State.TERMINATED) {
                        LockSupport.unpark(cVar);
                        cVar.join(j10);
                    }
                    cVar.f48152d.j(this.f48148q);
                }
                if (i11 == i10) {
                    break;
                }
                i11++;
            }
        }
        this.f48148q.b();
        this.f48147p.b();
        while (true) {
            if (B != null) {
                hVar = B.e(true);
                if (hVar != null) {
                    continue;
                    I0(hVar);
                }
            }
            hVar = (h) this.f48147p.e();
            if (hVar == null && (hVar = (h) this.f48148q.e()) == null) {
                break;
            }
            I0(hVar);
        }
        if (B != null) {
            B.r(d.f48164p);
        }
        f48139t.set(this, 0L);
        f48140u.set(this, 0L);
    }

    public final void R0() {
        if (x1() || e1(this, 0L, 1, null)) {
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
        if (f48141v.get(this) == 1) {
            return true;
        }
        return false;
    }

    public final h n(Runnable runnable, boolean z10) {
        long a10 = j.f48184f.a();
        if (runnable instanceof h) {
            h hVar = (h) runnable;
            hVar.f48176d = a10;
            hVar.f48177e = z10;
            return hVar;
        }
        return j.b(runnable, a10, z10);
    }

    public String toString() {
        ArrayList arrayList = new ArrayList();
        int a10 = this.f48149r.a();
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        for (int i15 = 1; i15 < a10; i15++) {
            c cVar = (c) this.f48149r.b(i15);
            if (cVar != null) {
                int i16 = cVar.f48152d.i();
                int i17 = b.f48150a[cVar.f48154i.ordinal()];
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
        long j10 = f48140u.get(this);
        return this.f48146o + '@' + js.e0.b(this) + "[Pool Size {core = " + this.f48143d + ", max = " + this.f48144e + "}, Worker States {CPU = " + i10 + ", blocking = " + i11 + ", parked = " + i12 + ", dormant = " + i13 + ", terminated = " + i14 + "}, running workers queues = " + arrayList + ", global CPU queue size = " + this.f48147p.c() + ", global blocking queue size = " + this.f48148q.c() + ", Control State {created workers= " + ((int) (2097151 & j10)) + ", blocking tasks = " + ((int) ((4398044413952L & j10) >> 21)) + ", CPUs acquired = " + (this.f48143d - ((int) ((9223367638808264704L & j10) >> 42))) + "}]";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends Thread {

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ AtomicIntegerFieldUpdater f48151t = AtomicIntegerFieldUpdater.newUpdater(c.class, "workerCtl$volatile");

        /* renamed from: d  reason: collision with root package name */
        public final l f48152d;

        /* renamed from: e  reason: collision with root package name */
        private final Ref.ObjectRef f48153e;

        /* renamed from: i  reason: collision with root package name */
        public d f48154i;
        private volatile int indexInArray;
        private volatile Object nextParkedWorker;

        /* renamed from: o  reason: collision with root package name */
        private long f48155o;

        /* renamed from: p  reason: collision with root package name */
        private long f48156p;

        /* renamed from: q  reason: collision with root package name */
        private int f48157q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f48158r;
        private volatile /* synthetic */ int workerCtl$volatile;

        private c() {
            setDaemon(true);
            setContextClassLoader(a.this.getClass().getClassLoader());
            this.f48152d = new l();
            this.f48153e = new Ref.ObjectRef();
            this.f48154i = d.f48163o;
            this.nextParkedWorker = a.f48142w;
            int nanoTime = (int) System.nanoTime();
            this.f48157q = nanoTime == 0 ? 42 : nanoTime;
        }

        private final void b(h hVar) {
            this.f48155o = 0L;
            if (this.f48154i == d.f48162i) {
                this.f48154i = d.f48161e;
            }
            if (hVar.f48177e) {
                if (r(d.f48161e)) {
                    a.this.R0();
                }
                a.this.I0(hVar);
                a.a().addAndGet(a.this, -2097152L);
                if (this.f48154i != d.f48164p) {
                    this.f48154i = d.f48163o;
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
                if (j(a.this.f48143d * 2) == 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (z11 && (l11 = l()) != null) {
                    return l11;
                }
                h k10 = this.f48152d.k();
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
            h l10 = this.f48152d.l();
            if (l10 == null) {
                h hVar = (h) a.this.f48148q.e();
                if (hVar == null) {
                    return s(1);
                }
                return hVar;
            }
            return l10;
        }

        private final boolean i() {
            if (this.nextParkedWorker != a.f48142w) {
                return true;
            }
            return false;
        }

        private final void k() {
            if (this.f48155o == 0) {
                this.f48155o = System.nanoTime() + a.this.f48145i;
            }
            LockSupport.parkNanos(a.this.f48145i);
            if (System.nanoTime() - this.f48155o >= 0) {
                this.f48155o = 0L;
                t();
            }
        }

        private final h l() {
            if (j(2) == 0) {
                h hVar = (h) a.this.f48147p.e();
                if (hVar != null) {
                    return hVar;
                }
                return (h) a.this.f48148q.e();
            }
            h hVar2 = (h) a.this.f48148q.e();
            if (hVar2 != null) {
                return hVar2;
            }
            return (h) a.this.f48147p.e();
        }

        private final void m() {
            loop0: while (true) {
                boolean z10 = false;
                while (!a.this.isTerminated() && this.f48154i != d.f48164p) {
                    h e10 = e(this.f48158r);
                    if (e10 != null) {
                        this.f48156p = 0L;
                        b(e10);
                    } else {
                        this.f48158r = false;
                        if (this.f48156p != 0) {
                            if (!z10) {
                                z10 = true;
                            } else {
                                r(d.f48162i);
                                Thread.interrupted();
                                LockSupport.parkNanos(this.f48156p);
                                this.f48156p = 0L;
                            }
                        } else {
                            q();
                        }
                    }
                }
            }
            r(d.f48164p);
        }

        private final boolean p() {
            long j10;
            if (this.f48154i == d.f48160d) {
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
            this.f48154i = d.f48160d;
            return true;
        }

        private final void q() {
            if (!i()) {
                a.this.D0(this);
                return;
            }
            f48151t.set(this, -1);
            while (i() && f48151t.get(this) == -1 && !a.this.isTerminated() && this.f48154i != d.f48164p) {
                r(d.f48162i);
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
                c cVar = (c) aVar.f48149r.b(j10);
                if (cVar != null && cVar != this) {
                    long r10 = cVar.f48152d.r(i10, this.f48153e);
                    if (r10 == -1) {
                        Ref.ObjectRef objectRef = this.f48153e;
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
            this.f48156p = j11;
            return null;
        }

        private final void t() {
            a aVar = a.this;
            synchronized (aVar.f48149r) {
                try {
                    if (aVar.isTerminated()) {
                        return;
                    }
                    if (((int) (a.a().get(aVar) & 2097151)) <= aVar.f48143d) {
                        return;
                    }
                    if (!f48151t.compareAndSet(this, -1, 1)) {
                        return;
                    }
                    int i10 = this.indexInArray;
                    n(0);
                    aVar.F0(this, i10, 0);
                    int andDecrement = (int) (a.a().getAndDecrement(aVar) & 2097151);
                    if (andDecrement != i10) {
                        Object b10 = aVar.f48149r.b(andDecrement);
                        Intrinsics.checkNotNull(b10);
                        c cVar = (c) b10;
                        aVar.f48149r.c(i10, cVar);
                        cVar.n(i10);
                        aVar.F0(cVar, andDecrement, i10);
                    }
                    aVar.f48149r.c(andDecrement, null);
                    Unit unit = Unit.f32464a;
                    this.f48154i = d.f48164p;
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
            int i11 = this.f48157q;
            int i12 = i11 ^ (i11 << 13);
            int i13 = i12 ^ (i12 >> 17);
            int i14 = i13 ^ (i13 << 5);
            this.f48157q = i14;
            int i15 = i10 - 1;
            if ((i15 & i10) == 0) {
                return i14 & i15;
            }
            return (i14 & Integer.MAX_VALUE) % i10;
        }

        public final void n(int i10) {
            String valueOf;
            StringBuilder sb2 = new StringBuilder();
            sb2.append(a.this.f48146o);
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
            d dVar2 = this.f48154i;
            if (dVar2 == d.f48160d) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                a.a().addAndGet(a.this, 4398046511104L);
            }
            if (dVar2 != dVar) {
                this.f48154i = dVar;
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
