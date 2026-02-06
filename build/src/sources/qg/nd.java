package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class nd implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            hf.b.l(r10);
            hf.b.z(parcel, r10);
        }
        hf.b.k(parcel, A);
        return new mc();
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new mc[i10];
    }
}
