package yg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f55364d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ c0 f55365e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(c0 c0Var, Task task) {
        this.f55365e = c0Var;
        this.f55364d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        f fVar;
        f fVar2;
        obj = this.f55365e.f55367b;
        synchronized (obj) {
            try {
                c0 c0Var = this.f55365e;
                fVar = c0Var.f55368c;
                if (fVar != null) {
                    fVar2 = c0Var.f55368c;
                    fVar2.onFailure((Exception) gf.q.l(this.f55364d.k()));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
