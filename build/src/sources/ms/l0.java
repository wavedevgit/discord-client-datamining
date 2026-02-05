package ms;

import java.util.concurrent.Executor;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l0 implements Executor {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineDispatcher f38925d;

    public l0(CoroutineDispatcher coroutineDispatcher) {
        this.f38925d = coroutineDispatcher;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        CoroutineDispatcher coroutineDispatcher = this.f38925d;
        kotlin.coroutines.e eVar = kotlin.coroutines.e.f32062d;
        if (rs.j.d(coroutineDispatcher, eVar)) {
            rs.j.c(this.f38925d, eVar, runnable);
        } else {
            runnable.run();
        }
    }

    public String toString() {
        return this.f38925d.toString();
    }
}
