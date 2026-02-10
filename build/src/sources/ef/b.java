package ef;

import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        Intent intent = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            if (jf.b.l(r10) != 1) {
                jf.b.z(parcel, r10);
            } else {
                intent = (Intent) jf.b.e(parcel, r10, Intent.CREATOR);
            }
        }
        jf.b.k(parcel, A);
        return new com.google.android.gms.cloudmessaging.a(intent);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new com.google.android.gms.cloudmessaging.a[i10];
    }
}
