package zg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f56394d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ e0 f56395e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(e0 e0Var, Task task) {
        this.f56395e = e0Var;
        this.f56394d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        g gVar;
        g gVar2;
        obj = this.f56395e.f56397b;
        synchronized (obj) {
            try {
                e0 e0Var = this.f56395e;
                gVar = e0Var.f56398c;
                if (gVar != null) {
                    gVar2 = e0Var.f56398c;
                    gVar2.onSuccess(this.f56394d.l());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
