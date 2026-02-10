package r4;

import android.os.Handler;
import android.os.Looper;
import java.util.concurrent.Executor;
import kotlinx.coroutines.CoroutineDispatcher;
import q4.p;
import ys.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements b {

    /* renamed from: a  reason: collision with root package name */
    private final p f46121a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineDispatcher f46122b;

    /* renamed from: c  reason: collision with root package name */
    final Handler f46123c = new Handler(Looper.getMainLooper());

    /* renamed from: d  reason: collision with root package name */
    private final Executor f46124d = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Executor {
        a() {
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            c.this.f46123c.post(runnable);
        }
    }

    public c(Executor executor) {
        p pVar = new p(executor);
        this.f46121a = pVar;
        this.f46122b = u0.b(pVar);
    }

    @Override // r4.b
    public Executor a() {
        return this.f46124d;
    }

    @Override // r4.b
    public CoroutineDispatcher b() {
        return this.f46122b;
    }

    @Override // r4.b
    /* renamed from: e */
    public p c() {
        return this.f46121a;
    }
}
