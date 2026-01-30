package gi;

import android.os.IBinder;
import android.os.IInterface;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f26921e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f26922i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(e eVar, IBinder iBinder) {
        this.f26921e = iBinder;
        this.f26922i = eVar;
    }

    @Override // gi.u0
    public final void b() {
        a1 a1Var;
        List<Runnable> list;
        List list2;
        a1Var = this.f26922i.f26924d.f26934i;
        this.f26922i.f26924d.f26939n = (IInterface) a1Var.a(this.f26921e);
        f.r(this.f26922i.f26924d);
        this.f26922i.f26924d.f26932g = false;
        list = this.f26922i.f26924d.f26929d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f26922i.f26924d.f26929d;
        list2.clear();
    }
}
