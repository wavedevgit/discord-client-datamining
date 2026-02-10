package gi;

import android.os.Bundle;
import hi.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class j extends hi.g {

    /* renamed from: c  reason: collision with root package name */
    final hi.i f25711c;

    /* renamed from: d  reason: collision with root package name */
    final zg.k f25712d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f25713e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(l lVar, hi.i iVar, zg.k kVar) {
        this.f25713e = lVar;
        this.f25711c = iVar;
        this.f25712d = kVar;
    }

    @Override // hi.h
    public void J0(Bundle bundle) {
        t tVar = this.f25713e.f25716a;
        if (tVar != null) {
            tVar.r(this.f25712d);
        }
        this.f25711c.d("onGetLaunchReviewFlowInfo", new Object[0]);
    }
}
