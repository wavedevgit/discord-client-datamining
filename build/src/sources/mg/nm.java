package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class nm implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
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
                    str6 = hf.b.f(parcel, r10);
                    break;
                case 8:
                    str7 = hf.b.f(parcel, r10);
                    break;
                case 9:
                    str8 = hf.b.f(parcel, r10);
                    break;
                case 10:
                    str9 = hf.b.f(parcel, r10);
                    break;
                case 11:
                    str10 = hf.b.f(parcel, r10);
                    break;
                case 12:
                    str11 = hf.b.f(parcel, r10);
                    break;
                case 13:
                    str12 = hf.b.f(parcel, r10);
                    break;
                case 14:
                    str13 = hf.b.f(parcel, r10);
                    break;
                case 15:
                    str14 = hf.b.f(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new q9(str, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12, str13, str14);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new q9[i10];
    }
}
