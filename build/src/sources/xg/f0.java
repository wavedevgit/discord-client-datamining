package xg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f53822d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ g0 f53823e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(g0 g0Var, Task task) {
        this.f53823e = g0Var;
        this.f53822d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        j jVar;
        try {
            jVar = this.f53823e.f53825b;
            Task a10 = jVar.a(this.f53822d.l());
            if (a10 == null) {
                this.f53823e.onFailure(new NullPointerException("Continuation returned null"));
                return;
            }
            g0 g0Var = this.f53823e;
            Executor executor = l.f53833b;
            a10.f(executor, g0Var);
            a10.d(executor, this.f53823e);
            a10.a(executor, this.f53823e);
        } catch (CancellationException unused) {
            this.f53823e.a();
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                this.f53823e.onFailure((Exception) e10.getCause());
            } else {
                this.f53823e.onFailure(e10);
            }
        } catch (Exception e11) {
            this.f53823e.onFailure(e11);
        }
    }
}
