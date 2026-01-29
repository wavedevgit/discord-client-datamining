package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class xj implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        String str = null;
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        int i15 = 0;
        boolean z10 = false;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 2:
                    i10 = hf.b.t(parcel, r10);
                    break;
                case 3:
                    i11 = hf.b.t(parcel, r10);
                    break;
                case 4:
                    i12 = hf.b.t(parcel, r10);
                    break;
                case 5:
                    i13 = hf.b.t(parcel, r10);
                    break;
                case 6:
                    i14 = hf.b.t(parcel, r10);
                    break;
                case 7:
                    i15 = hf.b.t(parcel, r10);
                    break;
                case 8:
                    z10 = hf.b.m(parcel, r10);
                    break;
                case 9:
                    str = hf.b.f(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new n6(i10, i11, i12, i13, i14, i15, z10, str);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new n6[i10];
    }
}
