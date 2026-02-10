package li;

import android.os.IBinder;
import android.os.IInterface;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f35928e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f35929i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(e eVar, IBinder iBinder) {
        this.f35928e = iBinder;
        this.f35929i = eVar;
    }

    @Override // li.u0
    public final void b() {
        a1 a1Var;
        List<Runnable> list;
        List list2;
        a1Var = this.f35929i.f35931d.f35941i;
        this.f35929i.f35931d.f35946n = (IInterface) a1Var.a(this.f35928e);
        f.r(this.f35929i.f35931d);
        this.f35929i.f35931d.f35939g = false;
        list = this.f35929i.f35931d.f35936d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f35929i.f35931d.f35936d;
        list2.clear();
    }
}
