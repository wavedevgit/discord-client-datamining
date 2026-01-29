package com.google.android.gms.fido.fido2.api.common;

import android.os.Parcel;
import android.os.Parcelable;
import android.os.ResultReceiver;
import java.util.ArrayList;
import wf.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
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
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 2:
                    bArr = hf.b.b(parcel, r10);
                    break;
                case 3:
                    d10 = hf.b.p(parcel, r10);
                    break;
                case 4:
                    str = hf.b.f(parcel, r10);
                    break;
                case 5:
                    arrayList = hf.b.j(parcel, r10, s.CREATOR);
                    break;
                case 6:
                    num = hf.b.u(parcel, r10);
                    break;
                case 7:
                    aVar = (a) hf.b.e(parcel, r10, a.CREATOR);
                    break;
                case 8:
                    str2 = hf.b.f(parcel, r10);
                    break;
                case 9:
                    authenticationExtensions = (AuthenticationExtensions) hf.b.e(parcel, r10, AuthenticationExtensions.CREATOR);
                    break;
                case 10:
                    l10 = hf.b.w(parcel, r10);
                    break;
                case 11:
                    str3 = hf.b.f(parcel, r10);
                    break;
                case 12:
                    resultReceiver = (ResultReceiver) hf.b.e(parcel, r10, ResultReceiver.CREATOR);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new PublicKeyCredentialRequestOptions(bArr, d10, str, arrayList, num, aVar, str2, authenticationExtensions, l10, str3, resultReceiver);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new PublicKeyCredentialRequestOptions[i10];
    }
}
