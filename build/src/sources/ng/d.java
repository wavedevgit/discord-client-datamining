package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements Parcelable.Creator {
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
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new tc(str, str2, str3, str4, str5, str6, str7);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new tc[i10];
    }
}
