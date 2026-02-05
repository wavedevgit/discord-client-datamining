package wh;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f53094e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ t0 f53095i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(t0 t0Var, IBinder iBinder) {
        this.f53094e = iBinder;
        this.f53095i = t0Var;
    }

    @Override // wh.l0
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f53095i.f53097d.f53112m = a0.f(this.f53094e);
        v0.r(this.f53095i.f53097d);
        this.f53095i.f53097d.f53106g = false;
        list = this.f53095i.f53097d.f53103d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f53095i.f53097d.f53103d;
        list2.clear();
    }
}
