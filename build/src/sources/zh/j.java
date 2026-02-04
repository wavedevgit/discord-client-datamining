package zh;

import ai.t;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class j extends ai.g {

    /* renamed from: c  reason: collision with root package name */
    final ai.i f55970c;

    /* renamed from: d  reason: collision with root package name */
    final wg.k f55971d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f55972e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(l lVar, ai.i iVar, wg.k kVar) {
        this.f55972e = lVar;
        this.f55970c = iVar;
        this.f55971d = kVar;
    }

    @Override // ai.h
    public void B0(Bundle bundle) {
        t tVar = this.f55972e.f55975a;
        if (tVar != null) {
            tVar.r(this.f55971d);
        }
        this.f55970c.d("onGetLaunchReviewFlowInfo", new Object[0]);
    }
}
