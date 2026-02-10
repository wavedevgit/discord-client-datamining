package yf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Parcelable.Creator {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(a aVar, Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.c(parcel, 1, aVar.b());
        jf.c.b(parcel, a10);
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: a */
    public a createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        boolean z10 = false;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            if (jf.b.l(r10) != 1) {
                jf.b.z(parcel, r10);
            } else {
                z10 = jf.b.m(parcel, r10);
            }
        }
        jf.b.k(parcel, A);
        return new a(z10);
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: b */
    public a[] newArray(int i10) {
        return new a[i10];
    }
}
