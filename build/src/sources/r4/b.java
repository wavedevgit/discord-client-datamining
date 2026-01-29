package r4;

import java.util.concurrent.Executor;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface b {
    Executor a();

    CoroutineDispatcher b();

    a c();

    default void d(Runnable runnable) {
        c().execute(runnable);
    }
}
