package hf;

import android.os.Bundle;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q1 extends ig.n implements k {
    public q1() {
        super("com.google.android.gms.common.internal.IGmsCallbacks");
    }

    @Override // ig.n
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return false;
                }
                ig.o.c(parcel);
                b0(parcel.readInt(), parcel.readStrongBinder(), (d1) ig.o.a(parcel, d1.CREATOR));
            } else {
                ig.o.c(parcel);
                q0(parcel.readInt(), (Bundle) ig.o.a(parcel, Bundle.CREATOR));
            }
        } else {
            ig.o.c(parcel);
            H(parcel.readInt(), parcel.readStrongBinder(), (Bundle) ig.o.a(parcel, Bundle.CREATOR));
        }
        parcel2.writeNoException();
        return true;
    }
}
