package xh;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
import yh.s;
import yh.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements t {
    @Override // yh.w
    public final /* synthetic */ Object a() {
        ExecutorService newSingleThreadExecutor = Executors.newSingleThreadExecutor(new ThreadFactory() { // from class: xh.g
            @Override // java.util.concurrent.ThreadFactory
            public final Thread newThread(Runnable runnable) {
                return new Thread(runnable, "UpdateListenerExecutor");
            }
        });
        s.a(newSingleThreadExecutor);
        return newSingleThreadExecutor;
    }
}
