package sg;

import android.os.IBinder;
import java.util.List;
import java.util.Objects;
import yh.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k extends e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f48101e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ m f48102i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(m mVar, IBinder iBinder) {
        this.f48101e = iBinder;
        Objects.requireNonNull(mVar);
        this.f48102i = mVar;
    }

    @Override // sg.e
    public final void b() {
        List<Runnable> list;
        List list2;
        yh.a f10 = a.AbstractBinderC0776a.f(this.f48101e);
        o oVar = this.f48102i.f48104d;
        oVar.f48118m = f10;
        o.r(oVar);
        oVar.f48112g = false;
        list = oVar.f48109d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = oVar.f48109d;
        list2.clear();
    }
}
