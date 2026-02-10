package og;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tl implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String str = null;
        String str2 = null;
        byte[] bArr = null;
        Point[] pointArr = null;
        kl klVar = null;
        nl nlVar = null;
        ol olVar = null;
        rl rlVar = null;
        pl plVar = null;
        ll llVar = null;
        hl hlVar = null;
        il ilVar = null;
        jl jlVar = null;
        int i10 = 0;
        int i11 = 0;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 1:
                    i10 = jf.b.t(parcel, r10);
                    break;
                case 2:
                    str = jf.b.f(parcel, r10);
                    break;
                case 3:
                    str2 = jf.b.f(parcel, r10);
                    break;
                case 4:
                    bArr = jf.b.b(parcel, r10);
                    break;
                case 5:
                    pointArr = (Point[]) jf.b.i(parcel, r10, Point.CREATOR);
                    break;
                case 6:
                    i11 = jf.b.t(parcel, r10);
                    break;
                case 7:
                    klVar = (kl) jf.b.e(parcel, r10, kl.CREATOR);
                    break;
                case 8:
                    nlVar = (nl) jf.b.e(parcel, r10, nl.CREATOR);
                    break;
                case 9:
                    olVar = (ol) jf.b.e(parcel, r10, ol.CREATOR);
                    break;
                case 10:
                    rlVar = (rl) jf.b.e(parcel, r10, rl.CREATOR);
                    break;
                case 11:
                    plVar = (pl) jf.b.e(parcel, r10, pl.CREATOR);
                    break;
                case 12:
                    llVar = (ll) jf.b.e(parcel, r10, ll.CREATOR);
                    break;
                case 13:
                    hlVar = (hl) jf.b.e(parcel, r10, hl.CREATOR);
                    break;
                case 14:
                    ilVar = (il) jf.b.e(parcel, r10, il.CREATOR);
                    break;
                case 15:
                    jlVar = (jl) jf.b.e(parcel, r10, jl.CREATOR);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new sl(i10, str, str2, bArr, pointArr, i11, klVar, nlVar, olVar, rlVar, plVar, llVar, hlVar, ilVar, jlVar);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new sl[i10];
    }
}
