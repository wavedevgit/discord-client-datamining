package xh;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f54729e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ t0 f54730i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(t0 t0Var, IBinder iBinder) {
        this.f54729e = iBinder;
        this.f54730i = t0Var;
    }

    @Override // xh.l0
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f54730i.f54732d.f54747m = a0.f(this.f54729e);
        v0.r(this.f54730i.f54732d);
        this.f54730i.f54732d.f54741g = false;
        list = this.f54730i.f54732d.f54738d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f54730i.f54732d.f54738d;
        list2.clear();
    }
}
