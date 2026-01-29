package xf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements Parcelable.Creator {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(m mVar, Parcel parcel, int i10) {
        hf.c.b(parcel, hf.c.a(parcel));
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: a */
    public m createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            hf.b.l(r10);
            hf.b.z(parcel, r10);
        }
        hf.b.k(parcel, A);
        return new m();
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: b */
    public m[] newArray(int i10) {
        return new m[i10];
    }
}
