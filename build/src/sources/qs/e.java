package qs;

import hs.w1;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.sync.Mutex;
import ms.b0;
import ms.e0;
import qs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e extends i implements Mutex {

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f47837i = AtomicReferenceFieldUpdater.newUpdater(e.class, Object.class, "owner$volatile");

    /* renamed from: h  reason: collision with root package name */
    private final Function3 f47838h;
    private volatile /* synthetic */ Object owner$volatile;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a implements CancellableContinuation, w1 {

        /* renamed from: d  reason: collision with root package name */
        public final kotlinx.coroutines.e f47839d;

        /* renamed from: e  reason: collision with root package name */
        public final Object f47840e;

        public a(kotlinx.coroutines.e eVar, Object obj) {
            this.f47839d = eVar;
            this.f47840e = obj;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit j(e eVar, a aVar, Throwable th2) {
            eVar.c(aVar.f47840e);
            return Unit.f33074a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit m(e eVar, a aVar, Throwable th2, Unit unit, CoroutineContext coroutineContext) {
            e.w().set(eVar, aVar.f47840e);
            eVar.c(aVar.f47840e);
            return Unit.f33074a;
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public boolean a() {
            return this.f47839d.a();
        }

        @Override // hs.w1
        public void b(b0 b0Var, int i10) {
            this.f47839d.b(b0Var, i10);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public void c(Function1 function1) {
            this.f47839d.c(function1);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public Object e(Throwable th2) {
            return this.f47839d.e(th2);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public void f(CoroutineDispatcher coroutineDispatcher, Throwable th2) {
            this.f47839d.f(coroutineDispatcher, th2);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public boolean g(Throwable th2) {
            return this.f47839d.g(th2);
        }

        @Override // kotlin.coroutines.Continuation
        public CoroutineContext getContext() {
            return this.f47839d.getContext();
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        /* renamed from: i */
        public void p(Unit unit, Function3 function3) {
            e.w().set(e.this, this.f47840e);
            kotlinx.coroutines.e eVar = this.f47839d;
            final e eVar2 = e.this;
            eVar.R(unit, new Function1() { // from class: qs.d
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
            return this.f47839d.isCompleted();
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        /* renamed from: k */
        public void q(CoroutineDispatcher coroutineDispatcher, Unit unit) {
            this.f47839d.q(coroutineDispatcher, unit);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        /* renamed from: l */
        public Object t(Unit unit, Object obj, Function3 function3) {
            final e eVar = e.this;
            Object t10 = this.f47839d.t(unit, obj, new Function3() { // from class: qs.c
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj2, Object obj3, Object obj4) {
                    Unit m10;
                    m10 = e.a.m(e.this, this, (Throwable) obj2, (Unit) obj3, (CoroutineContext) obj4);
                    return m10;
                }
            });
            if (t10 != null) {
                e.w().set(e.this, this.f47840e);
            }
            return t10;
        }

        @Override // kotlin.coroutines.Continuation
        public void resumeWith(Object obj) {
            this.f47839d.resumeWith(obj);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public void w(Object obj) {
            this.f47839d.w(obj);
        }
    }

    public e(boolean z10) {
        super(1, z10 ? 1 : 0);
        e0 e0Var;
        if (!z10) {
            e0Var = f.f47842a;
        } else {
            e0Var = null;
        }
        this.owner$volatile = e0Var;
        this.f47838h = new Function3() { // from class: qs.a
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj, Object obj2, Object obj3) {
                Function3 C;
                C = e.C(e.this, (ps.l) obj, obj2, obj3);
                return C;
            }
        };
    }

    static /* synthetic */ Object A(e eVar, Object obj, Continuation continuation) {
        if (eVar.E(obj)) {
            return Unit.f33074a;
        }
        Object B = eVar.B(obj, continuation);
        if (B == pr.b.f()) {
            return B;
        }
        return Unit.f33074a;
    }

    private final Object B(Object obj, Continuation continuation) {
        kotlinx.coroutines.e b10 = hs.l.b(pr.b.c(continuation));
        try {
            f(new a(b10, obj));
            Object B = b10.B();
            if (B == pr.b.f()) {
                kotlin.coroutines.jvm.internal.g.c(continuation);
            }
            if (B == pr.b.f()) {
                return B;
            }
            return Unit.f33074a;
        } catch (Throwable th2) {
            b10.P();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Function3 C(final e eVar, ps.l lVar, final Object obj, Object obj2) {
        return new Function3() { // from class: qs.b
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
        return Unit.f33074a;
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
        f47837i.set(this, obj);
        return 0;
    }

    public static final /* synthetic */ AtomicReferenceFieldUpdater w() {
        return f47837i;
    }

    private final int y(Object obj) {
        e0 e0Var;
        while (z()) {
            Object obj2 = f47837i.get(this);
            e0Var = f.f47842a;
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
            Object obj2 = f47837i.get(this);
            e0Var = f.f47842a;
            if (obj2 != e0Var) {
                if (obj2 == obj || obj == null) {
                    AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f47837i;
                    e0Var2 = f.f47842a;
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
        return "Mutex@" + hs.e0.b(this) + "[isLocked=" + z() + ",owner=" + f47837i.get(this) + ']';
    }

    public boolean z() {
        if (k() == 0) {
            return true;
        }
        return false;
    }
}
