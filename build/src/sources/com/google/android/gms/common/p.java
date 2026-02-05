package com.google.android.gms.common;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        int i10 = 0;
        boolean z10 = false;
        long j10 = -1;
        String str = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            int l10 = hf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    if (l10 != 3) {
                        if (l10 != 4) {
                            hf.b.z(parcel, r10);
                        } else {
                            z10 = hf.b.m(parcel, r10);
                        }
                    } else {
                        j10 = hf.b.v(parcel, r10);
                    }
                } else {
                    i10 = hf.b.t(parcel, r10);
                }
            } else {
                str = hf.b.f(parcel, r10);
            }
        }
        hf.b.k(parcel, A);
        return new d(str, i10, j10, z10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new d[i10];
    }
}
