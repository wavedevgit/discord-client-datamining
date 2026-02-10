package nf;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        ArrayList arrayList = null;
        String str = null;
        boolean z10 = false;
        String str2 = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            int l10 = jf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    if (l10 != 3) {
                        if (l10 != 4) {
                            jf.b.z(parcel, r10);
                        } else {
                            str = jf.b.f(parcel, r10);
                        }
                    } else {
                        str2 = jf.b.f(parcel, r10);
                    }
                } else {
                    z10 = jf.b.m(parcel, r10);
                }
            } else {
                arrayList = jf.b.j(parcel, r10, com.google.android.gms.common.d.CREATOR);
            }
        }
        jf.b.k(parcel, A);
        return new a(arrayList, z10, str2, str);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new a[i10];
    }
}
