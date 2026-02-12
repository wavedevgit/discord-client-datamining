package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f56439d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ g0 f56440e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(g0 g0Var, Task task) {
        this.f56440e = g0Var;
        this.f56439d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        j jVar;
        try {
            jVar = this.f56440e.f56442b;
            Task a10 = jVar.a(this.f56439d.l());
            if (a10 == null) {
                this.f56440e.onFailure(new NullPointerException("Continuation returned null"));
                return;
            }
            g0 g0Var = this.f56440e;
            Executor executor = l.f56450b;
            a10.f(executor, g0Var);
            a10.d(executor, this.f56440e);
            a10.a(executor, this.f56440e);
        } catch (CancellationException unused) {
            this.f56440e.a();
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                this.f56440e.onFailure((Exception) e10.getCause());
            } else {
                this.f56440e.onFailure(e10);
            }
        } catch (Exception e11) {
            this.f56440e.onFailure(e11);
        }
    }
}
