package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ql implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        tc tcVar = null;
        String str = null;
        String str2 = null;
        ud[] udVarArr = null;
        ra[] raVarArr = null;
        String[] strArr = null;
        m5[] m5VarArr = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 2:
                    tcVar = (tc) hf.b.e(parcel, r10, tc.CREATOR);
                    break;
                case 3:
                    str = hf.b.f(parcel, r10);
                    break;
                case 4:
                    str2 = hf.b.f(parcel, r10);
                    break;
                case 5:
                    udVarArr = (ud[]) hf.b.i(parcel, r10, ud.CREATOR);
                    break;
                case 6:
                    raVarArr = (ra[]) hf.b.i(parcel, r10, ra.CREATOR);
                    break;
                case 7:
                    strArr = hf.b.g(parcel, r10);
                    break;
                case 8:
                    m5VarArr = (m5[]) hf.b.i(parcel, r10, m5.CREATOR);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new p8(tcVar, str, str2, udVarArr, raVarArr, strArr, m5VarArr);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new p8[i10];
    }
}
