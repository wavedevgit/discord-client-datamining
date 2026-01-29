package zh;

import android.app.PendingIntent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k extends j {

    /* renamed from: f  reason: collision with root package name */
    final String f55690f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(l lVar, wg.k kVar, String str) {
        super(lVar, new ai.i("OnRequestInstallCallback"), kVar);
        this.f55690f = str;
    }

    @Override // zh.j, ai.h
    public final void B0(Bundle bundle) {
        super.B0(bundle);
        this.f55688d.e(new d((PendingIntent) bundle.get("confirmation_intent"), bundle.getBoolean("is_review_no_op")));
    }
}
