package zg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f56428d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ c0 f56429e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(c0 c0Var, Task task) {
        this.f56429e = c0Var;
        this.f56428d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        f fVar;
        f fVar2;
        obj = this.f56429e.f56431b;
        synchronized (obj) {
            try {
                c0 c0Var = this.f56429e;
                fVar = c0Var.f56432c;
                if (fVar != null) {
                    fVar2 = c0Var.f56432c;
                    fVar2.onFailure((Exception) hf.q.l(this.f56428d.k()));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
