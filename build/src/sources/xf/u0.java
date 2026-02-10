package xf;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.fido.common.Transport;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u0 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        String str = null;
        byte[] bArr = null;
        ArrayList arrayList = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            int l10 = jf.b.l(r10);
            if (l10 != 2) {
                if (l10 != 3) {
                    if (l10 != 4) {
                        jf.b.z(parcel, r10);
                    } else {
                        arrayList = jf.b.j(parcel, r10, Transport.CREATOR);
                    }
                } else {
                    bArr = jf.b.b(parcel, r10);
                }
            } else {
                str = jf.b.f(parcel, r10);
            }
        }
        jf.b.k(parcel, A);
        return new s(str, bArr, arrayList);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new s[i10];
    }
}
