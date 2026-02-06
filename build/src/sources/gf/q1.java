package gf;

import android.os.Bundle;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q1 extends hg.n implements k {
    public q1() {
        super("com.google.android.gms.common.internal.IGmsCallbacks");
    }

    @Override // hg.n
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return false;
                }
                hg.o.c(parcel);
                L0(parcel.readInt(), parcel.readStrongBinder(), (d1) hg.o.a(parcel, d1.CREATOR));
            } else {
                hg.o.c(parcel);
                r0(parcel.readInt(), (Bundle) hg.o.a(parcel, Bundle.CREATOR));
            }
        } else {
            hg.o.c(parcel);
            B(parcel.readInt(), parcel.readStrongBinder(), (Bundle) hg.o.a(parcel, Bundle.CREATOR));
        }
        parcel2.writeNoException();
        return true;
    }
}
