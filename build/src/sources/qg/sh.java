package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sh implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        boolean z10 = false;
        mc[] mcVarArr = null;
        e4 e4Var = null;
        e4 e4Var2 = null;
        String str = null;
        String str2 = null;
        float f10 = 0.0f;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 2:
                    mcVarArr = (mc[]) hf.b.i(parcel, r10, mc.CREATOR);
                    break;
                case 3:
                    e4Var = (e4) hf.b.e(parcel, r10, e4.CREATOR);
                    break;
                case 4:
                    e4Var2 = (e4) hf.b.e(parcel, r10, e4.CREATOR);
                    break;
                case 5:
                    str = hf.b.f(parcel, r10);
                    break;
                case 6:
                    f10 = hf.b.q(parcel, r10);
                    break;
                case 7:
                    str2 = hf.b.f(parcel, r10);
                    break;
                case 8:
                    z10 = hf.b.m(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new rg(mcVarArr, e4Var, e4Var2, str, f10, str2, z10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new rg[i10];
    }
}
