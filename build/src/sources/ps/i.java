package ps;

import gs.w1;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import java.util.concurrent.atomic.AtomicLongFieldUpdater;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import ls.b0;
import ls.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i {

    /* renamed from: c  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f46172c = AtomicReferenceFieldUpdater.newUpdater(i.class, Object.class, "head$volatile");

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f46173d = AtomicLongFieldUpdater.newUpdater(i.class, "deqIdx$volatile");

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f46174e = AtomicReferenceFieldUpdater.newUpdater(i.class, Object.class, "tail$volatile");

    /* renamed from: f  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f46175f = AtomicLongFieldUpdater.newUpdater(i.class, "enqIdx$volatile");

    /* renamed from: g  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f46176g = AtomicIntegerFieldUpdater.newUpdater(i.class, "_availablePermits$volatile");
    private volatile /* synthetic */ int _availablePermits$volatile;

    /* renamed from: a  reason: collision with root package name */
    private final int f46177a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f46178b;
    private volatile /* synthetic */ long deqIdx$volatile;
    private volatile /* synthetic */ long enqIdx$volatile;
    private volatile /* synthetic */ Object head$volatile;
    private volatile /* synthetic */ Object tail$volatile;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f46179d = new a();

        a() {
            super(2, k.class, "createSegment", "createSegment(JLkotlinx/coroutines/sync/SemaphoreSegment;)Lkotlinx/coroutines/sync/SemaphoreSegment;", 1);
        }

        public final l a(long j10, l lVar) {
            return k.c(j10, lVar);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return a(((Number) obj).longValue(), (l) obj2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b extends FunctionReferenceImpl implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f46180d = new b();

        b() {
            super(2, k.class, "createSegment", "createSegment(JLkotlinx/coroutines/sync/SemaphoreSegment;)Lkotlinx/coroutines/sync/SemaphoreSegment;", 1);
        }

        public final l a(long j10, l lVar) {
            return k.c(j10, lVar);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return a(((Number) obj).longValue(), (l) obj2);
        }
    }

    public i(int i10, int i11) {
        this.f46177a = i10;
        if (i10 > 0) {
            if (i11 >= 0 && i11 <= i10) {
                l lVar = new l(0L, null, 2);
                this.head$volatile = lVar;
                this.tail$volatile = lVar;
                this._availablePermits$volatile = i10 - i11;
                this.f46178b = new Function3() { // from class: ps.h
                    @Override // kotlin.jvm.functions.Function3
                    public final Object invoke(Object obj, Object obj2, Object obj3) {
                        Unit q10;
                        q10 = i.q(i.this, (Throwable) obj, (Unit) obj2, (CoroutineContext) obj3);
                        return q10;
                    }
                };
                return;
            }
            throw new IllegalArgumentException(("The number of acquired permits should be in 0.." + i10).toString());
        }
        throw new IllegalArgumentException(("Semaphore should have at least 1 permit, but had " + i10).toString());
    }

    private final Object g(Continuation continuation) {
        kotlinx.coroutines.e b10 = gs.l.b(or.b.c(continuation));
        try {
            if (!h(b10)) {
                f(b10);
            }
            Object B = b10.B();
            if (B == or.b.f()) {
                kotlin.coroutines.jvm.internal.g.c(continuation);
            }
            if (B == or.b.f()) {
                return B;
            }
            return Unit.f33282a;
        } catch (Throwable th2) {
            b10.P();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean h(w1 w1Var) {
        Object c10;
        l lVar = (l) f46174e.get(this);
        long andIncrement = f46175f.getAndIncrement(this);
        a aVar = a.f46179d;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f46174e;
        long h10 = andIncrement / k.h();
        loop0: while (true) {
            c10 = ls.b.c(lVar, h10, aVar);
            if (!c0.c(c10)) {
                b0 b10 = c0.b(c10);
                while (true) {
                    b0 b0Var = (b0) atomicReferenceFieldUpdater.get(this);
                    if (b0Var.f37432i >= b10.f37432i) {
                        break loop0;
                    } else if (!b10.u()) {
                        break;
                    } else if (androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, b0Var, b10)) {
                        if (b0Var.p()) {
                            b0Var.n();
                        }
                    } else if (b10.p()) {
                        b10.n();
                    }
                }
            } else {
                break;
            }
        }
        l lVar2 = (l) c0.b(c10);
        int h11 = (int) (andIncrement % k.h());
        if (is.l.a(lVar2.v(), h11, null, w1Var)) {
            w1Var.e(lVar2, h11);
            return true;
        }
        if (is.l.a(lVar2.v(), h11, k.g(), k.i())) {
            if (w1Var instanceof CancellableContinuation) {
                Intrinsics.checkNotNull(w1Var, "null cannot be cast to non-null type kotlinx.coroutines.CancellableContinuation<kotlin.Unit>");
                ((CancellableContinuation) w1Var).p(Unit.f33282a, this.f46178b);
            } else if (w1Var instanceof os.l) {
                ((os.l) w1Var).d(Unit.f33282a);
            } else {
                throw new IllegalStateException(("unexpected: " + w1Var).toString());
            }
            return true;
        }
        return false;
    }

    private final void i() {
        int i10;
        do {
            i10 = f46176g.get(this);
            if (i10 <= this.f46177a) {
                return;
            }
        } while (!f46176g.compareAndSet(this, i10, this.f46177a));
    }

    private final int j() {
        int andDecrement;
        do {
            andDecrement = f46176g.getAndDecrement(this);
        } while (andDecrement > this.f46177a);
        return andDecrement;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(i iVar, Throwable th2, Unit unit, CoroutineContext coroutineContext) {
        iVar.release();
        return Unit.f33282a;
    }

    private final boolean s(Object obj) {
        if (obj instanceof CancellableContinuation) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.CancellableContinuation<kotlin.Unit>");
            CancellableContinuation cancellableContinuation = (CancellableContinuation) obj;
            Object t10 = cancellableContinuation.t(Unit.f33282a, null, this.f46178b);
            if (t10 != null) {
                cancellableContinuation.w(t10);
                return true;
            }
            return false;
        } else if (obj instanceof os.l) {
            return ((os.l) obj).f(this, Unit.f33282a);
        } else {
            throw new IllegalStateException(("unexpected: " + obj).toString());
        }
    }

    private final boolean t() {
        Object c10;
        l lVar = (l) f46172c.get(this);
        long andIncrement = f46173d.getAndIncrement(this);
        long h10 = andIncrement / k.h();
        b bVar = b.f46180d;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f46172c;
        loop0: while (true) {
            c10 = ls.b.c(lVar, h10, bVar);
            if (c0.c(c10)) {
                break;
            }
            b0 b10 = c0.b(c10);
            while (true) {
                b0 b0Var = (b0) atomicReferenceFieldUpdater.get(this);
                if (b0Var.f37432i >= b10.f37432i) {
                    break loop0;
                } else if (!b10.u()) {
                    break;
                } else if (androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, b0Var, b10)) {
                    if (b0Var.p()) {
                        b0Var.n();
                    }
                } else if (b10.p()) {
                    b10.n();
                }
            }
        }
        l lVar2 = (l) c0.b(c10);
        lVar2.b();
        if (lVar2.f37432i > h10) {
            return false;
        }
        int h11 = (int) (andIncrement % k.h());
        Object andSet = lVar2.v().getAndSet(h11, k.g());
        if (andSet == null) {
            int f10 = k.f();
            for (int i10 = 0; i10 < f10; i10++) {
                if (lVar2.v().get(h11) == k.i()) {
                    return true;
                }
            }
            return !is.l.a(lVar2.v(), h11, k.g(), k.d());
        } else if (andSet == k.e()) {
            return false;
        } else {
            return s(andSet);
        }
    }

    public final Object a(Continuation continuation) {
        if (j() > 0) {
            return Unit.f33282a;
        }
        Object g10 = g(continuation);
        if (g10 == or.b.f()) {
            return g10;
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void f(CancellableContinuation cancellableContinuation) {
        while (j() <= 0) {
            Intrinsics.checkNotNull(cancellableContinuation, "null cannot be cast to non-null type kotlinx.coroutines.Waiter");
            if (h((w1) cancellableContinuation)) {
                return;
            }
        }
        cancellableContinuation.p(Unit.f33282a, this.f46178b);
    }

    public final int k() {
        return Math.max(f46176g.get(this), 0);
    }

    public final boolean r() {
        while (true) {
            int i10 = f46176g.get(this);
            if (i10 > this.f46177a) {
                i();
            } else if (i10 <= 0) {
                return false;
            } else {
                if (f46176g.compareAndSet(this, i10, i10 - 1)) {
                    return true;
                }
            }
        }
    }

    public final void release() {
        do {
            int andIncrement = f46176g.getAndIncrement(this);
            if (andIncrement < this.f46177a) {
                if (andIncrement >= 0) {
                    return;
                }
            } else {
                i();
                throw new IllegalStateException(("The number of released permits cannot be greater than " + this.f46177a).toString());
            }
        } while (!t());
    }
}
