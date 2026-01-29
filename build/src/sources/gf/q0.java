package gf;

import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q0 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        int i10 = 0;
        boolean z10 = false;
        boolean z11 = false;
        IBinder iBinder = null;
        com.google.android.gms.common.b bVar = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            int l10 = hf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    if (l10 != 3) {
                        if (l10 != 4) {
                            if (l10 != 5) {
                                hf.b.z(parcel, r10);
                            } else {
                                z11 = hf.b.m(parcel, r10);
                            }
                        } else {
                            z10 = hf.b.m(parcel, r10);
                        }
                    } else {
                        bVar = (com.google.android.gms.common.b) hf.b.e(parcel, r10, com.google.android.gms.common.b.CREATOR);
                    }
                } else {
                    iBinder = hf.b.s(parcel, r10);
                }
            } else {
                i10 = hf.b.t(parcel, r10);
            }
        }
        hf.b.k(parcel, A);
        return new p0(i10, iBinder, bVar, z10, z11);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new p0[i10];
    }
}
