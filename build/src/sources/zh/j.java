package zh;

import ai.t;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class j extends ai.g {

    /* renamed from: c  reason: collision with root package name */
    final ai.i f55703c;

    /* renamed from: d  reason: collision with root package name */
    final wg.k f55704d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f55705e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(l lVar, ai.i iVar, wg.k kVar) {
        this.f55705e = lVar;
        this.f55703c = iVar;
        this.f55704d = kVar;
    }

    @Override // ai.h
    public void B0(Bundle bundle) {
        t tVar = this.f55705e.f55708a;
        if (tVar != null) {
            tVar.r(this.f55704d);
        }
        this.f55703c.d("onGetLaunchReviewFlowInfo", new Object[0]);
    }
}
