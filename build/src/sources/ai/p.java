package ai;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f636e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ s f637i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(s sVar, IBinder iBinder) {
        this.f637i = sVar;
        this.f636e = iBinder;
    }

    @Override // ai.j
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f637i.f639d.f653m = e.f(this.f636e);
        t.n(this.f637i.f639d);
        this.f637i.f639d.f647g = false;
        list = this.f637i.f639d.f644d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f637i.f639d.f644d;
        list2.clear();
    }
}
