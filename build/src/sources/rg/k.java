package rg;

import android.os.IBinder;
import java.util.List;
import java.util.Objects;
import vh.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k extends e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f48911e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ m f48912i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(m mVar, IBinder iBinder) {
        this.f48911e = iBinder;
        Objects.requireNonNull(mVar);
        this.f48912i = mVar;
    }

    @Override // rg.e
    public final void b() {
        List<Runnable> list;
        List list2;
        vh.a f10 = a.AbstractBinderC0695a.f(this.f48911e);
        o oVar = this.f48912i.f48914d;
        oVar.f48928m = f10;
        o.r(oVar);
        oVar.f48922g = false;
        list = oVar.f48919d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = oVar.f48919d;
        list2.clear();
    }
}
