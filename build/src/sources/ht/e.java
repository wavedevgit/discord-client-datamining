package ht;

import dt.b0;
import dt.e0;
import ht.e;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.sync.Mutex;
import ys.w1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e extends i implements Mutex {

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f28238i = AtomicReferenceFieldUpdater.newUpdater(e.class, Object.class, "owner$volatile");

    /* renamed from: h  reason: collision with root package name */
    private final Function3 f28239h;
    private volatile /* synthetic */ Object owner$volatile;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a implements CancellableContinuation, w1 {

        /* renamed from: d  reason: collision with root package name */
        public final kotlinx.coroutines.e f28240d;

        /* renamed from: e  reason: collision with root package name */
        public final Object f28241e;

        public a(kotlinx.coroutines.e eVar, Object obj) {
            this.f28240d = eVar;
            this.f28241e = obj;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit j(e eVar, a aVar, Throwable th2) {
            eVar.c(aVar.f28241e);
            return Unit.f32556a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit m(e eVar, a aVar, Throwable th2, Unit unit, CoroutineContext coroutineContext) {
            e.w().set(eVar, aVar.f28241e);
            eVar.c(aVar.f28241e);
            return Unit.f32556a;
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public void A(Object obj) {
            this.f28240d.A(obj);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public boolean a() {
            return this.f28240d.a();
        }

        @Override // ys.w1
        public void b(b0 b0Var, int i10) {
            this.f28240d.b(b0Var, i10);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public void c(Function1 function1) {
            this.f28240d.c(function1);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public Object e(Throwable th2) {
            return this.f28240d.e(th2);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public void f(CoroutineDispatcher coroutineDispatcher, Throwable th2) {
            this.f28240d.f(coroutineDispatcher, th2);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public boolean g(Throwable th2) {
            return this.f28240d.g(th2);
        }

        @Override // kotlin.coroutines.Continuation
        public CoroutineContext getContext() {
            return this.f28240d.getContext();
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        /* renamed from: i */
        public void r(Unit unit, Function3 function3) {
            e.w().set(e.this, this.f28241e);
            kotlinx.coroutines.e eVar = this.f28240d;
            final e eVar2 = e.this;
            eVar.R(unit, new Function1() { // from class: ht.d
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit j10;
                    j10 = e.a.j(e.this, this, (Throwable) obj);
                    return j10;
                }
            });
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public boolean isCompleted() {
            return this.f28240d.isCompleted();
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        /* renamed from: k */
        public void t(CoroutineDispatcher coroutineDispatcher, Unit unit) {
            this.f28240d.t(coroutineDispatcher, unit);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        /* renamed from: l */
        public Object w(Unit unit, Object obj, Function3 function3) {
            final e eVar = e.this;
            Object w10 = this.f28240d.w(unit, obj, new Function3() { // from class: ht.c
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj2, Object obj3, Object obj4) {
                    Unit m10;
                    m10 = e.a.m(e.this, this, (Throwable) obj2, (Unit) obj3, (CoroutineContext) obj4);
                    return m10;
                }
            });
            if (w10 != null) {
                e.w().set(e.this, this.f28241e);
            }
            return w10;
        }

        @Override // kotlin.coroutines.Continuation
        public void resumeWith(Object obj) {
            this.f28240d.resumeWith(obj);
        }
    }

    public e(boolean z10) {
        super(1, z10 ? 1 : 0);
        e0 e0Var;
        if (!z10) {
            e0Var = f.f28243a;
        } else {
            e0Var = null;
        }
        this.owner$volatile = e0Var;
        this.f28239h = new Function3() { // from class: ht.a
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj, Object obj2, Object obj3) {
                Function3 C;
                C = e.C(e.this, (gt.l) obj, obj2, obj3);
                return C;
            }
        };
    }

    static /* synthetic */ Object A(e eVar, Object obj, Continuation continuation) {
        if (eVar.E(obj)) {
            return Unit.f32556a;
        }
        Object B = eVar.B(obj, continuation);
        if (B == gs.b.f()) {
            return B;
        }
        return Unit.f32556a;
    }

    private final Object B(Object obj, Continuation continuation) {
        kotlinx.coroutines.e b10 = ys.l.b(gs.b.c(continuation));
        try {
            f(new a(b10, obj));
            Object B = b10.B();
            if (B == gs.b.f()) {
                kotlin.coroutines.jvm.internal.g.c(continuation);
            }
            if (B == gs.b.f()) {
                return B;
            }
            return Unit.f32556a;
        } catch (Throwable th2) {
            b10.P();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Function3 C(final e eVar, gt.l lVar, final Object obj, Object obj2) {
        return new Function3() { // from class: ht.b
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj3, Object obj4, Object obj5) {
                Unit D;
                D = e.D(e.this, obj, (Throwable) obj3, obj4, (CoroutineContext) obj5);
                return D;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D(e eVar, Object obj, Throwable th2, Object obj2, CoroutineContext coroutineContext) {
        eVar.c(obj);
        return Unit.f32556a;
    }

    private final int F(Object obj) {
        while (!r()) {
            if (obj == null) {
                return 1;
            }
            int y10 = y(obj);
            if (y10 == 1) {
                return 2;
            }
            if (y10 == 2) {
                return 1;
            }
        }
        f28238i.set(this, obj);
        return 0;
    }

    public static final /* synthetic */ AtomicReferenceFieldUpdater w() {
        return f28238i;
    }

    private final int y(Object obj) {
        e0 e0Var;
        while (z()) {
            Object obj2 = f28238i.get(this);
            e0Var = f.f28243a;
            if (obj2 != e0Var) {
                if (obj2 == obj) {
                    return 1;
                }
                return 2;
            }
        }
        return 0;
    }

    public boolean E(Object obj) {
        int F = F(obj);
        if (F == 0) {
            return true;
        }
        if (F != 1) {
            if (F != 2) {
                throw new IllegalStateException("unexpected");
            }
            throw new IllegalStateException(("This mutex is already locked by the specified owner: " + obj).toString());
        }
        return false;
    }

    @Override // kotlinx.coroutines.sync.Mutex
    public Object b(Object obj, Continuation continuation) {
        return A(this, obj, continuation);
    }

    @Override // kotlinx.coroutines.sync.Mutex
    public void c(Object obj) {
        e0 e0Var;
        e0 e0Var2;
        while (z()) {
            Object obj2 = f28238i.get(this);
            e0Var = f.f28243a;
            if (obj2 != e0Var) {
                if (obj2 == obj || obj == null) {
                    AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f28238i;
                    e0Var2 = f.f28243a;
                    if (androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, obj2, e0Var2)) {
                        release();
                        return;
                    }
                } else {
                    throw new IllegalStateException(("This mutex is locked by " + obj2 + ", but " + obj + " is expected").toString());
                }
            }
        }
        throw new IllegalStateException("This mutex is not locked");
    }

    public String toString() {
        return "Mutex@" + ys.e0.b(this) + "[isLocked=" + z() + ",owner=" + f28238i.get(this) + ']';
    }

    public boolean z() {
        if (k() == 0) {
            return true;
        }
        return false;
    }
}
