package sg;

import android.os.IBinder;
import java.util.List;
import java.util.Objects;
import wh.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k extends e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f49784e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ m f49785i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(m mVar, IBinder iBinder) {
        this.f49784e = iBinder;
        Objects.requireNonNull(mVar);
        this.f49785i = mVar;
    }

    @Override // sg.e
    public final void b() {
        List<Runnable> list;
        List list2;
        wh.a f10 = a.AbstractBinderC0748a.f(this.f49784e);
        o oVar = this.f49785i.f49787d;
        oVar.f49801m = f10;
        o.r(oVar);
        oVar.f49795g = false;
        list = oVar.f49792d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = oVar.f49792d;
        list2.clear();
    }
}
