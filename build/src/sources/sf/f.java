package sf;

import com.google.android.gms.common.api.Status;
import gf.r;
import sf.a;
import zg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends a.AbstractBinderC0652a {

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ k f48087c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(k kVar) {
        this.f48087c = kVar;
    }

    @Override // sf.a
    public final void E(Status status, rf.c cVar) {
        Integer num;
        if (cVar != null) {
            num = Integer.valueOf(cVar.b());
        } else {
            num = null;
        }
        r.a(status, num, this.f48087c);
    }
}
