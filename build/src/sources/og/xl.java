package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class xl implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String str = null;
        String str2 = null;
        String str3 = null;
        String str4 = null;
        String str5 = null;
        gl glVar = null;
        gl glVar2 = null;
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
                    str5 = jf.b.f(parcel, r10);
                    break;
                case 6:
                    glVar = (gl) jf.b.e(parcel, r10, gl.CREATOR);
                    break;
                case 7:
                    glVar2 = (gl) jf.b.e(parcel, r10, gl.CREATOR);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new hl(str, str2, str3, str4, str5, glVar, glVar2);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new hl[i10];
    }
}
