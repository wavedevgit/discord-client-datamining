package yg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f55358d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ u f55359e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(u uVar, Task task) {
        this.f55359e = uVar;
        this.f55358d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        m0 m0Var;
        m0 m0Var2;
        m0 m0Var3;
        c cVar;
        m0 m0Var4;
        m0 m0Var5;
        if (this.f55358d.n()) {
            m0Var5 = this.f55359e.f55362c;
            m0Var5.u();
            return;
        }
        try {
            cVar = this.f55359e.f55361b;
            Object a10 = cVar.a(this.f55358d);
            m0Var4 = this.f55359e.f55362c;
            m0Var4.t(a10);
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                m0Var3 = this.f55359e.f55362c;
                m0Var3.s((Exception) e10.getCause());
                return;
            }
            m0Var2 = this.f55359e.f55362c;
            m0Var2.s(e10);
        } catch (Exception e11) {
            m0Var = this.f55359e.f55362c;
            m0Var.s(e11);
        }
    }
}
