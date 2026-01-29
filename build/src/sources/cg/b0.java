package cg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b0 extends a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.auth.api.identity.internal.ISignInService");
    }

    public final void S0(y yVar, ve.d dVar) {
        Parcel e10 = e();
        p.d(e10, yVar);
        p.c(e10, dVar);
        f(3, e10);
    }

    public final void h(v vVar, ve.a aVar) {
        Parcel e10 = e();
        p.d(e10, vVar);
        p.c(e10, aVar);
        f(1, e10);
    }
}
