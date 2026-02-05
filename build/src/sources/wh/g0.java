package wh;

import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g0 extends a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public g0(IBinder iBinder) {
        super(iBinder, "com.google.android.play.core.assetpacks.protocol.IAssetPackExtractionServiceCallback");
    }

    public final void O0(Bundle bundle, Bundle bundle2) {
        Parcel e10 = e();
        y.c(e10, bundle);
        y.c(e10, bundle2);
        f(2, e10);
    }

    public final void c(Bundle bundle) {
        Parcel e10 = e();
        y.c(e10, bundle);
        f(4, e10);
    }

    public final void g(Bundle bundle) {
        Parcel e10 = e();
        y.c(e10, bundle);
        f(3, e10);
    }
}
