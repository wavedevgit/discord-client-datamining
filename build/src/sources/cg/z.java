package cg;

import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class z extends o implements a0 {
    public z() {
        super("com.google.android.gms.auth.api.identity.internal.ISavePasswordCallback");
    }

    @Override // cg.o
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 == 1) {
            p.b(parcel);
            y((Status) p.a(parcel, Status.CREATOR), (ve.g) p.a(parcel, ve.g.CREATOR));
            return true;
        }
        return false;
    }
}
