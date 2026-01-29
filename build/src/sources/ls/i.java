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
    private static final /* synthetic */ AtomicReferenceFieldUpdater f37443s = AtomicReferenceFieldUpdater.newUpdater(i.class, Object.class, "_reusableCancellableContinuation$volatile");
    private volatile /* synthetic */ Object _reusableCancellableContinuation$volatile;

    /* renamed from: o  reason: collision with root package name */
    public final CoroutineDispatcher f37444o;

    /* renamed from: p  reason: collision with root package name */
    public final Continuation f37445p;

    /* renamed from: q  reason: collision with root package name */
    public Object f37446q;

    /* renamed from: r  reason: collision with root package name */
    public final Object f37447r;

    public i(CoroutineDispatcher coroutineDispatcher, Continuation continuation) {
        super(-1);
        this.f37444o = coroutineDispatcher;
        this.f37445p = continuation;
        this.f37446q = j.a();
        this.f37447r = l0.g(getContext());
    }

    private final kotlinx.coroutines.e r() {
        Object obj = f37443s.get(this);
        if (obj instanceof kotlinx.coroutines.e) {
            return (kotlinx.coroutines.e) obj;
        }
        return null;
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f37445p;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return this.f37445p.getContext();
    }

    @Override // kotlinx.coroutines.m
    public Object l() {
        Object obj = this.f37446q;
        this.f37446q = j.a();
        return obj;
    }

    public final void m() {
        do {
        } while (f37443s.get(this) == j.f37449b);
    }

    public final kotlinx.coroutines.e n() {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f37443s;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (obj == null) {
                f37443s.set(this, j.f37449b);
                return null;
            } else if (obj instanceof kotlinx.coroutines.e) {
                if (androidx.concurrent.futures.b.a(f37443s, this, obj, j.f37449b)) {
                    return (kotlinx.coroutines.e) obj;
                }
            } else if (obj != j.f37449b && !(obj instanceof Throwable)) {
                throw new IllegalStateException(("Inconsistent state " + obj).toString());
            }
        }
    }

    public final void o(CoroutineContext coroutineContext, Object obj) {
        this.f37446q = obj;
        this.f36343i = 1;
        this.f37444o.U1(coroutineContext, this);
    }

    @Override // kotlin.coroutines.Continuation
    public void resumeWith(Object obj) {
        Object b10 = gs.t.b(obj);
        if (j.d(this.f37444o, getContext())) {
            this.f37446q = b10;
            this.f36343i = 0;
            j.c(this.f37444o, getContext(), this);
            return;
        }
        gs.p0 b11 = l1.f27161a.b();
        if (b11.r2()) {
            this.f37446q = b10;
            this.f36343i = 0;
            b11.j2(this);
            return;
        }
        b11.p2(true);
        try {
            CoroutineContext context = getContext();
            Object i10 = l0.i(context, this.f37447r);
            this.f37445p.resumeWith(obj);
            Unit unit = Unit.f33282a;
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
        return "DispatchedContinuation[" + this.f37444o + ", " + gs.e0.c(this.f37445p) + ']';
    }

    public final boolean u() {
        if (f37443s.get(this) != null) {
            return true;
        }
        return false;
    }

    public final boolean v(Throwable th2) {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f37443s;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            e0 e0Var = j.f37449b;
            if (Intrinsics.areEqual(obj, e0Var)) {
                if (androidx.concurrent.futures.b.a(f37443s, this, e0Var, th2)) {
                    return true;
                }
            } else if (obj instanceof Throwable) {
                return true;
            } else {
                if (androidx.concurrent.futures.b.a(f37443s, this, obj, null)) {
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
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f37443s;
        do {
            Object obj = atomicReferenceFieldUpdater.get(this);
            e0Var = j.f37449b;
            if (obj != e0Var) {
                if (obj instanceof Throwable) {
                    if (androidx.concurrent.futures.b.a(f37443s, this, obj, null)) {
                        return (Throwable) obj;
                    }
                    throw new IllegalArgumentException("Failed requirement.");
                }
                throw new IllegalStateException(("Inconsistent state " + obj).toString());
            }
        } while (!androidx.concurrent.futures.b.a(f37443s, this, e0Var, cancellableContinuation));
        return null;
    }

    @Override // kotlinx.coroutines.m
    public Continuation h() {
        return this;
    }
}
