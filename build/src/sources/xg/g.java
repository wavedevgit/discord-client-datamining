package xg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g extends gg.a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public g(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.signin.internal.ISignInService");
    }

    public final void W0(j jVar, f fVar) {
        Parcel e10 = e();
        gg.c.c(e10, jVar);
        gg.c.d(e10, fVar);
        f(12, e10);
    }
}
