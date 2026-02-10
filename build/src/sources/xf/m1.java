package xf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m1 implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        int A = jf.b.A(parcel);
        byte[] bArr = null;
        byte[] bArr2 = null;
        byte[] bArr3 = null;
        byte[] bArr4 = null;
        byte[] bArr5 = null;
        while (parcel.dataPosition() < A) {
            int r10 = jf.b.r(parcel);
            int l10 = jf.b.l(r10);
            if (l10 != 2) {
                if (l10 != 3) {
                    if (l10 != 4) {
                        if (l10 != 5) {
                            if (l10 != 6) {
                                jf.b.z(parcel, r10);
                            } else {
                                bArr5 = jf.b.b(parcel, r10);
                            }
                        } else {
                            bArr4 = jf.b.b(parcel, r10);
                        }
                    } else {
                        bArr3 = jf.b.b(parcel, r10);
                    }
                } else {
                    bArr2 = jf.b.b(parcel, r10);
                }
            } else {
                bArr = jf.b.b(parcel, r10);
            }
        }
        jf.b.k(parcel, A);
        return new f(bArr, bArr2, bArr3, bArr4, bArr5);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new f[i10];
    }
}
