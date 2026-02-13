package ni;

import android.os.IBinder;
import android.os.IInterface;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f38467e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f38468i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(e eVar, IBinder iBinder) {
        this.f38467e = iBinder;
        this.f38468i = eVar;
    }

    @Override // ni.u0
    public final void b() {
        a1 a1Var;
        List<Runnable> list;
        List list2;
        a1Var = this.f38468i.f38470d.f38480i;
        this.f38468i.f38470d.f38485n = (IInterface) a1Var.a(this.f38467e);
        f.r(this.f38468i.f38470d);
        this.f38468i.f38470d.f38478g = false;
        list = this.f38468i.f38470d.f38475d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f38468i.f38470d.f38475d;
        list2.clear();
    }
}
