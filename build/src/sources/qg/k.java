package qg;

import android.os.IBinder;
import java.util.List;
import java.util.Objects;
import uh.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k extends e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f47888e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ m f47889i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(m mVar, IBinder iBinder) {
        this.f47888e = iBinder;
        Objects.requireNonNull(mVar);
        this.f47889i = mVar;
    }

    @Override // qg.e
    public final void b() {
        List<Runnable> list;
        List list2;
        uh.a f10 = a.AbstractBinderC0664a.f(this.f47888e);
        o oVar = this.f47889i.f47891d;
        oVar.f47905m = f10;
        o.r(oVar);
        oVar.f47899g = false;
        list = oVar.f47896d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = oVar.f47896d;
        list2.clear();
    }
}
