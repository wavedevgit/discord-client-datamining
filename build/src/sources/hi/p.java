package hi;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f27357e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ s f27358i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(s sVar, IBinder iBinder) {
        this.f27358i = sVar;
        this.f27357e = iBinder;
    }

    @Override // hi.j
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f27358i.f27360d.f27374m = e.f(this.f27357e);
        t.n(this.f27358i.f27360d);
        this.f27358i.f27360d.f27368g = false;
        list = this.f27358i.f27360d.f27365d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f27358i.f27360d.f27365d;
        list2.clear();
    }
}
