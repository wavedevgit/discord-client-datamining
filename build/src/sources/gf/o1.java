package gf;

import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class o1 extends hg.n implements p1 {
    public o1() {
        super("com.google.android.gms.common.internal.ICertData");
    }

    @Override // hg.n
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 != 1) {
            if (i10 != 2) {
                return false;
            }
            int k10 = k();
            parcel2.writeNoException();
            parcel2.writeInt(k10);
        } else {
            sf.a b10 = b();
            parcel2.writeNoException();
            hg.o.b(parcel2, b10);
        }
        return true;
    }
}
