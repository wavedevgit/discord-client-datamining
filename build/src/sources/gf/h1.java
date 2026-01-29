package gf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        s sVar = null;
        int[] iArr = null;
        int[] iArr2 = null;
        boolean z10 = false;
        boolean z11 = false;
        int i10 = 0;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 1:
                    sVar = (s) hf.b.e(parcel, r10, s.CREATOR);
                    break;
                case 2:
                    z10 = hf.b.m(parcel, r10);
                    break;
                case 3:
                    z11 = hf.b.m(parcel, r10);
                    break;
                case 4:
                    iArr = hf.b.d(parcel, r10);
                    break;
                case 5:
                    i10 = hf.b.t(parcel, r10);
                    break;
                case 6:
                    iArr2 = hf.b.d(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new e(sVar, z10, z11, iArr, i10, iArr2);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new e[i10];
    }
}
