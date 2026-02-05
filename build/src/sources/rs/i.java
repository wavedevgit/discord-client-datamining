package rs;

import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.CoroutineStackFrame;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
import ms.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends kotlinx.coroutines.m implements CoroutineStackFrame, Continuation {

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f48963s = AtomicReferenceFieldUpdater.newUpdater(i.class, Object.class, "_reusableCancellableContinuation$volatile");
    private volatile /* synthetic */ Object _reusableCancellableContinuation$volatile;

    /* renamed from: o  reason: collision with root package name */
    public final CoroutineDispatcher f48964o;

    /* renamed from: p  reason: collision with root package name */
    public final Continuation f48965p;

    /* renamed from: q  reason: collision with root package name */
    public Object f48966q;

    /* renamed from: r  reason: collision with root package name */
    public final Object f48967r;

    public i(CoroutineDispatcher coroutineDispatcher, Continuation continuation) {
        super(-1);
        this.f48964o = coroutineDispatcher;
        this.f48965p = continuation;
        this.f48966q = j.a();
        this.f48967r = l0.g(getContext());
    }

    private final kotlinx.coroutines.e p() {
        Object obj = f48963s.get(this);
        if (obj instanceof kotlinx.coroutines.e) {
            return (kotlinx.coroutines.e) obj;
        }
        return null;
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f48965p;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return this.f48965p.getContext();
    }

    @Override // kotlinx.coroutines.m
    public Object l() {
        Object obj = this.f48966q;
        this.f48966q = j.a();
        return obj;
    }

    public final void m() {
        do {
        } while (f48963s.get(this) == j.f48969b);
    }

    public final kotlinx.coroutines.e n() {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f48963s;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            if (obj == null) {
                f48963s.set(this, j.f48969b);
                return null;
            } else if (obj instanceof kotlinx.coroutines.e) {
                if (androidx.concurrent.futures.b.a(f48963s, this, obj, j.f48969b)) {
                    return (kotlinx.coroutines.e) obj;
                }
            } else if (obj != j.f48969b && !(obj instanceof Throwable)) {
                throw new IllegalStateException(("Inconsistent state " + obj).toString());
            }
        }
    }

    public final void o(CoroutineContext coroutineContext, Object obj) {
        this.f48966q = obj;
        this.f35049i = 1;
        this.f48964o.U1(coroutineContext, this);
    }

    @Override // kotlin.coroutines.Continuation
    public void resumeWith(Object obj) {
        Object b10 = ms.t.b(obj);
        if (j.d(this.f48964o, getContext())) {
            this.f48966q = b10;
            this.f35049i = 0;
            j.c(this.f48964o, getContext(), this);
            return;
        }
        ms.p0 b11 = l1.f38926a.b();
        if (b11.r2()) {
            this.f48966q = b10;
            this.f35049i = 0;
            b11.j2(this);
            return;
        }
        b11.p2(true);
        try {
            CoroutineContext context = getContext();
            Object i10 = l0.i(context, this.f48967r);
            this.f48965p.resumeWith(obj);
            Unit unit = Unit.f31988a;
            l0.f(context, i10);
            do {
            } while (b11.u2());
        } finally {
            try {
            } finally {
            }
        }
    }

    public final boolean t() {
        if (f48963s.get(this) != null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "DispatchedContinuation[" + this.f48964o + ", " + ms.e0.c(this.f48965p) + ']';
    }

    public final boolean v(Throwable th2) {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f48963s;
        while (true) {
            Object obj = atomicReferenceFieldUpdater.get(this);
            e0 e0Var = j.f48969b;
            if (Intrinsics.areEqual(obj, e0Var)) {
                if (androidx.concurrent.futures.b.a(f48963s, this, e0Var, th2)) {
                    return true;
                }
            } else if (obj instanceof Throwable) {
                return true;
            } else {
                if (androidx.concurrent.futures.b.a(f48963s, this, obj, null)) {
                    return false;
                }
            }
        }
    }

    public final void w() {
        m();
        kotlinx.coroutines.e p10 = p();
        if (p10 != null) {
            p10.v();
        }
    }

    public final Throwable y(CancellableContinuation cancellableContinuation) {
        e0 e0Var;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f48963s;
        do {
            Object obj = atomicReferenceFieldUpdater.get(this);
            e0Var = j.f48969b;
            if (obj != e0Var) {
                if (obj instanceof Throwable) {
                    if (androidx.concurrent.futures.b.a(f48963s, this, obj, null)) {
                        return (Throwable) obj;
                    }
                    throw new IllegalArgumentException("Failed requirement.");
                }
                throw new IllegalStateException(("Inconsistent state " + obj).toString());
            }
        } while (!androidx.concurrent.futures.b.a(f48963s, this, e0Var, cancellableContinuation));
        return null;
    }

    @Override // kotlinx.coroutines.m
    public Continuation h() {
        return this;
    }
}
