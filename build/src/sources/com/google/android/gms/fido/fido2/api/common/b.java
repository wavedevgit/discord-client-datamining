package com.google.android.gms.fido.fido2.api.common;

import android.os.Parcel;
import android.os.Parcelable;
import android.os.ResultReceiver;
import java.util.ArrayList;
import xf.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        byte[] bArr = null;
        Double d10 = null;
        String str = null;
        ArrayList arrayList = null;
        Integer num = null;
        a aVar = null;
        String str2 = null;
        AuthenticationExtensions authenticationExtensions = null;
        Long l10 = null;
        String str3 = null;
        ResultReceiver resultReceiver = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 2:
                    bArr = jf.b.b(parcel, r10);
                    break;
                case 3:
                    d10 = jf.b.p(parcel, r10);
                    break;
                case 4:
                    str = jf.b.f(parcel, r10);
                    break;
                case 5:
                    arrayList = jf.b.j(parcel, r10, s.CREATOR);
                    break;
                case 6:
                    num = jf.b.u(parcel, r10);
                    break;
                case 7:
                    aVar = (a) jf.b.e(parcel, r10, a.CREATOR);
                    break;
                case 8:
                    str2 = jf.b.f(parcel, r10);
                    break;
                case 9:
                    authenticationExtensions = (AuthenticationExtensions) jf.b.e(parcel, r10, AuthenticationExtensions.CREATOR);
                    break;
                case 10:
                    l10 = jf.b.w(parcel, r10);
                    break;
                case 11:
                    str3 = jf.b.f(parcel, r10);
                    break;
                case 12:
                    resultReceiver = (ResultReceiver) jf.b.e(parcel, r10, ResultReceiver.CREATOR);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new PublicKeyCredentialRequestOptions(bArr, d10, str, arrayList, num, aVar, str2, authenticationExtensions, l10, str3, resultReceiver);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new PublicKeyCredentialRequestOptions[i10];
    }
}
