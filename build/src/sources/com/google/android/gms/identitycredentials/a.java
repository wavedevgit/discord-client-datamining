package com.google.android.gms.identitycredentials;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.os.ResultReceiver;
import hf.b;
import hf.c;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Parcelable.Creator {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(GetCredentialRequest getCredentialRequest, Parcel parcel, int i10) {
        int a10 = c.a(parcel);
        c.w(parcel, 1, getCredentialRequest.b(), false);
        c.e(parcel, 2, getCredentialRequest.c(), false);
        c.s(parcel, 3, getCredentialRequest.d(), false);
        c.q(parcel, 4, getCredentialRequest.e(), i10, false);
        c.b(parcel, a10);
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: a */
    public GetCredentialRequest createFromParcel(Parcel parcel) {
        int A = b.A(parcel);
        ArrayList arrayList = null;
        Bundle bundle = null;
        String str = null;
        ResultReceiver resultReceiver = null;
        while (parcel.dataPosition() < A) {
            int r10 = b.r(parcel);
            int l10 = b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    if (l10 != 3) {
                        if (l10 != 4) {
                            b.z(parcel, r10);
                        } else {
                            resultReceiver = (ResultReceiver) b.e(parcel, r10, ResultReceiver.CREATOR);
                        }
                    } else {
                        str = b.f(parcel, r10);
                    }
                } else {
                    bundle = b.a(parcel, r10);
                }
            } else {
                arrayList = b.j(parcel, r10, xf.c.CREATOR);
            }
        }
        b.k(parcel, A);
        return new GetCredentialRequest(arrayList, bundle, str, resultReceiver);
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: b */
    public GetCredentialRequest[] newArray(int i10) {
        return new GetCredentialRequest[i10];
    }
}
