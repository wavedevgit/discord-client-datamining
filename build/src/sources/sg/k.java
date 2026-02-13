package sg;

import android.os.IBinder;
import java.util.List;
import java.util.Objects;
import yh.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k extends e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f48669e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ m f48670i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(m mVar, IBinder iBinder) {
        this.f48669e = iBinder;
        Objects.requireNonNull(mVar);
        this.f48670i = mVar;
    }

    @Override // sg.e
    public final void b() {
        List<Runnable> list;
        List list2;
        yh.a f10 = a.AbstractBinderC0776a.f(this.f48669e);
        o oVar = this.f48670i.f48672d;
        oVar.f48686m = f10;
        o.r(oVar);
        oVar.f48680g = false;
        list = oVar.f48677d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = oVar.f48677d;
        list2.clear();
    }
}
