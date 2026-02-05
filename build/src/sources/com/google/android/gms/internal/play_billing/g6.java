package com.google.android.gms.internal.play_billing;

import android.os.Bundle;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g6 extends m6 implements h6 {
    public g6() {
        super("com.android.vending.billing.IInAppBillingGetBillingConfigCallback");
    }

    @Override // com.google.android.gms.internal.play_billing.m6
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 == 1) {
            n6.b(parcel);
            N0((Bundle) n6.a(parcel, Bundle.CREATOR));
            parcel2.writeNoException();
            return true;
        }
        return false;
    }
}
