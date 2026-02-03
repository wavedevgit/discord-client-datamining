package js;

import java.util.concurrent.Executor;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l0 implements Executor {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineDispatcher f31963d;

    public l0(CoroutineDispatcher coroutineDispatcher) {
        this.f31963d = coroutineDispatcher;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        CoroutineDispatcher coroutineDispatcher = this.f31963d;
        kotlin.coroutines.e eVar = kotlin.coroutines.e.f32538d;
        if (os.j.d(coroutineDispatcher, eVar)) {
            os.j.c(this.f31963d, eVar, runnable);
        } else {
            runnable.run();
        }
    }

    public String toString() {
        return this.f31963d.toString();
    }
}
