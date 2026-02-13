package zg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f56997d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ c0 f56998e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(c0 c0Var, Task task) {
        this.f56998e = c0Var;
        this.f56997d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        f fVar;
        f fVar2;
        obj = this.f56998e.f57000b;
        synchronized (obj) {
            try {
                c0 c0Var = this.f56998e;
                fVar = c0Var.f57001c;
                if (fVar != null) {
                    fVar2 = c0Var.f57001c;
                    fVar2.onFailure((Exception) hf.q.l(this.f56997d.k()));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
