package ps;

import java.util.concurrent.Executor;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l0 implements Executor {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineDispatcher f44512d;

    public l0(CoroutineDispatcher coroutineDispatcher) {
        this.f44512d = coroutineDispatcher;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        CoroutineDispatcher coroutineDispatcher = this.f44512d;
        kotlin.coroutines.e eVar = kotlin.coroutines.e.f31839d;
        if (us.j.d(coroutineDispatcher, eVar)) {
            us.j.c(this.f44512d, eVar, runnable);
        } else {
            runnable.run();
        }
    }

    public String toString() {
        return this.f44512d.toString();
    }
}
