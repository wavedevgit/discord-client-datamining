package vg;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        Status status = null;
        g gVar = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            int l10 = jf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    jf.b.z(parcel, r10);
                } else {
                    gVar = (g) jf.b.e(parcel, r10, g.CREATOR);
                }
            } else {
                status = (Status) jf.b.e(parcel, r10, Status.CREATOR);
            }
        }
        jf.b.k(parcel, A);
        return new f(status, gVar);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new f[i10];
    }
}
