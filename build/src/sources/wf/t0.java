package wf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t0 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
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
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 1:
                    str = hf.b.f(parcel, r10);
                    break;
                case 2:
                    str2 = hf.b.f(parcel, r10);
                    break;
                case 3:
                    bArr = hf.b.b(parcel, r10);
                    break;
                case 4:
                    gVar = (g) hf.b.e(parcel, r10, g.CREATOR);
                    break;
                case 5:
                    fVar = (f) hf.b.e(parcel, r10, f.CREATOR);
                    break;
                case 6:
                    hVar = (h) hf.b.e(parcel, r10, h.CREATOR);
                    break;
                case 7:
                    dVar = (d) hf.b.e(parcel, r10, d.CREATOR);
                    break;
                case 8:
                    str3 = hf.b.f(parcel, r10);
                    break;
                case 9:
                    str4 = hf.b.f(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new q(str, str2, bArr, gVar, fVar, hVar, dVar, str3, str4);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new q[i10];
    }
}
