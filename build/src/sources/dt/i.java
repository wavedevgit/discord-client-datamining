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
    private static final /* synthetic */ AtomicReferenceFieldUpdater f21882s = AtomicReferenceFieldUpdater.newUpdater(i.class, Object.class, "_reusableCancellableContinuation$volatile");
    private volatile /* synthetic */ Object _reusableCancellableContinuation$volatile;

    /* renamed from: o  reason: collision with root package name */
    public final CoroutineDispatcher f21883o;

    /* renamed from: p  reason: collision with root package name */
    public final Continuation f21884p;

    /* renamed from: q  reason: collision with root package name */
    public Object f21885q;

    /* renamed from: r  reason: collision with root package name */
    public final Object f21886r;

    public i(CoroutineDispatcher coroutineDispatcher, Continuation continuation) {
        super(-1);
        this.f21883o = coroutineDispatcher;
        this.f21884p = continuation;
        this.f21885q = j.a();
        this.f21886r = l0.g(getContext());
    }

    private final kotlinx.coroutines.e p() {
        Object obj = f21882s.get(this);
        if (obj instanceof kotlinx.coroutines.e) {
            return (kotlinx.coroutines.e) obj;
        }
        return null;
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f21884p;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return this.f21884p.getContext();
    }

    @Override // kotlinx.coroutines.m
    public Object l() {
        Object obj = this.f21885q;
        this.f21885q = j.a();
        return obj;
    }

    public final void m() {
        do {
        } while (f21882s.get(this) == j.f21888b);
    }

    public final kotlinx.coroutines.e n() {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f21882s;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (obj == null) {
                f21882s.set(this, j.f21888b);
                return null;
            } else if (obj instanceof kotlinx.coroutines.e) {
                if (androidx.concurrent.futures.b.a(f21882s, this, obj, j.f21888b)) {
                    return (kotlinx.coroutines.e) obj;
                }
            } else if (obj != j.f21888b && !(obj instanceof Throwable)) {
                throw new IllegalStateException(("Inconsistent state " + obj).toString());
            }
        }
    }

    public final void o(CoroutineContext coroutineContext, Object obj) {
        this.f21885q = obj;
        this.f35617i = 1;
        this.f21883o.w1(coroutineContext, this);
    }

    @Override // kotlin.coroutines.Continuation
    public void resumeWith(Object obj) {
        Object b10 = ys.t.b(obj);
        if (j.d(this.f21883o, getContext())) {
            this.f21885q = b10;
            this.f35617i = 0;
            j.c(this.f21883o, getContext(), this);
            return;
        }
        ys.p0 b11 = l1.f56368a.b();
        if (b11.m2()) {
            this.f21885q = b10;
            this.f35617i = 0;
            b11.c2(this);
            return;
        }
        b11.g2(true);
        try {
            CoroutineContext context = getContext();
            Object i10 = l0.i(context, this.f21886r);
            this.f21884p.resumeWith(obj);
            Unit unit = Unit.f32556a;
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
        if (f21882s.get(this) != null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "DispatchedContinuation[" + this.f21883o + ", " + ys.e0.c(this.f21884p) + ']';
    }

    public final boolean u(Throwable th2) {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f21882s;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            e0 e0Var = j.f21888b;
            if (Intrinsics.areEqual(obj, e0Var)) {
                if (androidx.concurrent.futures.b.a(f21882s, this, e0Var, th2)) {
                    return true;
                }
            } else if (obj instanceof Throwable) {
                return true;
            } else {
                if (androidx.concurrent.futures.b.a(f21882s, this, obj, null)) {
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
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f21882s;
        do {
            Object obj = atomicReferenceFieldUpdater.get(this);
            e0Var = j.f21888b;
            if (obj != e0Var) {
                if (obj instanceof Throwable) {
                    if (androidx.concurrent.futures.b.a(f21882s, this, obj, null)) {
                        return (Throwable) obj;
                    }
                    throw new IllegalArgumentException("Failed requirement.");
                }
                throw new IllegalStateException(("Inconsistent state " + obj).toString());
            }
        } while (!androidx.concurrent.futures.b.a(f21882s, this, e0Var, cancellableContinuation));
        return null;
    }

    @Override // kotlinx.coroutines.m
    public Continuation h() {
        return this;
    }
}
