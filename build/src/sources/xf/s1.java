package xf;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s1 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        ArrayList arrayList = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            if (jf.b.l(r10) != 1) {
                jf.b.z(parcel, r10);
            } else {
                arrayList = jf.b.j(parcel, r10, com.google.android.gms.fido.fido2.api.common.h.CREATOR);
            }
        }
        jf.b.k(parcel, A);
        return new r1(arrayList);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new r1[i10];
    }
}
