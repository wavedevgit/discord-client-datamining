package ci;

import android.app.PendingIntent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k extends j {

    /* renamed from: f  reason: collision with root package name */
    final String f7632f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(l lVar, xg.k kVar, String str) {
        super(lVar, new di.i("OnRequestInstallCallback"), kVar);
        this.f7632f = str;
    }

    @Override // ci.j, di.h
    public final void F0(Bundle bundle) {
        super.F0(bundle);
        this.f7630d.e(new d((PendingIntent) bundle.get("confirmation_intent"), bundle.getBoolean("is_review_no_op")));
    }
}
