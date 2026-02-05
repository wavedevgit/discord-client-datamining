package ze;

import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q extends cg.o implements r {
    public q() {
        super("com.google.android.gms.auth.api.signin.internal.IRevocationService");
    }

    @Override // cg.o
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 != 1) {
            if (i10 != 2) {
                return false;
            }
            l();
        } else {
            q();
        }
        return true;
    }
}
