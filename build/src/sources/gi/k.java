package gi;

import android.app.PendingIntent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k extends j {

    /* renamed from: f  reason: collision with root package name */
    final String f25715f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(l lVar, zg.k kVar, String str) {
        super(lVar, new hi.i("OnRequestInstallCallback"), kVar);
        this.f25715f = str;
    }

    @Override // gi.j, hi.h
    public final void J0(Bundle bundle) {
        super.J0(bundle);
        this.f25713d.e(new d((PendingIntent) bundle.get("confirmation_intent"), bundle.getBoolean("is_review_no_op")));
    }
}
