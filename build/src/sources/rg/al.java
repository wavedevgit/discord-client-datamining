package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class al implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        boolean z10 = false;
        int i10 = 0;
        boolean z11 = false;
        String str = null;
        String str2 = null;
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
                    str3 = jf.b.f(parcel, r10);
                    break;
                case 4:
                    z10 = jf.b.m(parcel, r10);
                    break;
                case 5:
                    i10 = jf.b.t(parcel, r10);
                    break;
                case 6:
                    str4 = jf.b.f(parcel, r10);
                    break;
                case 7:
                    z11 = jf.b.m(parcel, r10);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new zk(str, str2, str3, z10, i10, str4, z11);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new zk[i10];
    }
}
