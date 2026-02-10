package yf;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements Parcelable.Creator {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(c cVar, Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, cVar.g(), false);
        jf.c.e(parcel, 2, cVar.c(), false);
        jf.c.e(parcel, 3, cVar.b(), false);
        jf.c.s(parcel, 4, cVar.e(), false);
        jf.c.s(parcel, 5, cVar.f(), false);
        jf.c.s(parcel, 6, cVar.d(), false);
        jf.c.b(parcel, a10);
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: a */
    public c createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String str = "";
        String str2 = str;
        String str3 = str2;
        Bundle bundle = null;
        Bundle bundle2 = null;
        String str4 = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            switch (jf.b.l(r10)) {
                case 1:
                    str = jf.b.f(parcel, r10);
                    break;
                case 2:
                    bundle = jf.b.a(parcel, r10);
                    break;
                case 3:
                    bundle2 = jf.b.a(parcel, r10);
                    break;
                case 4:
                    str4 = jf.b.f(parcel, r10);
                    break;
                case 5:
                    str2 = jf.b.f(parcel, r10);
                    break;
                case 6:
                    str3 = jf.b.f(parcel, r10);
                    break;
                default:
                    jf.b.z(parcel, r10);
                    break;
            }
        }
        jf.b.k(parcel, A);
        return new c(str, bundle, bundle2, str4, str2, str3);
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: b */
    public c[] newArray(int i10) {
        return new c[i10];
    }
}
