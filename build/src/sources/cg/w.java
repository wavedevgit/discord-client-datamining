package cg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w extends a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public w(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.auth.api.identity.internal.ICredentialSavingService");
    }

    public final void h(a0 a0Var, ve.f fVar) {
        Parcel e10 = e();
        p.d(e10, a0Var);
        p.c(e10, fVar);
        f(2, e10);
    }
}
