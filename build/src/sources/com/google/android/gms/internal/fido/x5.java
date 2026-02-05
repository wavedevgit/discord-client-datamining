package com.google.android.gms.internal.fido;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import com.google.android.gms.fido.fido2.api.common.PublicKeyCredentialRequestOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x5 extends a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public x5(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.fido.fido2.internal.regular.IFido2AppService");
    }

    /* JADX WARN: Multi-variable type inference failed */
    public final void W0(w5 w5Var, PublicKeyCredentialRequestOptions publicKeyCredentialRequestOptions) {
        Parcel e10 = e();
        int i10 = c1.f13971b;
        e10.writeStrongBinder(w5Var);
        c1.c(e10, publicKeyCredentialRequestOptions);
        f(2, e10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public final void h(w5 w5Var, wf.r rVar) {
        Parcel e10 = e();
        int i10 = c1.f13971b;
        e10.writeStrongBinder(w5Var);
        c1.c(e10, rVar);
        f(1, e10);
    }
}
