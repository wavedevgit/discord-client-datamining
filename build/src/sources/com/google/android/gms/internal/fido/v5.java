package com.google.android.gms.internal.fido;

import android.app.PendingIntent;
import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class v5 extends b0 implements w5 {
    public v5() {
        super("com.google.android.gms.fido.fido2.internal.regular.IFido2AppCallbacks");
    }

    @Override // com.google.android.gms.internal.fido.b0
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 == 1) {
            c1.b(parcel);
            O((Status) c1.a(parcel, Status.CREATOR), (PendingIntent) c1.a(parcel, PendingIntent.CREATOR));
            return true;
        }
        return false;
    }
}
