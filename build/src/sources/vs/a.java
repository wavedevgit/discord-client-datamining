package vs;

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
import qr.p;
import ts.e0;
import ts.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Executor, Closeable {

    /* renamed from: s  reason: collision with root package name */
    public static final C0702a f52933s = new C0702a(null);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f52934t = AtomicLongFieldUpdater.newUpdater(a.class, "parkedWorkersStack$volatile");

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f52935u = AtomicLongFieldUpdater.newUpdater(a.class, "controlState$volatile");

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f52936v = AtomicIntegerFieldUpdater.newUpdater(a.class, "_isTerminated$volatile");

    /* renamed from: w  reason: collision with root package name */
    public static final e0 f52937w = new e0("NOT_IN_STACK");
    private volatile /* synthetic */ int _isTerminated$volatile;
    private volatile /* synthetic */ long controlState$volatile;

    /* renamed from: d  reason: collision with root package name */
    public final int f52938d;

    /* renamed from: e  reason: collision with root package name */
    public final int f52939e;

    /* renamed from: i  reason: collision with root package name */
    public final long f52940i;

    /* renamed from: o  reason: collision with root package name */
    public final String f52941o;

    /* renamed from: p  reason: collision with root package name */
    public final vs.d f52942p;
    private volatile /* synthetic */ long parkedWorkersStack$volatile;

    /* renamed from: q  reason: collision with root package name */
    public final vs.d f52943q;

    /* renamed from: r  reason: collision with root package name */
    public final z f52944r;

    /* renamed from: vs.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0702a {
        public /* synthetic */ C0702a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0702a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f52945a;

        static {
            int[] iArr = new int[d.values().length];
            try {
                iArr[d.f52957i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d.f52956e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d.f52955d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[d.f52958o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[d.f52959p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f52945a = iArr;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {

        /* renamed from: d  reason: collision with root package name */
        public static final d f52955d = new d("CPU_ACQUIRED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final d f52956e = new d("BLOCKING", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final d f52957i = new d("PARKING", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final d f52958o = new d("DORMANT", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final d f52959p = new d("TERMINATED", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ d[] f52960q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f52961r;

        static {
            d[] a10 = a();
            f52960q = a10;
            f52961r = xr.a.a(a10);
        }

        private d(String str, int i10) {
        }

        private static final /* synthetic */ d[] a() {
            return new d[]{f52955d, f52956e, f52957i, f52958o, f52959p};
        }

        public static d valueOf(String str) {
            return (d) Enum.valueOf(d.class, str);
        }

        public static d[] values() {
            return (d[]) f52960q.clone();
        }
    }

    public a(int i10, int i11, long j10, String str) {
        this.f52938d = i10;
        this.f52939e = i11;
        this.f52940i = j10;
        this.f52941o = str;
        if (i10 >= 1) {
            if (i11 >= i10) {
                if (i11 <= 2097150) {
                    if (j10 > 0) {
                        this.f52942p = new vs.d();
                        this.f52943q = new vs.d();
                        this.f52944r = new z((i10 + 1) * 2);
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
        while (g10 != f52937w) {
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

    private final void K0(long j10) {
        if (d1() || V0(j10)) {
            return;
        }
        d1();
    }

    private final h O0(c cVar, h hVar, boolean z10) {
        d dVar;
        if (cVar == null || (dVar = cVar.f52949i) == d.f52959p) {
            return hVar;
        }
        if (!hVar.f52972e && dVar == d.f52956e) {
            return hVar;
        }
        cVar.f52953r = true;
        return cVar.f52947d.a(hVar, z10);
    }

    private final c P() {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f52934t;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            c cVar = (c) this.f52944r.b((int) (2097151 & j10));
            if (cVar == null) {
                return null;
            }
            long j11 = (2097152 + j10) & (-2097152);
            int J = J(cVar);
            if (J >= 0 && f52934t.compareAndSet(this, j10, J | j11)) {
                cVar.o(f52937w);
                return cVar;
            }
        }
    }

    private final boolean V0(long j10) {
        if (kotlin.ranges.d.d(((int) (2097151 & j10)) - ((int) ((j10 & 4398044413952L) >> 21)), 0) < this.f52938d) {
            int m10 = m();
            if (m10 == 1 && this.f52938d > 1) {
                m();
            }
            if (m10 > 0) {
                return true;
            }
        }
        return false;
    }

    static /* synthetic */ boolean Y0(a aVar, long j10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = f52935u.get(aVar);
        }
        return aVar.V0(j10);
    }

    public static final /* synthetic */ AtomicLongFieldUpdater a() {
        return f52935u;
    }

    private final boolean d1() {
        c P;
        do {
            P = P();
            if (P == null) {
                return false;
            }
        } while (!c.f52946t.compareAndSet(P, -1, 0));
        LockSupport.unpark(P);
        return true;
    }

    private final boolean k(h hVar) {
        if (hVar.f52972e) {
            return this.f52943q.a(hVar);
        }
        return this.f52942p.a(hVar);
    }

    private final int m() {
        synchronized (this.f52944r) {
            try {
                if (isTerminated()) {
                    return -1;
                }
                long j10 = f52935u.get(this);
                int i10 = (int) (j10 & 2097151);
                int d10 = kotlin.ranges.d.d(i10 - ((int) ((j10 & 4398044413952L) >> 21)), 0);
                if (d10 >= this.f52938d) {
                    return 0;
                }
                if (i10 >= this.f52939e) {
                    return 0;
                }
                int i11 = ((int) (a().get(this) & 2097151)) + 1;
                if (i11 > 0 && this.f52944r.b(i11) == null) {
                    c cVar = new c(this, i11);
                    this.f52944r.c(i11, cVar);
                    if (i11 == ((int) (2097151 & f52935u.incrementAndGet(this)))) {
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

    public final void E0(c cVar, int i10, int i11) {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f52934t;
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
                if (f52934t.compareAndSet(this, j10, j11 | i12)) {
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
                os.b.a();
            }
        }
    }

    public final void J0(long j10) {
        int i10;
        h hVar;
        if (!f52936v.compareAndSet(this, 0, 1)) {
            return;
        }
        c p10 = p();
        synchronized (this.f52944r) {
            i10 = (int) (a().get(this) & 2097151);
        }
        if (1 <= i10) {
            int i11 = 1;
            while (true) {
                Object b10 = this.f52944r.b(i11);
                Intrinsics.checkNotNull(b10);
                c cVar = (c) b10;
                if (cVar != p10) {
                    while (cVar.getState() != Thread.State.TERMINATED) {
                        LockSupport.unpark(cVar);
                        cVar.join(j10);
                    }
                    cVar.f52947d.j(this.f52943q);
                }
                if (i11 == i10) {
                    break;
                }
                i11++;
            }
        }
        this.f52943q.b();
        this.f52942p.b();
        while (true) {
            if (p10 != null) {
                hVar = p10.e(true);
                if (hVar != null) {
                    continue;
                    I0(hVar);
                }
            }
            hVar = (h) this.f52942p.e();
            if (hVar == null && (hVar = (h) this.f52943q.e()) == null) {
                break;
            }
            I0(hVar);
        }
        if (p10 != null) {
            p10.r(d.f52959p);
        }
        f52934t.set(this, 0L);
        f52935u.set(this, 0L);
    }

    public final void L0() {
        if (d1() || Y0(this, 0L, 1, null)) {
            return;
        }
        d1();
    }

    public final boolean Y(c cVar) {
        long j10;
        int f10;
        if (cVar.g() == f52937w) {
            AtomicLongFieldUpdater atomicLongFieldUpdater = f52934t;
            do {
                j10 = atomicLongFieldUpdater.get(this);
                f10 = cVar.f();
                cVar.o(this.f52944r.b((int) (2097151 & j10)));
            } while (!f52934t.compareAndSet(this, j10, ((2097152 + j10) & (-2097152)) | f10));
            return true;
        }
        return false;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        J0(10000L);
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        y(this, runnable, false, false, 6, null);
    }

    public final boolean isTerminated() {
        if (f52936v.get(this) == 1) {
            return true;
        }
        return false;
    }

    public final h n(Runnable runnable, boolean z10) {
        long a10 = j.f52979f.a();
        if (runnable instanceof h) {
            h hVar = (h) runnable;
            hVar.f52971d = a10;
            hVar.f52972e = z10;
            return hVar;
        }
        return j.b(runnable, a10, z10);
    }

    public final void s(Runnable runnable, boolean z10, boolean z11) {
        long j10;
        os.b.a();
        h n10 = n(runnable, z10);
        boolean z12 = n10.f52972e;
        if (z12) {
            j10 = f52935u.addAndGet(this, 2097152L);
        } else {
            j10 = 0;
        }
        h O0 = O0(p(), n10, z11);
        if (O0 != null && !k(O0)) {
            throw new RejectedExecutionException(this.f52941o + " was terminated");
        } else if (z12) {
            K0(j10);
        } else {
            L0();
        }
    }

    public String toString() {
        ArrayList arrayList = new ArrayList();
        int a10 = this.f52944r.a();
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        for (int i15 = 1; i15 < a10; i15++) {
            c cVar = (c) this.f52944r.b(i15);
            if (cVar != null) {
                int i16 = cVar.f52947d.i();
                int i17 = b.f52945a[cVar.f52949i.ordinal()];
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
        long j10 = f52935u.get(this);
        return this.f52941o + '@' + os.e0.b(this) + "[Pool Size {core = " + this.f52938d + ", max = " + this.f52939e + "}, Worker States {CPU = " + i10 + ", blocking = " + i11 + ", parked = " + i12 + ", dormant = " + i13 + ", terminated = " + i14 + "}, running workers queues = " + arrayList + ", global CPU queue size = " + this.f52942p.c() + ", global blocking queue size = " + this.f52943q.c() + ", Control State {created workers= " + ((int) (2097151 & j10)) + ", blocking tasks = " + ((int) ((4398044413952L & j10) >> 21)) + ", CPUs acquired = " + (this.f52938d - ((int) ((9223367638808264704L & j10) >> 42))) + "}]";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends Thread {

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ AtomicIntegerFieldUpdater f52946t = AtomicIntegerFieldUpdater.newUpdater(c.class, "workerCtl$volatile");

        /* renamed from: d  reason: collision with root package name */
        public final l f52947d;

        /* renamed from: e  reason: collision with root package name */
        private final Ref.ObjectRef f52948e;

        /* renamed from: i  reason: collision with root package name */
        public d f52949i;
        private volatile int indexInArray;
        private volatile Object nextParkedWorker;

        /* renamed from: o  reason: collision with root package name */
        private long f52950o;

        /* renamed from: p  reason: collision with root package name */
        private long f52951p;

        /* renamed from: q  reason: collision with root package name */
        private int f52952q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f52953r;
        private volatile /* synthetic */ int workerCtl$volatile;

        private c() {
            setDaemon(true);
            setContextClassLoader(a.this.getClass().getClassLoader());
            this.f52947d = new l();
            this.f52948e = new Ref.ObjectRef();
            this.f52949i = d.f52958o;
            this.nextParkedWorker = a.f52937w;
            int nanoTime = (int) System.nanoTime();
            this.f52952q = nanoTime == 0 ? 42 : nanoTime;
        }

        private final void b(h hVar) {
            this.f52950o = 0L;
            if (this.f52949i == d.f52957i) {
                this.f52949i = d.f52956e;
            }
            if (hVar.f52972e) {
                if (r(d.f52956e)) {
                    a.this.L0();
                }
                a.this.I0(hVar);
                a.a().addAndGet(a.this, -2097152L);
                if (this.f52949i != d.f52959p) {
                    this.f52949i = d.f52958o;
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
                if (j(a.this.f52938d * 2) == 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (z11 && (l11 = l()) != null) {
                    return l11;
                }
                h k10 = this.f52947d.k();
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
            h l10 = this.f52947d.l();
            if (l10 == null) {
                h hVar = (h) a.this.f52943q.e();
                if (hVar == null) {
                    return s(1);
                }
                return hVar;
            }
            return l10;
        }

        private final boolean i() {
            if (this.nextParkedWorker != a.f52937w) {
                return true;
            }
            return false;
        }

        private final void k() {
            if (this.f52950o == 0) {
                this.f52950o = System.nanoTime() + a.this.f52940i;
            }
            LockSupport.parkNanos(a.this.f52940i);
            if (System.nanoTime() - this.f52950o >= 0) {
                this.f52950o = 0L;
                t();
            }
        }

        private final h l() {
            if (j(2) == 0) {
                h hVar = (h) a.this.f52942p.e();
                if (hVar != null) {
                    return hVar;
                }
                return (h) a.this.f52943q.e();
            }
            h hVar2 = (h) a.this.f52943q.e();
            if (hVar2 != null) {
                return hVar2;
            }
            return (h) a.this.f52942p.e();
        }

        private final void m() {
            loop0: while (true) {
                boolean z10 = false;
                while (!a.this.isTerminated() && this.f52949i != d.f52959p) {
                    h e10 = e(this.f52953r);
                    if (e10 != null) {
                        this.f52951p = 0L;
                        b(e10);
                    } else {
                        this.f52953r = false;
                        if (this.f52951p != 0) {
                            if (!z10) {
                                z10 = true;
                            } else {
                                r(d.f52957i);
                                Thread.interrupted();
                                LockSupport.parkNanos(this.f52951p);
                                this.f52951p = 0L;
                            }
                        } else {
                            q();
                        }
                    }
                }
            }
            r(d.f52959p);
        }

        private final boolean p() {
            long j10;
            if (this.f52949i == d.f52955d) {
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
            this.f52949i = d.f52955d;
            return true;
        }

        private final void q() {
            if (!i()) {
                a.this.Y(this);
                return;
            }
            f52946t.set(this, -1);
            while (i() && f52946t.get(this) == -1 && !a.this.isTerminated() && this.f52949i != d.f52959p) {
                r(d.f52957i);
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
                c cVar = (c) aVar.f52944r.b(j10);
                if (cVar != null && cVar != this) {
                    long r10 = cVar.f52947d.r(i10, this.f52948e);
                    if (r10 == -1) {
                        Ref.ObjectRef objectRef = this.f52948e;
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
            this.f52951p = j11;
            return null;
        }

        private final void t() {
            a aVar = a.this;
            synchronized (aVar.f52944r) {
                try {
                    if (aVar.isTerminated()) {
                        return;
                    }
                    if (((int) (a.a().get(aVar) & 2097151)) <= aVar.f52938d) {
                        return;
                    }
                    if (!f52946t.compareAndSet(this, -1, 1)) {
                        return;
                    }
                    int i10 = this.indexInArray;
                    n(0);
                    aVar.E0(this, i10, 0);
                    int andDecrement = (int) (a.a().getAndDecrement(aVar) & 2097151);
                    if (andDecrement != i10) {
                        Object b10 = aVar.f52944r.b(andDecrement);
                        Intrinsics.checkNotNull(b10);
                        c cVar = (c) b10;
                        aVar.f52944r.c(i10, cVar);
                        cVar.n(i10);
                        aVar.E0(cVar, andDecrement, i10);
                    }
                    aVar.f52944r.c(andDecrement, null);
                    Unit unit = Unit.f32008a;
                    this.f52949i = d.f52959p;
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
            int i11 = this.f52952q;
            int i12 = i11 ^ (i11 << 13);
            int i13 = i12 ^ (i12 >> 17);
            int i14 = i13 ^ (i13 << 5);
            this.f52952q = i14;
            int i15 = i10 - 1;
            if ((i15 & i10) == 0) {
                return i14 & i15;
            }
            return (i14 & Integer.MAX_VALUE) % i10;
        }

        public final void n(int i10) {
            String valueOf;
            StringBuilder sb2 = new StringBuilder();
            sb2.append(a.this.f52941o);
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
            d dVar2 = this.f52949i;
            if (dVar2 == d.f52955d) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                a.a().addAndGet(a.this, 4398046511104L);
            }
            if (dVar2 != dVar) {
                this.f52949i = dVar;
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
