package ki;

import android.os.IBinder;
import android.os.IInterface;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f31660e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f31661i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(e eVar, IBinder iBinder) {
        this.f31660e = iBinder;
        this.f31661i = eVar;
    }

    @Override // ki.u0
    public final void b() {
        a1 a1Var;
        List<Runnable> list;
        List list2;
        a1Var = this.f31661i.f31663d.f31673i;
        this.f31661i.f31663d.f31678n = (IInterface) a1Var.a(this.f31660e);
        f.r(this.f31661i.f31663d);
        this.f31661i.f31663d.f31671g = false;
        list = this.f31661i.f31663d.f31668d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f31661i.f31663d.f31668d;
        list2.clear();
    }
}
