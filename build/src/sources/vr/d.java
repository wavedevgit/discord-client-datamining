package vr;

import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.CoroutineStackFrame;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements Continuation, CoroutineStackFrame {
    @NotNull

    /* renamed from: e  reason: collision with root package name */
    private static final a f52930e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final AtomicReferenceFieldUpdater f52931i = AtomicReferenceFieldUpdater.newUpdater(d.class, Object.class, "result");

    /* renamed from: d  reason: collision with root package name */
    private final Continuation f52932d;
    private volatile Object result;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public d(Continuation delegate, Object obj) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f52932d = delegate;
        this.result = obj;
    }

    public final Object b() {
        Object obj = this.result;
        wr.a aVar = wr.a.f54055e;
        if (obj == aVar) {
            if (androidx.concurrent.futures.b.a(f52931i, this, aVar, wr.b.f())) {
                return wr.b.f();
            }
            obj = this.result;
        }
        if (obj == wr.a.f54056i) {
            return wr.b.f();
        }
        if (!(obj instanceof Result.b)) {
            return obj;
        }
        throw ((Result.b) obj).f32007d;
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f52932d;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return this.f52932d.getContext();
    }

    @Override // kotlin.coroutines.Continuation
    public void resumeWith(Object obj) {
        while (true) {
            Object obj2 = this.result;
            wr.a aVar = wr.a.f54055e;
            if (obj2 == aVar) {
                if (androidx.concurrent.futures.b.a(f52931i, this, aVar, obj)) {
                    return;
                }
            } else if (obj2 == wr.b.f()) {
                if (androidx.concurrent.futures.b.a(f52931i, this, wr.b.f(), wr.a.f54056i)) {
                    this.f52932d.resumeWith(obj);
                    return;
                }
            } else {
                throw new IllegalStateException("Already resumed");
            }
        }
    }

    public String toString() {
        return "SafeContinuation for " + this.f52932d;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public d(Continuation delegate) {
        this(delegate, wr.a.f54055e);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
    }
}
