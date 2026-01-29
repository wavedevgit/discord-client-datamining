package e0;

import a0.e2;
import a0.r0;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface n extends e2 {
    public static final r0.a H = r0.a.a("camerax.core.thread.backgroundExecutor", Executor.class);

    default Executor S(Executor executor) {
        return (Executor) e(H, executor);
    }
}
