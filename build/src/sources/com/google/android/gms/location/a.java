package com.google.android.gms.location;

import android.os.Parcel;
import android.os.Parcelable;
import android.os.WorkSource;
import hf.b;
import kg.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = b.A(parcel);
        WorkSource workSource = new WorkSource();
        p pVar = null;
        boolean z10 = false;
        int i10 = 0;
        int i11 = 0;
        boolean z11 = false;
        long j10 = -1;
        float f10 = 0.0f;
        int i12 = Integer.MAX_VALUE;
        long j11 = Long.MAX_VALUE;
        long j12 = Long.MAX_VALUE;
        long j13 = 0;
        long j14 = 600000;
        long j15 = 3600000;
        int i13 = 102;
        while (parcel.dataPosition() < A) {
            int r10 = b.r(parcel);
            switch (b.l(r10)) {
                case 1:
                    i13 = b.t(parcel, r10);
                    break;
                case 2:
                    j15 = b.v(parcel, r10);
                    break;
                case 3:
                    j14 = b.v(parcel, r10);
                    break;
                case 4:
                case 14:
                default:
                    b.z(parcel, r10);
                    break;
                case 5:
                    j11 = b.v(parcel, r10);
                    break;
                case 6:
                    i12 = b.t(parcel, r10);
                    break;
                case 7:
                    f10 = b.q(parcel, r10);
                    break;
                case 8:
                    j13 = b.v(parcel, r10);
                    break;
                case 9:
                    z10 = b.m(parcel, r10);
                    break;
                case 10:
                    j12 = b.v(parcel, r10);
                    break;
                case 11:
                    j10 = b.v(parcel, r10);
                    break;
                case 12:
                    i10 = b.t(parcel, r10);
                    break;
                case 13:
                    i11 = b.t(parcel, r10);
                    break;
                case 15:
                    z11 = b.m(parcel, r10);
                    break;
                case 16:
                    workSource = (WorkSource) b.e(parcel, r10, WorkSource.CREATOR);
                    break;
                case 17:
                    pVar = (p) b.e(parcel, r10, p.CREATOR);
                    break;
            }
        }
        b.k(parcel, A);
        return new LocationRequest(i13, j15, j14, j13, j11, j12, i12, f10, z10, j10, i10, i11, z11, workSource, pVar);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new LocationRequest[i10];
    }
}
