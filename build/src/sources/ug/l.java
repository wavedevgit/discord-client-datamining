package ug;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        boolean z10 = false;
        boolean z11 = false;
        boolean z12 = false;
        boolean z13 = false;
        boolean z14 = false;
        boolean z15 = false;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 1:
                    z10 = hf.b.m(parcel, r10);
                    break;
                case 2:
                    z11 = hf.b.m(parcel, r10);
                    break;
                case 3:
                    z12 = hf.b.m(parcel, r10);
                    break;
                case 4:
                    z13 = hf.b.m(parcel, r10);
                    break;
                case 5:
                    z14 = hf.b.m(parcel, r10);
                    break;
                case 6:
                    z15 = hf.b.m(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new g(z10, z11, z12, z13, z14, z15);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new g[i10];
    }
}
