package kotlin.coroutines.jvm.internal;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i extends a {
    public i(Continuation continuation) {
        super(continuation);
        if (continuation == null || continuation.getContext() == kotlin.coroutines.e.f32130d) {
            return;
        }
        throw new IllegalArgumentException("Coroutines with restricted suspension must have EmptyCoroutineContext");
    }

    @Override // kotlin.coroutines.Continuation
    @NotNull
    public CoroutineContext getContext() {
        return kotlin.coroutines.e.f32130d;
    }
}
