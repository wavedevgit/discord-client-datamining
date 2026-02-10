package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class yk implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String str = null;
        String str2 = null;
        String str3 = null;
        String str4 = null;
        String str5 = null;
        n6 n6Var = null;
        n6 n6Var2 = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 2:
                    str = jf.b.f(parcel, r10);
                    break;
                case 3:
                    str2 = jf.b.f(parcel, r10);
                    break;
                case 4:
                    str3 = jf.b.f(parcel, r10);
                    break;
                case 5:
                    str4 = jf.b.f(parcel, r10);
                    break;
                case 6:
                    str5 = jf.b.f(parcel, r10);
                    break;
                case 7:
                    n6Var = (n6) jf.b.e(parcel, r10, n6.CREATOR);
                    break;
                case 8:
                    n6Var2 = (n6) jf.b.e(parcel, r10, n6.CREATOR);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new o7(str, str2, str3, str4, str5, n6Var, n6Var2);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new o7[i10];
    }
}
