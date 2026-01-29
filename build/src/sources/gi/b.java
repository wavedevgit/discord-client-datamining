package gi;

import android.os.IBinder;
import android.os.IInterface;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f26905e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f26906i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(e eVar, IBinder iBinder) {
        this.f26905e = iBinder;
        this.f26906i = eVar;
    }

    @Override // gi.u0
    public final void b() {
        a1 a1Var;
        List<Runnable> list;
        List list2;
        a1Var = this.f26906i.f26908d.f26918i;
        this.f26906i.f26908d.f26923n = (IInterface) a1Var.a(this.f26905e);
        f.r(this.f26906i.f26908d);
        this.f26906i.f26908d.f26916g = false;
        list = this.f26906i.f26908d.f26913d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f26906i.f26908d.f26913d;
        list2.clear();
    }
}
