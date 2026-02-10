package xf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p1 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String str = null;
        Boolean bool = null;
        String str2 = null;
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
                            str3 = jf.b.f(parcel, r10);
                        }
                    } else {
                        str2 = jf.b.f(parcel, r10);
                    }
                } else {
                    bool = jf.b.n(parcel, r10);
                }
            } else {
                str = jf.b.f(parcel, r10);
            }
        }
        jf.b.k(parcel, A);
        return new j(str, bool, str2, str3);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new j[i10];
    }
}
