package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f56436d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ w f56437e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(w wVar, Task task) {
        this.f56437e = wVar;
        this.f56436d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        m0 m0Var;
        m0 m0Var2;
        m0 m0Var3;
        c cVar;
        try {
            cVar = this.f56437e.f56439b;
            Task task = (Task) cVar.a(this.f56436d);
            if (task == null) {
                this.f56437e.onFailure(new NullPointerException("Continuation returned null"));
                return;
            }
            w wVar = this.f56437e;
            Executor executor = l.f56410b;
            task.f(executor, wVar);
            task.d(executor, this.f56437e);
            task.a(executor, this.f56437e);
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                m0Var3 = this.f56437e.f56440c;
                m0Var3.s((Exception) e10.getCause());
                return;
            }
            m0Var2 = this.f56437e.f56440c;
            m0Var2.s(e10);
        } catch (Exception e11) {
            m0Var = this.f56437e.f56440c;
            m0Var.s(e11);
        }
    }
}
