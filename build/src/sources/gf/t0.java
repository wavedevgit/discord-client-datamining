package gf;

import android.os.Bundle;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class t0 extends hg.e implements k {
    public t0() {
        super("com.google.android.gms.common.internal.IGmsCallbacks");
    }

    @Override // hg.e
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return false;
                }
                hg.f.b(parcel);
                w0(parcel.readInt(), parcel.readStrongBinder(), (f1) hg.f.a(parcel, f1.CREATOR));
            } else {
                hg.f.b(parcel);
                i0(parcel.readInt(), (Bundle) hg.f.a(parcel, Bundle.CREATOR));
            }
        } else {
            hg.f.b(parcel);
            D(parcel.readInt(), parcel.readStrongBinder(), (Bundle) hg.f.a(parcel, Bundle.CREATOR));
        }
        parcel2.writeNoException();
        return true;
    }
}
