package we;

import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String str = null;
        String str2 = null;
        String str3 = null;
        String str4 = null;
        Uri uri = null;
        String str5 = null;
        String str6 = null;
        String str7 = null;
        xf.q qVar = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 1:
                    str = jf.b.f(parcel, r10);
                    break;
                case 2:
                    str2 = jf.b.f(parcel, r10);
                    break;
                case 3:
                    str3 = jf.b.f(parcel, r10);
                    break;
                case 4:
                    str4 = jf.b.f(parcel, r10);
                    break;
                case 5:
                    uri = (Uri) jf.b.e(parcel, r10, Uri.CREATOR);
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
                    qVar = (xf.q) jf.b.e(parcel, r10, xf.q.CREATOR);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new i(str, str2, str3, str4, uri, str5, str6, str7, qVar);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new i[i10];
    }
}
