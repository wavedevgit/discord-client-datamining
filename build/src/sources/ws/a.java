package ws;

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
import rr.p;
import us.e0;
import us.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Executor, Closeable {

    /* renamed from: s  reason: collision with root package name */
    public static final C0755a f54008s = new C0755a(null);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f54009t = AtomicLongFieldUpdater.newUpdater(a.class, "parkedWorkersStack$volatile");

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f54010u = AtomicLongFieldUpdater.newUpdater(a.class, "controlState$volatile");

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f54011v = AtomicIntegerFieldUpdater.newUpdater(a.class, "_isTerminated$volatile");

    /* renamed from: w  reason: collision with root package name */
    public static final e0 f54012w = new e0("NOT_IN_STACK");
    private volatile /* synthetic */ int _isTerminated$volatile;
    private volatile /* synthetic */ long controlState$volatile;

    /* renamed from: d  reason: collision with root package name */
    public final int f54013d;

    /* renamed from: e  reason: collision with root package name */
    public final int f54014e;

    /* renamed from: i  reason: collision with root package name */
    public final long f54015i;

    /* renamed from: o  reason: collision with root package name */
    public final String f54016o;

    /* renamed from: p  reason: collision with root package name */
    public final ws.d f54017p;
    private volatile /* synthetic */ long parkedWorkersStack$volatile;

    /* renamed from: q  reason: collision with root package name */
    public final ws.d f54018q;

    /* renamed from: r  reason: collision with root package name */
    public final z f54019r;

    /* renamed from: ws.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0755a {
        public /* synthetic */ C0755a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0755a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f54020a;

        static {
            int[] iArr = new int[d.values().length];
            try {
                iArr[d.f54032i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d.f54031e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d.f54030d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[d.f54033o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[d.f54034p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f54020a = iArr;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f54030d = new d("CPU_ACQUIRED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f54031e = new d("BLOCKING", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f54032i = new d("PARKING", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final d f54033o = new d("DORMANT", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final d f54034p = new d("TERMINATED", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ d[] f54035q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f54036r;

        static {
            d[] a10 = a();
            f54035q = a10;
            f54036r = yr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f54030d, f54031e, f54032i, f54033o, f54034p};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f54035q.clone();
        }
    }

    public a(int i10, int i11, long j10, String str) {
        this.f54013d = i10;
        this.f54014e = i11;
        this.f54015i = j10;
        this.f54016o = str;
        if (i10 >= 1) {
            if (i11 >= i10) {
                if (i11 <= 2097150) {
                    if (j10 > 0) {
                        this.f54017p = new ws.d();
                        this.f54018q = new ws.d();
                        this.f54019r = new z((i10 + 1) * 2);
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

    private final int J(c cVar) {
        Object g10 = cVar.g();
        while (g10 != f54012w) {
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

    private final void J0(long j10) {
        if (a1() || V0(j10)) {
            return;
        }
        a1();
    }

    private final c Q() {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f54009t;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            c cVar = (c) this.f54019r.b((int) (2097151 & j10));
            if (cVar == null) {
                return null;
            }
            long j11 = (2097152 + j10) & (-2097152);
            int J = J(cVar);
            if (J >= 0 && f54009t.compareAndSet(this, j10, J | j11)) {
                cVar.o(f54012w);
                return cVar;
            }
        }
    }

    private final h R0(c cVar, h hVar, boolean z10) {
        d dVar;
        if (cVar == null || (dVar = cVar.f54024i) == d.f54034p) {
            return hVar;
        }
        if (!hVar.f54047e && dVar == d.f54031e) {
            return hVar;
        }
        cVar.f54028r = true;
        return cVar.f54022d.a(hVar, z10);
    }

    private final boolean V0(long j10) {
        if (kotlin.ranges.d.d(((int) (2097151 & j10)) - ((int) ((j10 & 4398044413952L) >> 21)), 0) < this.f54013d) {
            int m10 = m();
            if (m10 == 1 && this.f54013d > 1) {
                m();
            }
            if (m10 > 0) {
                return true;
            }
        }
        return false;
    }

    static /* synthetic */ boolean W0(a aVar, long j10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = f54010u.get(aVar);
        }
        return aVar.V0(j10);
    }

    public static final /* synthetic */ AtomicLongFieldUpdater a() {
        return f54010u;
    }

    private final boolean a1() {
        c Q;
        do {
            Q = Q();
            if (Q == null) {
                return false;
            }
        } while (!c.f54021t.compareAndSet(Q, -1, 0));
        LockSupport.unpark(Q);
        return true;
    }

    private final boolean k(h hVar) {
        if (hVar.f54047e) {
            return this.f54018q.a(hVar);
        }
        return this.f54017p.a(hVar);
    }

    private final int m() {
        synchronized (this.f54019r) {
            try {
                if (isTerminated()) {
                    return -1;
                }
                long j10 = f54010u.get(this);
                int i10 = (int) (j10 & 2097151);
                int d10 = kotlin.ranges.d.d(i10 - ((int) ((j10 & 4398044413952L) >> 21)), 0);
                if (d10 >= this.f54013d) {
                    return 0;
                }
                if (i10 >= this.f54014e) {
                    return 0;
                }
                int i11 = ((int) (a().get(this) & 2097151)) + 1;
                if (i11 > 0 && this.f54019r.b(i11) == null) {
                    c cVar = new c(this, i11);
                    this.f54019r.c(i11, cVar);
                    if (i11 == ((int) (2097151 & f54010u.incrementAndGet(this)))) {
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

    public final void D0(c cVar, int i10, int i11) {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f54009t;
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
                if (f54009t.compareAndSet(this, j10, j11 | i12)) {
                    return;
                }
            }
        }
    }

    public final void G0(h hVar) {
        try {
            hVar.run();
        } catch (Throwable th2) {
            try {
                Thread currentThread = Thread.currentThread();
                currentThread.getUncaughtExceptionHandler().uncaughtException(currentThread, th2);
            } finally {
                ps.b.a();
            }
        }
    }

    public final void H0(long j10) {
        int i10;
        h hVar;
        if (!f54011v.compareAndSet(this, 0, 1)) {
            return;
        }
        c p10 = p();
        synchronized (this.f54019r) {
            i10 = (int) (a().get(this) & 2097151);
        }
        if (1 <= i10) {
            int i11 = 1;
            while (true) {
                Object b10 = this.f54019r.b(i11);
                Intrinsics.checkNotNull(b10);
                c cVar = (c) b10;
                if (cVar != p10) {
                    while (cVar.getState() != Thread.State.TERMINATED) {
                        LockSupport.unpark(cVar);
                        cVar.join(j10);
                    }
                    cVar.f54022d.j(this.f54018q);
                }
                if (i11 == i10) {
                    break;
                }
                i11++;
            }
        }
        this.f54018q.b();
        this.f54017p.b();
        while (true) {
            if (p10 != null) {
                hVar = p10.e(true);
                if (hVar != null) {
                    continue;
                    G0(hVar);
                }
            }
            hVar = (h) this.f54017p.e();
            if (hVar == null && (hVar = (h) this.f54018q.e()) == null) {
                break;
            }
            G0(hVar);
        }
        if (p10 != null) {
            p10.r(d.f54034p);
        }
        f54009t.set(this, 0L);
        f54010u.set(this, 0L);
    }

    public final void O0() {
        if (a1() || W0(this, 0L, 1, null)) {
            return;
        }
        a1();
    }

    public final boolean Z(c cVar) {
        long j10;
        int f10;
        if (cVar.g() == f54012w) {
            AtomicLongFieldUpdater atomicLongFieldUpdater = f54009t;
            do {
                j10 = atomicLongFieldUpdater.get(this);
                f10 = cVar.f();
                cVar.o(this.f54019r.b((int) (2097151 & j10)));
            } while (!f54009t.compareAndSet(this, j10, ((2097152 + j10) & (-2097152)) | f10));
            return true;
        }
        return false;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        H0(10000L);
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        y(this, runnable, false, false, 6, null);
    }

    public final boolean isTerminated() {
        if (f54011v.get(this) == 1) {
            return true;
        }
        return false;
    }

    public final h n(Runnable runnable, boolean z10) {
        long a10 = j.f54054f.a();
        if (runnable instanceof h) {
            h hVar = (h) runnable;
            hVar.f54046d = a10;
            hVar.f54047e = z10;
            return hVar;
        }
        return j.b(runnable, a10, z10);
    }

    public final void s(Runnable runnable, boolean z10, boolean z11) {
        long j10;
        ps.b.a();
        h n10 = n(runnable, z10);
        boolean z12 = n10.f54047e;
        if (z12) {
            j10 = f54010u.addAndGet(this, 2097152L);
        } else {
            j10 = 0;
        }
        h R0 = R0(p(), n10, z11);
        if (R0 != null && !k(R0)) {
            throw new RejectedExecutionException(this.f54016o + " was terminated");
        } else if (z12) {
            J0(j10);
        } else {
            O0();
        }
    }

    public String toString() {
        ArrayList arrayList = new ArrayList();
        int a10 = this.f54019r.a();
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        for (int i15 = 1; i15 < a10; i15++) {
            c cVar = (c) this.f54019r.b(i15);
            if (cVar != null) {
                int i16 = cVar.f54022d.i();
                int i17 = b.f54020a[cVar.f54024i.ordinal()];
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
        long j10 = f54010u.get(this);
        return this.f54016o + '@' + ps.e0.b(this) + "[Pool Size {core = " + this.f54013d + ", max = " + this.f54014e + "}, Worker States {CPU = " + i10 + ", blocking = " + i11 + ", parked = " + i12 + ", dormant = " + i13 + ", terminated = " + i14 + "}, running workers queues = " + arrayList + ", global CPU queue size = " + this.f54017p.c() + ", global blocking queue size = " + this.f54018q.c() + ", Control State {created workers= " + ((int) (2097151 & j10)) + ", blocking tasks = " + ((int) ((4398044413952L & j10) >> 21)) + ", CPUs acquired = " + (this.f54013d - ((int) ((9223367638808264704L & j10) >> 42))) + "}]";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends Thread {

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ AtomicIntegerFieldUpdater f54021t = AtomicIntegerFieldUpdater.newUpdater(c.class, "workerCtl$volatile");

        /* renamed from: d  reason: collision with root package name */
        public final l f54022d;

        /* renamed from: e  reason: collision with root package name */
        private final Ref.ObjectRef f54023e;

        /* renamed from: i  reason: collision with root package name */
        public d f54024i;
        private volatile int indexInArray;
        private volatile Object nextParkedWorker;

        /* renamed from: o  reason: collision with root package name */
        private long f54025o;

        /* renamed from: p  reason: collision with root package name */
        private long f54026p;

        /* renamed from: q  reason: collision with root package name */
        private int f54027q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f54028r;
        private volatile /* synthetic */ int workerCtl$volatile;

        private c() {
            setDaemon(true);
            setContextClassLoader(a.this.getClass().getClassLoader());
            this.f54022d = new l();
            this.f54023e = new Ref.ObjectRef();
            this.f54024i = d.f54033o;
            this.nextParkedWorker = a.f54012w;
            int nanoTime = (int) System.nanoTime();
            this.f54027q = nanoTime == 0 ? 42 : nanoTime;
        }

        private final void b(h hVar) {
            this.f54025o = 0L;
            if (this.f54024i == d.f54032i) {
                this.f54024i = d.f54031e;
            }
            if (hVar.f54047e) {
                if (r(d.f54031e)) {
                    a.this.O0();
                }
                a.this.G0(hVar);
                a.a().addAndGet(a.this, -2097152L);
                if (this.f54024i != d.f54034p) {
                    this.f54024i = d.f54033o;
                    return;
                }
                return;
            }
            a.this.G0(hVar);
        }

        private final h c(boolean z10) {
            boolean z11;
            h l10;
            h l11;
            if (z10) {
                if (j(a.this.f54013d * 2) == 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (z11 && (l11 = l()) != null) {
                    return l11;
                }
                h k10 = this.f54022d.k();
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
            h l10 = this.f54022d.l();
            if (l10 == null) {
                h hVar = (h) a.this.f54018q.e();
                if (hVar == null) {
                    return s(1);
                }
                return hVar;
            }
            return l10;
        }

        private final boolean i() {
            if (this.nextParkedWorker != a.f54012w) {
                return true;
            }
            return false;
        }

        private final void k() {
            if (this.f54025o == 0) {
                this.f54025o = System.nanoTime() + a.this.f54015i;
            }
            LockSupport.parkNanos(a.this.f54015i);
            if (System.nanoTime() - this.f54025o >= 0) {
                this.f54025o = 0L;
                t();
            }
        }

        private final h l() {
            if (j(2) == 0) {
                h hVar = (h) a.this.f54017p.e();
                if (hVar != null) {
                    return hVar;
                }
                return (h) a.this.f54018q.e();
            }
            h hVar2 = (h) a.this.f54018q.e();
            if (hVar2 != null) {
                return hVar2;
            }
            return (h) a.this.f54017p.e();
        }

        private final void m() {
            loop0: while (true) {
                boolean z10 = false;
                while (!a.this.isTerminated() && this.f54024i != d.f54034p) {
                    h e10 = e(this.f54028r);
                    if (e10 != null) {
                        this.f54026p = 0L;
                        b(e10);
                    } else {
                        this.f54028r = false;
                        if (this.f54026p != 0) {
                            if (!z10) {
                                z10 = true;
                            } else {
                                r(d.f54032i);
                                Thread.interrupted();
                                LockSupport.parkNanos(this.f54026p);
                                this.f54026p = 0L;
                            }
                        } else {
                            q();
                        }
                    }
                }
            }
            r(d.f54034p);
        }

        private final boolean p() {
            long j10;
            if (this.f54024i == d.f54030d) {
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
            this.f54024i = d.f54030d;
            return true;
        }

        private final void q() {
            if (!i()) {
                a.this.Z(this);
                return;
            }
            f54021t.set(this, -1);
            while (i() && f54021t.get(this) == -1 && !a.this.isTerminated() && this.f54024i != d.f54034p) {
                r(d.f54032i);
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
                c cVar = (c) aVar.f54019r.b(j10);
                if (cVar != null && cVar != this) {
                    long r10 = cVar.f54022d.r(i10, this.f54023e);
                    if (r10 == -1) {
                        Ref.ObjectRef objectRef = this.f54023e;
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
            this.f54026p = j11;
            return null;
        }

        private final void t() {
            a aVar = a.this;
            synchronized (aVar.f54019r) {
                try {
                    if (aVar.isTerminated()) {
                        return;
                    }
                    if (((int) (a.a().get(aVar) & 2097151)) <= aVar.f54013d) {
                        return;
                    }
                    if (!f54021t.compareAndSet(this, -1, 1)) {
                        return;
                    }
                    int i10 = this.indexInArray;
                    n(0);
                    aVar.D0(this, i10, 0);
                    int andDecrement = (int) (a.a().getAndDecrement(aVar) & 2097151);
                    if (andDecrement != i10) {
                        Object b10 = aVar.f54019r.b(andDecrement);
                        Intrinsics.checkNotNull(b10);
                        c cVar = (c) b10;
                        aVar.f54019r.c(i10, cVar);
                        cVar.n(i10);
                        aVar.D0(cVar, andDecrement, i10);
                    }
                    aVar.f54019r.c(andDecrement, null);
                    Unit unit = Unit.f31765a;
                    this.f54024i = d.f54034p;
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
            int i11 = this.f54027q;
            int i12 = i11 ^ (i11 << 13);
            int i13 = i12 ^ (i12 >> 17);
            int i14 = i13 ^ (i13 << 5);
            this.f54027q = i14;
            int i15 = i10 - 1;
            if ((i15 & i10) == 0) {
                return i14 & i15;
            }
            return (i14 & Integer.MAX_VALUE) % i10;
        }

        public final void n(int i10) {
            String valueOf;
            StringBuilder sb2 = new StringBuilder();
            sb2.append(a.this.f54016o);
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
            d dVar2 = this.f54024i;
            if (dVar2 == d.f54030d) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                a.a().addAndGet(a.this, 4398046511104L);
            }
            if (dVar2 != dVar) {
                this.f54024i = dVar;
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
