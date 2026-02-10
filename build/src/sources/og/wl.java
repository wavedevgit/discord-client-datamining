package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wl implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String str = null;
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        int i15 = 0;
        boolean z10 = false;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 1:
                    i10 = jf.b.t(parcel, r10);
                    break;
                case 2:
                    i11 = jf.b.t(parcel, r10);
                    break;
                case 3:
                    i12 = jf.b.t(parcel, r10);
                    break;
                case 4:
                    i13 = jf.b.t(parcel, r10);
                    break;
                case 5:
                    i14 = jf.b.t(parcel, r10);
                    break;
                case 6:
                    i15 = jf.b.t(parcel, r10);
                    break;
                case 7:
                    z10 = jf.b.m(parcel, r10);
                    break;
                case 8:
                    str = jf.b.f(parcel, r10);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new gl(i10, i11, i12, i13, i14, i15, z10, str);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new gl[i10];
    }
}
