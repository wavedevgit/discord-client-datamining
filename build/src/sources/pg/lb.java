package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class lb implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        int i10 = 0;
        boolean z10 = false;
        int i11 = 0;
        int i12 = 0;
        rg[] rgVarArr = null;
        e4 e4Var = null;
        e4 e4Var2 = null;
        e4 e4Var3 = null;
        String str = null;
        String str2 = null;
        float f10 = 0.0f;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 2:
                    rgVarArr = (rg[]) hf.b.i(parcel, r10, rg.CREATOR);
                    break;
                case 3:
                    e4Var = (e4) hf.b.e(parcel, r10, e4.CREATOR);
                    break;
                case 4:
                    e4Var2 = (e4) hf.b.e(parcel, r10, e4.CREATOR);
                    break;
                case 5:
                    e4Var3 = (e4) hf.b.e(parcel, r10, e4.CREATOR);
                    break;
                case 6:
                    str = hf.b.f(parcel, r10);
                    break;
                case 7:
                    f10 = hf.b.q(parcel, r10);
                    break;
                case 8:
                    str2 = hf.b.f(parcel, r10);
                    break;
                case 9:
                    i10 = hf.b.t(parcel, r10);
                    break;
                case 10:
                    z10 = hf.b.m(parcel, r10);
                    break;
                case 11:
                    i11 = hf.b.t(parcel, r10);
                    break;
                case 12:
                    i12 = hf.b.t(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new ka(rgVarArr, e4Var, e4Var2, e4Var3, str, f10, str2, i10, z10, i11, i12);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new ka[i10];
    }
}
