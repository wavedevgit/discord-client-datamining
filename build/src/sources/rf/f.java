package rf;

import com.google.android.gms.common.api.Status;
import ff.r;
import rf.a;
import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends a.AbstractBinderC0621a {

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ k f48946c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(k kVar) {
        this.f48946c = kVar;
    }

    @Override // rf.a
    public final void L(Status status, qf.c cVar) {
        Integer num;
        if (cVar != null) {
            num = Integer.valueOf(cVar.b());
        } else {
            num = null;
        }
        r.a(status, num, this.f48946c);
    }
}
