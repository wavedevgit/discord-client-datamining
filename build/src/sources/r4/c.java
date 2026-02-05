package r4;

import android.os.Handler;
import android.os.Looper;
import java.util.concurrent.Executor;
import kotlinx.coroutines.CoroutineDispatcher;
import ms.u0;
import q4.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements b {

    /* renamed from: a  reason: collision with root package name */
    private final p f48561a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineDispatcher f48562b;

    /* renamed from: c  reason: collision with root package name */
    final Handler f48563c = new Handler(Looper.getMainLooper());

    /* renamed from: d  reason: collision with root package name */
    private final Executor f48564d = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Executor {
        a() {
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            c.this.f48563c.post(runnable);
        }
    }

    public c(Executor executor) {
        p pVar = new p(executor);
        this.f48561a = pVar;
        this.f48562b = u0.b(pVar);
    }

    @Override // r4.b
    public Executor a() {
        return this.f48564d;
    }

    @Override // r4.b
    public CoroutineDispatcher b() {
        return this.f48562b;
    }

    @Override // r4.b
    /* renamed from: e */
    public p c() {
        return this.f48561a;
    }
}
