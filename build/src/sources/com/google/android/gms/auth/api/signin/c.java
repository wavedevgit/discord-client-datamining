package com.google.android.gms.auth.api.signin;

import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Scope;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        String str = null;
        String str2 = null;
        String str3 = null;
        String str4 = null;
        Uri uri = null;
        String str5 = null;
        String str6 = null;
        ArrayList arrayList = null;
        String str7 = null;
        String str8 = null;
        long j10 = 0;
        int i10 = 0;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 1:
                    i10 = hf.b.t(parcel, r10);
                    break;
                case 2:
                    str = hf.b.f(parcel, r10);
                    break;
                case 3:
                    str2 = hf.b.f(parcel, r10);
                    break;
                case 4:
                    str3 = hf.b.f(parcel, r10);
                    break;
                case 5:
                    str4 = hf.b.f(parcel, r10);
                    break;
                case 6:
                    uri = (Uri) hf.b.e(parcel, r10, Uri.CREATOR);
                    break;
                case 7:
                    str5 = hf.b.f(parcel, r10);
                    break;
                case 8:
                    j10 = hf.b.v(parcel, r10);
                    break;
                case 9:
                    str6 = hf.b.f(parcel, r10);
                    break;
                case 10:
                    arrayList = hf.b.j(parcel, r10, Scope.CREATOR);
                    break;
                case 11:
                    str7 = hf.b.f(parcel, r10);
                    break;
                case 12:
                    str8 = hf.b.f(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new GoogleSignInAccount(i10, str, str2, str3, str4, uri, str5, j10, str6, arrayList, str7, str8);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new GoogleSignInAccount[i10];
    }
}
