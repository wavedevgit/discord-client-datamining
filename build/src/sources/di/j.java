package di;

import android.os.Bundle;
import ei.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class j extends ei.g {

    /* renamed from: c  reason: collision with root package name */
    final ei.i f20776c;

    /* renamed from: d  reason: collision with root package name */
    final yg.k f20777d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f20778e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(l lVar, ei.i iVar, yg.k kVar) {
        this.f20778e = lVar;
        this.f20776c = iVar;
        this.f20777d = kVar;
    }

    @Override // ei.h
    public void H0(Bundle bundle) {
        t tVar = this.f20778e.f20781a;
        if (tVar != null) {
            tVar.r(this.f20777d);
        }
        this.f20776c.d("onGetLaunchReviewFlowInfo", new Object[0]);
    }
}
