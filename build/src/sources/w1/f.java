package w1;

import android.os.Handler;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a implements Executor {

        /* renamed from: d  reason: collision with root package name */
        private final Handler f52668d;

        a(Handler handler) {
            this.f52668d = (Handler) b2.e.g(handler);
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            if (this.f52668d.post((Runnable) b2.e.g(runnable))) {
                return;
            }
            throw new RejectedExecutionException(this.f52668d + " is shutting down");
        }
    }

    public static Executor a(Handler handler) {
        return new a(handler);
    }
}
