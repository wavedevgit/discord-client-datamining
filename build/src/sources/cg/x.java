package cg;

import android.app.PendingIntent;
import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class x extends o implements y {
    public x() {
        super("com.google.android.gms.auth.api.identity.internal.IGetSignInIntentCallback");
    }

    @Override // cg.o
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 == 1) {
            p.b(parcel);
            E0((Status) p.a(parcel, Status.CREATOR), (PendingIntent) p.a(parcel, PendingIntent.CREATOR));
            return true;
        }
        return false;
    }
}
