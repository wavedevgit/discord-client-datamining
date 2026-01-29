package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h7 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        boolean z10 = false;
        boolean z11 = false;
        float f10 = -1.0f;
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
                    z10 = hf.b.m(parcel, r10);
                    break;
                case 6:
                    z11 = hf.b.m(parcel, r10);
                    break;
                case 7:
                    f10 = hf.b.q(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new g6(i10, i11, i12, z10, z11, f10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new g6[i10];
    }
}
