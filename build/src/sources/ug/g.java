package ug;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends fg.a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public g(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.signin.internal.ISignInService");
    }

    public final void S0(j jVar, f fVar) {
        Parcel e10 = e();
        fg.c.c(e10, jVar);
        fg.c.d(e10, fVar);
        f(12, e10);
    }
}
