package w1;

import android.os.Handler;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a implements Executor {

        /* renamed from: d  reason: collision with root package name */
        private final Handler f52032d;

        a(Handler handler) {
            this.f52032d = (Handler) b2.e.g(handler);
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            if (this.f52032d.post((Runnable) b2.e.g(runnable))) {
                return;
            }
            throw new RejectedExecutionException(this.f52032d + " is shutting down");
        }
    }

    public static Executor a(Handler handler) {
        return new a(handler);
    }
}
