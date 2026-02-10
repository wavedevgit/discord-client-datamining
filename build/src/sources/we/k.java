package we;

import android.os.Parcel;
import android.os.Parcelable;
import we.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        boolean z10 = false;
        int i10 = 0;
        boolean z11 = false;
        a.e eVar = null;
        a.b bVar = null;
        String str = null;
        a.d dVar = null;
        a.c cVar = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 1:
                    eVar = (a.e) jf.b.e(parcel, r10, a.e.CREATOR);
                    break;
                case 2:
                    bVar = (a.b) jf.b.e(parcel, r10, a.b.CREATOR);
                    break;
                case 3:
                    str = jf.b.f(parcel, r10);
                    break;
                case 4:
                    z10 = jf.b.m(parcel, r10);
                    break;
                case 5:
                    i10 = jf.b.t(parcel, r10);
                    break;
                case 6:
                    dVar = (a.d) jf.b.e(parcel, r10, a.d.CREATOR);
                    break;
                case 7:
                    cVar = (a.c) jf.b.e(parcel, r10, a.c.CREATOR);
                    break;
                case 8:
                    z11 = jf.b.m(parcel, r10);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new a(eVar, bVar, str, z10, i10, dVar, cVar, z11);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new a[i10];
    }
}
