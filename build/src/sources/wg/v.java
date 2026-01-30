package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f52648d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ w f52649e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(w wVar, Task task) {
        this.f52649e = wVar;
        this.f52648d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        m0 m0Var;
        m0 m0Var2;
        m0 m0Var3;
        c cVar;
        try {
            cVar = this.f52649e.f52651b;
            Task task = (Task) cVar.a(this.f52648d);
            if (task == null) {
                this.f52649e.onFailure(new NullPointerException("Continuation returned null"));
                return;
            }
            w wVar = this.f52649e;
            Executor executor = l.f52622b;
            task.f(executor, wVar);
            task.d(executor, this.f52649e);
            task.a(executor, this.f52649e);
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                m0Var3 = this.f52649e.f52652c;
                m0Var3.s((Exception) e10.getCause());
                return;
            }
            m0Var2 = this.f52649e.f52652c;
            m0Var2.s(e10);
        } catch (Exception e11) {
            m0Var = this.f52649e.f52652c;
            m0Var.s(e11);
        }
    }
}
