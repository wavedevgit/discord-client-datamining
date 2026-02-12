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
    private final p f46122a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineDispatcher f46123b;

    /* renamed from: c  reason: collision with root package name */
    final Handler f46124c = new Handler(Looper.getMainLooper());

    /* renamed from: d  reason: collision with root package name */
    private final Executor f46125d = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Executor {
        a() {
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            c.this.f46124c.post(runnable);
        }
    }

    public c(Executor executor) {
        p pVar = new p(executor);
        this.f46122a = pVar;
        this.f46123b = u0.b(pVar);
    }

    @Override // r4.b
    public Executor a() {
        return this.f46125d;
    }

    @Override // r4.b
    public CoroutineDispatcher b() {
        return this.f46123b;
    }

    @Override // r4.b
    /* renamed from: e */
    public p c() {
        return this.f46122a;
    }
}
