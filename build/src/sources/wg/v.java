package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f52434d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ w f52435e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(w wVar, Task task) {
        this.f52435e = wVar;
        this.f52434d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        m0 m0Var;
        m0 m0Var2;
        m0 m0Var3;
        c cVar;
        try {
            cVar = this.f52435e.f52437b;
            Task task = (Task) cVar.a(this.f52434d);
            if (task == null) {
                this.f52435e.onFailure(new NullPointerException("Continuation returned null"));
                return;
            }
            w wVar = this.f52435e;
            Executor executor = l.f52408b;
            task.f(executor, wVar);
            task.d(executor, this.f52435e);
            task.a(executor, this.f52435e);
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                m0Var3 = this.f52435e.f52438c;
                m0Var3.s((Exception) e10.getCause());
                return;
            }
            m0Var2 = this.f52435e.f52438c;
            m0Var2.s(e10);
        } catch (Exception e11) {
            m0Var = this.f52435e.f52438c;
            m0Var.s(e11);
        }
    }
}
