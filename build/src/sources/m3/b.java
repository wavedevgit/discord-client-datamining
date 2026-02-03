package m3;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements AutoCloseable, CoroutineScope {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f37595d;

    public b(CoroutineContext coroutineContext) {
        Intrinsics.checkNotNullParameter(coroutineContext, "coroutineContext");
        this.f37595d = coroutineContext;
    }

    @Override // java.lang.AutoCloseable
    public void close() {
        a0.e(getCoroutineContext(), null, 1, null);
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f37595d;
    }
}
