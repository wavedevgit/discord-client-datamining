package xh;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f54681e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ t0 f54682i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(t0 t0Var, IBinder iBinder) {
        this.f54681e = iBinder;
        this.f54682i = t0Var;
    }

    @Override // xh.l0
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f54682i.f54684d.f54699m = a0.f(this.f54681e);
        v0.r(this.f54682i.f54684d);
        this.f54682i.f54684d.f54693g = false;
        list = this.f54682i.f54684d.f54690d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f54682i.f54684d.f54690d;
        list2.clear();
    }
}
