package th;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f50070e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ t0 f50071i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(t0 t0Var, IBinder iBinder) {
        this.f50070e = iBinder;
        this.f50071i = t0Var;
    }

    @Override // th.l0
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f50071i.f50073d.f50088m = a0.f(this.f50070e);
        v0.r(this.f50071i.f50073d);
        this.f50071i.f50073d.f50082g = false;
        list = this.f50071i.f50073d.f50079d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f50071i.f50073d.f50079d;
        list2.clear();
    }
}
