package ei;

import android.os.Bundle;
import fi.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class j extends fi.g {

    /* renamed from: c  reason: collision with root package name */
    final fi.i f21665c;

    /* renamed from: d  reason: collision with root package name */
    final zg.k f21666d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f21667e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(l lVar, fi.i iVar, zg.k kVar) {
        this.f21667e = lVar;
        this.f21665c = iVar;
        this.f21666d = kVar;
    }

    @Override // fi.h
    public void H0(Bundle bundle) {
        t tVar = this.f21667e.f21670a;
        if (tVar != null) {
            tVar.r(this.f21666d);
        }
        this.f21665c.d("onGetLaunchReviewFlowInfo", new Object[0]);
    }
}
