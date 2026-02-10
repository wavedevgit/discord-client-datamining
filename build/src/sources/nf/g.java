package nf;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends gg.a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public g(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.common.moduleinstall.internal.IModuleInstallService");
    }

    public final void W0(f fVar, a aVar) {
        Parcel e10 = e();
        gg.c.d(e10, fVar);
        gg.c.c(e10, aVar);
        f(1, e10);
    }

    public final void X0(f fVar, a aVar, h hVar) {
        Parcel e10 = e();
        gg.c.d(e10, fVar);
        gg.c.c(e10, aVar);
        gg.c.d(e10, hVar);
        f(2, e10);
    }
}
