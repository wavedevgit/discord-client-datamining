package wg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f52429d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ u f52430e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(u uVar, Task task) {
        this.f52430e = uVar;
        this.f52429d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        m0 m0Var;
        m0 m0Var2;
        m0 m0Var3;
        c cVar;
        m0 m0Var4;
        m0 m0Var5;
        if (this.f52429d.n()) {
            m0Var5 = this.f52430e.f52433c;
            m0Var5.u();
            return;
        }
        try {
            cVar = this.f52430e.f52432b;
            Object a10 = cVar.a(this.f52429d);
            m0Var4 = this.f52430e.f52433c;
            m0Var4.t(a10);
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                m0Var3 = this.f52430e.f52433c;
                m0Var3.s((Exception) e10.getCause());
                return;
            }
            m0Var2 = this.f52430e.f52433c;
            m0Var2.s(e10);
        } catch (Exception e11) {
            m0Var = this.f52430e.f52433c;
            m0Var.s(e11);
        }
    }
}
