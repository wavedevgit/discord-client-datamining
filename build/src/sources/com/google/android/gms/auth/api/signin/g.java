package com.google.android.gms.auth.api.signin;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String str = "";
        GoogleSignInAccount googleSignInAccount = null;
        String str2 = "";
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            int l10 = jf.b.l(r10);
            if (l10 != 4) {
                if (l10 != 7) {
                    if (l10 != 8) {
                        jf.b.z(parcel, r10);
                    } else {
                        str2 = jf.b.f(parcel, r10);
                    }
                } else {
                    googleSignInAccount = (GoogleSignInAccount) jf.b.e(parcel, r10, GoogleSignInAccount.CREATOR);
                }
            } else {
                str = jf.b.f(parcel, r10);
            }
        }
        jf.b.k(parcel, A);
        return new SignInAccount(str, googleSignInAccount, str2);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new SignInAccount[i10];
    }
}
