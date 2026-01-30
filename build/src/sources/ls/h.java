package ls;

import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final transient CoroutineContext f37458d;

    public h(CoroutineContext coroutineContext) {
        this.f37458d = coroutineContext;
    }

    @Override // java.lang.Throwable
    public Throwable fillInStackTrace() {
        setStackTrace(new StackTraceElement[0]);
        return this;
    }

    @Override // java.lang.Throwable
    public String getLocalizedMessage() {
        return String.valueOf(this.f37458d);
    }
}
