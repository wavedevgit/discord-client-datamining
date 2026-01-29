package r4;

import android.os.Handler;
import android.os.Looper;
import gs.u0;
import java.util.concurrent.Executor;
import kotlinx.coroutines.CoroutineDispatcher;
import q4.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements b {

    /* renamed from: a  reason: collision with root package name */
    private final p f48027a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineDispatcher f48028b;

    /* renamed from: c  reason: collision with root package name */
    final Handler f48029c = new Handler(Looper.getMainLooper());

    /* renamed from: d  reason: collision with root package name */
    private final Executor f48030d = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Executor {
        a() {
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            c.this.f48029c.post(runnable);
        }
    }

    public c(Executor executor) {
        p pVar = new p(executor);
        this.f48027a = pVar;
        this.f48028b = u0.b(pVar);
    }

    @Override // r4.b
    public Executor a() {
        return this.f48030d;
    }

    @Override // r4.b
    public CoroutineDispatcher b() {
        return this.f48028b;
    }

    @Override // r4.b
    /* renamed from: e */
    public p c() {
        return this.f48027a;
    }
}
