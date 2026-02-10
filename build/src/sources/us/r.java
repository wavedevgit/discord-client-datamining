package us;

import java.util.concurrent.atomic.AtomicLongFieldUpdater;
import java.util.concurrent.atomic.AtomicReferenceArray;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r {

    /* renamed from: e  reason: collision with root package name */
    public static final a f51810e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f51811f = AtomicReferenceFieldUpdater.newUpdater(r.class, Object.class, "_next$volatile");

    /* renamed from: g  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f51812g = AtomicLongFieldUpdater.newUpdater(r.class, "_state$volatile");

    /* renamed from: h  reason: collision with root package name */
    public static final e0 f51813h = new e0("REMOVE_FROZEN");
    private volatile /* synthetic */ Object _next$volatile;
    private volatile /* synthetic */ long _state$volatile;

    /* renamed from: a  reason: collision with root package name */
    private final int f51814a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51815b;

    /* renamed from: c  reason: collision with root package name */
    private final int f51816c;

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ AtomicReferenceArray f51817d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final int a(long j10) {
            if ((j10 & 2305843009213693952L) != 0) {
                return 2;
            }
            return 1;
        }

        public final long b(long j10, int i10) {
            return d(j10, 1073741823L) | i10;
        }

        public final long c(long j10, int i10) {
            return d(j10, 1152921503533105152L) | (i10 << 30);
        }

        public final long d(long j10, long j11) {
            return j10 & (~j11);
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f51818a;

        public b(int i10) {
            this.f51818a = i10;
        }
    }

    public r(int i10, boolean z10) {
        this.f51814a = i10;
        this.f51815b = z10;
        int i11 = i10 - 1;
        this.f51816c = i11;
        this.f51817d = new AtomicReferenceArray(i10);
        if (i11 <= 1073741823) {
            if ((i10 & i11) == 0) {
                return;
            }
            throw new IllegalStateException("Check failed.");
        }
        throw new IllegalStateException("Check failed.");
    }

    private final r b(long j10) {
        r rVar = new r(this.f51814a * 2, this.f51815b);
        int i10 = (int) (1073741823 & j10);
        int i11 = (int) ((1152921503533105152L & j10) >> 30);
        while (true) {
            int i12 = this.f51816c;
            if ((i10 & i12) != (i12 & i11)) {
                Object obj = f().get(this.f51816c & i10);
                if (obj == null) {
                    obj = new b(i10);
                }
                rVar.f().set(rVar.f51816c & i10, obj);
                i10++;
            } else {
                f51812g.set(rVar, f51810e.d(j10, 1152921504606846976L));
                return rVar;
            }
        }
    }

    private final r c(long j10) {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f51811f;
        while (true) {
            r rVar = (r) atomicReferenceFieldUpdater.get(this);
            if (rVar != null) {
                return rVar;
            }
            androidx.concurrent.futures.b.a(f51811f, this, null, b(j10));
        }
    }

    private final r e(int i10, Object obj) {
        Object obj2 = f().get(this.f51816c & i10);
        if ((obj2 instanceof b) && ((b) obj2).f51818a == i10) {
            f().set(i10 & this.f51816c, obj);
            return this;
        }
        return null;
    }

    private final /* synthetic */ AtomicReferenceArray f() {
        return this.f51817d;
    }

    private final long k() {
        long j10;
        long j11;
        AtomicLongFieldUpdater atomicLongFieldUpdater = f51812g;
        do {
            j10 = atomicLongFieldUpdater.get(this);
            if ((j10 & 1152921504606846976L) != 0) {
                return j10;
            }
            j11 = 1152921504606846976L | j10;
        } while (!atomicLongFieldUpdater.compareAndSet(this, j10, j11));
        return j11;
    }

    private final r n(int i10, int i11) {
        long j10;
        int i12;
        AtomicLongFieldUpdater atomicLongFieldUpdater = f51812g;
        do {
            j10 = atomicLongFieldUpdater.get(this);
            i12 = (int) (1073741823 & j10);
            if ((1152921504606846976L & j10) != 0) {
                return l();
            }
        } while (!f51812g.compareAndSet(this, j10, f51810e.b(j10, i11)));
        f().set(this.f51816c & i12, null);
        return null;
    }

    public final int a(Object obj) {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f51812g;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            if ((3458764513820540928L & j10) != 0) {
                return f51810e.a(j10);
            }
            int i10 = (int) (1073741823 & j10);
            int i11 = (int) ((1152921503533105152L & j10) >> 30);
            int i12 = this.f51816c;
            if (((i11 + 2) & i12) == (i10 & i12)) {
                return 1;
            }
            if (!this.f51815b && f().get(i11 & i12) != null) {
                int i13 = this.f51814a;
                if (i13 < 1024 || ((i11 - i10) & 1073741823) > (i13 >> 1)) {
                    break;
                }
            } else if (f51812g.compareAndSet(this, j10, f51810e.c(j10, (i11 + 1) & 1073741823))) {
                f().set(i11 & i12, obj);
                r rVar = this;
                while ((f51812g.get(rVar) & 1152921504606846976L) != 0 && (rVar = rVar.l().e(i11, obj)) != null) {
                }
                return 0;
            }
        }
        return 1;
    }

    public final boolean d() {
        long j10;
        AtomicLongFieldUpdater atomicLongFieldUpdater = f51812g;
        do {
            j10 = atomicLongFieldUpdater.get(this);
            if ((j10 & 2305843009213693952L) != 0) {
                return true;
            }
            if ((1152921504606846976L & j10) != 0) {
                return false;
            }
        } while (!atomicLongFieldUpdater.compareAndSet(this, j10, 2305843009213693952L | j10));
        return true;
    }

    public final int g() {
        long j10 = f51812g.get(this);
        return (((int) ((j10 & 1152921503533105152L) >> 30)) - ((int) (1073741823 & j10))) & 1073741823;
    }

    public final boolean j() {
        long j10 = f51812g.get(this);
        if (((int) (1073741823 & j10)) == ((int) ((j10 & 1152921503533105152L) >> 30))) {
            return true;
        }
        return false;
    }

    public final r l() {
        return c(k());
    }

    public final Object m() {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f51812g;
        while (true) {
            long j10 = atomicLongFieldUpdater.get(this);
            if ((1152921504606846976L & j10) != 0) {
                return f51813h;
            }
            int i10 = (int) (1073741823 & j10);
            int i11 = this.f51816c;
            if ((((int) ((1152921503533105152L & j10) >> 30)) & i11) == (i11 & i10)) {
                return null;
            }
            Object obj = f().get(this.f51816c & i10);
            if (obj == null) {
                if (this.f51815b) {
                    return null;
                }
            } else if (obj instanceof b) {
                return null;
            } else {
                int i12 = (i10 + 1) & 1073741823;
                if (f51812g.compareAndSet(this, j10, f51810e.b(j10, i12))) {
                    f().set(this.f51816c & i10, null);
                    return obj;
                } else if (this.f51815b) {
                    r rVar = this;
                    do {
                        rVar = rVar.n(i10, i12);
                    } while (rVar != null);
                    return obj;
                }
            }
        }
    }
}
