package th;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f49574e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ t0 f49575i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(t0 t0Var, IBinder iBinder) {
        this.f49574e = iBinder;
        this.f49575i = t0Var;
    }

    @Override // th.l0
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f49575i.f49577d.f49592m = a0.f(this.f49574e);
        v0.r(this.f49575i.f49577d);
        this.f49575i.f49577d.f49586g = false;
        list = this.f49575i.f49577d.f49583d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f49575i.f49577d.f49583d;
        list2.clear();
    }
}
