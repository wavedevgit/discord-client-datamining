package wg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f52627d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ u f52628e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(u uVar, Task task) {
        this.f52628e = uVar;
        this.f52627d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        m0 m0Var;
        m0 m0Var2;
        m0 m0Var3;
        c cVar;
        m0 m0Var4;
        m0 m0Var5;
        if (this.f52627d.n()) {
            m0Var5 = this.f52628e.f52631c;
            m0Var5.u();
            return;
        }
        try {
            cVar = this.f52628e.f52630b;
            Object a10 = cVar.a(this.f52627d);
            m0Var4 = this.f52628e.f52631c;
            m0Var4.t(a10);
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                m0Var3 = this.f52628e.f52631c;
                m0Var3.s((Exception) e10.getCause());
                return;
            }
            m0Var2 = this.f52628e.f52631c;
            m0Var2.s(e10);
        } catch (Exception e11) {
            m0Var = this.f52628e.f52631c;
            m0Var.s(e11);
        }
    }
}
