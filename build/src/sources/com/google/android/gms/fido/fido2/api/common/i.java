package com.google.android.gms.fido.fido2.api.common;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        byte[] bArr = null;
        byte[] bArr2 = null;
        byte[] bArr3 = null;
        long j10 = 0;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            int l10 = jf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    if (l10 != 3) {
                        if (l10 != 4) {
                            jf.b.z(parcel, r10);
                        } else {
                            bArr3 = jf.b.b(parcel, r10);
                        }
                    } else {
                        bArr2 = jf.b.b(parcel, r10);
                    }
                } else {
                    bArr = jf.b.b(parcel, r10);
                }
            } else {
                j10 = jf.b.v(parcel, r10);
            }
        }
        jf.b.k(parcel, A);
        return new h(j10, bArr, bArr2, bArr3);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new h[i10];
    }
}
