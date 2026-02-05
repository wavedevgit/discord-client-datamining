package gf;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e1 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        Bundle bundle = null;
        e eVar = null;
        int i10 = 0;
        com.google.android.gms.common.d[] dVarArr = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            int l10 = hf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    if (l10 != 3) {
                        if (l10 != 4) {
                            hf.b.z(parcel, r10);
                        } else {
                            eVar = (e) hf.b.e(parcel, r10, e.CREATOR);
                        }
                    } else {
                        i10 = hf.b.t(parcel, r10);
                    }
                } else {
                    dVarArr = (com.google.android.gms.common.d[]) hf.b.i(parcel, r10, com.google.android.gms.common.d.CREATOR);
                }
            } else {
                bundle = hf.b.a(parcel, r10);
            }
        }
        hf.b.k(parcel, A);
        return new d1(bundle, dVarArr, i10, eVar);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new d1[i10];
    }
}
