package rf;

import com.google.android.gms.common.api.Status;
import ff.r;
import rf.a;
import xg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends a.AbstractBinderC0623a {

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ k f48814c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(k kVar) {
        this.f48814c = kVar;
    }

    @Override // rf.a
    public final void J(Status status, qf.c cVar) {
        Integer num;
        if (cVar != null) {
            num = Integer.valueOf(cVar.b());
        } else {
            num = null;
        }
        r.a(status, num, this.f48814c);
    }
}
