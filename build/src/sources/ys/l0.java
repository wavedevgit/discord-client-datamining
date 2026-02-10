package ys;

import java.util.concurrent.Executor;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l0 implements Executor {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineDispatcher f55798d;

    public l0(CoroutineDispatcher coroutineDispatcher) {
        this.f55798d = coroutineDispatcher;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        CoroutineDispatcher coroutineDispatcher = this.f55798d;
        kotlin.coroutines.e eVar = kotlin.coroutines.e.f32061d;
        if (dt.j.d(coroutineDispatcher, eVar)) {
            dt.j.c(this.f55798d, eVar, runnable);
        } else {
            runnable.run();
        }
    }

    public String toString() {
        return this.f55798d.toString();
    }
}
