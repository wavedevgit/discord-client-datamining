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
        int A = hf.b.A(parcel);
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
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 1:
                    i10 = hf.b.t(parcel, r10);
                    break;
                case 2:
                    arrayList = hf.b.j(parcel, r10, Scope.CREATOR);
                    break;
                case 3:
                    account = (Account) hf.b.e(parcel, r10, Account.CREATOR);
                    break;
                case 4:
                    z10 = hf.b.m(parcel, r10);
                    break;
                case 5:
                    z11 = hf.b.m(parcel, r10);
                    break;
                case 6:
                    z12 = hf.b.m(parcel, r10);
                    break;
                case 7:
                    str = hf.b.f(parcel, r10);
                    break;
                case 8:
                    str2 = hf.b.f(parcel, r10);
                    break;
                case 9:
                    arrayList2 = hf.b.j(parcel, r10, ze.a.CREATOR);
                    break;
                case 10:
                    str3 = hf.b.f(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new GoogleSignInOptions(i10, arrayList, account, z10, z11, z12, str, str2, arrayList2, str3);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new GoogleSignInOptions[i10];
    }
}
