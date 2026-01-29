package af;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements Parcelable.Creator {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(c cVar, Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.e(parcel, 1, cVar.b(), false);
        hf.c.b(parcel, a10);
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: a */
    public c createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        Bundle bundle = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            if (hf.b.l(r10) != 1) {
                hf.b.z(parcel, r10);
            } else {
                bundle = hf.b.a(parcel, r10);
            }
        }
        hf.b.k(parcel, A);
        return new c(bundle);
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: b */
    public c[] newArray(int i10) {
        return new c[i10];
    }
}
