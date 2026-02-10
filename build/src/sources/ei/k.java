package ei;

import android.app.PendingIntent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k extends j {

    /* renamed from: f  reason: collision with root package name */
    final String f21668f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(l lVar, zg.k kVar, String str) {
        super(lVar, new fi.i("OnRequestInstallCallback"), kVar);
        this.f21668f = str;
    }

    @Override // ei.j, fi.h
    public final void H0(Bundle bundle) {
        super.H0(bundle);
        this.f21666d.e(new d((PendingIntent) bundle.get("confirmation_intent"), bundle.getBoolean("is_review_no_op")));
    }
}
