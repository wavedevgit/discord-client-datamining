package dt;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements CoroutineScope {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f21877d;

    public e(CoroutineContext coroutineContext) {
        this.f21877d = coroutineContext;
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f21877d;
    }

    public String toString() {
        return "CoroutineScope(coroutineContext=" + getCoroutineContext() + ')';
    }
}
