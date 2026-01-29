package kg;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        String str = null;
        String str2 = null;
        String str3 = null;
        ArrayList arrayList = null;
        p pVar = null;
        int i10 = 0;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            int l10 = hf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 3) {
                    if (l10 != 4) {
                        if (l10 != 6) {
                            if (l10 != 7) {
                                if (l10 != 8) {
                                    hf.b.z(parcel, r10);
                                } else {
                                    arrayList = hf.b.j(parcel, r10, com.google.android.gms.common.d.CREATOR);
                                }
                            } else {
                                pVar = (p) hf.b.e(parcel, r10, p.CREATOR);
                            }
                        } else {
                            str3 = hf.b.f(parcel, r10);
                        }
                    } else {
                        str2 = hf.b.f(parcel, r10);
                    }
                } else {
                    str = hf.b.f(parcel, r10);
                }
            } else {
                i10 = hf.b.t(parcel, r10);
            }
        }
        hf.b.k(parcel, A);
        return new p(i10, str, str2, str3, arrayList, pVar);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new p[i10];
    }
}
