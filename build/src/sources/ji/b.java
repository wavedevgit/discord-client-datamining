package ji;

import android.os.IBinder;
import android.os.IInterface;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f30912e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f30913i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(e eVar, IBinder iBinder) {
        this.f30912e = iBinder;
        this.f30913i = eVar;
    }

    @Override // ji.u0
    public final void b() {
        a1 a1Var;
        List<Runnable> list;
        List list2;
        a1Var = this.f30913i.f30915d.f30925i;
        this.f30913i.f30915d.f30930n = (IInterface) a1Var.a(this.f30912e);
        f.r(this.f30913i.f30915d);
        this.f30913i.f30915d.f30923g = false;
        list = this.f30913i.f30915d.f30920d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f30913i.f30915d.f30920d;
        list2.clear();
    }
}
