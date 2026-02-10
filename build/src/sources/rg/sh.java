package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sh implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        boolean z10 = false;
        mc[] mcVarArr = null;
        e4 e4Var = null;
        e4 e4Var2 = null;
        String str = null;
        String str2 = null;
        float f10 = 0.0f;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 2:
                    mcVarArr = (mc[]) jf.b.i(parcel, r10, mc.CREATOR);
                    break;
                case 3:
                    e4Var = (e4) jf.b.e(parcel, r10, e4.CREATOR);
                    break;
                case 4:
                    e4Var2 = (e4) jf.b.e(parcel, r10, e4.CREATOR);
                    break;
                case 5:
                    str = jf.b.f(parcel, r10);
                    break;
                case 6:
                    f10 = jf.b.q(parcel, r10);
                    break;
                case 7:
                    str2 = jf.b.f(parcel, r10);
                    break;
                case 8:
                    z10 = jf.b.m(parcel, r10);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new rg(mcVarArr, e4Var, e4Var2, str, f10, str2, z10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new rg[i10];
    }
}
