package ni;

import android.os.IBinder;
import android.os.IInterface;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f37899e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f37900i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(e eVar, IBinder iBinder) {
        this.f37899e = iBinder;
        this.f37900i = eVar;
    }

    @Override // ni.u0
    public final void b() {
        a1 a1Var;
        List<Runnable> list;
        List list2;
        a1Var = this.f37900i.f37902d.f37912i;
        this.f37900i.f37902d.f37917n = (IInterface) a1Var.a(this.f37899e);
        f.r(this.f37900i.f37902d);
        this.f37900i.f37902d.f37910g = false;
        list = this.f37900i.f37902d.f37907d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f37900i.f37902d.f37907d;
        list2.clear();
    }
}
