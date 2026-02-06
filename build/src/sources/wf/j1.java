package wf;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.internal.fido.v4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j1 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        v4 o10;
        int A = hf.b.A(parcel);
        v4 v4Var = null;
        byte[] bArr = null;
        byte[] bArr2 = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            int l10 = hf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    hf.b.z(parcel, r10);
                } else {
                    bArr2 = hf.b.b(parcel, r10);
                }
            } else {
                bArr = hf.b.b(parcel, r10);
            }
        }
        hf.b.k(parcel, A);
        if (bArr == null) {
            o10 = null;
        } else {
            o10 = v4.o(bArr, 0, bArr.length);
        }
        if (bArr2 != null) {
            v4Var = v4.o(bArr2, 0, bArr2.length);
        }
        return new i1(o10, v4Var);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new i1[i10];
    }
}
