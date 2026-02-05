package xg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f53854d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ u f53855e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(u uVar, Task task) {
        this.f53855e = uVar;
        this.f53854d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        m0 m0Var;
        m0 m0Var2;
        m0 m0Var3;
        c cVar;
        m0 m0Var4;
        m0 m0Var5;
        if (this.f53854d.n()) {
            m0Var5 = this.f53855e.f53858c;
            m0Var5.u();
            return;
        }
        try {
            cVar = this.f53855e.f53857b;
            Object a10 = cVar.a(this.f53854d);
            m0Var4 = this.f53855e.f53858c;
            m0Var4.t(a10);
        } catch (i e10) {
            if (e10.getCause() instanceof Exception) {
                m0Var3 = this.f53855e.f53858c;
                m0Var3.s((Exception) e10.getCause());
                return;
            }
            m0Var2 = this.f53855e.f53858c;
            m0Var2.s(e10);
        } catch (Exception e11) {
            m0Var = this.f53855e.f53858c;
            m0Var.s(e11);
        }
    }
}
