package gs;

import java.util.concurrent.Executor;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l0 implements Executor {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineDispatcher f27160d;

    public l0(CoroutineDispatcher coroutineDispatcher) {
        this.f27160d = coroutineDispatcher;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        CoroutineDispatcher coroutineDispatcher = this.f27160d;
        kotlin.coroutines.e eVar = kotlin.coroutines.e.f33356d;
        if (ls.j.d(coroutineDispatcher, eVar)) {
            ls.j.c(this.f27160d, eVar, runnable);
        } else {
            runnable.run();
        }
    }

    public String toString() {
        return this.f27160d.toString();
    }
}
