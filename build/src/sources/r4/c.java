package r4;

import android.os.Handler;
import android.os.Looper;
import java.util.concurrent.Executor;
import kotlinx.coroutines.CoroutineDispatcher;
import ps.u0;
import q4.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements b {

    /* renamed from: a  reason: collision with root package name */
    private final p f47667a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineDispatcher f47668b;

    /* renamed from: c  reason: collision with root package name */
    final Handler f47669c = new Handler(Looper.getMainLooper());

    /* renamed from: d  reason: collision with root package name */
    private final Executor f47670d = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Executor {
        a() {
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            c.this.f47669c.post(runnable);
        }
    }

    public c(Executor executor) {
        p pVar = new p(executor);
        this.f47667a = pVar;
        this.f47668b = u0.b(pVar);
    }

    @Override // r4.b
    public Executor a() {
        return this.f47670d;
    }

    @Override // r4.b
    public CoroutineDispatcher b() {
        return this.f47668b;
    }

    @Override // r4.b
    /* renamed from: e */
    public p c() {
        return this.f47667a;
    }
}
