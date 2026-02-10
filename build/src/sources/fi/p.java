package fi;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f22645e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ s f22646i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(s sVar, IBinder iBinder) {
        this.f22646i = sVar;
        this.f22645e = iBinder;
    }

    @Override // fi.j
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f22646i.f22648d.f22662m = e.f(this.f22645e);
        t.n(this.f22646i.f22648d);
        this.f22646i.f22648d.f22656g = false;
        list = this.f22646i.f22648d.f22653d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f22646i.f22648d.f22653d;
        list2.clear();
    }
}
