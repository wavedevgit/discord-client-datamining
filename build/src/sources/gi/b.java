package gi;

import android.os.IBinder;
import android.os.IInterface;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f26229e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f26230i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(e eVar, IBinder iBinder) {
        this.f26229e = iBinder;
        this.f26230i = eVar;
    }

    @Override // gi.u0
    public final void b() {
        a1 a1Var;
        List<Runnable> list;
        List list2;
        a1Var = this.f26230i.f26232d.f26242i;
        this.f26230i.f26232d.f26247n = (IInterface) a1Var.a(this.f26229e);
        f.r(this.f26230i.f26232d);
        this.f26230i.f26232d.f26240g = false;
        list = this.f26230i.f26232d.f26237d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f26230i.f26232d.f26237d;
        list2.clear();
    }
}
