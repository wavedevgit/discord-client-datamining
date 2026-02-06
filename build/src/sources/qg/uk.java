package qg;

import android.graphics.Point;
import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class uk implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        String str = null;
        Rect rect = null;
        ArrayList arrayList = null;
        String str2 = null;
        ArrayList arrayList2 = null;
        float f10 = 0.0f;
        float f11 = 0.0f;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            switch (hf.b.l(r10)) {
                case 1:
                    str = hf.b.f(parcel, r10);
                    break;
                case 2:
                    rect = (Rect) hf.b.e(parcel, r10, Rect.CREATOR);
                    break;
                case 3:
                    arrayList = hf.b.j(parcel, r10, Point.CREATOR);
                    break;
                case 4:
                    str2 = hf.b.f(parcel, r10);
                    break;
                case 5:
                    f10 = hf.b.q(parcel, r10);
                    break;
                case 6:
                    f11 = hf.b.q(parcel, r10);
                    break;
                case 7:
                    arrayList2 = hf.b.j(parcel, r10, bl.CREATOR);
                    break;
                default:
                    hf.b.z(parcel, r10);
                    break;
            }
        }
        hf.b.k(parcel, A);
        return new tk(str, rect, arrayList, str2, f10, f11, arrayList2);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new tk[i10];
    }
}
