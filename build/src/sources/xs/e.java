package xs;

import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.sync.Mutex;
import os.w1;
import ts.b0;
import ts.e0;
import xs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e extends i implements Mutex {

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f54812i = AtomicReferenceFieldUpdater.newUpdater(e.class, Object.class, "owner$volatile");

    /* renamed from: h  reason: collision with root package name */
    private final Function3 f54813h;
    private volatile /* synthetic */ Object owner$volatile;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a implements CancellableContinuation, w1 {

        /* renamed from: d  reason: collision with root package name */
        public final kotlinx.coroutines.e f54814d;

        /* renamed from: e  reason: collision with root package name */
        public final Object f54815e;

        public a(kotlinx.coroutines.e eVar, Object obj) {
            this.f54814d = eVar;
            this.f54815e = obj;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit j(e eVar, a aVar, Throwable th2) {
            eVar.c(aVar.f54815e);
            return Unit.f32056a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit m(e eVar, a aVar, Throwable th2, Unit unit, CoroutineContext coroutineContext) {
            e.w().set(eVar, aVar.f54815e);
            eVar.c(aVar.f54815e);
            return Unit.f32056a;
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public void A(Object obj) {
            this.f54814d.A(obj);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public boolean a() {
            return this.f54814d.a();
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public void c(Function1 function1) {
            this.f54814d.c(function1);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public Object e(Throwable th2) {
            return this.f54814d.e(th2);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public void f(CoroutineDispatcher coroutineDispatcher, Throwable th2) {
            this.f54814d.f(coroutineDispatcher, th2);
        }

        @Override // os.w1
        public void g(b0 b0Var, int i10) {
            this.f54814d.g(b0Var, i10);
        }

        @Override // kotlin.coroutines.Continuation
        public CoroutineContext getContext() {
            return this.f54814d.getContext();
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        public boolean h(Throwable th2) {
            return this.f54814d.h(th2);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        /* renamed from: i */
        public void r(Unit unit, Function3 function3) {
            e.w().set(e.this, this.f54815e);
            kotlinx.coroutines.e eVar = this.f54814d;
            final e eVar2 = e.this;
            eVar.R(unit, new Function1() { // from class: xs.d
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
            return this.f54814d.isCompleted();
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        /* renamed from: k */
        public void t(CoroutineDispatcher coroutineDispatcher, Unit unit) {
            this.f54814d.t(coroutineDispatcher, unit);
        }

        @Override // kotlinx.coroutines.CancellableContinuation
        /* renamed from: l */
        public Object w(Unit unit, Object obj, Function3 function3) {
            final e eVar = e.this;
            Object w10 = this.f54814d.w(unit, obj, new Function3() { // from class: xs.c
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj2, Object obj3, Object obj4) {
                    Unit m10;
                    m10 = e.a.m(e.this, this, (Throwable) obj2, (Unit) obj3, (CoroutineContext) obj4);
                    return m10;
                }
            });
            if (w10 != null) {
                e.w().set(e.this, this.f54815e);
            }
            return w10;
        }

        @Override // kotlin.coroutines.Continuation
        public void resumeWith(Object obj) {
            this.f54814d.resumeWith(obj);
        }
    }

    public e(boolean z10) {
        super(1, z10 ? 1 : 0);
        e0 e0Var;
        if (!z10) {
            e0Var = f.f54817a;
        } else {
            e0Var = null;
        }
        this.owner$volatile = e0Var;
        this.f54813h = new Function3() { // from class: xs.a
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj, Object obj2, Object obj3) {
                Function3 C;
                C = e.C(e.this, (ws.l) obj, obj2, obj3);
                return C;
            }
        };
    }

    static /* synthetic */ Object A(e eVar, Object obj, Continuation continuation) {
        if (eVar.E(obj)) {
            return Unit.f32056a;
        }
        Object B = eVar.B(obj, continuation);
        if (B == wr.b.f()) {
            return B;
        }
        return Unit.f32056a;
    }

    private final Object B(Object obj, Continuation continuation) {
        kotlinx.coroutines.e b10 = os.l.b(wr.b.c(continuation));
        try {
            f(new a(b10, obj));
            Object B = b10.B();
            if (B == wr.b.f()) {
                kotlin.coroutines.jvm.internal.g.c(continuation);
            }
            if (B == wr.b.f()) {
                return B;
            }
            return Unit.f32056a;
        } catch (Throwable th2) {
            b10.P();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Function3 C(final e eVar, ws.l lVar, final Object obj, Object obj2) {
        return new Function3() { // from class: xs.b
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
        return Unit.f32056a;
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
        f54812i.set(this, obj);
        return 0;
    }

    public static final /* synthetic */ AtomicReferenceFieldUpdater w() {
        return f54812i;
    }

    private final int y(Object obj) {
        e0 e0Var;
        while (z()) {
            Object obj2 = f54812i.get(this);
            e0Var = f.f54817a;
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
            Object obj2 = f54812i.get(this);
            e0Var = f.f54817a;
            if (obj2 != e0Var) {
                if (obj2 == obj || obj == null) {
                    AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f54812i;
                    e0Var2 = f.f54817a;
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
        return "Mutex@" + os.e0.b(this) + "[isLocked=" + z() + ",owner=" + f54812i.get(this) + ']';
    }

    public boolean z() {
        if (k() == 0) {
            return true;
        }
        return false;
    }
}
