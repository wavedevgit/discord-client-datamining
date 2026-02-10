package com.google.android.gms.common.api;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String str = null;
        com.google.android.gms.common.b bVar = null;
        int i10 = 0;
        PendingIntent pendingIntent = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            int l10 = jf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    if (l10 != 3) {
                        if (l10 != 4) {
                            jf.b.z(parcel, r10);
                        } else {
                            bVar = (com.google.android.gms.common.b) jf.b.e(parcel, r10, com.google.android.gms.common.b.CREATOR);
                        }
                    } else {
                        pendingIntent = (PendingIntent) jf.b.e(parcel, r10, PendingIntent.CREATOR);
                    }
                } else {
                    str = jf.b.f(parcel, r10);
                }
            } else {
                i10 = jf.b.t(parcel, r10);
            }
        }
        jf.b.k(parcel, A);
        return new Status(i10, str, pendingIntent, bVar);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new Status[i10];
    }
}
