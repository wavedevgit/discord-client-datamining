package xg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f53812d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ c0 f53813e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(c0 c0Var, Task task) {
        this.f53813e = c0Var;
        this.f53812d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        f fVar;
        f fVar2;
        obj = this.f53813e.f53815b;
        synchronized (obj) {
            try {
                c0 c0Var = this.f53813e;
                fVar = c0Var.f53816c;
                if (fVar != null) {
                    fVar2 = c0Var.f53816c;
                    fVar2.onFailure((Exception) gf.q.l(this.f53812d.k()));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
