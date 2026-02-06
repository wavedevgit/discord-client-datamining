package ei;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f21537e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ s f21538i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(s sVar, IBinder iBinder) {
        this.f21538i = sVar;
        this.f21537e = iBinder;
    }

    @Override // ei.j
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f21538i.f21540d.f21554m = e.f(this.f21537e);
        t.n(this.f21538i.f21540d);
        this.f21538i.f21540d.f21548g = false;
        list = this.f21538i.f21540d.f21545d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f21538i.f21540d.f21545d;
        list2.clear();
    }
}
