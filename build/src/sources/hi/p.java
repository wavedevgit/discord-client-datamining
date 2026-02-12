package hi;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f27358e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ s f27359i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(s sVar, IBinder iBinder) {
        this.f27359i = sVar;
        this.f27358e = iBinder;
    }

    @Override // hi.j
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f27359i.f27361d.f27375m = e.f(this.f27358e);
        t.n(this.f27359i.f27361d);
        this.f27359i.f27361d.f27369g = false;
        list = this.f27359i.f27361d.f27366d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f27359i.f27361d.f27366d;
        list2.clear();
    }
}
