package sg;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.location.LocationRequest;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        boolean z10 = false;
        ArrayList arrayList = null;
        boolean z11 = false;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            int l10 = hf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    if (l10 != 3) {
                        hf.b.z(parcel, r10);
                    } else {
                        z11 = hf.b.m(parcel, r10);
                    }
                } else {
                    z10 = hf.b.m(parcel, r10);
                }
            } else {
                arrayList = hf.b.j(parcel, r10, LocationRequest.CREATOR);
            }
        }
        hf.b.k(parcel, A);
        return new d(arrayList, z10, z11);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new d[i10];
    }
}
