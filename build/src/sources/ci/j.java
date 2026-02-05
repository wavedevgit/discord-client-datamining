package ci;

import android.os.Bundle;
import di.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class j extends di.g {

    /* renamed from: c  reason: collision with root package name */
    final di.i f7629c;

    /* renamed from: d  reason: collision with root package name */
    final xg.k f7630d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f7631e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(l lVar, di.i iVar, xg.k kVar) {
        this.f7631e = lVar;
        this.f7629c = iVar;
        this.f7630d = kVar;
    }

    @Override // di.h
    public void F0(Bundle bundle) {
        t tVar = this.f7631e.f7634a;
        if (tVar != null) {
            tVar.r(this.f7630d);
        }
        this.f7629c.d("onGetLaunchReviewFlowInfo", new Object[0]);
    }
}
