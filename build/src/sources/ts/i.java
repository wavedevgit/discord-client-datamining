package ts;

import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.CoroutineStackFrame;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
import os.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends kotlinx.coroutines.m implements CoroutineStackFrame, Continuation {

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f50874s = AtomicReferenceFieldUpdater.newUpdater(i.class, Object.class, "_reusableCancellableContinuation$volatile");
    private volatile /* synthetic */ Object _reusableCancellableContinuation$volatile;

    /* renamed from: o  reason: collision with root package name */
    public final CoroutineDispatcher f50875o;

    /* renamed from: p  reason: collision with root package name */
    public final Continuation f50876p;

    /* renamed from: q  reason: collision with root package name */
    public Object f50877q;

    /* renamed from: r  reason: collision with root package name */
    public final Object f50878r;

    public i(CoroutineDispatcher coroutineDispatcher, Continuation continuation) {
        super(-1);
        this.f50875o = coroutineDispatcher;
        this.f50876p = continuation;
        this.f50877q = j.a();
        this.f50878r = l0.g(getContext());
    }

    private final kotlinx.coroutines.e p() {
        Object obj = f50874s.get(this);
        if (obj instanceof kotlinx.coroutines.e) {
            return (kotlinx.coroutines.e) obj;
        }
        return null;
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f50876p;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return this.f50876p.getContext();
    }

    @Override // kotlinx.coroutines.m
    public Object l() {
        Object obj = this.f50877q;
        this.f50877q = j.a();
        return obj;
    }

    public final void m() {
        do {
        } while (f50874s.get(this) == j.f50880b);
    }

    public final kotlinx.coroutines.e n() {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f50874s;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (obj == null) {
                f50874s.set(this, j.f50880b);
                return null;
            } else if (obj instanceof kotlinx.coroutines.e) {
                if (androidx.concurrent.futures.b.a(f50874s, this, obj, j.f50880b)) {
                    return (kotlinx.coroutines.e) obj;
                }
            } else if (obj != j.f50880b && !(obj instanceof Throwable)) {
                throw new IllegalStateException(("Inconsistent state " + obj).toString());
            }
        }
    }

    public final void o(CoroutineContext coroutineContext, Object obj) {
        this.f50877q = obj;
        this.f35117i = 1;
        this.f50875o.T1(coroutineContext, this);
    }

    @Override // kotlin.coroutines.Continuation
    public void resumeWith(Object obj) {
        Object b10 = os.t.b(obj);
        if (j.d(this.f50875o, getContext())) {
            this.f50877q = b10;
            this.f35117i = 0;
            j.c(this.f50875o, getContext(), this);
            return;
        }
        os.p0 b11 = l1.f43556a.b();
        if (b11.r2()) {
            this.f50877q = b10;
            this.f35117i = 0;
            b11.j2(this);
            return;
        }
        b11.p2(true);
        try {
            CoroutineContext context = getContext();
            Object i10 = l0.i(context, this.f50878r);
            this.f50876p.resumeWith(obj);
            Unit unit = Unit.f32056a;
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
        if (f50874s.get(this) != null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "DispatchedContinuation[" + this.f50875o + ", " + os.e0.c(this.f50876p) + ']';
    }

    public final boolean u(Throwable th2) {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f50874s;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            e0 e0Var = j.f50880b;
            if (Intrinsics.areEqual(obj, e0Var)) {
                if (androidx.concurrent.futures.b.a(f50874s, this, e0Var, th2)) {
                    return true;
                }
            } else if (obj instanceof Throwable) {
                return true;
            } else {
                if (androidx.concurrent.futures.b.a(f50874s, this, obj, null)) {
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
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f50874s;
        do {
            Object obj = atomicReferenceFieldUpdater.get(this);
            e0Var = j.f50880b;
            if (obj != e0Var) {
                if (obj instanceof Throwable) {
                    if (androidx.concurrent.futures.b.a(f50874s, this, obj, null)) {
                        return (Throwable) obj;
                    }
                    throw new IllegalArgumentException("Failed requirement.");
                }
                throw new IllegalStateException(("Inconsistent state " + obj).toString());
            }
        } while (!androidx.concurrent.futures.b.a(f50874s, this, e0Var, cancellableContinuation));
        return null;
    }

    @Override // kotlinx.coroutines.m
    public Continuation d() {
        return this;
    }
}
