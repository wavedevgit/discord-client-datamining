package kotlinx.coroutines;

import java.util.concurrent.CancellationException;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.CoroutineStackFrame;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.d;
import ps.e1;
import ps.f1;
import ps.k0;
import ps.n0;
import ps.w1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e extends m implements CancellableContinuation, CoroutineStackFrame, w1 {

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f34804q = AtomicIntegerFieldUpdater.newUpdater(e.class, "_decisionAndIndex$volatile");

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f34805r = AtomicReferenceFieldUpdater.newUpdater(e.class, Object.class, "_state$volatile");

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f34806s = AtomicReferenceFieldUpdater.newUpdater(e.class, Object.class, "_parentHandle$volatile");
    private volatile /* synthetic */ int _decisionAndIndex$volatile;
    private volatile /* synthetic */ Object _parentHandle$volatile;
    private volatile /* synthetic */ Object _state$volatile;

    /* renamed from: o  reason: collision with root package name */
    private final Continuation f34807o;

    /* renamed from: p  reason: collision with root package name */
    private final CoroutineContext f34808p;

    public e(Continuation continuation, int i10) {
        super(i10);
        this.f34807o = continuation;
        this.f34808p = continuation.getContext();
        this._decisionAndIndex$volatile = 536870911;
        this._state$volatile = b.f34777d;
    }

    private final String D() {
        Object C = C();
        if (C instanceof f1) {
            return "Active";
        }
        if (C instanceof ps.m) {
            return "Cancelled";
        }
        return "Completed";
    }

    private final n0 I() {
        Job job = (Job) getContext().m(Job.f34774h);
        if (job == null) {
            return null;
        }
        n0 o10 = z.o(job, false, new f(this), 1, null);
        androidx.concurrent.futures.b.a(f34806s, this, null, o10);
        return o10;
    }

    private final void J(Object obj) {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f34805r;
        while (true) {
            Object obj2 = atomicReferenceFieldUpdater.get(this);
            if (obj2 instanceof b) {
                if (androidx.concurrent.futures.b.a(f34805r, this, obj2, obj)) {
                    return;
                }
            } else if (!(obj2 instanceof d) && !(obj2 instanceof us.b0)) {
                if (obj2 instanceof ps.r) {
                    ps.r rVar = (ps.r) obj2;
                    if (!rVar.c()) {
                        M(obj, obj2);
                    }
                    if (obj2 instanceof ps.m) {
                        Throwable th2 = rVar.f44530a;
                        if (obj instanceof d) {
                            o((d) obj, th2);
                            return;
                        }
                        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.internal.Segment<*>");
                        q((us.b0) obj, th2);
                        return;
                    }
                    return;
                } else if (obj2 instanceof h) {
                    h hVar = (h) obj2;
                    if (hVar.f34816b != null) {
                        M(obj, obj2);
                    }
                    if (obj instanceof us.b0) {
                        return;
                    }
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.CancelHandler");
                    d dVar = (d) obj;
                    if (hVar.c()) {
                        o(dVar, hVar.f34819e);
                        return;
                    }
                    if (androidx.concurrent.futures.b.a(f34805r, this, obj2, h.b(hVar, null, dVar, null, null, null, 29, null))) {
                        return;
                    }
                } else if (obj instanceof us.b0) {
                    return;
                } else {
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.CancelHandler");
                    if (androidx.concurrent.futures.b.a(f34805r, this, obj2, new h(obj2, (d) obj, null, null, null, 28, null))) {
                        return;
                    }
                }
            } else {
                M(obj, obj2);
            }
        }
    }

    private final boolean L() {
        if (k0.c(this.f34826i)) {
            Continuation continuation = this.f34807o;
            Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<*>");
            if (((us.i) continuation).s()) {
                return true;
            }
            return false;
        }
        return false;
    }

    private final void M(Object obj, Object obj2) {
        throw new IllegalStateException(("It's prohibited to register multiple handlers, tried to register " + obj + ", already has " + obj2).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S(Function1 function1, Throwable th2, Object obj, CoroutineContext coroutineContext) {
        function1.invoke(th2);
        return Unit.f31765a;
    }

    public static /* synthetic */ void U(e eVar, Object obj, int i10, Function3 function3, int i11, Object obj2) {
        if (obj2 == null) {
            if ((i11 & 4) != 0) {
                function3 = null;
            }
            eVar.T(obj, i10, function3);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: resumeImpl");
    }

    private final Object V(f1 f1Var, Object obj, int i10, Function3 function3, Object obj2) {
        d dVar;
        if (obj instanceof ps.r) {
            return obj;
        }
        if ((!k0.b(i10) && obj2 == null) || (function3 == null && !(f1Var instanceof d) && obj2 == null)) {
            return obj;
        }
        if (f1Var instanceof d) {
            dVar = (d) f1Var;
        } else {
            dVar = null;
        }
        return new h(obj, dVar, function3, obj2, null, 16, null);
    }

    private final boolean W() {
        int i10;
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f34804q;
        do {
            i10 = atomicIntegerFieldUpdater.get(this);
            int i11 = i10 >> 29;
            if (i11 != 0) {
                if (i11 == 1) {
                    return false;
                }
                throw new IllegalStateException("Already resumed");
            }
        } while (!f34804q.compareAndSet(this, i10, 1073741824 + (536870911 & i10)));
        return true;
    }

    private final us.e0 X(Object obj, Object obj2, Function3 function3) {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f34805r;
        while (true) {
            Object obj3 = atomicReferenceFieldUpdater.get(this);
            if (obj3 instanceof f1) {
                Object obj4 = obj;
                Object obj5 = obj2;
                Function3 function32 = function3;
                if (androidx.concurrent.futures.b.a(f34805r, this, obj3, V((f1) obj3, obj4, this.f34826i, function32, obj5))) {
                    v();
                    return ps.k.f44511a;
                }
                obj = obj4;
                function3 = function32;
                obj2 = obj5;
            } else {
                Object obj6 = obj2;
                if (!(obj3 instanceof h) || obj6 == null || ((h) obj3).f34818d != obj6) {
                    return null;
                }
                return ps.k.f44511a;
            }
        }
    }

    private final boolean Y() {
        int i10;
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f34804q;
        do {
            i10 = atomicIntegerFieldUpdater.get(this);
            int i11 = i10 >> 29;
            if (i11 != 0) {
                if (i11 == 2) {
                    return false;
                }
                throw new IllegalStateException("Already suspended");
            }
        } while (!f34804q.compareAndSet(this, i10, 536870912 + (536870911 & i10)));
        return true;
    }

    private final Void n(Object obj) {
        throw new IllegalStateException(("Already resumed, but proposed with update " + obj).toString());
    }

    private final void q(us.b0 b0Var, Throwable th2) {
        int i10 = f34804q.get(this) & 536870911;
        if (i10 != 536870911) {
            try {
                b0Var.s(i10, th2, getContext());
                return;
            } catch (Throwable th3) {
                CoroutineContext context = getContext();
                ps.a0.a(context, new ps.s("Exception in invokeOnCancellation handler for " + this, th3));
                return;
            }
        }
        throw new IllegalStateException("The index for Segment.onCancellation(..) is broken");
    }

    private final boolean s(Throwable th2) {
        if (!L()) {
            return false;
        }
        Continuation continuation = this.f34807o;
        Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<*>");
        return ((us.i) continuation).u(th2);
    }

    private final void v() {
        if (!L()) {
            u();
        }
    }

    private final void x(int i10) {
        if (W()) {
            return;
        }
        k0.a(this, i10);
    }

    private final n0 z() {
        return (n0) f34806s.get(this);
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public void A(Object obj) {
        x(this.f34826i);
    }

    public final Object B() {
        Job job;
        boolean L = L();
        if (Y()) {
            if (z() == null) {
                I();
            }
            if (L) {
                P();
            }
            return xr.b.f();
        }
        if (L) {
            P();
        }
        Object C = C();
        if (!(C instanceof ps.r)) {
            if (k0.b(this.f34826i) && (job = (Job) getContext().m(Job.f34774h)) != null && !job.a()) {
                CancellationException C2 = job.C();
                b(C, C2);
                throw C2;
            }
            return j(C);
        }
        throw ((ps.r) C).f44530a;
    }

    public final Object C() {
        return f34805r.get(this);
    }

    public void H() {
        n0 I = I();
        if (I != null && isCompleted()) {
            I.dispose();
            f34806s.set(this, e1.f44505d);
        }
    }

    public final void K(d dVar) {
        J(dVar);
    }

    protected String N() {
        return "CancellableContinuation";
    }

    public final void O(Throwable th2) {
        if (s(th2)) {
            return;
        }
        h(th2);
        v();
    }

    public final void P() {
        us.i iVar;
        Throwable x10;
        Continuation continuation = this.f34807o;
        if (continuation instanceof us.i) {
            iVar = (us.i) continuation;
        } else {
            iVar = null;
        }
        if (iVar != null && (x10 = iVar.x(this)) != null) {
            u();
            h(x10);
        }
    }

    public final boolean Q() {
        Object obj = f34805r.get(this);
        if ((obj instanceof h) && ((h) obj).f34818d != null) {
            u();
            return false;
        }
        f34804q.set(this, 536870911);
        f34805r.set(this, b.f34777d);
        return true;
    }

    public void R(Object obj, final Function1 function1) {
        Function3 function3;
        int i10 = this.f34826i;
        if (function1 != null) {
            function3 = new Function3() { // from class: ps.j
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj2, Object obj3, Object obj4) {
                    Unit S;
                    S = kotlinx.coroutines.e.S(Function1.this, (Throwable) obj2, obj3, (CoroutineContext) obj4);
                    return S;
                }
            };
        } else {
            function3 = null;
        }
        T(obj, i10, function3);
    }

    public final void T(Object obj, int i10, Function3 function3) {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f34805r;
        while (true) {
            Object obj2 = atomicReferenceFieldUpdater.get(this);
            if (obj2 instanceof f1) {
                Object obj3 = obj;
                int i11 = i10;
                Function3 function32 = function3;
                if (androidx.concurrent.futures.b.a(f34805r, this, obj2, V((f1) obj2, obj3, i11, function32, null))) {
                    v();
                    x(i11);
                    return;
                }
                obj = obj3;
                i10 = i11;
                function3 = function32;
            } else {
                Object obj4 = obj;
                Function3 function33 = function3;
                if (obj2 instanceof ps.m) {
                    ps.m mVar = (ps.m) obj2;
                    if (mVar.e()) {
                        if (function33 != null) {
                            p(function33, mVar.f44530a, obj4);
                            return;
                        }
                        return;
                    }
                }
                n(obj4);
                throw new rr.h();
            }
        }
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public boolean a() {
        return C() instanceof f1;
    }

    @Override // kotlinx.coroutines.m
    public void b(Object obj, Throwable th2) {
        Throwable th3;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f34805r;
        while (true) {
            Object obj2 = atomicReferenceFieldUpdater.get(this);
            if (!(obj2 instanceof f1)) {
                if (!(obj2 instanceof ps.r)) {
                    if (obj2 instanceof h) {
                        h hVar = (h) obj2;
                        if (!hVar.c()) {
                            Throwable th4 = th2;
                            th3 = th4;
                            if (androidx.concurrent.futures.b.a(f34805r, this, obj2, h.b(hVar, null, null, null, null, th4, 15, null))) {
                                hVar.d(this, th3);
                                return;
                            }
                        } else {
                            throw new IllegalStateException("Must be called at most once");
                        }
                    } else {
                        th3 = th2;
                        if (androidx.concurrent.futures.b.a(f34805r, this, obj2, new h(obj2, null, null, null, th3, 14, null))) {
                            return;
                        }
                    }
                    th2 = th3;
                } else {
                    return;
                }
            } else {
                throw new IllegalStateException("Not completed");
            }
        }
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public void c(Function1 function1) {
        ps.l.c(this, new d.a(function1));
    }

    @Override // ps.w1
    public void d(us.b0 b0Var, int i10) {
        int i11;
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f34804q;
        do {
            i11 = atomicIntegerFieldUpdater.get(this);
            if ((i11 & 536870911) != 536870911) {
                throw new IllegalStateException("invokeOnCancellation should be called at most once");
            }
        } while (!atomicIntegerFieldUpdater.compareAndSet(this, i11, ((i11 >> 29) << 29) + i10));
        J(b0Var);
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public Object e(Throwable th2) {
        return X(new ps.r(th2, false, 2, null), null, null);
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public void f(CoroutineDispatcher coroutineDispatcher, Throwable th2) {
        us.i iVar;
        int i10;
        Continuation continuation = this.f34807o;
        CoroutineDispatcher coroutineDispatcher2 = null;
        if (continuation instanceof us.i) {
            iVar = (us.i) continuation;
        } else {
            iVar = null;
        }
        ps.r rVar = new ps.r(th2, false, 2, null);
        if (iVar != null) {
            coroutineDispatcher2 = iVar.f51780o;
        }
        if (coroutineDispatcher2 == coroutineDispatcher) {
            i10 = 4;
        } else {
            i10 = this.f34826i;
        }
        U(this, rVar, i10, null, 4, null);
    }

    @Override // kotlinx.coroutines.m
    public final Continuation g() {
        return this.f34807o;
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f34807o;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return this.f34808p;
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public boolean h(Throwable th2) {
        Object obj;
        boolean z10;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f34805r;
        do {
            obj = atomicReferenceFieldUpdater.get(this);
            z10 = false;
            if (!(obj instanceof f1)) {
                return false;
            }
            if ((obj instanceof d) || (obj instanceof us.b0)) {
                z10 = true;
            }
        } while (!androidx.concurrent.futures.b.a(f34805r, this, obj, new ps.m(this, th2, z10)));
        f1 f1Var = (f1) obj;
        if (f1Var instanceof d) {
            o((d) obj, th2);
        } else if (f1Var instanceof us.b0) {
            q((us.b0) obj, th2);
        }
        v();
        x(this.f34826i);
        return true;
    }

    @Override // kotlinx.coroutines.m
    public Throwable i(Object obj) {
        Throwable i10 = super.i(obj);
        if (i10 != null) {
            return i10;
        }
        return null;
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public boolean isCompleted() {
        return !(C() instanceof f1);
    }

    @Override // kotlinx.coroutines.m
    public Object j(Object obj) {
        if (obj instanceof h) {
            return ((h) obj).f34815a;
        }
        return obj;
    }

    @Override // kotlinx.coroutines.m
    public Object l() {
        return C();
    }

    public final void o(d dVar, Throwable th2) {
        try {
            dVar.b(th2);
        } catch (Throwable th3) {
            CoroutineContext context = getContext();
            ps.a0.a(context, new ps.s("Exception in invokeOnCancellation handler for " + this, th3));
        }
    }

    public final void p(Function3 function3, Throwable th2, Object obj) {
        try {
            function3.invoke(th2, obj, getContext());
        } catch (Throwable th3) {
            CoroutineContext context = getContext();
            ps.a0.a(context, new ps.s("Exception in resume onCancellation handler for " + this, th3));
        }
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public void r(Object obj, Function3 function3) {
        T(obj, this.f34826i, function3);
    }

    @Override // kotlin.coroutines.Continuation
    public void resumeWith(Object obj) {
        U(this, ps.t.c(obj, this), this.f34826i, null, 4, null);
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public void t(CoroutineDispatcher coroutineDispatcher, Object obj) {
        us.i iVar;
        int i10;
        Continuation continuation = this.f34807o;
        CoroutineDispatcher coroutineDispatcher2 = null;
        if (continuation instanceof us.i) {
            iVar = (us.i) continuation;
        } else {
            iVar = null;
        }
        if (iVar != null) {
            coroutineDispatcher2 = iVar.f51780o;
        }
        if (coroutineDispatcher2 == coroutineDispatcher) {
            i10 = 4;
        } else {
            i10 = this.f34826i;
        }
        U(this, obj, i10, null, 4, null);
    }

    public String toString() {
        return N() + '(' + ps.e0.c(this.f34807o) + "){" + D() + "}@" + ps.e0.b(this);
    }

    public final void u() {
        n0 z10 = z();
        if (z10 == null) {
            return;
        }
        z10.dispose();
        f34806s.set(this, e1.f44505d);
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public Object w(Object obj, Object obj2, Function3 function3) {
        return X(obj, obj2, function3);
    }

    public Throwable y(Job job) {
        return job.C();
    }
}
