package zg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f57002d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ e0 f57003e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(e0 e0Var, Task task) {
        this.f57003e = e0Var;
        this.f57002d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        g gVar;
        g gVar2;
        obj = this.f57003e.f57005b;
        synchronized (obj) {
            try {
                e0 e0Var = this.f57003e;
                gVar = e0Var.f57006c;
                if (gVar != null) {
                    gVar2 = e0Var.f57006c;
                    gVar2.onSuccess(this.f57002d.l());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
