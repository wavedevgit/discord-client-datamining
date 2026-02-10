package we;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
import we.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        boolean z10 = false;
        boolean z11 = false;
        boolean z12 = false;
        String str = null;
        String str2 = null;
        String str3 = null;
        ArrayList arrayList = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 1:
                    z10 = jf.b.m(parcel, r10);
                    break;
                case 2:
                    str = jf.b.f(parcel, r10);
                    break;
                case 3:
                    str2 = jf.b.f(parcel, r10);
                    break;
                case 4:
                    z11 = jf.b.m(parcel, r10);
                    break;
                case 5:
                    str3 = jf.b.f(parcel, r10);
                    break;
                case 6:
                    arrayList = jf.b.h(parcel, r10);
                    break;
                case 7:
                    z12 = jf.b.m(parcel, r10);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new a.b(z10, str, str2, z11, str3, arrayList, z12);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new a.b[i10];
    }
}
