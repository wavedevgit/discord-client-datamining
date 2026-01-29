package ve;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        int i10 = 0;
        j jVar = null;
        String str = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            int l10 = hf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    if (l10 != 3) {
                        hf.b.z(parcel, r10);
                    } else {
                        i10 = hf.b.t(parcel, r10);
                    }
                } else {
                    str = hf.b.f(parcel, r10);
                }
            } else {
                jVar = (j) hf.b.e(parcel, r10, j.CREATOR);
            }
        }
        hf.b.k(parcel, A);
        return new f(jVar, str, i10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new f[i10];
    }
}
