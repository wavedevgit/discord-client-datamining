package dg;

import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class u extends o implements v {
    public u() {
        super("com.google.android.gms.auth.api.identity.internal.IBeginSignInCallback");
    }

    @Override // dg.o
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 == 1) {
            p.b(parcel);
            K((Status) p.a(parcel, Status.CREATOR), (we.b) p.a(parcel, we.b.CREATOR));
            return true;
        }
        return false;
    }
}
