package dt;

import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.CoroutineStackFrame;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
import ys.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends kotlinx.coroutines.m implements CoroutineStackFrame, Continuation {

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f21881s = AtomicReferenceFieldUpdater.newUpdater(i.class, Object.class, "_reusableCancellableContinuation$volatile");
    private volatile /* synthetic */ Object _reusableCancellableContinuation$volatile;

    /* renamed from: o  reason: collision with root package name */
    public final CoroutineDispatcher f21882o;

    /* renamed from: p  reason: collision with root package name */
    public final Continuation f21883p;

    /* renamed from: q  reason: collision with root package name */
    public Object f21884q;

    /* renamed from: r  reason: collision with root package name */
    public final Object f21885r;

    public i(CoroutineDispatcher coroutineDispatcher, Continuation continuation) {
        super(-1);
        this.f21882o = coroutineDispatcher;
        this.f21883p = continuation;
        this.f21884q = j.a();
        this.f21885r = l0.g(getContext());
    }

    private final kotlinx.coroutines.e p() {
        Object obj = f21881s.get(this);
        if (obj instanceof kotlinx.coroutines.e) {
            return (kotlinx.coroutines.e) obj;
        }
        return null;
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f21883p;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return this.f21883p.getContext();
    }

    @Override // kotlinx.coroutines.m
    public Object l() {
        Object obj = this.f21884q;
        this.f21884q = j.a();
        return obj;
    }

    public final void m() {
        do {
        } while (f21881s.get(this) == j.f21887b);
    }

    public final kotlinx.coroutines.e n() {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f21881s;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (obj == null) {
                f21881s.set(this, j.f21887b);
                return null;
            } else if (obj instanceof kotlinx.coroutines.e) {
                if (androidx.concurrent.futures.b.a(f21881s, this, obj, j.f21887b)) {
                    return (kotlinx.coroutines.e) obj;
                }
            } else if (obj != j.f21887b && !(obj instanceof Throwable)) {
                throw new IllegalStateException(("Inconsistent state " + obj).toString());
            }
        }
    }

    public final void o(CoroutineContext coroutineContext, Object obj) {
        this.f21884q = obj;
        this.f35048i = 1;
        this.f21882o.w1(coroutineContext, this);
    }

    @Override // kotlin.coroutines.Continuation
    public void resumeWith(Object obj) {
        Object b10 = ys.t.b(obj);
        if (j.d(this.f21882o, getContext())) {
            this.f21884q = b10;
            this.f35048i = 0;
            j.c(this.f21882o, getContext(), this);
            return;
        }
        ys.p0 b11 = l1.f55799a.b();
        if (b11.m2()) {
            this.f21884q = b10;
            this.f35048i = 0;
            b11.c2(this);
            return;
        }
        b11.g2(true);
        try {
            CoroutineContext context = getContext();
            Object i10 = l0.i(context, this.f21885r);
            this.f21883p.resumeWith(obj);
            Unit unit = Unit.f31987a;
            l0.f(context, i10);
            do {
            } while (b11.u2());
        } finally {
            try {
            } finally {
            }
        }
    }

    public final boolean s() {
        if (f21881s.get(this) != null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "DispatchedContinuation[" + this.f21882o + ", " + ys.e0.c(this.f21883p) + ']';
    }

    public final boolean u(Throwable th2) {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f21881s;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            e0 e0Var = j.f21887b;
            if (Intrinsics.areEqual(obj, e0Var)) {
                if (androidx.concurrent.futures.b.a(f21881s, this, e0Var, th2)) {
                    return true;
                }
            } else if (obj instanceof Throwable) {
                return true;
            } else {
                if (androidx.concurrent.futures.b.a(f21881s, this, obj, null)) {
                    return false;
                }
            }
        }
    }

    public final void v() {
        m();
        kotlinx.coroutines.e p10 = p();
        if (p10 != null) {
            p10.u();
        }
    }

    public final Throwable x(CancellableContinuation cancellableContinuation) {
        e0 e0Var;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f21881s;
        do {
            Object obj = atomicReferenceFieldUpdater.get(this);
            e0Var = j.f21887b;
            if (obj != e0Var) {
                if (obj instanceof Throwable) {
                    if (androidx.concurrent.futures.b.a(f21881s, this, obj, null)) {
                        return (Throwable) obj;
                    }
                    throw new IllegalArgumentException("Failed requirement.");
                }
                throw new IllegalStateException(("Inconsistent state " + obj).toString());
            }
        } while (!androidx.concurrent.futures.b.a(f21881s, this, e0Var, cancellableContinuation));
        return null;
    }

    @Override // kotlinx.coroutines.m
    public Continuation h() {
        return this;
    }
}
