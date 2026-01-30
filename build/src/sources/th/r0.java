package th;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f49590e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ t0 f49591i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(t0 t0Var, IBinder iBinder) {
        this.f49590e = iBinder;
        this.f49591i = t0Var;
    }

    @Override // th.l0
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f49591i.f49593d.f49608m = a0.f(this.f49590e);
        v0.r(this.f49591i.f49593d);
        this.f49591i.f49593d.f49602g = false;
        list = this.f49591i.f49593d.f49599d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f49591i.f49593d.f49599d;
        list2.clear();
    }
}
