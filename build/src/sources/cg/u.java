package cg;

import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class u extends o implements v {
    public u() {
        super("com.google.android.gms.auth.api.identity.internal.IBeginSignInCallback");
    }

    @Override // cg.o
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 == 1) {
            p.b(parcel);
            i0((Status) p.a(parcel, Status.CREATOR), (ve.b) p.a(parcel, ve.b.CREATOR));
            return true;
        }
        return false;
    }
}
