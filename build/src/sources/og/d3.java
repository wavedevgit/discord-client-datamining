package og;

import android.graphics.PointF;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d3 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        PointF[] pointFArr = null;
        int i10 = 0;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            int l10 = hf.b.l(r10);
            if (l10 != 2) {
                if (l10 != 3) {
                    hf.b.z(parcel, r10);
                } else {
                    i10 = hf.b.t(parcel, r10);
                }
            } else {
                pointFArr = (PointF[]) hf.b.i(parcel, r10, PointF.CREATOR);
            }
        }
        hf.b.k(parcel, A);
        return new c2(pointFArr, i10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new c2[i10];
    }
}
