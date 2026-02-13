package xg;

import android.os.Parcel;
import android.os.Parcelable;
import hf.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        com.google.android.gms.common.b bVar = null;
        int i10 = 0;
        p0 p0Var = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            int l10 = jf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    if (l10 != 3) {
                        jf.b.z(parcel, r10);
                    } else {
                        p0Var = (p0) jf.b.e(parcel, r10, p0.CREATOR);
                    }
                } else {
                    bVar = (com.google.android.gms.common.b) jf.b.e(parcel, r10, com.google.android.gms.common.b.CREATOR);
                }
            } else {
                i10 = jf.b.t(parcel, r10);
            }
        }
        jf.b.k(parcel, A);
        return new l(i10, bVar, p0Var);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new l[i10];
    }
}
