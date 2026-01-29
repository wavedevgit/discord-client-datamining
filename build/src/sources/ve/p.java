package ve;

import android.os.Parcel;
import android.os.Parcelable;
import ve.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        String str = null;
        boolean z10 = false;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            int l10 = hf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    hf.b.z(parcel, r10);
                } else {
                    str = hf.b.f(parcel, r10);
                }
            } else {
                z10 = hf.b.m(parcel, r10);
            }
        }
        hf.b.k(parcel, A);
        return new a.c(z10, str);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new a.c[i10];
    }
}
