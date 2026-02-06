package pg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ke implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        int i10 = 0;
        Rect rect = null;
        ArrayList arrayList = null;
        ArrayList arrayList2 = null;
        float f10 = 0.0f;
        float f11 = 0.0f;
        float f12 = 0.0f;
        float f13 = 0.0f;
        float f14 = 0.0f;
        float f15 = 0.0f;
        float f16 = 0.0f;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 1:
                    i10 = hf.b.t(parcel, r10);
                    break;
                case 2:
                    rect = (Rect) hf.b.e(parcel, r10, Rect.CREATOR);
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
                    f14 = hf.b.q(parcel, r10);
                    break;
                case 8:
                    f15 = hf.b.q(parcel, r10);
                    break;
                case 9:
                    f16 = hf.b.q(parcel, r10);
                    break;
                case 10:
                    arrayList = hf.b.j(parcel, r10, qe.CREATOR);
                    break;
                case 11:
                    arrayList2 = hf.b.j(parcel, r10, fe.CREATOR);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new je(i10, rect, f10, f11, f12, f13, f14, f15, f16, arrayList, arrayList2);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new je[i10];
    }
}
