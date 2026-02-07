package ki;

import android.os.IBinder;
import android.os.IInterface;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f31708e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f31709i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(e eVar, IBinder iBinder) {
        this.f31708e = iBinder;
        this.f31709i = eVar;
    }

    @Override // ki.u0
    public final void b() {
        a1 a1Var;
        List<Runnable> list;
        List list2;
        a1Var = this.f31709i.f31711d.f31721i;
        this.f31709i.f31711d.f31726n = (IInterface) a1Var.a(this.f31708e);
        f.r(this.f31709i.f31711d);
        this.f31709i.f31711d.f31719g = false;
        list = this.f31709i.f31711d.f31716d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f31709i.f31711d.f31716d;
        list2.clear();
    }
}
