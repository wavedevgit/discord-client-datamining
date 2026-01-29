package gs;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class u0 {
    public static final Executor a(CoroutineDispatcher coroutineDispatcher) {
        kotlinx.coroutines.s sVar;
        Executor f22;
        if (coroutineDispatcher instanceof kotlinx.coroutines.s) {
            sVar = (kotlinx.coroutines.s) coroutineDispatcher;
        } else {
            sVar = null;
        }
        if (sVar != null && (f22 = sVar.f2()) != null) {
            return f22;
        }
        return new l0(coroutineDispatcher);
    }

    public static final CoroutineDispatcher b(Executor executor) {
        l0 l0Var;
        CoroutineDispatcher coroutineDispatcher;
        if (executor instanceof l0) {
            l0Var = (l0) executor;
        } else {
            l0Var = null;
        }
        if (l0Var != null && (coroutineDispatcher = l0Var.f27160d) != null) {
            return coroutineDispatcher;
        }
        return new kotlinx.coroutines.t(executor);
    }

    public static final kotlinx.coroutines.s c(ExecutorService executorService) {
        return new kotlinx.coroutines.t(executorService);
    }
}
