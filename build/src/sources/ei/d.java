package ei;

import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends a implements f {
    /* JADX INFO: Access modifiers changed from: package-private */
    public d(IBinder iBinder) {
        super(iBinder, "com.google.android.play.core.inappreview.protocol.IInAppReviewService");
    }

    @Override // ei.f
    public final void G(String str, Bundle bundle, h hVar) {
        Parcel e10 = e();
        e10.writeString(str);
        c.c(e10, bundle);
        c.d(e10, hVar);
        f(2, e10);
    }
}
