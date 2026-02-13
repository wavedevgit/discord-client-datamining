package ys;

import java.util.concurrent.Executor;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l0 implements Executor {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineDispatcher f56367d;

    public l0(CoroutineDispatcher coroutineDispatcher) {
        this.f56367d = coroutineDispatcher;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        CoroutineDispatcher coroutineDispatcher = this.f56367d;
        kotlin.coroutines.e eVar = kotlin.coroutines.e.f32630d;
        if (dt.j.d(coroutineDispatcher, eVar)) {
            dt.j.c(this.f56367d, eVar, runnable);
        } else {
            runnable.run();
        }
    }

    public String toString() {
        return this.f56367d.toString();
    }
}
