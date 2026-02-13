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
    private final p f46690a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineDispatcher f46691b;

    /* renamed from: c  reason: collision with root package name */
    final Handler f46692c = new Handler(Looper.getMainLooper());

    /* renamed from: d  reason: collision with root package name */
    private final Executor f46693d = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Executor {
        a() {
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            c.this.f46692c.post(runnable);
        }
    }

    public c(Executor executor) {
        p pVar = new p(executor);
        this.f46690a = pVar;
        this.f46691b = u0.b(pVar);
    }

    @Override // r4.b
    public Executor a() {
        return this.f46693d;
    }

    @Override // r4.b
    public CoroutineDispatcher b() {
        return this.f46691b;
    }

    @Override // r4.b
    /* renamed from: e */
    public p c() {
        return this.f46690a;
    }
}
