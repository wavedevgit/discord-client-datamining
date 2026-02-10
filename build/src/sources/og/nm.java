package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class nm implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String str = null;
        String str2 = null;
        String str3 = null;
        String str4 = null;
        String str5 = null;
        String str6 = null;
        String str7 = null;
        String str8 = null;
        String str9 = null;
        String str10 = null;
        String str11 = null;
        String str12 = null;
        String str13 = null;
        String str14 = null;
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
                    str6 = jf.b.f(parcel, r10);
                    break;
                case 8:
                    str7 = jf.b.f(parcel, r10);
                    break;
                case 9:
                    str8 = jf.b.f(parcel, r10);
                    break;
                case 10:
                    str9 = jf.b.f(parcel, r10);
                    break;
                case 11:
                    str10 = jf.b.f(parcel, r10);
                    break;
                case 12:
                    str11 = jf.b.f(parcel, r10);
                    break;
                case 13:
                    str12 = jf.b.f(parcel, r10);
                    break;
                case 14:
                    str13 = jf.b.f(parcel, r10);
                    break;
                case 15:
                    str14 = jf.b.f(parcel, r10);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new q9(str, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12, str13, str14);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new q9[i10];
    }
}
