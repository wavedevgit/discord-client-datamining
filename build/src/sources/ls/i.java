package ls;

import gs.l1;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.CoroutineStackFrame;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends kotlinx.coroutines.m implements CoroutineStackFrame, Continuation {

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f37459s = AtomicReferenceFieldUpdater.newUpdater(i.class, Object.class, "_reusableCancellableContinuation$volatile");
    private volatile /* synthetic */ Object _reusableCancellableContinuation$volatile;

    /* renamed from: o  reason: collision with root package name */
    public final CoroutineDispatcher f37460o;

    /* renamed from: p  reason: collision with root package name */
    public final Continuation f37461p;

    /* renamed from: q  reason: collision with root package name */
    public Object f37462q;

    /* renamed from: r  reason: collision with root package name */
    public final Object f37463r;

    public i(CoroutineDispatcher coroutineDispatcher, Continuation continuation) {
        super(-1);
        this.f37460o = coroutineDispatcher;
        this.f37461p = continuation;
        this.f37462q = j.a();
        this.f37463r = l0.g(getContext());
    }

    private final kotlinx.coroutines.e r() {
        Object obj = f37459s.get(this);
        if (obj instanceof kotlinx.coroutines.e) {
            return (kotlinx.coroutines.e) obj;
        }
        return null;
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f37461p;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return this.f37461p.getContext();
    }

    @Override // kotlinx.coroutines.m
    public Object l() {
        Object obj = this.f37462q;
        this.f37462q = j.a();
        return obj;
    }

    public final void m() {
        do {
        } while (f37459s.get(this) == j.f37465b);
    }

    public final kotlinx.coroutines.e n() {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f37459s;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (obj == null) {
                f37459s.set(this, j.f37465b);
                return null;
            } else if (obj instanceof kotlinx.coroutines.e) {
                if (androidx.concurrent.futures.b.a(f37459s, this, obj, j.f37465b)) {
                    return (kotlinx.coroutines.e) obj;
                }
            } else if (obj != j.f37465b && !(obj instanceof Throwable)) {
                throw new IllegalStateException(("Inconsistent state " + obj).toString());
            }
        }
    }

    public final void o(CoroutineContext coroutineContext, Object obj) {
        this.f37462q = obj;
        this.f36359i = 1;
        this.f37460o.U1(coroutineContext, this);
    }

    @Override // kotlin.coroutines.Continuation
    public void resumeWith(Object obj) {
        Object b10 = gs.t.b(obj);
        if (j.d(this.f37460o, getContext())) {
            this.f37462q = b10;
            this.f36359i = 0;
            j.c(this.f37460o, getContext(), this);
            return;
        }
        gs.p0 b11 = l1.f27177a.b();
        if (b11.r2()) {
            this.f37462q = b10;
            this.f36359i = 0;
            b11.j2(this);
            return;
        }
        b11.p2(true);
        try {
            CoroutineContext context = getContext();
            Object i10 = l0.i(context, this.f37463r);
            this.f37461p.resumeWith(obj);
            Unit unit = Unit.f33298a;
            l0.f(context, i10);
            do {
            } while (b11.u2());
        } finally {
            try {
            } finally {
            }
        }
    }

    public String toString() {
        return "DispatchedContinuation[" + this.f37460o + ", " + gs.e0.c(this.f37461p) + ']';
    }

    public final boolean u() {
        if (f37459s.get(this) != null) {
            return true;
        }
        return false;
    }

    public final boolean v(Throwable th2) {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f37459s;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            e0 e0Var = j.f37465b;
            if (Intrinsics.areEqual(obj, e0Var)) {
                if (androidx.concurrent.futures.b.a(f37459s, this, e0Var, th2)) {
                    return true;
                }
            } else if (obj instanceof Throwable) {
                return true;
            } else {
                if (androidx.concurrent.futures.b.a(f37459s, this, obj, null)) {
                    return false;
                }
            }
        }
    }

    public final void x() {
        m();
        kotlinx.coroutines.e r10 = r();
        if (r10 != null) {
            r10.v();
        }
    }

    public final Throwable y(CancellableContinuation cancellableContinuation) {
        e0 e0Var;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f37459s;
        do {
            Object obj = atomicReferenceFieldUpdater.get(this);
            e0Var = j.f37465b;
            if (obj != e0Var) {
                if (obj instanceof Throwable) {
                    if (androidx.concurrent.futures.b.a(f37459s, this, obj, null)) {
                        return (Throwable) obj;
                    }
                    throw new IllegalArgumentException("Failed requirement.");
                }
                throw new IllegalStateException(("Inconsistent state " + obj).toString());
            }
        } while (!androidx.concurrent.futures.b.a(f37459s, this, e0Var, cancellableContinuation));
        return null;
    }

    @Override // kotlinx.coroutines.m
    public Continuation h() {
        return this;
    }
}
