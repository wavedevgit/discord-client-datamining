package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f52437d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ w f52438e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(w wVar, Task task) {
        this.f52438e = wVar;
        this.f52437d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        m0 m0Var;
        m0 m0Var2;
        m0 m0Var3;
        c cVar;
        try {
            cVar = this.f52438e.f52440b;
            Task task = (Task) cVar.a(this.f52437d);
            if (task == null) {
                this.f52438e.onFailure(new NullPointerException("Continuation returned null"));
                return;
            }
            w wVar = this.f52438e;
            Executor executor = l.f52411b;
            task.f(executor, wVar);
            task.d(executor, this.f52438e);
            task.a(executor, this.f52438e);
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                m0Var3 = this.f52438e.f52441c;
                m0Var3.s((Exception) e10.getCause());
                return;
            }
            m0Var2 = this.f52438e.f52441c;
            m0Var2.s(e10);
        } catch (Exception e11) {
            m0Var = this.f52438e.f52441c;
            m0Var.s(e11);
        }
    }
}
