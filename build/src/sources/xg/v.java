package xg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f53859d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ w f53860e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(w wVar, Task task) {
        this.f53860e = wVar;
        this.f53859d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        m0 m0Var;
        m0 m0Var2;
        m0 m0Var3;
        c cVar;
        try {
            cVar = this.f53860e.f53862b;
            Task task = (Task) cVar.a(this.f53859d);
            if (task == null) {
                this.f53860e.onFailure(new NullPointerException("Continuation returned null"));
                return;
            }
            w wVar = this.f53860e;
            Executor executor = l.f53833b;
            task.f(executor, wVar);
            task.d(executor, this.f53860e);
            task.a(executor, this.f53860e);
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                m0Var3 = this.f53860e.f53863c;
                m0Var3.s((Exception) e10.getCause());
                return;
            }
            m0Var2 = this.f53860e.f53863c;
            m0Var2.s(e10);
        } catch (Exception e11) {
            m0Var = this.f53860e.f53863c;
            m0Var.s(e11);
        }
    }
}
