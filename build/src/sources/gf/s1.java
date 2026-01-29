package gf;

import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class s1 extends hg.e implements s0 {
    public s1() {
        super("com.google.android.gms.common.internal.ICertData");
    }

    @Override // hg.e
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 != 1) {
            if (i10 != 2) {
                return false;
            }
            int a10 = a();
            parcel2.writeNoException();
            parcel2.writeInt(a10);
        } else {
            sf.a b10 = b();
            parcel2.writeNoException();
            hg.f.c(parcel2, b10);
        }
        return true;
    }
}
