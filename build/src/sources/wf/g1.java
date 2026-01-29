package wf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g1 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        c0 c0Var = null;
        i1 i1Var = null;
        e eVar = null;
        k1 k1Var = null;
        String str = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            int l10 = hf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    if (l10 != 3) {
                        if (l10 != 4) {
                            if (l10 != 5) {
                                hf.b.z(parcel, r10);
                            } else {
                                str = hf.b.f(parcel, r10);
                            }
                        } else {
                            k1Var = (k1) hf.b.e(parcel, r10, k1.CREATOR);
                        }
                    } else {
                        eVar = (e) hf.b.e(parcel, r10, e.CREATOR);
                    }
                } else {
                    i1Var = (i1) hf.b.e(parcel, r10, i1.CREATOR);
                }
            } else {
                c0Var = (c0) hf.b.e(parcel, r10, c0.CREATOR);
            }
        }
        hf.b.k(parcel, A);
        return new d(c0Var, i1Var, eVar, k1Var, str);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new d[i10];
    }
}
