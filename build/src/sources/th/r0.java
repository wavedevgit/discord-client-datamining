package th;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f50073e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ t0 f50074i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(t0 t0Var, IBinder iBinder) {
        this.f50073e = iBinder;
        this.f50074i = t0Var;
    }

    @Override // th.l0
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f50074i.f50076d.f50091m = a0.f(this.f50073e);
        v0.r(this.f50074i.f50076d);
        this.f50074i.f50076d.f50085g = false;
        list = this.f50074i.f50076d.f50082d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f50074i.f50076d.f50082d;
        list2.clear();
    }
}
