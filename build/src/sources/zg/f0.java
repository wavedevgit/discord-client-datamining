package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class f0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f57007d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ g0 f57008e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(g0 g0Var, Task task) {
        this.f57008e = g0Var;
        this.f57007d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        j jVar;
        try {
            jVar = this.f57008e.f57010b;
            Task a10 = jVar.a(this.f57007d.l());
            if (a10 == null) {
                this.f57008e.onFailure(new NullPointerException("Continuation returned null"));
                return;
            }
            g0 g0Var = this.f57008e;
            Executor executor = l.f57018b;
            a10.f(executor, g0Var);
            a10.d(executor, this.f57008e);
            a10.a(executor, this.f57008e);
        } catch (CancellationException unused) {
            this.f57008e.a();
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                this.f57008e.onFailure((Exception) e10.getCause());
            } else {
                this.f57008e.onFailure(e10);
            }
        } catch (Exception e11) {
            this.f57008e.onFailure(e11);
        }
    }
}
