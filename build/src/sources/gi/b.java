package gi;

import android.os.IBinder;
import android.os.IInterface;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f27016e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f27017i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(e eVar, IBinder iBinder) {
        this.f27016e = iBinder;
        this.f27017i = eVar;
    }

    @Override // gi.u0
    public final void b() {
        a1 a1Var;
        List<Runnable> list;
        List list2;
        a1Var = this.f27017i.f27019d.f27029i;
        this.f27017i.f27019d.f27034n = (IInterface) a1Var.a(this.f27016e);
        f.r(this.f27017i.f27019d);
        this.f27017i.f27019d.f27027g = false;
        list = this.f27017i.f27019d.f27024d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f27017i.f27019d.f27024d;
        list2.clear();
    }
}
