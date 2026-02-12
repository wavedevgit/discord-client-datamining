package gi;

import android.os.Bundle;
import hi.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class j extends hi.g {

    /* renamed from: c  reason: collision with root package name */
    final hi.i f25712c;

    /* renamed from: d  reason: collision with root package name */
    final zg.k f25713d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f25714e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(l lVar, hi.i iVar, zg.k kVar) {
        this.f25714e = lVar;
        this.f25712c = iVar;
        this.f25713d = kVar;
    }

    @Override // hi.h
    public void J0(Bundle bundle) {
        t tVar = this.f25714e.f25717a;
        if (tVar != null) {
            tVar.r(this.f25713d);
        }
        this.f25712c.d("onGetLaunchReviewFlowInfo", new Object[0]);
    }
}
