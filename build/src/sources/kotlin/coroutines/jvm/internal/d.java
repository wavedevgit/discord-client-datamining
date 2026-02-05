package kotlin.coroutines.jvm.internal;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d extends a {
    private final CoroutineContext _context;
    private transient Continuation<Object> intercepted;

    public d(Continuation continuation, CoroutineContext coroutineContext) {
        super(continuation);
        this._context = coroutineContext;
    }

    @Override // kotlin.coroutines.Continuation
    @NotNull
    public CoroutineContext getContext() {
        CoroutineContext coroutineContext = this._context;
        Intrinsics.checkNotNull(coroutineContext);
        return coroutineContext;
    }

    @NotNull
    public final Continuation<Object> intercepted() {
        Continuation continuation = this.intercepted;
        if (continuation == null) {
            kotlin.coroutines.d dVar = (kotlin.coroutines.d) getContext().k(kotlin.coroutines.d.f32060g);
            if (dVar == null || (continuation = dVar.E(this)) == null) {
                continuation = this;
            }
            this.intercepted = continuation;
        }
        return continuation;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlin.coroutines.jvm.internal.a
    public void releaseIntercepted() {
        Continuation<Object> continuation = this.intercepted;
        if (continuation != null && continuation != this) {
            CoroutineContext.Element k10 = getContext().k(kotlin.coroutines.d.f32060g);
            Intrinsics.checkNotNull(k10);
            ((kotlin.coroutines.d) k10).o(continuation);
        }
        this.intercepted = c.f32063d;
    }

    public d(Continuation continuation) {
        this(continuation, continuation != null ? continuation.getContext() : null);
    }
}
