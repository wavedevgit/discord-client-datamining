package wg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f52395d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ e0 f52396e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(e0 e0Var, Task task) {
        this.f52396e = e0Var;
        this.f52395d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        g gVar;
        g gVar2;
        obj = this.f52396e.f52398b;
        synchronized (obj) {
            try {
                e0 e0Var = this.f52396e;
                gVar = e0Var.f52399c;
                if (gVar != null) {
                    gVar2 = e0Var.f52399c;
                    gVar2.onSuccess(this.f52395d.l());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
