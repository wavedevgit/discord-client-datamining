package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class v implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f57044d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ w f57045e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(w wVar, Task task) {
        this.f57045e = wVar;
        this.f57044d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        m0 m0Var;
        m0 m0Var2;
        m0 m0Var3;
        c cVar;
        try {
            cVar = this.f57045e.f57047b;
            Task task = (Task) cVar.a(this.f57044d);
            if (task == null) {
                this.f57045e.onFailure(new NullPointerException("Continuation returned null"));
                return;
            }
            w wVar = this.f57045e;
            Executor executor = l.f57018b;
            task.f(executor, wVar);
            task.d(executor, this.f57045e);
            task.a(executor, this.f57045e);
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                m0Var3 = this.f57045e.f57048c;
                m0Var3.s((Exception) e10.getCause());
                return;
            }
            m0Var2 = this.f57045e.f57048c;
            m0Var2.s(e10);
        } catch (Exception e11) {
            m0Var = this.f57045e.f57048c;
            m0Var.s(e11);
        }
    }
}
