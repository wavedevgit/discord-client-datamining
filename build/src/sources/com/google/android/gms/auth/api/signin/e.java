package com.google.android.gms.auth.api.signin;

import android.accounts.Account;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Scope;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        ArrayList arrayList = null;
        Account account = null;
        String str = null;
        String str2 = null;
        ArrayList arrayList2 = null;
        String str3 = null;
        int i10 = 0;
        boolean z10 = false;
        boolean z11 = false;
        boolean z12 = false;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 1:
                    i10 = jf.b.t(parcel, r10);
                    break;
                case 2:
                    arrayList = jf.b.j(parcel, r10, Scope.CREATOR);
                    break;
                case 3:
                    account = (Account) jf.b.e(parcel, r10, Account.CREATOR);
                    break;
                case 4:
                    z10 = jf.b.m(parcel, r10);
                    break;
                case 5:
                    z11 = jf.b.m(parcel, r10);
                    break;
                case 6:
                    z12 = jf.b.m(parcel, r10);
                    break;
                case 7:
                    str = jf.b.f(parcel, r10);
                    break;
                case 8:
                    str2 = jf.b.f(parcel, r10);
                    break;
                case 9:
                    arrayList2 = jf.b.j(parcel, r10, af.a.CREATOR);
                    break;
                case 10:
                    str3 = jf.b.f(parcel, r10);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new GoogleSignInOptions(i10, arrayList, account, z10, z11, z12, str, str2, arrayList2, str3);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new GoogleSignInOptions[i10];
    }
}
