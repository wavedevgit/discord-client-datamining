package ve;

import android.os.Parcel;
import android.os.Parcelable;
import ve.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        boolean z10 = false;
        int i10 = 0;
        boolean z11 = false;
        a.e eVar = null;
        a.b bVar = null;
        String str = null;
        a.d dVar = null;
        a.c cVar = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 1:
                    eVar = (a.e) hf.b.e(parcel, r10, a.e.CREATOR);
                    break;
                case 2:
                    bVar = (a.b) hf.b.e(parcel, r10, a.b.CREATOR);
                    break;
                case 3:
                    str = hf.b.f(parcel, r10);
                    break;
                case 4:
                    z10 = hf.b.m(parcel, r10);
                    break;
                case 5:
                    i10 = hf.b.t(parcel, r10);
                    break;
                case 6:
                    dVar = (a.d) hf.b.e(parcel, r10, a.d.CREATOR);
                    break;
                case 7:
                    cVar = (a.c) hf.b.e(parcel, r10, a.c.CREATOR);
                    break;
                case 8:
                    z11 = hf.b.m(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new a(eVar, bVar, str, z10, i10, dVar, cVar, z11);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new a[i10];
    }
}
