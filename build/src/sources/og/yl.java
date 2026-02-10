package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class yl implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        ml mlVar = null;
        String str = null;
        String str2 = null;
        nl[] nlVarArr = null;
        kl[] klVarArr = null;
        String[] strArr = null;
        fl[] flVarArr = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 1:
                    mlVar = (ml) jf.b.e(parcel, r10, ml.CREATOR);
                    break;
                case 2:
                    str = jf.b.f(parcel, r10);
                    break;
                case 3:
                    str2 = jf.b.f(parcel, r10);
                    break;
                case 4:
                    nlVarArr = (nl[]) jf.b.i(parcel, r10, nl.CREATOR);
                    break;
                case 5:
                    klVarArr = (kl[]) jf.b.i(parcel, r10, kl.CREATOR);
                    break;
                case 6:
                    strArr = jf.b.g(parcel, r10);
                    break;
                case 7:
                    flVarArr = (fl[]) jf.b.i(parcel, r10, fl.CREATOR);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new il(mlVar, str, str2, nlVarArr, klVarArr, strArr, flVarArr);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new il[i10];
    }
}
