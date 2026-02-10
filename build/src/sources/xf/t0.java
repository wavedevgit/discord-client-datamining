package xf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t0 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String str = null;
        String str2 = null;
        byte[] bArr = null;
        g gVar = null;
        f fVar = null;
        h hVar = null;
        d dVar = null;
        String str3 = null;
        String str4 = null;
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
                    bArr = jf.b.b(parcel, r10);
                    break;
                case 4:
                    gVar = (g) jf.b.e(parcel, r10, g.CREATOR);
                    break;
                case 5:
                    fVar = (f) jf.b.e(parcel, r10, f.CREATOR);
                    break;
                case 6:
                    hVar = (h) jf.b.e(parcel, r10, h.CREATOR);
                    break;
                case 7:
                    dVar = (d) jf.b.e(parcel, r10, d.CREATOR);
                    break;
                case 8:
                    str3 = jf.b.f(parcel, r10);
                    break;
                case 9:
                    str4 = jf.b.f(parcel, r10);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new q(str, str2, bArr, gVar, fVar, hVar, dVar, str3, str4);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new q[i10];
    }
}
