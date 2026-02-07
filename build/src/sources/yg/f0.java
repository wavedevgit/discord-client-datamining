package yg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f55374d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ g0 f55375e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(g0 g0Var, Task task) {
        this.f55375e = g0Var;
        this.f55374d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        j jVar;
        try {
            jVar = this.f55375e.f55377b;
            Task a10 = jVar.a(this.f55374d.l());
            if (a10 == null) {
                this.f55375e.onFailure(new NullPointerException("Continuation returned null"));
                return;
            }
            g0 g0Var = this.f55375e;
            Executor executor = l.f55385b;
            a10.f(executor, g0Var);
            a10.d(executor, this.f55375e);
            a10.a(executor, this.f55375e);
        } catch (CancellationException unused) {
            this.f55375e.a();
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                this.f55375e.onFailure((Exception) e10.getCause());
            } else {
                this.f55375e.onFailure(e10);
            }
        } catch (Exception e11) {
            this.f55375e.onFailure(e11);
        }
    }
}
