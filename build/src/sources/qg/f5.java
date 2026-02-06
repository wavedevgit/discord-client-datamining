package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f5 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        float f10 = 0.0f;
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            int l10 = hf.b.l(r10);
            if (l10 != 2) {
                if (l10 != 3) {
                    if (l10 != 4) {
                        if (l10 != 5) {
                            if (l10 != 6) {
                                hf.b.z(parcel, r10);
                            } else {
                                f10 = hf.b.q(parcel, r10);
                            }
                        } else {
                            i13 = hf.b.t(parcel, r10);
                        }
                    } else {
                        i12 = hf.b.t(parcel, r10);
                    }
                } else {
                    i11 = hf.b.t(parcel, r10);
                }
            } else {
                i10 = hf.b.t(parcel, r10);
            }
        }
        hf.b.k(parcel, A);
        return new e4(i10, i11, i12, i13, f10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new e4[i10];
    }
}
