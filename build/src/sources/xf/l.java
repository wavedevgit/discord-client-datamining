package xf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements Parcelable.Creator {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(k kVar, Parcel parcel, int i10) {
        hf.c.b(parcel, hf.c.a(parcel));
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: a */
    public k createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            hf.b.l(r10);
            hf.b.z(parcel, r10);
        }
        hf.b.k(parcel, A);
        return new k();
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: b */
    public k[] newArray(int i10) {
        return new k[i10];
    }
}
