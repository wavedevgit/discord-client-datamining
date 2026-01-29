package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f52595d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ g0 f52596e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(g0 g0Var, Task task) {
        this.f52596e = g0Var;
        this.f52595d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        j jVar;
        try {
            jVar = this.f52596e.f52598b;
            Task a10 = jVar.a(this.f52595d.l());
            if (a10 == null) {
                this.f52596e.onFailure(new NullPointerException("Continuation returned null"));
                return;
            }
            g0 g0Var = this.f52596e;
            Executor executor = l.f52606b;
            a10.f(executor, g0Var);
            a10.d(executor, this.f52596e);
            a10.a(executor, this.f52596e);
        } catch (CancellationException unused) {
            this.f52596e.a();
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                this.f52596e.onFailure((Exception) e10.getCause());
            } else {
                this.f52596e.onFailure(e10);
            }
        } catch (Exception e11) {
            this.f52596e.onFailure(e11);
        }
    }
}
