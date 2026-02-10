package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class el implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String[] strArr = null;
        int i10 = 0;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            int l10 = jf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    jf.b.z(parcel, r10);
                } else {
                    strArr = jf.b.g(parcel, r10);
                }
            } else {
                i10 = jf.b.t(parcel, r10);
            }
        }
        jf.b.k(parcel, A);
        return new fl(i10, strArr);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new fl[i10];
    }
}
