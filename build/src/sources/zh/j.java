package zh;

import ai.t;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class j extends ai.g {

    /* renamed from: c  reason: collision with root package name */
    final ai.i f55835c;

    /* renamed from: d  reason: collision with root package name */
    final wg.k f55836d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f55837e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(l lVar, ai.i iVar, wg.k kVar) {
        this.f55837e = lVar;
        this.f55835c = iVar;
        this.f55836d = kVar;
    }

    @Override // ai.h
    public void B0(Bundle bundle) {
        t tVar = this.f55837e.f55840a;
        if (tVar != null) {
            tVar.r(this.f55836d);
        }
        this.f55835c.d("onGetLaunchReviewFlowInfo", new Object[0]);
    }
}
