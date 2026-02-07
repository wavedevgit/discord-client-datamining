package os;

import java.util.concurrent.Executor;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l0 implements Executor {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineDispatcher f43555d;

    public l0(CoroutineDispatcher coroutineDispatcher) {
        this.f43555d = coroutineDispatcher;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        CoroutineDispatcher coroutineDispatcher = this.f43555d;
        kotlin.coroutines.e eVar = kotlin.coroutines.e.f32130d;
        if (ts.j.d(coroutineDispatcher, eVar)) {
            ts.j.c(this.f43555d, eVar, runnable);
        } else {
            runnable.run();
        }
    }

    public String toString() {
        return this.f43555d.toString();
    }
}
