package hs;

import java.util.concurrent.Executor;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l0 implements Executor {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineDispatcher f27923d;

    public l0(CoroutineDispatcher coroutineDispatcher) {
        this.f27923d = coroutineDispatcher;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        CoroutineDispatcher coroutineDispatcher = this.f27923d;
        kotlin.coroutines.e eVar = kotlin.coroutines.e.f33148d;
        if (ms.j.d(coroutineDispatcher, eVar)) {
            ms.j.c(this.f27923d, eVar, runnable);
        } else {
            runnable.run();
        }
    }

    public String toString() {
        return this.f27923d.toString();
    }
}
