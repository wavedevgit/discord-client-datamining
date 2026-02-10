package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String str = null;
        String str2 = null;
        int i10 = 0;
        String str3 = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            int l10 = jf.b.l(r10);
            if (l10 != 2) {
                if (l10 != 3) {
                    if (l10 != 4) {
                        if (l10 != 5) {
                            jf.b.z(parcel, r10);
                        } else {
                            str2 = jf.b.f(parcel, r10);
                        }
                    } else {
                        str3 = jf.b.f(parcel, r10);
                    }
                } else {
                    str = jf.b.f(parcel, r10);
                }
            } else {
                i10 = jf.b.t(parcel, r10);
            }
        }
        jf.b.k(parcel, A);
        return new ra(i10, str, str3, str2);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new ra[i10];
    }
}
