package wf;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.internal.fido.v4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        v4 o10;
        v4 o11;
        int A = hf.b.A(parcel);
        v4 v4Var = null;
        int i10 = 0;
        byte[] bArr = null;
        byte[] bArr2 = null;
        byte[] bArr3 = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            int l10 = hf.b.l(r10);
            if (l10 != 1) {
                if (l10 != 2) {
                    if (l10 != 3) {
                        if (l10 != 4) {
                            hf.b.z(parcel, r10);
                        } else {
                            i10 = hf.b.t(parcel, r10);
                        }
                    } else {
                        bArr3 = hf.b.b(parcel, r10);
                    }
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
        if (bArr2 == null) {
            o11 = null;
        } else {
            o11 = v4.o(bArr2, 0, bArr2.length);
        }
        if (bArr3 != null) {
            v4Var = v4.o(bArr3, 0, bArr3.length);
        }
        return new n0(o10, o11, v4Var, i10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new n0[i10];
    }
}
