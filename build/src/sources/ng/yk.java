package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class yk implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        String str = null;
        String str2 = null;
        String str3 = null;
        String str4 = null;
        String str5 = null;
        n6 n6Var = null;
        n6 n6Var2 = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 2:
                    str = hf.b.f(parcel, r10);
                    break;
                case 3:
                    str2 = hf.b.f(parcel, r10);
                    break;
                case 4:
                    str3 = hf.b.f(parcel, r10);
                    break;
                case 5:
                    str4 = hf.b.f(parcel, r10);
                    break;
                case 6:
                    str5 = hf.b.f(parcel, r10);
                    break;
                case 7:
                    n6Var = (n6) hf.b.e(parcel, r10, n6.CREATOR);
                    break;
                case 8:
                    n6Var2 = (n6) hf.b.e(parcel, r10, n6.CREATOR);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new o7(str, str2, str3, str4, str5, n6Var, n6Var2);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new o7[i10];
    }
}
