package zh;

import ai.t;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class j extends ai.g {

    /* renamed from: c  reason: collision with root package name */
    final ai.i f55973c;

    /* renamed from: d  reason: collision with root package name */
    final wg.k f55974d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f55975e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(l lVar, ai.i iVar, wg.k kVar) {
        this.f55975e = lVar;
        this.f55973c = iVar;
        this.f55974d = kVar;
    }

    @Override // ai.h
    public void B0(Bundle bundle) {
        t tVar = this.f55975e.f55978a;
        if (tVar != null) {
            tVar.r(this.f55974d);
        }
        this.f55973c.d("onGetLaunchReviewFlowInfo", new Object[0]);
    }
}
