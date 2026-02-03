package hs;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j0 extends Exception {

    /* renamed from: d  reason: collision with root package name */
    private final Throwable f27921d;

    public j0(Throwable th2, CoroutineDispatcher coroutineDispatcher, CoroutineContext coroutineContext) {
        super("Coroutine dispatcher " + coroutineDispatcher + " threw an exception, context = " + coroutineContext, th2);
        this.f27921d = th2;
    }

    @Override // java.lang.Throwable
    public Throwable getCause() {
        return this.f27921d;
    }
}
