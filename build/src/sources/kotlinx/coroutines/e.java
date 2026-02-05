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
import ms.e1;
import ms.f1;
import ms.k0;
import ms.n0;
import ms.w1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e extends m implements CancellableContinuation, CoroutineStackFrame, w1 {

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f35027q = AtomicIntegerFieldUpdater.newUpdater(e.class, "_decisionAndIndex$volatile");

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35028r = AtomicReferenceFieldUpdater.newUpdater(e.class, Object.class, "_state$volatile");

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35029s = AtomicReferenceFieldUpdater.newUpdater(e.class, Object.class, "_parentHandle$volatile");
    private volatile /* synthetic */ int _decisionAndIndex$volatile;
    private volatile /* synthetic */ Object _parentHandle$volatile;
    private volatile /* synthetic */ Object _state$volatile;

    /* renamed from: o  reason: collision with root package name */
    private final Continuation f35030o;

    /* renamed from: p  reason: collision with root package name */
    private final CoroutineContext f35031p;

    public e(Continuation continuation, int i10) {
        super(i10);
        this.f35030o = continuation;
        this.f35031p = continuation.getContext();
        this._decisionAndIndex$volatile = 536870911;
        this._state$volatile = b.f35000d;
    }

    private final n0 A() {
        return (n0) f35029s.get(this);
    }

    private final String D() {
        Object C = C();
        if (C instanceof f1) {
            return "Active";
        }
        if (C instanceof ms.m) {
            return "Cancelled";
        }
        return "Completed";
    }

    private final n0 I() {
        Job job = (Job) getContext().k(Job.f34997h);
        if (job == null) {
            return null;
        }
        n0 o10 = z.o(job, false, new f(this), 1, null);
        androidx.concurrent.futures.b.a(f35029s, this, null, o10);
        return o10;
    }

    private final void J(Object obj) {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35028r;
        while (true) {
            Object obj2 = atomicReferenceFieldUpdater.get(this);
            if (obj2 instanceof b) {
                if (androidx.concurrent.futures.b.a(f35028r, this, obj2, obj)) {
                    return;
                }
            } else if (!(obj2 instanceof d) && !(obj2 instanceof rs.b0)) {
                if (obj2 instanceof ms.r) {
                    ms.r rVar = (ms.r) obj2;
                    if (!rVar.c()) {
                        M(obj, obj2);
                    }
                    if (obj2 instanceof ms.m) {
                        Throwable th2 = rVar.f38943a;
                        if (obj instanceof d) {
                            o((d) obj, th2);
                            return;
                        }
                        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.internal.Segment<*>");
                        s((rs.b0) obj, th2);
                        return;
                    }
                    return;
                } else if (obj2 instanceof h) {
                    h hVar = (h) obj2;
                    if (hVar.f35039b != null) {
                        M(obj, obj2);
                    }
                    if (obj instanceof rs.b0) {
                        return;
                    }
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.CancelHandler");
                    d dVar = (d) obj;
                    if (hVar.c()) {
                        o(dVar, hVar.f35042e);
                        return;
                    }
                    if (androidx.concurrent.futures.b.a(f35028r, this, obj2, h.b(hVar, null, dVar, null, null, null, 29, null))) {
                        return;
                    }
                } else if (obj instanceof rs.b0) {
                    return;
                } else {
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.CancelHandler");
                    if (androidx.concurrent.futures.b.a(f35028r, this, obj2, new h(obj2, (d) obj, null, null, null, 28, null))) {
                        return;
                    }
                }
            } else {
                M(obj, obj2);
            }
        }
    }

    private final boolean L() {
        if (k0.c(this.f35049i)) {
            Continuation continuation = this.f35030o;
            Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<*>");
            if (((rs.i) continuation).t()) {
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
        return Unit.f31988a;
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
        if (obj instanceof ms.r) {
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
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f35027q;
        do {
            i10 = atomicIntegerFieldUpdater.get(this);
            int i11 = i10 >> 29;
            if (i11 != 0) {
                if (i11 == 1) {
                    return false;
                }
                throw new IllegalStateException("Already resumed");
            }
        } while (!f35027q.compareAndSet(this, i10, 1073741824 + (536870911 & i10)));
        return true;
    }

    private final rs.e0 X(Object obj, Object obj2, Function3 function3) {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35028r;
        while (true) {
            Object obj3 = atomicReferenceFieldUpdater.get(this);
            if (obj3 instanceof f1) {
                Object obj4 = obj;
                Object obj5 = obj2;
                Function3 function32 = function3;
                if (androidx.concurrent.futures.b.a(f35028r, this, obj3, V((f1) obj3, obj4, this.f35049i, function32, obj5))) {
                    w();
                    return ms.k.f38924a;
                }
                obj = obj4;
                function3 = function32;
                obj2 = obj5;
            } else {
                Object obj6 = obj2;
                if (!(obj3 instanceof h) || obj6 == null || ((h) obj3).f35041d != obj6) {
                    return null;
                }
                return ms.k.f38924a;
            }
        }
    }

    private final boolean Y() {
        int i10;
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f35027q;
        do {
            i10 = atomicIntegerFieldUpdater.get(this);
            int i11 = i10 >> 29;
            if (i11 != 0) {
                if (i11 == 2) {
                    return false;
                }
                throw new IllegalStateException("Already suspended");
            }
        } while (!f35027q.compareAndSet(this, i10, 536870912 + (536870911 & i10)));
        return true;
    }

    private final Void n(Object obj) {
        throw new IllegalStateException(("Already resumed, but proposed with update " + obj).toString());
    }

    private final void s(rs.b0 b0Var, Throwable th2) {
        int i10 = f35027q.get(this) & 536870911;
        if (i10 != 536870911) {
            try {
                b0Var.s(i10, th2, getContext());
                return;
            } catch (Throwable th3) {
                CoroutineContext context = getContext();
                ms.a0.a(context, new ms.s("Exception in invokeOnCancellation handler for " + this, th3));
                return;
            }
        }
        throw new IllegalStateException("The index for Segment.onCancellation(..) is broken");
    }

    private final boolean t(Throwable th2) {
        if (!L()) {
            return false;
        }
        Continuation continuation = this.f35030o;
        Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<*>");
        return ((rs.i) continuation).v(th2);
    }

    private final void w() {
        if (!L()) {
            v();
        }
    }

    private final void y(int i10) {
        if (W()) {
            return;
        }
        k0.a(this, i10);
    }

    public final Object B() {
        Job job;
        boolean L = L();
        if (Y()) {
            if (A() == null) {
                I();
            }
            if (L) {
                P();
            }
            return ur.b.f();
        }
        if (L) {
            P();
        }
        Object C = C();
        if (!(C instanceof ms.r)) {
            if (k0.b(this.f35049i) && (job = (Job) getContext().k(Job.f34997h)) != null && !job.a()) {
                CancellationException N = job.N();
                b(C, N);
                throw N;
            }
            return j(C);
        }
        throw ((ms.r) C).f38943a;
    }

    public final Object C() {
        return f35028r.get(this);
    }

    public void H() {
        n0 I = I();
        if (I != null && isCompleted()) {
            I.dispose();
            f35029s.set(this, e1.f38918d);
        }
    }

    public final void K(d dVar) {
        J(dVar);
    }

    protected String N() {
        return "CancellableContinuation";
    }

    public final void O(Throwable th2) {
        if (t(th2)) {
            return;
        }
        g(th2);
        w();
    }

    public final void P() {
        rs.i iVar;
        Throwable y10;
        Continuation continuation = this.f35030o;
        if (continuation instanceof rs.i) {
            iVar = (rs.i) continuation;
        } else {
            iVar = null;
        }
        if (iVar != null && (y10 = iVar.y(this)) != null) {
            v();
            g(y10);
        }
    }

    public final boolean Q() {
        Object obj = f35028r.get(this);
        if ((obj instanceof h) && ((h) obj).f35041d != null) {
            v();
            return false;
        }
        f35027q.set(this, 536870911);
        f35028r.set(this, b.f35000d);
        return true;
    }

    public void R(Object obj, final Function1 function1) {
        Function3 function3;
        int i10 = this.f35049i;
        if (function1 != null) {
            function3 = new Function3() { // from class: ms.j
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
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35028r;
        while (true) {
            Object obj2 = atomicReferenceFieldUpdater.get(this);
            if (obj2 instanceof f1) {
                Object obj3 = obj;
                int i11 = i10;
                Function3 function32 = function3;
                if (androidx.concurrent.futures.b.a(f35028r, this, obj2, V((f1) obj2, obj3, i11, function32, null))) {
                    w();
                    y(i11);
                    return;
                }
                obj = obj3;
                i10 = i11;
                function3 = function32;
            } else {
                Object obj4 = obj;
                Function3 function33 = function3;
                if (obj2 instanceof ms.m) {
                    ms.m mVar = (ms.m) obj2;
                    if (mVar.e()) {
                        if (function33 != null) {
                            p(function33, mVar.f38943a, obj4);
                            return;
                        }
                        return;
                    }
                }
                n(obj4);
                throw new or.h();
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
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35028r;
        while (true) {
            Object obj2 = atomicReferenceFieldUpdater.get(this);
            if (!(obj2 instanceof f1)) {
                if (!(obj2 instanceof ms.r)) {
                    if (obj2 instanceof h) {
                        h hVar = (h) obj2;
                        if (!hVar.c()) {
                            Throwable th4 = th2;
                            th3 = th4;
                            if (androidx.concurrent.futures.b.a(f35028r, this, obj2, h.b(hVar, null, null, null, null, th4, 15, null))) {
                                hVar.d(this, th3);
                                return;
                            }
                        } else {
                            throw new IllegalStateException("Must be called at most once");
                        }
                    } else {
                        th3 = th2;
                        if (androidx.concurrent.futures.b.a(f35028r, this, obj2, new h(obj2, null, null, null, th3, 14, null))) {
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
        ms.l.c(this, new d.a(function1));
    }

    @Override // ms.w1
    public void d(rs.b0 b0Var, int i10) {
        int i11;
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f35027q;
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
        return X(new ms.r(th2, false, 2, null), null, null);
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public void f(CoroutineDispatcher coroutineDispatcher, Throwable th2) {
        rs.i iVar;
        int i10;
        Continuation continuation = this.f35030o;
        CoroutineDispatcher coroutineDispatcher2 = null;
        if (continuation instanceof rs.i) {
            iVar = (rs.i) continuation;
        } else {
            iVar = null;
        }
        ms.r rVar = new ms.r(th2, false, 2, null);
        if (iVar != null) {
            coroutineDispatcher2 = iVar.f48964o;
        }
        if (coroutineDispatcher2 == coroutineDispatcher) {
            i10 = 4;
        } else {
            i10 = this.f35049i;
        }
        U(this, rVar, i10, null, 4, null);
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public boolean g(Throwable th2) {
        Object obj;
        boolean z10;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35028r;
        do {
            obj = atomicReferenceFieldUpdater.get(this);
            z10 = false;
            if (!(obj instanceof f1)) {
                return false;
            }
            if ((obj instanceof d) || (obj instanceof rs.b0)) {
                z10 = true;
            }
        } while (!androidx.concurrent.futures.b.a(f35028r, this, obj, new ms.m(this, th2, z10)));
        f1 f1Var = (f1) obj;
        if (f1Var instanceof d) {
            o((d) obj, th2);
        } else if (f1Var instanceof rs.b0) {
            s((rs.b0) obj, th2);
        }
        w();
        y(this.f35049i);
        return true;
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f35030o;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return this.f35031p;
    }

    @Override // kotlinx.coroutines.m
    public final Continuation h() {
        return this.f35030o;
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
            return ((h) obj).f35038a;
        }
        return obj;
    }

    @Override // kotlinx.coroutines.m
    public Object l() {
        return C();
    }

    public final void o(d dVar, Throwable th2) {
        try {
            dVar.c(th2);
        } catch (Throwable th3) {
            CoroutineContext context = getContext();
            ms.a0.a(context, new ms.s("Exception in invokeOnCancellation handler for " + this, th3));
        }
    }

    public final void p(Function3 function3, Throwable th2, Object obj) {
        try {
            function3.invoke(th2, obj, getContext());
        } catch (Throwable th3) {
            CoroutineContext context = getContext();
            ms.a0.a(context, new ms.s("Exception in resume onCancellation handler for " + this, th3));
        }
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public void q(Object obj, Function3 function3) {
        T(obj, this.f35049i, function3);
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public void r(CoroutineDispatcher coroutineDispatcher, Object obj) {
        rs.i iVar;
        int i10;
        Continuation continuation = this.f35030o;
        CoroutineDispatcher coroutineDispatcher2 = null;
        if (continuation instanceof rs.i) {
            iVar = (rs.i) continuation;
        } else {
            iVar = null;
        }
        if (iVar != null) {
            coroutineDispatcher2 = iVar.f48964o;
        }
        if (coroutineDispatcher2 == coroutineDispatcher) {
            i10 = 4;
        } else {
            i10 = this.f35049i;
        }
        U(this, obj, i10, null, 4, null);
    }

    @Override // kotlin.coroutines.Continuation
    public void resumeWith(Object obj) {
        U(this, ms.t.c(obj, this), this.f35049i, null, 4, null);
    }

    public String toString() {
        return N() + '(' + ms.e0.c(this.f35030o) + "){" + D() + "}@" + ms.e0.b(this);
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public Object u(Object obj, Object obj2, Function3 function3) {
        return X(obj, obj2, function3);
    }

    public final void v() {
        n0 A = A();
        if (A == null) {
            return;
        }
        A.dispose();
        f35029s.set(this, e1.f38918d);
    }

    @Override // kotlinx.coroutines.CancellableContinuation
    public void x(Object obj) {
        y(this.f35049i);
    }

    public Throwable z(Job job) {
        return job.N();
    }
}
