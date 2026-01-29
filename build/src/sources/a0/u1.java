package a0;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface u1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(Object obj);

        void onError(Throwable th2);
    }

    void a(Executor executor, a aVar);

    void b(a aVar);
}
