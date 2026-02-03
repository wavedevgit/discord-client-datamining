package ms;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements CoroutineScope {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f39154d;

    public e(CoroutineContext coroutineContext) {
        this.f39154d = coroutineContext;
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f39154d;
    }

    public String toString() {
        return "CoroutineScope(coroutineContext=" + getCoroutineContext() + ')';
    }
}
