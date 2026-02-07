package yg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f55369d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ e0 f55370e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(e0 e0Var, Task task) {
        this.f55370e = e0Var;
        this.f55369d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        g gVar;
        g gVar2;
        obj = this.f55370e.f55372b;
        synchronized (obj) {
            try {
                e0 e0Var = this.f55370e;
                gVar = e0Var.f55373c;
                if (gVar != null) {
                    gVar2 = e0Var.f55373c;
                    gVar2.onSuccess(this.f55369d.l());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
