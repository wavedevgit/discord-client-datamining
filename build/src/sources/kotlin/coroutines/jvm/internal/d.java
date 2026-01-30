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
            kotlin.coroutines.d dVar = (kotlin.coroutines.d) getContext().l(kotlin.coroutines.d.f33370h);
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
            CoroutineContext.Element l10 = getContext().l(kotlin.coroutines.d.f33370h);
            Intrinsics.checkNotNull(l10);
            ((kotlin.coroutines.d) l10).n(continuation);
        }
        this.intercepted = c.f33373d;
    }

    public d(Continuation continuation) {
        this(continuation, continuation != null ? continuation.getContext() : null);
    }
}
