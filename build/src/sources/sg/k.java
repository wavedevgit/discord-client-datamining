package sg;

import android.os.IBinder;
import java.util.List;
import java.util.Objects;
import yh.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k extends e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f48100e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ m f48101i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(m mVar, IBinder iBinder) {
        this.f48100e = iBinder;
        Objects.requireNonNull(mVar);
        this.f48101i = mVar;
    }

    @Override // sg.e
    public final void b() {
        List<Runnable> list;
        List list2;
        yh.a f10 = a.AbstractBinderC0776a.f(this.f48100e);
        o oVar = this.f48101i.f48103d;
        oVar.f48117m = f10;
        o.r(oVar);
        oVar.f48111g = false;
        list = oVar.f48108d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = oVar.f48108d;
        list2.clear();
    }
}
