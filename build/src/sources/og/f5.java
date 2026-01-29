package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f5 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        int i10 = 0;
        int i11 = 0;
        float f10 = 0.0f;
        float f11 = 0.0f;
        float f12 = 0.0f;
        float f13 = 0.0f;
        float f14 = 0.0f;
        float f15 = 0.0f;
        float f16 = 0.0f;
        float f17 = Float.MAX_VALUE;
        float f18 = Float.MAX_VALUE;
        float f19 = Float.MAX_VALUE;
        mc[] mcVarArr = null;
        c2[] c2VarArr = null;
        float f20 = -1.0f;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 1:
                    i10 = hf.b.t(parcel, r10);
                    break;
                case 2:
                    i11 = hf.b.t(parcel, r10);
                    break;
                case 3:
                    f10 = hf.b.q(parcel, r10);
                    break;
                case 4:
                    f11 = hf.b.q(parcel, r10);
                    break;
                case 5:
                    f12 = hf.b.q(parcel, r10);
                    break;
                case 6:
                    f13 = hf.b.q(parcel, r10);
                    break;
                case 7:
                    f17 = hf.b.q(parcel, r10);
                    break;
                case 8:
                    f18 = hf.b.q(parcel, r10);
                    break;
                case 9:
                    mcVarArr = (mc[]) hf.b.i(parcel, r10, mc.CREATOR);
                    break;
                case 10:
                    f14 = hf.b.q(parcel, r10);
                    break;
                case 11:
                    f15 = hf.b.q(parcel, r10);
                    break;
                case 12:
                    f16 = hf.b.q(parcel, r10);
                    break;
                case 13:
                    c2VarArr = (c2[]) hf.b.i(parcel, r10, c2.CREATOR);
                    break;
                case 14:
                    f19 = hf.b.q(parcel, r10);
                    break;
                case 15:
                    f20 = hf.b.q(parcel, r10);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new e4(i10, i11, f10, f11, f12, f13, f17, f18, f19, mcVarArr, f14, f15, f16, c2VarArr, f20);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new e4[i10];
    }
}
