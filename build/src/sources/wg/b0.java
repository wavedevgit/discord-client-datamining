package wg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f52168d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ c0 f52169e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(c0 c0Var, Task task) {
        this.f52169e = c0Var;
        this.f52168d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        f fVar;
        f fVar2;
        obj = this.f52169e.f52171b;
        synchronized (obj) {
            try {
                c0 c0Var = this.f52169e;
                fVar = c0Var.f52172c;
                if (fVar != null) {
                    fVar2 = c0Var.f52172c;
                    fVar2.onFailure((Exception) gf.q.l(this.f52168d.k()));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
