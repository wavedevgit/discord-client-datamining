package wf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h0 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        long j10 = 0;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            if (hf.b.l(r10) != 1) {
                hf.b.z(parcel, r10);
            } else {
                j10 = hf.b.v(parcel, r10);
            }
        }
        hf.b.k(parcel, A);
        return new g0(j10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new g0[i10];
    }
}
