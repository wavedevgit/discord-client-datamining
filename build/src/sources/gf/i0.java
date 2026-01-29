package gf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        int i10 = -1;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        String str = null;
        String str2 = null;
        long j10 = 0;
        long j11 = 0;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 1:
                    i11 = hf.b.t(parcel, r10);
                    break;
                case 2:
                    i12 = hf.b.t(parcel, r10);
                    break;
                case 3:
                    i13 = hf.b.t(parcel, r10);
                    break;
                case 4:
                    j10 = hf.b.v(parcel, r10);
                    break;
                case 5:
                    j11 = hf.b.v(parcel, r10);
                    break;
                case 6:
                    str = hf.b.f(parcel, r10);
                    break;
                case 7:
                    str2 = hf.b.f(parcel, r10);
                    break;
                case 8:
                    i14 = hf.b.t(parcel, r10);
                    break;
                case 9:
                    i10 = hf.b.t(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new n(i11, i12, i13, j10, j11, str, str2, i14, i10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new n[i10];
    }
}
