package ni;

import android.os.IBinder;
import android.os.IInterface;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f37898e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f37899i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(e eVar, IBinder iBinder) {
        this.f37898e = iBinder;
        this.f37899i = eVar;
    }

    @Override // ni.u0
    public final void b() {
        a1 a1Var;
        List<Runnable> list;
        List list2;
        a1Var = this.f37899i.f37901d.f37911i;
        this.f37899i.f37901d.f37916n = (IInterface) a1Var.a(this.f37898e);
        f.r(this.f37899i.f37901d);
        this.f37899i.f37901d.f37909g = false;
        list = this.f37899i.f37901d.f37906d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f37899i.f37901d.f37906d;
        list2.clear();
    }
}
