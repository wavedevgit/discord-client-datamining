package pg;

import android.graphics.Point;
import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sk implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        String str = null;
        Rect rect = null;
        ArrayList arrayList = null;
        String str2 = null;
        ArrayList arrayList2 = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            int l10 = hf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    if (l10 != 3) {
                        if (l10 != 4) {
                            if (l10 != 5) {
                                hf.b.z(parcel, r10);
                            } else {
                                arrayList2 = hf.b.j(parcel, r10, vk.CREATOR);
                            }
                        } else {
                            str2 = hf.b.f(parcel, r10);
                        }
                    } else {
                        arrayList = hf.b.j(parcel, r10, Point.CREATOR);
                    }
                } else {
                    rect = (Rect) hf.b.e(parcel, r10, Rect.CREATOR);
                }
            } else {
                str = hf.b.f(parcel, r10);
            }
        }
        hf.b.k(parcel, A);
        return new qk(str, rect, arrayList, str2, arrayList2);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new qk[i10];
    }
}
